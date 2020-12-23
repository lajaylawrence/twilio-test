const accountSid = 'AC3d6d33f0d868ef6f268206382d26701a';
const authToken =  '89c34747ce65306289fb568435c98270';

const client = require('twilio')(accountSid, authToken);

var code = Math.floor(1000 + Math.random() * 9000);

client.messages.create({
    to: '+17542324313',
    from: '+19388884773',
    body: `your verification code is ${code}`
})
.then((message) => console.log(message.sid));

//console.log(`your verification code is ${code}`)


var button = document.getElementById('button');
var msg = document.getElementById('message');

button.addEventListener('click', ()=>{
    var input = document.getElementById('input').value;
    var message = (input == code)? "you are verified" : "incorrect code";
    msg.innerText = message;

})



