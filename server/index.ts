import Server from './classes/server';
import itemsRoutes from './api/Items';

const server = new Server();

server.start( () => {
    console.log(`Conectado puerto ${ server.port }`);
});

server.app.use( '/api', itemsRoutes);

