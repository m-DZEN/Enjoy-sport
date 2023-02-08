require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const dbConnectCheck = require('../db/dbConnectCheck');

const app = express();
const PORT = process.env.PORT ?? 3001;
const SESSION_SECRET = process.env.SESSION_SECRET ?? 'qwerty';

dbConnectCheck(); // !!! Проверка подключения к БД

const indexRoutes = require('./routes/indexRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const gameRoutes = require('./routes/gameRoutes');
const answerRoutes = require('./routes/answerRoutes');

app.use(cors({
  origin: ['http://localhost:3000'], // !!! Список адресов, с которых разрешены запросы на данный сервер
  credentials: true, // !!! "credentials" >>> Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted! (https://www.npmjs.com/package/cors)
}));

app.use(logger('dev')); // !!! 'dev' - параметр, отвечающий за стиль отображения информации logger'ом (ещё есть 'short' и 'tiny')
// !!! Для расшифровки запросов ({ extended: false } - увеличение объёма информации)
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // !!! Для расшифровки запросов

// !!! Создание "конфига" для "куки"
const sessionConfig = {
  name: 'myCookie', // * Название "куки"
  // * Подключение хранилища, которое будет использоваться для хранения "куки"
  store: new FileStore(),
  secret: SESSION_SECRET, // * Ключ для шифрования "куки"
  // * Если "true", то "сессия" будет пересохраняться в хранилище, даже если она не изменилась
  resave: false,
  // * Если "false", то "куки" появляются только при установке "req.session"
  // (если "true", то в хранилище будут попадать пустые "сессии")
  saveUninitialized: false,
  cookie: {
    maxAge: (1000 * 60 * 60 * 24 * 10), // * Время жизни "куки" в миллисекундах (10 дней)
    secure: false, // * Если "true", то "куки" будут отправляться только по протоколу "HTTPS"
    httpOnly: true, // * Если "true", то "куки" будут изменяться только сервером
  },
};

app.use(session(sessionConfig)); // !!! Подключение "мидлвара" для "куки"

app.use('/', indexRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/game', gameRoutes);
app.use('/answer', answerRoutes);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
