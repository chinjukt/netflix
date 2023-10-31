
import './App.css';
import requests from './Requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div>
      
      <Nav/>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      
      <Row isPoster={true} title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>

      <Row title="Trending Movies" fetchurl={requests.fetchTrending}/>

      <Row title="Top Rated Movies" fetchurl={requests.fetchTopRated}/>

      <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/>

      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>

      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies}/>

      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies}/>

      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
