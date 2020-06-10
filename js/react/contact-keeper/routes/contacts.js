const express = require('express');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

const router = express.Router();

// @route    GET api/contacts
// @desc     Get all user contacts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/contacts
// @desc     Add new contact
// @access   Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route    PUT api/contacts/:id
// @desc     Edit a contact
// @access   Private
router.put('/:id', (req, res) => {
  res.send('Edit a contact');
});

// @route    DELETE api/contacts/:id
// @desc     Delete a contact
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
