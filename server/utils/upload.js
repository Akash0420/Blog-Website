import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://user2:Boss8055@ac-qi8pccu-shard-00-00.jr2znfu.mongodb.net:27017,ac-qi8pccu-shard-00-01.jr2znfu.mongodb.net:27017,ac-qi8pccu-shard-00-02.jr2znfu.mongodb.net:27017/?ssl=true&replicaSet=atlas-98n1dm-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 