import express from 'express';
import morgan  from 'morgan';
import path from 'path';
import  { engine }  from 'express-handlebars';
import {fileURLToPath} from 'url';
import route from './routes/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname + '\\resources\\public')));

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '\\resources', 'views'));

app.use(morgan('combined'));

route(app);

app.listen(port, () =>  console.log(`http://localhost:${port}/`));