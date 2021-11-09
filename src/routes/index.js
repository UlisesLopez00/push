const {Router} = require('express');
const router = Router();

const webpush = require ('../webpush');

let pushSubscriptions;

router.post('/sub', async (req, res)=>{
    pushSubscriptions=req.body;
    res.status(200).json();
});

router.post('/new-message',async (req,res)=>{

    const {message} = req.body;

    const payload = JSON.stringify({
        title: 'Custom Notification',
        message: message
    })
    try {
        await webpush.sendNotification(pushSubscriptions, payload);  
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;