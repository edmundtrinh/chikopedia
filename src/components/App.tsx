import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "../scss/App.scss";
import "../scss/Header.scss";
import Search from "./Search";
import Menu from "./Menu";
import Carousel from "./Carousel";
import PokemonGridWithQuery from "./PokemonGridWithQuery";

export default function App() {
  const [search, setSearch] = useState<string | number>("");

  return (
    <Router>
      <div id="page">
        <div id="header">
          <Link to="/">
            <h1>Chikopedia</h1>
          </Link>
          <Search search={search} setSearch={setSearch} />
          <Menu />
        </div>
        <Switch>
          <Route exact path="/">
            <PokemonGridWithQuery />
          </Route>
          <Route
            path="/pokemon/:pokemonName"
            render={({ match }) => (
              <Carousel pokemonName={match.params.pokemonName} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
