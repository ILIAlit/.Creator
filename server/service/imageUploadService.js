const cloudinary = require('../data/cloudinary/cloudinaryConfig')


class ImageUploadService {
  async uploadCloudImage(file) {
    const image = await cloudinary.uploader.upload(file.tempFilePath, {folder: 'Creator'})
      .then((result => result))
    return image.url
  }
}

module.exports = new ImageUploadService()


