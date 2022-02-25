import express from 'express';
import { ProductosApi } from '../models/productos/productos.api.js';
import rutasProductos from './productos/productos.routes.js';

const router = express.Router();
const productos = new ProductosApi("productos")


// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Rutas
// router.get('/', async (req, res) => {
//   const listaProductos = await productos.listarPorIdOTodo()
//   res.render('index', {
//     listaProductos,
//   });
// });
router.use('/api/productos', rutasProductos);
router.use('/api/*', (req, res) => {
  res.status(404).json({
    error: -2,
    descripcion: `La ruta ${req.baseUrl} con el metodo ${req.method} no esta implementado`,
  });
});

export {router};