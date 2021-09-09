// const connection = require("./db/connection");
// const { addMovie } = require("./utils")
// const command = process.argv[2];

require("./db/connection");
const mongoose = require("mongoose");
const { listFilms, addFilm, updateFilm, deleteFilm } = require("./films/film.methods")
const command = process.argv[2];

const app = async () =>{
    if(command === "list"){
       await listFilms()
    }else if(command === "add"){
       
        // await connection(addMovie, newMovie)
        await addFilm({
            name: process.argv[3],
            actor:process.argv[4],
            like: process.argv[5]
        })
    }else if(command === "update"){
        let updateFilmLike = {
            name: process.argv[3],
            like: process.argv[4]
        }
        await updateFilm(updateFilmLike);
    }else if(command === "delete"){
        await deleteFilm(process.argv[3]);

    }
    mongoose.disconnect()
};


app();