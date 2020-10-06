import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';



function App() {
  return (
    <div>
                 <Header/>
        <Route path="/" exact={true} component={Movie} />
        <Route path="/detail/:id"  component={MovieDetail} />
        <Route path="/list" exact={true} component={MovieList} />
        


    </div>
  );
}

export default App;
