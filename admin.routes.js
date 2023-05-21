// Importando el enrutador de express
import { Router } from 'express';

// Creando una instancia del enrutador de express
const router = Router();
// Exportando el enrutador admin
export default router;


// GET /add-product
router.get('/add-product', (req, res, next) => {
  // Si la petición es post pasamos el siguiente
  // Middleware
  if(req.method === "POST") return next();

  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  res.send(`
  <form action="/add-product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add product</button>
  </form>
  `);
});
// POST /add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});
