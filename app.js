// Importando Express
import express from 'express';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);


// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});



//middlewear de parseo de datos del cliente
app.use(express.urlencoded({extended: true}));

//Middlewear de propositoi especifico
app.use('/about',(req,res)=>{
    res.send(`
    <h1 Style="color: teal">About...</h1>
    <p style="color: #555">Esta pagina esta creada para aprender
    desarrollo web en Fullstack con JS</p>
   `);
});
/*
app.use('/add-product',(req,res,next)=>{
    if(req.method === "POST") return next();
    //sirviendo el formulario
    console.log("📢Sirviendo el formulario")
    res.send(`
    <form action="/add-product"method="POST">
    <label for="title">Title</label>
    <input id="title" type="text" name="title">
    <label for="description">Description</label>
    <input id="description" type="text" name="description">
    <button type="submit">Add Product</button>
    </form> 
   `);
});

//POST add-product
app.use('/add-product',(req,res)=>{
    //realizando extraccion
    //datos de peticion
   for(const prop in req.body){
    console.log(`PROP:  ${prop} ${req.body[prop]}`);
   }
   res.redirect("/");
});*/


//registar el middlewear 
app.use((req,res,next)=>{
    console.log("📢Ejecutando el Middlewear 1");

    next();
});


app.use((req , res , next)=> {
    console.log(`${req.method} - ${req.url}`);
    
    next();
    });


app.use((req , res) => {
    console.log("⭐Respondiendo al cliente");
    
    res.send(`
    <h1>Welcome to expres</h1>
    <p>This is my awesome app</p>`
   
    );
    });
//creando servidor

//const server = htpp.createServer(app);

// arrancar el servidor

     app.listen(port, ip,(err)=>{
    console.log("📢 Sirviendo en http://localhost:3000");
    console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
})