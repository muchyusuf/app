'use strict'

let DosenController=require('./dosenController.js');

const DosenRoute = function(ctx){
    
    const server = ctx.server
    const db = ctx.db
    const collection = db.collection('dosen')
    debugger
    server.get('/dosen', function (req, res) {
        debugger
        DosenController.getDosen(collection,function (respon,error) {
            debugger
            if (error) {
                throw error;
            }
            res.json(respon);
        });
    });
}

module.exports = {
    DosenRoute : DosenRoute
}
