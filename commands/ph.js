module.exports ={
    callback: ({ message, args }) =>{
        message.delete()
        if (message.channel.id != "797748808679161856") return;
       
       message.channel.send(`<@&798120683086938112>: ${args}`)
    }
}