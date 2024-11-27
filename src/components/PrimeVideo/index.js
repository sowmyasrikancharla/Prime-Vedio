// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="primeImage"
        />
        <div className="bottom-con">
          <h1 className="action-movies-head">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} className="slider" />
          <h1 className="comedy-movies-head">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} className="slider" />
          <h5 className="credits">Designed by Sowmya</h5>
        </div>
      </div>
    )
  }
}
export default PrimeVideo
