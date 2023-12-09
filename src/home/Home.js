import { Container } from "./Style";
import { MovieList } from "./Style";
import { Movie } from "./Style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const img_path = 'https://image.tmdb.org/t/p/w500/';

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results)
            })
    }, [])


    // const movies = [
    //     {
    //         title: "Supernatural",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     },

    //     {
    //         title: "Supernatural 2",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     },

    //     {
    //         title: "Supernatural 3",
    //         image_url: "https://img.elo7.com.br/product/zoom/1D05C86/poster-supernatural-tamanho-90x-0-cm-lo008-geek.jpg"
    //     }
    // ]


    return (
        <Container>
            <h2>
                Catálogo
            </h2>
            <MovieList>

                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                                 <Link to = {`/details/${movie.id}`}>
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )
}

export default Home;