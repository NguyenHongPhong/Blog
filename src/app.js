import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './app/config/db/index.js';
import methodOverride from 'method-override';
import SortMiddleware from './app/middware/SortMiddleware.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const port = 3000;

db.connect();

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'resources', 'public')));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            changeIconSort(field, sort) {
                let currentColumn = {
                    type: field === sort.column ? sort.type : 'default',
                };
                const icons = {
                    default: 'fa-solid fa-sort',
                    desc: 'fa-solid fa-arrow-up-z-a',
                    asc: 'fa-solid fa-arrow-up-a-z',
                };

                const types = {
                    default: 'desc',
                    desc: 'asc',
                    asc: 'desc',
                };

                let icon = icons[currentColumn.type];
                let type = types[currentColumn.type];

                return `<a href="?sort&column=${field}&type=${type}">
                            <i class="${icon}"></i>
                        </a>`;
            },
        },
    })
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(morgan('combined'));

app.use(SortMiddleware);

route(app);

app.listen(port, () => console.log(`http://localhost:${port}/`));
