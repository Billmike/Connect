import express from 'express';
import logger from 'morgan';
import routes from './routes';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

app.use(logger('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', routes);

app.get('*', (request, response) => response.status(200).json({
  message: 'Welcome to the beginning of nothingness.'
}));

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`)
})

module.exports = app;
