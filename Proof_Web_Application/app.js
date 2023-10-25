const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));

const registeredUsers = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated login logic (replace with your actual logic)
  const user = registeredUsers.find(user => user.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password.' });
  }
});
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Simulated registration logic (replace with your actual logic)
  const existingUser = registeredUsers.find(user => user.username === username);
  if (existingUser) {
    res.status(400).json({ success: false, message: 'Username already exists.' });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    registeredUsers.push({ username, password: hashedPassword });
    res.json({ success: true });
  }
});

// Endpoint to handle image uploads
app.post('/uploadImage', upload.single('image'), (req, res) => {

  res.json({ success: true });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


