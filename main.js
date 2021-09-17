const Discord = require('discord.js');

const prefix = '-';

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODg4MDUyODE4MTMxNDM1NjAx.YUNFow.g2cfbEkiTbbeZ0ZVAb8Q1IcEt5o')
