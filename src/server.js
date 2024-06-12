import express from 'express'
import { config } from 'dotenv'
import url from 'url'
import path from 'path'

config()

const app = express();
const port = process.env.PORT;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, '../..', 'public');

app.use(express.static(publicDir));

app.listen(port, () => 
    console.log(`Server running on port ${port}`)
)
