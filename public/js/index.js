var socket = io();

       socket.on('connect',function() {
           console.log('connected to server');

           socket.emit('createMessage',{
               from: 'andrew',
               text:' hey it is me'
           });
       });
       socket.on('disconnect',function() {
           console.log('Disconnected to server');
       });

       socket.on('newMessage', function(message){
           console.log('newMessage', message);
       });
