const webpush = require ('web-push');

//console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);
const public = process.env.PUBLIC_VAPID_KEY;
const private = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('mailto:test@gmail.com', public, private);

module.exports = webpush;