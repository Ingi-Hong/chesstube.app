import { db_manager } from "./sequelize.js";

export async function get_openings() {

  const openings = await db_manager.openings.findAll({
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

  return {opening_tree: opening_tree, openingList: openings};
}

export async function get_creators() {
  const creators = await db_manager.creators.findAll({
    raw: true,
  });
  return creators;
}
