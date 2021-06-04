import React from 'react'
import './History.css'

class History extends React.Component {
  render() {
    let renderHistory = this.props.searchHistory.map(res => {
      return (
        <p key={res}>{res}</p> 
      )
    })

    return (
      <div>
        {!renderHistory.length ? 'No search history' : renderHistory}
      </div>
    )
  }
}

export default History