const Film = require("./film.model");

exports.listFilms = async () => {
    const list = await Film.find();
    console.log(list);
}
exports.addFilm = async (newFilm) => {
    try{
        const movie = new Film(newFilm);
        await movie.save()
    }catch(error){
        console.log(error)

    }

}
exports.updateFilm = async (updateFilmLike) =>{
    await Film.updateOne(
        {name: updateFilmLike.name},
        {$set: {like:updateFilmLike.like}})

}
exports.deleteFilm = async (filmName) =>{
    await Film.deleteOne({name: filmName})

}