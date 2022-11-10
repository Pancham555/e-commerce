module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
                // sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});