import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css'

import Search from './components/Search/Search'
import History from './components/History/History'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        searchValue: '',
        results: [],
        searchHistory: []
    }
  }

  updateSearch = e => {
    this.setState({
      searchValue: e.target.value,
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
          results,
          searchHistory: [...this.state.searchHistory, this.state.searchValue]
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
          render={props =>
            <History
              searchHistory={this.state.searchHistory}
          />}
        />
      </div>
    )
  }

  render() {
    return (
      <main>
        <Link to='/search'>Go to Search</Link>
        {' '} {/* Add space for readability */}
        <Link to='/history'>Go to History</Link>
        {this.renderRoutes()}
      </main>
    )
  }
}

export default App;