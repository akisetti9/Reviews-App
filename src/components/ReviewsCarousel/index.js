// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewNo: 0,
  }

  gotoLeft = () => {
    this.setState(prevState => ({reviewNo: prevState.reviewNo - 1}))
  }

  gotoRight = () => {
    this.setState(prevState => ({reviewNo: prevState.reviewNo + 1}))
  }

  dontGo = () => {
    this.setState(prevState => ({reviewNo: prevState.reviewNo}))
  }

  render() {
    const {reviewsList} = this.props
    const totalReviews = reviewsList.length - 1
    const {reviewNo} = this.state
    const review = reviewsList[reviewNo]
    const onClickForLeftButton = () => {
      let func
      if (reviewNo > 0) {
        func = this.gotoLeft
      } else {
        func = this.dontGo
      }
      return func
    }
    const onClickForRightButton = () => {
      let funcRight
      if (reviewNo < totalReviews) {
        funcRight = this.gotoRight
      } else {
        funcRight = this.dontGo
      }
      return funcRight
    }
    return (
      <div className="container">
        <h1>Reviews</h1>
        <img src={review.imgUrl} alt={review.username} />
        <div className="tabs">
          <button
            type="button"
            className="button"
            id="leftArrow"
            onClick={onClickForLeftButton()}
          >
            <img
              type="image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p>{review.username}</p>
          <button
            type="button"
            className="button"
            id="rightArrow"
            onClick={onClickForRightButton()}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{review.companyName}</p>
        <p>{review.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
