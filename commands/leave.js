const { execute } = require("./play");

module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(client, message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Selfish man");

        await voiceChannel.leave();
        await message.channel.send('Bye Kangs! Ill miss you :smiling_face_with_tear: ');


    }
}