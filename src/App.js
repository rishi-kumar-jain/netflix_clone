import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'; 
import Nav from './Nav';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner />
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
      isLargeRow // this prop can also be written just as : isLargeRow={true}
     />
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
     <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}/>
     <Footer />
    </div>
  );
}

export default App;
