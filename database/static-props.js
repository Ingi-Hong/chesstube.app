import { db_manager } from "./sequelize.js";

export async function get_openings() {
  const openings = await db_manager.openings.findAll({
    raw: true,
  });
  return openings;
}

export async function get_creators() {
  const creators = await db_manager.creators.findAll({
    raw: true,
  });
  return creators;
}
