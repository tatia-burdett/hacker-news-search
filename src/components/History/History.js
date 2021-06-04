import React from 'react'

class History extends React.Component {

  render() {
    let renderHistory = this.props.searchHistory.map(res => {
      return (
        <p key={res.id}>{res}</p> 
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