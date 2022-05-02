import express from 'express';
// import router from "./routes/routes";
import morgan from 'morgan';
import routes from './routes/routes.mjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use(morgan('tiny'));

app.listen(10000, () => {
  console.log('listening port 1000');
});
