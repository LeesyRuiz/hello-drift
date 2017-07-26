import React, { Component } from 'react'
import Results from '../stateless/Results'
import Helpers from '../../utils/githubHelpers'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      randomlySelectedEvent: []
    }
  }

  componentDidMount() {
    Helpers.battle(this.props.location.state.formInfo)
      .then((randomlySelectedEvent) => {
        this.setState({
          randomlySelectedEvent: randomlySelectedEvent,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        randomlySelectedEvent={this.state.randomlySelectedEvent}
        formInfo={this.props.location.state.formInfo} />
    )
  }
}

export default ResultsContainer
