/* src/routes/artist.js */

const express = require('express');
const artistController = require('../controllers/artists');


const router = express.Router();

router.post('/', artistController.create);

router.get('/',  artistController.listArtists);

router.get('/:artistId', artistController.getArtistById);

router.patch('/:artistId', artistController.updatesArtistById);

module.exports = router;

