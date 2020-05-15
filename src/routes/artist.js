/* src/routes/artist.js */

const express = require('express');
const artistController = require('../controllers/artists');
const albumController = require('../controllers/albums');

const router = express.Router();

router.post('/', artistController.createsArtist);

router.get('/',  artistController.listArtists);

router.get('/:artistId', artistController.getArtistById);

router.patch('/:artistId', artistController.updatesArtistById);

router.delete('/:artistId', artistController.deletesArtist);


router.post('/:artistId/albums', albumController.createAlbum);

module.exports = router;

