const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
    const isAuthorized = e => {
        console.log('isAuthorized');
        return e.url;
    };
    if (isAuthorized(req)) {
        // add your authorization logic here
        next(); // continue to JSON Server router
    } else {
        res.sendStatus(401);
    }
});

server.use('/api/v1/', router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
