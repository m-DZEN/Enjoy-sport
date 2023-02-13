require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const httpServer = require('http');
const wsServer = require('./websocket');

const dbConnectCheck = require('../db/dbConnectCheck');

const app = express();
const PORT = process.env.PORT ?? 3001;
const SESSION_SECRET = process.env.SESSION_SECRET ?? 'qwerty';

dbConnectCheck(); // !!! Проверка подключения к БД

const indexRoutes = require('./routes/indexRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const cabinetRoutes = require('./routes/cabinetRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const statisticRoures = require('./routes/statisticRoures');
const adminRoutes = require('./routes/adminListRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const trainingRoutes = require('./routes/traingRoutes');

app.use(cors({
  origin: ['http://localhost:3000'], // !!! Список адресов, с которых разрешены запросы на данный сервер
  credentials: true, // !!! "credentials" >>> Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted! (https://www.npmjs.com/package/cors)
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionConfig = {
  name: 'myCookie',
  store: new FileStore(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: (1000 * 60 * 60 * 24 * 10),
    secure: false,
    httpOnly: true,
  },
};

const sessionParser = session(sessionConfig);
app.use(sessionParser);

app.use('/', indexRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/cabinet', cabinetRoutes);
app.use('/settings', settingsRoutes);
app.use('/statistic', statisticRoures);
app.use('/admin', adminRoutes);
app.use('/quote', quoteRoutes);
app.use('/training', trainingRoutes);

const server = httpServer.createServer(app);
server.on('upgrade', (req, socket, head) => {
  sessionParser(req, {}, () => {
    if (!req.session.user) {
      socket.write('ERROR: STATUS 401');
      socket.destroy();
    }
    wsServer.handleUpgrade(req, socket, head, (ws) => {
      wsServer.emit('connection', ws, req);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
