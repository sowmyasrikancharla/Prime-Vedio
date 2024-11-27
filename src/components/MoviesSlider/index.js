// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const settings = {
      dots: false,
      slidesToScroll: 1,
      slidesToShow: 4,
    }
    return (
      <div className="bottom-con">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default MoviesSlider
