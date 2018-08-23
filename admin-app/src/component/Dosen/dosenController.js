'use strict'

module.exports.getDosen=function(ctx,callback){
    debugger
    const collection = ctx
    debugger
    let limit = 10,
        skip = 0,
        query = {}

    delete query.skip
    delete query.limit
    
    
        collection.find(query).skip(skip).limit(limit).toArray()
        .then(callback)    
}