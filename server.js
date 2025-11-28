const jsonServer = require('json-server');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.use(cors());
app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);

// Простейший эндпоинт для регистрации
app.post('/register', (req, res) => {
  const users = router.db.get('users'); // обращаемся к массиву users в db.json
  const { name, email, password } = req.body;

  // Проверка: если такой email уже есть
  const existingUser = users.find({ email }).value();
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // простое хранение пароля без хэширования
  };

  users.push(newUser).write();

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get('users').find({ email, password }).value();

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Возвращаем простой токен (можно любой строкой, для теста)
  res.json({
    accessToken: 'dummy-token',
    user,
  });
});

// Подключаем маршруты json-server
app.use(router);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
