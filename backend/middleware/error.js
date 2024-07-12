const NotFound=(req,res,next)=>{
    const error=new Error(`Not Found ${req.originalURL}`)
    res.status(404);
    next(error)
}

const handle=(err,req,res,next)=>{
    const statusCode=res.statusCode===200? 500 : res.statusCode;
    const message=err.message;

    if (err.name==='CastError' && err.kind=={ObjectId}){
        statusCode=400;
        message='Resource Not Found'
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV==='production'? null: err.stack
    })
}

export {
    NotFound,
    handle
}