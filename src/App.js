
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/navbar/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row isLargeRow title="NETFLIX ORGGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>


  );
}

export default App;
