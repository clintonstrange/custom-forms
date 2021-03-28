import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import 'materialize-css/dist/css/materialize.min.css'
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import Landing from "./pages/Landing";
=======

>>>>>>> ad1e4feb2dd10033af02e7a4f2e326d754e9b5c3

const client = new ApolloClient({
	request: operation => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		});
	},
	uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
<<<<<<< HEAD
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/form" component={Landing} />
            <Route component={NoMatch} />
          </Switch>
=======
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>
>>>>>>> ad1e4feb2dd10033af02e7a4f2e326d754e9b5c3
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
