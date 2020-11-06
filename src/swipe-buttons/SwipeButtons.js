import React from 'react'
import './SwipeButtons.css'

import ReplayIcon from '@material-ui/icons/Replay'
import ClearIcon from '@material-ui/icons/Clear'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function SwipeButtons() {
  return (
    <div className="swipe__buttons">
      <IconButton className="swipe_button__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_button__clear">
        <ClearIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_button__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_button__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_button__flash_on">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
