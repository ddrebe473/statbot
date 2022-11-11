require('dotenv').config();

const rankefile = require('./rank')
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});

const prefix = '?'
const test = 'ping'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    
    if(msg.content === `${prefix}${test}`){
        msg.channel.send("Pong!")
    }

});


client.login(process.env.BOT_TOKEN);
