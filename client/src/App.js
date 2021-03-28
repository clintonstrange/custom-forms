import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import 'materialize-css/dist/css/materialize.min.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

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
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Landing" component={Landing} />
            <Route component={NoMatch} />
          </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
