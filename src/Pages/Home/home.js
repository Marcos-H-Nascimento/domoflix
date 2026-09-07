import Carrousel from "../../Components/Carrousel/carrousel";
import movies from "../../services/movies";

import './home.css'

function Home() {
    return (
        <div>
            <Carrousel endpoint={movies.discover} SectionName={`Descubra coisas novas!`}/>
            <Carrousel endpoint={movies.topRated} SectionName={`Os que todos conhecem`}/>
            <Carrousel endpoint={movies.popular} SectionName={`Os "garotos populares"`}/>
            <Carrousel endpoint={movies.trendingThisWeek} SectionName={`Os famosinhos da semana`}/>
            <Carrousel endpoint={movies.upComing} SectionName={`Eles Estão chegando...`}/>
        </div>
    )
}

export default Home;