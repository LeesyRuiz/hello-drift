/* eslint-disable */
import React, { PropTypes } from 'react'

const EventDetails = (event) => {
  return (
    <div>
      // {!!event.score && <li className='list-group-item'><h3>Score: {event.score}</h3></li>}

      <li className='list-group-item'>
        <img src={event.info.pic_url} className='img-rounded img-responsive'></img></li>
        {!!event.info.name && <li className='list-group-item'> Name: {event.info.name}</li>}
        {!!event.info.location && <li className='list-group-item'>Location: {event.info.location}</li>}
        {!!event.info.startTime && <li className='list-group-item'>Starting At: {event.info.startTime}</li>}
        <li className='list-group-item'>description: {event.info.description}</li>
        <li className='list-group-item'>Following: {event.info.following}</li>
        <li className='list-group-item'>Public Repos: {event.info.public_repos}</li>
        {!!event.info.blog && <li className='list-group-item'>Blog: {event.info.blog}</li>}
      </div>
    )
  }

  EventDetails.propTypes = {
    // score: PropTypes.number,

    info: PropTypes.shape({

      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pic_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  }

  export default EventDetails
