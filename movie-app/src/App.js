import axios from 'axios';
import React from 'react';

class App extends React.Component {
  getMovies = async () => {
    const movieApi = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(movieApi.data.data.movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    return (
      <div className="App">
        <h1>Hello!!</h1>
      </div>
    );
  }
}

export default App;
