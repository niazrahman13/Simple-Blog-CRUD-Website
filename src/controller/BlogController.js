const model = require("../model/BlogModel");

// Crete Blog

exports.createBlog = ((req,res)=>{
    let body = req.body

    model.create(body)
    .then((data)=>{
        res.status(200).json({'data':data})
    })
    .catch(()=>{
        res.status(404).json('Blog Creation Error')
    })
})

// Read Blog

exports.readBlog = ((req,res)=>{
    let Query = {}

    model.find(Query)
    .then((data)=>{
        res.status(200).json({'data':data})
    })
    .catch(()=>{
        res.status(404).json('Blog Creation Error')
    })
})

// Read Blog By Id

exports.readBlogId = ((req,res)=>{
    let id = req.params.id
    let Query = {_id:id}

    model.find(Query)
    .then((data)=>{
        res.status(200).json({'data':data})
    })
    .catch(()=>{
        res.status(404).json('Blog Creation Error')
    })

})

// Update

exports.blogUpdate = ((req,res)=>{
    let id = req.params.id
    let body = req.body

    let Query = {_id:id}
    let Projection = {$set:body}

    model.updateOne(Query,Projection,{upsert:true})
    .then((data)=>{
        res.status(200).json({'data':data})
    })
    .catch(()=>{
        res.status(404).json('Blog Creation Error')
    })
})

// Delete Blog

exports.blogDelete = ((req,res)=>{
    let id = req.params.id
    let Query = {_id:id}

    model.deleteOne(Query)
    .then((data)=>{
        res.status(200).json({'data':data})
    })
    .catch(()=>{
        res.status(404).json('Blog Creation Error')
    })
})