const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();
var prefix = '$'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if(message.content.startsWith("/verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
    message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "xD")); // اسم الرتبة
      }).catch(() => {
        m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
      });
    });
  }
});

client.login('NTEyMzIwMDI0NzUzNDcxNDg5.Dtr4XQ.pXXA2nLHSwIIiPihn6sf-jLqFRg');