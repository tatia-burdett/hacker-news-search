import React from 'react'
import './History.css'

class History extends React.Component {
  render() {
    let renderHistory = this.props.searchHistory.map(res => {
      return (
        <li key={res}>{res}</li> 
      )
    })

    return (
      <div className='history-container'>
        <ol>
          {!renderHistory.length ? 'No search history' : renderHistory}
        </ol>
      </div>
    )
  }
}

export default History