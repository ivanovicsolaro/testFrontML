import Express from 'express';

export default class Server {

    public app: Express.Application;
    public port: number = 3000;

    constructor(){
        this.app = Express();
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods','GET');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        })
    }

    start( callback: any ) {
        this.app.listen( this.port, callback );
    }
}