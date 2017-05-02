import React from 'react'

class TopTwentyContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      if (request.status === 200){
        const responseString = request.responseText
        const data = JSON.parse(responseString).feed.entry
        this.setState({songs: data})
      }
    }
    request.send()
  }

  render(){

    return(
      // <TopTwentyList />
      <h1>test</h1>
    )
  }
}

export default TopTwentyContainer