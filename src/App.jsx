import { useState, useEffect } from 'react'

const initialFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [genre, setGenre] = useState("")

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12"><h1> Movies </h1></div>
          <div className="col-12">
            <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <hr />
            <ul className="list-group">
              {filteredFilms.map((movie, index) =>{
                return(
                  <li key={index} className='list-group-item'>
                    {movie.title} - {movie.genre}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
