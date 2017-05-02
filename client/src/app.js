import React from 'react'
import ReactDOM from 'react-dom'
import TopTwentyContainer from './containers/TopTwentyContainer'


window.onload = function () {
  ReactDOM.render(
    <TopTwentyContainer/>,
    document.getElementById('app')
  )
}
