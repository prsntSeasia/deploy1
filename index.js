import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

// app.use('/',express.static("public/index.html"))

app.get('/', (req, res) => {
    // Send the HTML file as a response
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/', (req,res) => {
//     res.status(200).json({message:"This is node-express-ec2"})
// })

app.listen(8080,  console.log("Server is listening at port 8080"))