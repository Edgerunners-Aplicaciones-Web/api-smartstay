// Este es el archivo: api-server/server.js

const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Tu "arma"
const middlewares = jsonServer.defaults();

// Usamos el "permiso" de CORS
server.use(cors());
server.use(middlewares);

// Reescribir una "táctica" de json-server
// Esto es necesario para que las rutas con filtros (ej: /rooms?propertyId=101) funcionen
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));

server.use(router);

// Definimos el "campo de juego" (puerto)
// Render necesita que la variable se llame PORT
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`JSON Server está "marcando goles" en el puerto ${port}`);
});