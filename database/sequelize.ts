const { Sequelize, DataTypes } = require("sequelize");

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DATABASE;

class Database {
  sequelize: typeof Sequelize;
  creator: undefined;
  openings: undefined;
  videos: undefined;

  constructor() {
    this.sequelize = new Sequelize(
      `postgresql://${username}:${password}@${host}:${port}/${database}`,
      {
        define: {
          freezeTableName: true,
        },
      }
    );

    this.creator = this.sequelize.define("Creators", {
      creator_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      creator_name: DataTypes.STRING,
    });

    this.openings = this.sequelize.define("Openings", {
      opening_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      opening: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
    });

    this.videos = this.sequelize.define("Videos", {
      video_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      creator_id: DataTypes.INTEGER,
      opening_id: DataTypes.INTEGER,
      elo: DataTypes.INTEGER,
      plays_as: DataTypes.STRING,
      video_link: DataTypes.STRING,
    });
  }

  reconnect() {
    this.constructor();
  }

  async checkIfActive() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection with database established.");
    } catch (error) {
      console.error("Unable to connect to database:", error);
      this.reconnect();
    }
  }
}

export const db_manager = new Database();
