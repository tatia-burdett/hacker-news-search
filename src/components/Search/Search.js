import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <section>
        <form onSubmit={e => this.props.handleSearch(e)}>
          <input 
          type='text'
          placeholder='Search'
          onChange={this.props.updateSearch}
          value={this.props.searchValue}
          />
          <button type='submit'>Search</button>
        </form>
      </section>
    )
  }
}

export default Search