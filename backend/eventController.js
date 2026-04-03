const events = [
  { id: 1, title: 'Tech Conference', date: '2026-04-15', seats: 100, category: 'Technology' },
  { id: 2, title: 'Music Festival', date: '2026-05-20', seats: 500, category: 'Music' },
  { id: 3, title: 'Art Exhibition', date: '2026-04-25', seats: 50, category: 'Art' }
];

const getEvents = (req, res) => {
  res.json(events);
};

const getEventById = (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  res.json(event);
};

const createEvent = (req, res) => {
  const { title, date, category, seats } = req.body;

  if (!title || !date || !category || seats === undefined) {
    return res.status(400).json({ message: 'title, date, category, and seats are required' });
  }

  const newEvent = {
    id: events.length + 1,
    title,
    date,
    category,
    seats: parseInt(seats)
  };

  events.push(newEvent);
  res.status(201).json({ message: 'Event created successfully', event: newEvent });
};

module.exports = { getEvents, getEventById, createEvent };
