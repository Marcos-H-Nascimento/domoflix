import { useParams} from "react-router-dom"
import { useState, useEffect } from "react";

import movies from "../../services/movies";
import Carrousel from "../../Components/Carrousel/carrousel";

import './movie.css'

function Filmes() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function loadMovieInfo(id) {
            const response = await movies.getById(id);

            setMovie(response.data)
            setLoading(false)
        }

        loadMovieInfo(id)

    }, [id]);


    if (loading) {
        return (
            <div className="loadingModal">
                <h1>CALMA AE CHEFIA!!</h1>
                <h2>estamos carregando as informações do filme ò^ó</h2>
            </div>
        )
    }

    function saveMovie() {
        const minhaLista = localStorage.getItem('@domoFlix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === movie.id);

        if(hasFilmes){
            alert('Você já tem esse aí amigão :3')
            return;
        }

        filmesSalvos.push(movie);
        localStorage.setItem('@domoFlix', JSON.stringify(filmesSalvos) )
    }

    return (
        <div>
            {movie && (
                <div className="movieInfoSection">
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>Título original: {movie.original_title}</h3>
                        <h3>Data de lançamento: {movie.release_date}</h3>
                        <h4>Avaliação dos usuários <span className="voteCount">{movie.vote_count}</span>: {movie.vote_average.toFixed(2)}</h4>

                        <p>{movie.overview || 'foi mal, a gente não tem esse :P'}</p>

                        <div className="options">
                            <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="blank">Veja o Trailer!</a>
                            <button onClick={saveMovie}>Salvar +</button>
                        </div>
                    </div>
                </div>
            )}

            <Carrousel endpoint={movies.trendingToday} SectionName={`Veja também outros que estão em alta HOJE!!!`} />
        </div>
    )
}

export default Filmes;