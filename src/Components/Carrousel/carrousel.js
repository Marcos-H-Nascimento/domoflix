import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import './carrousel.css';

// passar o mouse e passar automaticamente o carrousel

function Carrousel({endpoint, SectionName}) {
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)

    const carrouselRef = useRef(null)

    useEffect(() => {
        async function loadContent() {
            const response = await endpoint();

            setContent(response.data.results);
            setLoading(false)
        }

        loadContent()
    }, [endpoint])

    if (loading) {
        return (
            <div>
                <h1>estamos carregando os filmes, calma ae {`>w<`}</h1>
            </div>
        )
    }

    function scrollLeft() {
        carrouselRef.current?.scrollBy({
            left: -carrouselRef.current.clientWidth,
            behavior: 'smooth'
        })
    }

    function scrollRight(){
        carrouselRef.current?.scrollBy({
            left: carrouselRef.current.clientWidth,
            behavior: 'smooth'
        });
    }


    return (
        <div className="carrouselContainer">
            <h2>{SectionName}</h2>
            <div className="slider">

                <button className="leftArrow" onClick={scrollLeft}><i className="fa-solid fa-angle-left"></i></button>

                <div className="carrouselSection" ref={carrouselRef}>

                    <div className="carrouselTrack">
                        {content.slice(0, 20).map((movies) => {
                            return <div key={movies.id} className="movieSection">
                                <div>
                                    <Link to={`/filmes/${movies.id}`}><img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="" /></Link>
                                    <h1>{movies.title}</h1>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <button className="rightArrow" onClick={scrollRight}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default Carrousel;