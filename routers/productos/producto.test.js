const { faker } = require('@faker-js/faker')

const { commerce, image, random } = faker

const generarProductosRandom = async (req, res) => {
  const list = []

  for (let i = 0; i < 5; i++) {    
    list.push({
      nombre: commerce.product(),
      precio: commerce.price( 1, 1000, 1,'$'),
      foto: image.imageUrl(1234, 2345, 'producto', true)
    })
  }

  return res.status(200).json(list)
}

module.exports = generarProductosRandom;