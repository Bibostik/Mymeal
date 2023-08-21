export default async function handler(req, res){

    console.log('test')
    res.status(200).json({
        message:'Success full',
        data: req.body
    })
}