'use strict'

var restify = require('restify')
var restifyPlugins = require ('restify-plugins')
var assert = require ('assert')
var mongodb = require ('mongodb')
const corsMiddleware = require ('restify-cors-middleware')

var server = restify.createServer()

const cors = corsMiddleware({
    'origins':['*']
})
server.pre(cors.preflight)
server.use(cors.actual)

server.use(restifyPlugins.jsonBodyParser({mapParams:true}))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.queryParser({mapParams:true}))
server.use(restifyPlugins.fullResponse())

server.listen(3005, ()=>{
    console.log("success")
    mongodb.connect('mongodb://localhost:27017', (err, client)=>{
        assert.equal(null, err)
        const db = client.db('mahasiswa')
        require('./route')({db, server})
    })
})

