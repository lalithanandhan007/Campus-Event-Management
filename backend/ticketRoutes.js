const express = require('express');
const { generateTicket } = require('./ticketController');

const router = express.Router();

router.get('/:eventId/:userName', generateTicket);

module.exports = router;
