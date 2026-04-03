const users = [];

const signup = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const user = {
    id: users.length + 1,
    username,
    password,
    role: role || 'user'
  };

  users.push(user);
  res.status(201).json({ message: 'Signup successful', user: { id: user.id, username: user.username, role: user.role } });
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user: { id: user.id, username: user.username, role: user.role } });
};

module.exports = { signup, login };
