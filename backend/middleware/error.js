

const NotFound=(req,res,next)=>{
   const error=new Error( `Page Not Found at ${req.originalURL}`)
   res.status(404)
   next(error)
}

const handle=(req,res,next,err)=>{
    const statusCode= res.statusCode===200?500: res.statusCode;
    const message=err.message;

    if (err.name==="CastError" && err.kind=={objectId}){
        statusCode=404;
        message="Resources Not Found"
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV==='production'?null: err.stack
    })

    res.status(statusCode)
}

export {
    NotFound,
    handle
}