import React from 'react'

import Prompt from '../stateless/Prompt'

// found this to be super helpful on forms, state, and updating it
// https://facebook.github.io/react/docs/forms.html

class PromptContainer extends React.Component {
  // when using ES6, getInitialState() is deprecated for setting the state in the constructor.
  // see: http://stackoverflow.com/questions/33447149/class-extends-react-component-cant-use-getinitialstate-in-react
  constructor(props) {
    super(props)

    // initial state is defined here
    this.state = {
      city: ''
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        city={this.state.city}
        startTime={this.state.startTime}
        date={this.state.date}

         />
    )
  }

  // use arrow function for 'this' to refer to the class scope, since for ES6, creating a function without arrows creates a new 'this' scope.
  // see: http://stackoverflow.com/questions/32317154/uncaught-typeerror-cannot-read-property-setstate-of-undefined
  // this is a babel experimental feature : http://stackoverflow.com/questions/31362292/how-to-use-es6-arrow-in-class-methods
  handleUpdateUser = (event) => {
    this.setState({
      city: event.target.value
      startTime: event.target.value
      date: event.target.value
    })
  }

  handleSubmitUser = (event) => {
    event.preventDefault()
    let city = this.state.city
    let date = this.state.date
    let startTime = this.state.startTime


    // reset city so if the user clicks back, the field is defaulted.
    this.setState({
      city: ''
      startTime: ''
      date: ''
    })

    if (this.props.routeParams['playerOne']) {
      // go to /battle
      this.context.router.push({
        pathname: '/submit',
        // query: {
          // playerOne: this.props.routeParams['playerOne'],
          // playerTwo: city
        // }
      })
    }
//     else {
//       // go to /playerTwo
//       this.context.router.push('/playerTwo/' + city)
//     }
//   }
// }

// for some reason, contextTypes should be defined here, not inside
//  If I do contextTypes : { ... } the context becomes undefined
// missing some JS knowledge
PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer
