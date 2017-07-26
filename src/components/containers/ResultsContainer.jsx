import React, { Component } from 'react'
import Results from '../stateless/Results'
import Helpers from '../../utils/githubHelpers'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount() {
    Helpers.battle(this.props.location.state.formInfo)
      .then((scores) => {
        this.setState({
          scores: scores,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        formInfo={this.props.location.state.formInfo} />
    )
  }
}

export default ResultsContainer
