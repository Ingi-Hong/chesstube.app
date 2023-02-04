export default function fetch_videos(req, res){
    if (req.method !== 'POST'){
        req.status(400).json({"Message": 'bad request'})
    }

    
}