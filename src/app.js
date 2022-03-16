import express from 'express';
import routes from './routes';
import { errors } from 'celebrate';


const app = express();


app.use(express.json());

app.get('/', (_, res) => {
    return res.status(200).json({ message: 'Hello, welcome to my express server 💥' });
});


app.use('/api', routes);


app.use(errors());


app.use((err, req, res, next) => {
    res.status(500).send('Internal server error')
})


export default app;
