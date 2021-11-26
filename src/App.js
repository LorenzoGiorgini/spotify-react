import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './App.css'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Artist from './components/Artist'
import Album from './components/Album'

class App extends Component {
  state = {
    searchResults: [],
  }

  search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + string)

        let result = await response.json()
        let songs = result.data

        this.setState({
          searchResults: songs,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Row>
            <Sidebar search={this.search} />
            <Routes>
              <Route path="/" element={<Home searchResults={this.state.searchResults} />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
          </Row>
        </div>
        <Player />
      </BrowserRouter>
    );
  }
}

export default App;
