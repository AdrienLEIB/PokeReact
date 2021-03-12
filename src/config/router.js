import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Header from '../component/header';
import Fight from '../component/fight';
import Teams from '../component/teams';
import GetPokemons from '../component/Pokemons/getPokemons';
import {useDispatch, useSelector} from 'react-redux'
import {favorites as favoritesActions} from '../actions' 

const Routes = () => {
//  const dispatch = useDispatch()
//  const favorites = useSelector(state => state.favorites.pokemons)
//  const setFavorites = fav => dispatch(favoritesActions.set_unset_favorite(fav))
    

    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={() => <GetPokemons />} />
                <Route path="/fight" component={() => <Fight />} />
                <Route path="/teams" component={() => <Teams />} />
                <Redirect to="/" component={() => <GetPokemons />} ></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes;