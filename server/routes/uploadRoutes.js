const express = require('express');

console.log('uploadRoutes loaded');

const upload = 
    require('../middleware/uploadMiddleware');

const {
    uploadImage
} = require('../controllers/uploadController');

const router = express.Router();

router.get('/test', (req, res) => {

    res.json({
        message: 'Upload route working'
    });

});

router.post(
    '/',
    upload.single('image'),
    uploadImage
);

module.exports = router;