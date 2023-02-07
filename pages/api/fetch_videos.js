import { db_manager } from "../../database/sequelize.js";
import { Op } from "sequelize";

export default async function fetch_videos(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ Message: "POST request required." });
    return;
  }

  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  //   {creators: [], elomin: [int], elomax: [int], plays_as: [A | B | W], openings: []}
  const creators = req.body.creators;
  const elomin = req.body.elomin;
  const elomax = req.body.elomax;
  const plays_as = req.body.plays_as;
  const openings = req.body.openings;

  try {
    const lazyLoad = async () => {
      const [retrievedVideos] = await Promise.all([
        db_manager.videos.findAll({
          raw: true,
          include: [
            { model: db_manager.openings },
            { model: db_manager.creators, attributes: ["creator_name"] },
          ],
          where: {
            creator_id: creators,
            elo: {
              [Op.gt]: elomin,
              [Op.lt]: elomax,
            },
            plays_as: plays_as,
            opening_id: openings,
          },
        }),
      ]);

      return retrievedVideos;
    };

    const videos = await lazyLoad();
    const api_key = process.env.API_KEY;

    const responses = await Promise.all(
      videos.map(async (item) => {
        var videoID = YouTubeGetID(item.video_link);

        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            videoID +
            "&key=" +
            api_key
        );

        return response;
      })
    );

    for (var i = 0; i < responses.length; i++) {
      var videoID = YouTubeGetID(videos[i].video_link);
      var responseBody = await responses[i].json();
      var title = responseBody.items[0].snippet.title;
      videos[i]["title"] = title;
      videos[i][
        "thumbnail"
      ] = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    }

    // function (data) {
    // var title = data.items[0].snippet.title;
    //   item["title"] = title;
    // });

    // item[
    //   "thumbnail"
    // ] = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;

    console.log("videos", videos);
    res.status(200).json({ Videos: videos });
  } catch (err) {
    console.log("500 error", err);
    res.status(500).json({ error: "Failed to load vieos", Error: err });
  }
}
