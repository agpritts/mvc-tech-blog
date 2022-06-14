const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const exphbs = require('express-handlebars');
app.set('view engine', 'handlebars');

app.use(routes);

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Active on ${PORT}`));
});
