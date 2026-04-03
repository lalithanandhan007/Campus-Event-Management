const generateTicket = (req, res) => {
  const { eventId, userName } = req.params;

  const ticketId = Math.random().toString(36).substring(2, 10).toUpperCase();

  res.json({
    ticketId,
    eventId: parseInt(eventId),
    userName
  });
};

module.exports = { generateTicket };
