const yt = require("ytdl-core")

module.exports ={
    callback: async ({ message, args, client }) =>{
        const channel = client.channels.cache.get("818512545320402964")
        const connection = await channel.join()
        connection.play(yt("https://youtu.be/dQw4w9WgXcQ"))
        message.reply("DONE")
    }
}