import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import MovieDetail from "./pages/MovieDetail";
import Films  from "./pages/Films";
import Serials  from "./pages/Serials";
import TopRating  from "./pages/TopRating";
import Favorites  from "./pages/Favorites";
import About  from "./pages/About";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalog} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/films" component={Films} />
        <Route path="/serials" component={Serials} />
        <Route path="/toprating" component={TopRating} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}
export default App;