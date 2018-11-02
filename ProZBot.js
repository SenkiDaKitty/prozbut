const Discord = require("discord.js");
const botsettings = require("./botsettings.json");
var client = new Discord.Client();
var prefix = "P!";

client.on('ready', async () => {
    console.log("ProZBot - The Proe Bot !");
});
client.on('message', message => {
if (message.content === "Plox i want sum turtle twerk") {
	message.channel.sendMessage("https://cdn.discordapp.com/attachments/506530289053466625/507636544400654363/tenor.gif")
	return
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "setgame")) {
        if (message.member.id != '183549541470044161') {
            return message.channel.sendMessage("Seul un administrateur du bot peut exécuter cette commande :warning:")
        } else {
        var args = message.content.substring(prefix.length).split(" ");
        let game = args.slice(1).join(' ')   
    message.channel.sendMessage(`Description mis à jour : ${game}`)
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
                .setTitle(`Sanctions >> Ban >> No enough permissions | Check your DM`)
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
                .addField(`Penalty applied !`,`User ${message.mentions.users.first()} has been muted by ${message.author.tag}, Reason : ${mutereason}`)
                .setColor("0x02e427")
      		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(MuteEmbed); 
                var MuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Penalty applied ( Mute ) !`,`User ${message.mentions.users.first()} has been muted by ${message.author.tag}, Reason : ${mutereason}`)
                .setColor("0x02e427")
    		.setFooter("ProzBot, Any hacking attempts will lead to a lawsuit ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(MuteLogEmbed)
                return;
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
                    message.channel.sendMessage("No u")
	} else {
		message.channel.sendMessage("Yes master ? :D")
	}
     }
            }
	      }
});

client.login(process.env.BOT_TOKEN);
