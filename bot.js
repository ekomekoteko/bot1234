const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$bc | Obx,SERVER`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});






client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('***خرج من السيرفر***')
.addField('**الاسم**',`[ ${member} ]`)
.addField('**عدد الاعضاء**',`[ ${member.guild.memberCount} ]`,true)
.setColor('Random')
   
   var channel =member.guild.channels.find('name', 'welcome')
   if (!channel) return;
         channel.send({embed : embed});
 
});





const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 30
) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});




client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '520943015540293637').setName("W");
client.channels.find('id', '520943015540293637').setName("We");
client.channels.find('id', '520943015540293637').setName("Wel");
client.channels.find('id', '520943015540293637').setName("Welc");
client.channels.find('id', '520943015540293637').setName("Welco");
client.channels.find('id', '520943015540293637').setName("Welcom");
client.channels.find('id', '520943015540293637').setName("Welcome");
client.channels.find('id', '520943015540293637').setName("Welcome T");
client.channels.find('id', '520943015540293637').setName("Welcome To");
client.channels.find('id', '520943015540293637').setName("Welcome To C");
client.channels.find('id', '520943015540293637').setName("Welcome To Co");
client.channels.find('id', '520943015540293637').setName("Welcome To Cod");
client.channels.find('id', '520943015540293637').setName("Welcome To Code");
client.channels.find('id', '520943015540293637').setName("Welcome To Codes");
  }, 3000);
});







client.login(process.env.BOT_TOKEN);
