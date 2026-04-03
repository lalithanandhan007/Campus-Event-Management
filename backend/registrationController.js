const registrations = [];

const createRegistration = (req, res) => {
  const { userName, eventId } = req.body;

  if (!userName || !eventId) {
    return res.status(400).json({ message: 'userName and eventId are required' });
  }

  const duplicate = registrations.find(r => r.userName === userName && r.eventId === eventId);
  if (duplicate) {
    return res.status(409).json({ message: 'User already registered for this event' });
  }

  const registration = {
    id: registrations.length + 1,
    userName,
    eventId,
    registeredAt: new Date().toISOString()
  };

  registrations.push(registration);
  res.status(201).json({ message: 'Registration successful', registration });
};

const getRegistrations = (req, res) => {
  res.json(registrations);
};

module.exports = { createRegistration, getRegistrations };
