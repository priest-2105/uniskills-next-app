const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fetch = require('node-fetch'); // Uncomment this if you're using fetch
// require('dotenv').config
// ({ path: '.env.local' });



const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.NEXT_PUBLIC_CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

app.use(cors({ origin: process.env.NEXT_PUBLIC_CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/proxy', async (req, res) => {
  const { mainUserId, message, chatCodec } = req.body;
  console.log('Message Sent:', message, 'from mainUserId:', mainUserId, 'to selected user', chatCodec);

  try {
    // Fetch token
    // const tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v3/auth/messages/${mainUserId}`, { method: 'GET' });
    // if (!tokenResponse.ok) throw new Error('Failed to fetch token');
    
    // const tokenData = await tokenResponse.json();
    // const token = tokenData?.data?.token;
    // if (!token) throw new Error('Token not found in response');
    const targetUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v3/chats/send-chat/${chatCodec}`;
    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1];

    // Use the token for the next API request
    const apiResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,  
      },
      body: new URLSearchParams({ message }).toString(),
    });

    if (!apiResponse.ok) throw new Error(`API responded with status: ${apiResponse.status}`);

    const data = await apiResponse.json();
    console.log('Message sent:', message, 'to chatId:');
    io.emit('chatListUpdated');
    res.json(data);
  } catch (error) {
    console.error('Error in /api/proxy:', error);
    res.status(500).json({ message: 'Error processing request', error: error.toString() });
  }
});

 

async function sendMessageAndUpdateChatList(chatId, message) {
  // Simulate sending a message
  const messageResult = {
    chatId: chatId,
    // user_id: selectedUser.codec,
    message: message,
    messageId: Date.now(),
  };

  const chatListUpdated = true;

  return { messageResult, chatListUpdated };
}

app.post('/api/messages', async (req, res) => {
  const { chatId, message } = req.body;

 

  try {
    const { messageResult, chatListUpdated } = await sendMessageAndUpdateChatList(chatId, message);
    console.log(`Message sent to chatId: ${chatId} with message: ${message}`);

    // io.emit('chatListUpdated');

    io.to(`chat-${chatId}`).emit('chatMessagesUpdated', chatId);
    console.log(`Emitting 'chatMessagesUpdated' event for chatId: ${chatId}`);

    if (chatListUpdated) {
      io.emit('chatListUpdated');
      console.log(`Emitting 'chatListUpdated' event.`);
    }
    res.json(messageResult);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send({ message: 'Error sending message', error: error.toString() });
  }
});


io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  
  socket.on('joinChat', (chatId) => {
    socket.join(`chat-${chatId}`);
    console.log(`User ${socket.id} joined chat ${chatId}`);
  }); 
}); 

const PORT = process.env.PORT; 
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`CLIENT URL ${process.env.NEXT_PUBLIC_CORS_ORIGIN}`);
});
