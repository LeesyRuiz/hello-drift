/* eslint-disable */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import MainContainer from './MainContainer'
import Loading from './Loading'
import EventDetailsWrapper from './EventDetailsWrapper'
import EventDetails from './UserDetails'
import Helpers from '../../utils/githubHelpers'
import Styles from '../../styles/base'

const StartOver = (props) => {
  return (
    <div className='col-sm-12' style={Styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>
          Start Over
        </button>
      </Link>
    </div>
  )
}

const Results = (props) => {
  // if (props.isLoading === true) {
  //   return (
  //     <Loading text='One Moment' speed={100} />
  //   )
  // }

  // if (props.randomlySelectedEvent[0] === props.randomlySelectedEvent[1]) {
  //   return (
  //     <MainContainer>
  //       <h1>It's a tie!</h1>
  //       <StartOver />
  //     </MainContainer>
  //   )
  // }

  // let winningIndex = props.randomlySelectedEvent[0] > props.randomlySelectedEvent[1] ? 0 : 1
  // let losingIndex = winningIndex === 0 ? 1 : 0

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <EventDetailsWrapper header='Winner'>
          <UserDetails randomlySelectedEvent={props.DetailsWrapper} info={props.formInfo } />
        </EventDetailsWrapper>
        // <EventDetailsWrapper header='Loser'>
        //   <UserDetails score={props.randomlySelectedEvent[losingIndex]} info={props.formInfo[losingIndex]} />
        // </EventDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  formInfo: PropTypes.array.isRequired,
  randomlySelectedEvent: PropTypes.array.isRequired
}

export default Results
