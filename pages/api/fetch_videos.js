import { db_manager } from "../../database/sequelize.js";
import { Op } from "sequelize";

export default async function fetch_videos(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ Message: "POST request required." });
    return;
  }

  //   {creators: [], elomin: [int], elomax: [int], plays_as: [A | B | W], openings: []}
  const creators = req.body.creators;
  const elomin = req.body.elomin;
  const elomax = req.body.elomax;
  const plays_as = req.body.plays_as;
  const openings = req.body.openings;

  const colors = [];

  if (plays_as === "A") {
    colors.push("B", "W");
  } else if (plays_as === "B") {
    colors.push("B");
  } else {
    colors.push("W");
  }

  try {
    const videos = await db_manager.videos.findAll({
      raw: true,
      where: {
        creator_id: creators,
        elo: 
        {
          [Op.gt]: elomin,
          [Op.lt]: elomax,
        },
        plays_as: colors,
        opening_id: openings,
      },
    });
    res.status(200).json({ Videos: videos });
  } catch (err) {
    res.status(500).json({ error: "Failed to load vieos", "Error": err });
  }
}
