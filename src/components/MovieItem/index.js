// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

class MovieItem extends Component {
  render() {
    const {movieDetails} = this.props
    const {videoUrl, thumbnailUrl} = movieDetails
    console.log(videoUrl)
    return (
      <div>
        <Popup
          modal
          trigger={<img className="thumb" src={thumbnailUrl} alt="thumbnail" />}
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <div className="movie-player-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default MovieItem
