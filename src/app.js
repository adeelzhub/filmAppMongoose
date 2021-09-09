const connection = require("./db/connection");
const { addMovie } = require("./utils")
const command = process.argv[2];

const app = async () =>{
    if(command === "add"){
        const newMovie ={
            name : process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
        }

        await connection(addMovie, newMovie)
    }
};


app();