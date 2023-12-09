import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { APIKEY } from "../config/key";
import { Container } from "./Style";


function Details() {
    const img_path = 'https://image.tmdb.org/t/p/w500/';

    const {id} = useParams();
    console.log(id);

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    releaseDate: data.release_date,
                    poster_path: `${img_path}${data.poster_path}`,
                    like: data.vote_count,
                    nota: data.vote_average
                }
                 setMovie(movie)
            })
    }, [id])

    useEffect(() => {
        fetch(`
            https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                
            })
    }, [id])

    return (
        <Container>
            <div className="details">
                <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />

                <div className="info">
                    <h1>{movie.title}</h1>
                    <span> Sinopse: {movie.overview}</span>
                    <span className="release">Data de lançamento: {movie.releaseDate}</span>
                    <span>Likes: {movie.like}</span>
                    <span>Avaliação: {Math.round(movie.nota)}</span>
                    <Link to="/">
                        <button>Retornar ao Catálogo</button>
                    </Link>
                </div>
            </div>
            
        </Container>
    )
}
export default Details;