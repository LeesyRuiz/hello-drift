import React, { Component, PropTypes } from 'react'
import ConfirmBattle from '../stateless/ConfirmBattle'
import Helpers from '../../utils/githubHelpers'

class ConfirmFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      formInfo: []
    }
  }

  componentDidMount() {
    let query = this.props.location.query
    Helpers.getformInfo([query.submit)
      .then((apiSearch) => {
        this.setState({
          isLoading: false,
          formInfo: [apiSearch]
        })
      }).catch((err) => {
        console.warn('Error in getformInfo()', err)
      })
  }

  render() {
    return (
      <ConfirmForm
        isLoading={this.state.isLoading}
        formInfo={this.state.formInfo}
        onInitiateRandomizer={this.handleInitiateRandomizer} />
    )
  }

  handleInitiateRandomizer = () => {
    console.log(this)
    this.context.router.push({
      pathname: '/results',
      state: {
        formInfo: this.state.formInfo
      }
    })
  }
}

ConfirmFormContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmFormContainer
