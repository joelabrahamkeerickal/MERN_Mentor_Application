import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import MentorListing from "./components/MentorListing";
import MentorDetails from "./components/MentorDetails";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div class="container">
          <Navbar />
          <Route path="/" exact component={MentorListing}></Route>
          <Route path="/mentor/:id" component={MentorDetails}></Route>
          <Route path="/addmentor" component={MentorDetails}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
