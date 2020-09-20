const express = require ('express');
const liveReload = require('livereload');
const connectLiveReload = require('connect-livereload');

const server = express();
const liveReloadServer = liveReload.createServer();

server.use(connectLiveReload());
server.use(express.static('/home/dci/Documents/Login-form/public'));

liveReloadServer.watch('/home/dci/Documents/Login-form/public');

const port = 3027;
server.listen(port, function(){
    console.log(`Server is listening to the port: ${port}`);
});
