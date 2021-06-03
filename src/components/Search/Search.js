import React from 'react'

class Search extends React.Component {
  render() {
    let results = this.props.results || []
    let renderResults = results.map(res => {
      return (
        <ul key={res.objectID}>
          <li>{res.title}</li>
          <li>{res.author}</li>
          <li>{res.url || 'n/a'}</li>
        </ul>
      )
    })

    return (
      <div>
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
        <section className='search-results'>
          {renderResults}
        </section>
      </div>
    )
  }
}

export default Search