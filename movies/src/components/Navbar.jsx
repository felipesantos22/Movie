import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav>
            <h2>
                <Link to={'/'}><BiCameraMovie />MoviesLib</Link>
            </h2>
            <form>
                <input type='text' placeholder="Busque um filme" />
                <button type='submit'><BiSearchAlt2 /></button>
            </form>
            {/* <Link to={'/movie/1'}>Movie</Link>
            <Link to={'/search'}>Search</Link> */}
        </nav>
    )
}

export default Navbar

