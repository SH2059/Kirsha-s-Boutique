const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

const uploadImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                message: 'No file uploaded'
            });
        }

        const streamUpload = () => {

            return new Promise((resolve, reject) => {

                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: 'kirsha-s-boutique'
                    },
                    (error, result) => {

                        if (result) {

                            resolve(result);

                        } else {

                            reject(error);

                        }
                    }
                );

                streamifier
                    .createReadStream(req.file.buffer)
                    .pipe(stream);
            });
        };

        const result = await streamUpload();

        res.status(200).json({

            imageUrl: result.secure_url

        });
    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Upload failed'
        });
    }
};

module.exports = {
    uploadImage
};