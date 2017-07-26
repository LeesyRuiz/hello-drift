import axios from 'axios'
import React from 'react'

const getAllEvents = (query) => {
  return axios.get('http://192.168.99.100:3000/events?lat' + lat + 'lng' + lng + 'distance' + distance + 'sort=time' + 'accessToken' + accessToken )
  // return axios.get('https://api.github.com/users/' + city)
}
// http://192.168.99.100:3000/events?lat=47.617&lng=-122.332&distance=70&sort=time&accessToken=EAACEdEose0cBABXTuA5SkMWu9dWjZBZCzVJLeVZAjhwYD9Y5g4Rfr7uiJjZC6wowsKyOJedEpqDq07NCBDtoBY6VGz5fZBT1IWFDER9eSRykxyZATrYBB0FwveX5YGCkrqdPYwyQrfCCHQKZC9CK25N1ZCS1uiNAe0uweZBTaMpNF9vZCUVHoWzfq0ufGn1FgqxQgZD

// <<<<< get events that have datetime string matching >>>>>
// <<<<< random select method >>>>>
// <<<<< capture in this data  >>>>>
// eventId: '',
// eventName: '',
// eventPicture: '',
// eventDesscription: '',
// eventDistance: '',
// eventStart: '',
// eventLocation: []
// <<<<< return this data>>>>>


// <<<<< LAT LNAG MAP API>>>>>
// const getLatLng = (####??) => {
//   //find the total stars the player has
//   return repos.data.reduce((prev, current) => {
//     return prev + current.stargazers_count
//   }, 0)
// }

const getSingleEvent = (player) => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {

        lat
        lng
        time
        accessToken

        followers: player.followers,
        totalStars: totalStars
      }
    })
}

const calculateScores = (players) => {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

const Helpers = {
  getformInfo: function(players) {
    //fetch some data from github
    return axios.all(players.map((city) => {
      return getUserInfo(city)
    })).then((info) => {
      return info.map((user) => user.data)
    })
  },

  puke: function(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
  },

  battle: function(players) {
    let playerOneData = getPlayersData(players[0]);
    let playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => {
        console.warn('Err in battle(): ', err)
      })
  }
}

export default Helpers
