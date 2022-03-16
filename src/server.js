import app from './app';
import { PORT } from './config';
import sequelize from './database/database';


sequelize.sync().then(()=> console.log('Sqllite db running'))

app.set('port', PORT);



app.listen(PORT, () => console.log(`Running on port ${PORT}`));
