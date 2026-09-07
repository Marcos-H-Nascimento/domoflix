import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './favorites.css';


function Favorites() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@domoFlix');
        setMovie(JSON.parse(minhaLista) || []);
    }, [])

    function removeItem(id) {
        const filmesFiltrados = movie.filter((filme) => {
            return(filme.id !== id)
        })

        localStorage.setItem('@domoflix', JSON.stringify(filmesFiltrados));

        setMovie(filmesFiltrados);
    }

    return (
        <div className="savedMovies">
            <h1>Aqui ficam seus filmes</h1>
            {movie.length === 0 && <p>você não tem nenhum filme salvo amigão :(</p>}

            {movie.map((movies) => {
                return (
                    <div key={movies.id} className="savedMovie">
                        <img src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} alt="" />
                        <div className="descriptionInfo">
                            <h1>{movies.title}</h1>
                            <Link to={`/filmes/${movies.id}`}>Veja a pagina!</Link>
                            <button onClick={() => removeItem(movies.id)}>Remover</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites;