import { BrowserRouter,Routes, Route  } from 'react-router-dom'
// pages
import Home from './Pages/Home/home'
import Filmes from './Pages/Movie/movie'
import Error from './Pages/Error/Error'
import Favorites from './Pages/Favorites/favorites'

// components
import Header from './Components/Header/header'

function Rotas() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/filmes/:id' Component={Filmes}/>
                <Route path='/favoritos' Component={Favorites}/>
                <Route path='*' Component={Error}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas