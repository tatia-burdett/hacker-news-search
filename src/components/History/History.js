import React from 'react'

class History extends React.Component {
  render() {
    console.log(this.props.searchHistory)
    return (
      <div>
        History
      </div>
    )
  }
}

export default History