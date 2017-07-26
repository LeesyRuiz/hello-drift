import React, { PropTypes } from 'react'
import MainContainer from './MainContainer'

const Prompt = (props) => {
  return (
    <MainContainer>
      <h1>{props.header}</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>

            <input
              className='form-control'
              placeholder='city'
              onChange={props.onUpdateUser}
              value={props.city}
              type='text' />

              <input
                className='form-control'
                placeholder='date'
                onChange={props.onUpdateUser}
                value={props.date}
                type='text' />

                <input
                  className='form-control'
                  placeholder='startTime'
                  onChange={props.onUpdateUser}
                  value={props.startTime}
                  type='text' />













          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button className='btn btn-block btn-success'
              type='submit' >
              Continue
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  )
}

Prompt.PropTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
  date: PropTypes.string.isRequired
  startTime: PropTypes.string.isRequired

}

export default Prompt
