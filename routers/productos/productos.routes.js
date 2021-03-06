const express = require('express')
// import express from 'express';
const { listarProductosPorIdController, guardarProductoController, actualizarProductoController, eliminarProductoController } = require('../../controllers/productos.controllers')
// import { listarProductosPorIdController, guardarProductoController, actualizarProductoController, eliminarProductoController } from '../../controllers/productos.controllers.js';

const router = express.Router();

router.get('/:id?', listarProductosPorIdController);

router.post('/', guardarProductoController);

router.put('/:id', actualizarProductoController);

router.delete('/:id', eliminarProductoController);

module.exports = router;