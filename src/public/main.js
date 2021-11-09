const PUBLIC_VAPID_KEY='BJoqufu8UTkfQTsf8Ht1UfOe26QF5TepHKQN0ZUOJ7S9w8VfKy8ktEonuU1NBuPR8IwaocJwImreQiwx8J51c94';

const sub = async () =>{

    //Service Worker
    const register  = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    });
    console.log("New SW");

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    });

    await fetch('/sub', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json" 
        }
    });
    console.log("ok");
}

const form = document.querySelector('#myForm');
const message = document.querySelector('#message');

form.addEventListener('submit', e =>{
    e.preventDefault();
    fetch('/new-message',{
        method: 'POST',
        body: JSON.stringify({
             message: message.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    form.reset();
});

sub();