const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware
});

// explicitly set path to prevent heroku error of prepending app as a relative path
server.applyMiddleware({ app, path: '/graphql' });

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '2mb' }));
app.use(cors());
app.use(compression());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

// register the service worker

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});
