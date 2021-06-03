import React from 'react';
import {Route, Link} from 'react-router-dom'

import Search from './components/Search/Search'
import History from './components/History/History'

// Build an application that has two pages for users to go two
  // /search -- which lets the users search the Hacker News Algolia API + dislay results
  // /history -- shows a list of the users past searches from this session (refresh doesn't need to keep data)

// React router for pages
// Store fetch request in state in app

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        searchValue: '',
        results: []
    }
  }

  updateSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSearch = e => {
    e.preventDefault()
    const query = `query=${this.state.searchValue}`
    const url = 'http://hn.algolia.com/api/v1/search?'
    const fullUrl = url + query

    fetch(fullUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Uh oh, something went wrong!')
        }
        return res.json()
      })
      .then(data => {
        const results = data.hits
        this.setState({
          results
        })
      })
  }

  renderRoutes = () => {
    return (
      <div>
        <Route 
          path='/search'
          render={props => 
            <Search 
              handleSearch={this.handleSearch} 
              updateSearch={this.updateSearch} 
              results={this.state.results}
              searchValue={this.state.searchValue}
            />}
        />
        <Route 
          path='/history'
          component={History}
        />
      </div>
    )
  }

  render() {
    return (
      <main>
        <Link to='/search'>Go to Search</Link>
        {' '}
        <Link to='/history'>Go to History</Link>
        {this.renderRoutes()}
      </main>
    )
  }
}

export default App;