'use strict';

const axios = require('axios');
const express = require('express');
const router = new express.Router();

router.get('/fetchLibrary', (req, res) => {
  console.log('ROUTE /fetchLibrary ()====={@)=========================================>');
  let userId = userController.getUserId();
  libraryController.findLibrary(userId, (err, library) => {
    if (err) {
      return console.error(err);
    }
    if (!library) {
      console.log('ROUTE /fetchLibrary. library for user', userId, ' NOT found');
      res.end();
    } else {
      console.log('ROUTE /fetchLibrary. library for user', userId, 'found');
      libraryController.getAll(userId, (err, librarySongs) => {
        if (err) {
          return console.log(err);
        }
        console.log('ROUTE /fetchLibrary. returning songs from library:', librarySongs);
        res.json(librarySongs);
      });
    }
  });
});

module.exports = router;
