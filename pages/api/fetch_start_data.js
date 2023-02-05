import { db_manager } from "../../database/sequelize.js";

export default async function fetch_start_data(req, res){

    if (req.method !== 'GET'){
        res.status(400).json({error: "Must use GET request."})
    }

    try{
        const openings = await db_manager.openings.findAll({
            raw: true
        });
        const creators = await db_manager.creators.findAll({
            raw: true
        });
        res.status(200).json({openings: openings, creators: creators});

    } catch (err) {
        res.status(500).json({error: "error fetching data from db.", err})
    }

}

