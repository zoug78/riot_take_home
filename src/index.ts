import routes from './routes';
import express from 'express';

const app = express();
const port = 8000;

app.use('/', routes);
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
