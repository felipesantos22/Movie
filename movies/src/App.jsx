import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {  

  return (
    <div className="App">
      <nav>
        <h2>
          <Link to={'/'}>MoviesLib</Link>
        </h2>
        <Link to={'/movie/1'}>Movie</Link>
        <Link to={'/search'}>Search</Link>
      </nav>
     <h1>Movie</h1>
     <Outlet/>
    </div>
  )
}

export default App
