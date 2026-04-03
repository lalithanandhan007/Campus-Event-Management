const express = require('express');
const cors = require('cors');
const eventRoutes = require('./eventRoutes');
const registrationRoutes = require('./registrationRoutes');
const authRoutes = require('./authRoutes');
const ticketRoutes = require('./ticketRoutes');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Campus Event Backend Active 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
