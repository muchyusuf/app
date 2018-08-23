'use strict'

module.exports = function(ctx){
    const db = ctx.db,
    server = ctx.server

    const mahasiswa = db.collection('mahasiswa')
    const dosen = db.collection('dosen')
    // const guru = db.collection('GuruKungfu')
    server.get ('/', (req, res)=>{
        res.send (200, "Welcome to NodeJS")
    })

    server.get('/getMahasiswa', (req,res, next)=>{
        let limit = parseInt(req.query.limit , 20) || 20,
        skip = parseInt(req.query.skip, 5) || 0,
        query = req.query || {}
        delete query.skip
        delete query.limit
        
        mahasiswa.find(query).skip(skip).limit(limit).toArray()
            .then(docs=>res.json(200, docs))
            .catch(err=>res.json(500, err))
            next()
    })

    server.get('/getDosen', (req,res, next)=>{
        let limit = parseInt(req.query.limit , 20) || 20,
        skip = parseInt(req.query.skip, 5) || 0,
        query = req.query || {}
        delete query.skip
        delete query.limit
        
        dosen.find(query).skip(skip).limit(limit).toArray()
            .then(docs=>res.json(200, docs))
            .catch(err=>res.json(500, err))
            next()
    })
    // server.get('/getGuru', (req,res, next)=>{
    //     let limit = parseInt(req.query.limit , 10) || 10,
    //     skip = parseInt(req.query.skip, 5) || 0,
    //     query = req.query || {}
    //     delete query.skip
    //     delete query.limit
        
    //     guru.find(query).skip(skip).limit(limit).toArray()
    //         .then(docs=>res.json(200, docs))
    //         .catch(err=>res.json(500, err))
    //         next()
    // })
    server.post('/postMahasiswa', (req, res, next) => {
        const data = Object.assign({}, req.body,{
        })
        mahasiswa.insert(data)
            .then(res.send(204,{"status" : "success", "message" : "datam was succesfully inserted"}))
            .catch(err => res.send(500, err))
        next()
    })
    server.post('/postDosen', (req, res, next) => {
        const data = Object.assign({}, req.body,{
        })
        dosen.insert(data)
            .then(res.send(204,{"status" : "success", "message" : "datam was succesfully inserted"}))
            .catch(err => res.send(500, err))
        next()
    })

    //   /* UPDATE BOOK */
    // server.put('/:ID', function(req, res, next) {   
    //     db.collection('AliranKungfu',function(err,aliranCollection) {
    //         var aliranID={ "ID": ObjectID(req.params.ID) };
    //         var aliranData=req.body;
    //         aliranCollection.update(aliranID, aliranData,function(err,result){
    //         return  res.send();
    //         })
    //     })
    // });
      
      /* DELETE BOOK */
      server.del('/:ID', (req, res, next)=>{
        const data = Object.assign({}, req.body, )
        dosen.deleteOne(data)
        .then ( res.json(204, {"status": "success", "message" : "datam was succesfully deleted"}))
        .catch (err=> res.send (500, err))
        next()

    })
}