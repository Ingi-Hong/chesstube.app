import { db_manager } from "../../database/sequelize.js";

export default async function fetch_start_data(req, res) {
  if (req.method !== "GET") {
    res.status(400).json({ error: "Must use GET request." });
  }

  try {
    const openings = await db_manager.openings.findAll({
      raw: true,
    });
    const creators = await db_manager.creators.findAll({
      raw: true,
    });

    var opening_tree = {};
    var children = [];

    openings.forEach((item) => {
      if (item.parent_id === null) {
        opening_tree[item.opening_id] = { opening: item.opening, children: [] };
      } else {
        children.push({
          opening_id: item.opening_id,
          opening: item.opening,
          parent_id: item.parent_id,
        });
      }
    });

    children.forEach((item) => {
      var target_id = item.parent_id;
      opening_tree[target_id].children.push({
        opening_id: item.opening_id,
        opening: item.opening,
        parent_id: item.parent_id,
      });
    });

    res.status(200).json({ openings: opening_tree, creators: creators });
  } catch (err) {
    res.status(500).json({ error: "error fetching data from db.", err });
  }
}
