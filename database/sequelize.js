// import { Sequelize, DataTypes } from "sequelize";
import {Sequelize, DataTypes} from 'sequelize';
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DATABASE;
console.log();
console.log();
console.log(`postgresql://test:${password}@${host}:${port}/${database}`);
console.log();
console.log();

class Database {
  sqlz;
  creators;
  openings;
  videos;

  constructor() {
    this.sqlz = new Sequelize(
      `postgresql://test:${password}@${host}:${port}/${database}`,
      {
        dialectModule: require("../node_modules/pg/lib/index"),
        dialect: "postgres",
        define: {
          freezeTableName: true,
          
        },
      }
    );

    this.checkIfActive();

    this.creators = this.sqlz.define(
      "Creators",
      {
        creator_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        creator_name: DataTypes.STRING,
      },
      { timestamps: false }
    );

    this.openings = this.sqlz.define(
      "Openings",
      {
        opening_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        opening: DataTypes.STRING,
        parent_id: DataTypes.INTEGER,
      },
      { timestamps: false }
    );

    this.videos = this.sqlz.define(
      "Videos",
      {
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
      },
      { timestamps: false }
    );
  }

  async checkIfActive() {
    try {
      await this.sqlz.authenticate();
      console.log("Connection with database established.");
    } catch (error) {
      console.error("Unable to connect to database:", error);
    }
  }
}

export const db_manager = new Database();
