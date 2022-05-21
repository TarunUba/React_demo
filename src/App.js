import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import WebFont from 'webfontloader';
import { useEffect} from 'react';


// import components
import Navbar from "./components/Navbar";



function App() {
  useEffect(() => {
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka'],
      families: ['Dancing Script','Indie FLower']
    }
  });
 }, []);

  return (
    // <Scrollbar
    //             damping={0.01}
    //             thumbMinSize={20}
    //             renderByPixels={true}
    //             alwaysShowTracks={false}
    //             continuousScrolling={true}
    //             wheelEventTarget={null}
    //         >
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
