console.log('Holis');

self.addEventListener('push', e =>{
    const data = e.data.json();
    console.log(data);
    //console.log('Notification recived');
    self.registration.showNotification(data.title, {
        body: data.message
    })
})