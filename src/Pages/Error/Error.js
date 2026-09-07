import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h1>ERRO 404</h1>
            <p>Não é você, é que nossa API não tem esse filme meu bem ;(</p>
            <Link to='/'>Mas você pode ver outros nesse link aqui</Link>
        </div>
    )
}

export default Error;