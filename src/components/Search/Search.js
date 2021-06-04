import React from 'react'
import './Search.css'

class Search extends React.Component {
  render() {
    let results = this.props.results || []
    let renderResults = results.map(res => {
      return (
        <div key={res.objectID} className='search-results'>
          <h2>{res.title}</h2>
          <p>{res.author}</p>
          <p>{res.url || 'n/a'}</p>
        </div>
      )
    })

    return (
      <div className='search-container'>
        <section className='search-form-container'>
          <form onSubmit={e => this.props.handleSearch(e)}>
            <h1>Search</h1>
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