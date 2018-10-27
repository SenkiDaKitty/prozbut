const Discord = require("discord.js");
const botsettings = require("./botsettings.json");
var client = new Discord.Client();
var prefix = "B!";

client.on('ready', async () => {
    console.log("BlitZ Bot - Electrisant !");
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
    .addField(`Liste des serveurs où je suis:`,client.guilds.map(r => `${r.name} | **${message.guild.memberCount}** membres.`))
    .setColor("0x02e427")
    .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
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
        .addField('Administrateur du Serveur :', message.guild.owner, true) 
        .addField('Nombres de channels :', message.guild.channels.size, true) 
        .addField(`Nombres De Membres :`, message.guild.memberCount) 
        .addField('Nombres de Membres Humains :', checkMembers(message.guild), true)
        .addField('Nombres de Machine :', checkBots(message.guild), true)
        .setFooter('Serveur créer le :')
        .setTimestamp(message.guild.createdAt); 
    
        message.channel.send(ServerInfoEmbed);
        return
    }
});
client.on('message', async message => {
if (message.content === prefix + "ping"){
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(`${Math.round(client.ping)} ms`, "Héberger sur la machine de Senki")
    .setColor("0x02e427")
    .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
    message.delete()
    message.channel.send(embed);
}
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + "say")) {
	let args = message.content.slice(prefix.length).trim().split('');
    	let say = args.slice(3).join('')   
        var embedSay = new Discord.RichEmbed()
		.setColor(0xff4c4c)
		.setDescription(`⚡📝 | ${say}`)
		message.delete()
		message.channel.send(embedSay)
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            var BanEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Permissions >> Insuffisantes | Les instructions ont été envoyé en MP`)
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
	    var BanInstructions = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Instructions Ban`)
	    	.setDescription(`Afin d'effectuer correctement un ban, soyez sûr(e)s que : `)
	    	.setDescription(`Vous ayez les permissions suffisantes pour effectuer cette action,`)
	    	.setDescription(`Que le bot ai les permissions suffisantes pour éxecuter vos ordres,`)
	    	.setDescription(`Que vous avez spécifiez un utilisateur à bannir,`)
	    	.setDescription(`Que vous avez spécifiez une raison.`)
	    	.setDescription(`Un problème alors que toutes ces conditions sont spécifiez ? Veillez alors contacter Senki, ou rejoignez son serveur et mentionnez Senki afin de régler le problème`)
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage(BanInstructions)
            message.channel.send(BanEmbed).catch((error) => { console.log(error.message) })
            return
        } else {
        let member = message.mentions.members.first();
        if(!member) {
          var BanEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setTitle(`Sanctions >> Ban >> Utilisateur | Les instructions ont été envoyé en MP`)
              .setColor("0xff4c4c")
              .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
          message.delete()
          message.author.sendMessage("```Soies sur que : \n Le Bot ai assez de permissions.\n Que vous ayez entrez un utilisateur à bannir.\n Que VOUS avez assez de permissions.\n D'avoir entrer une raison.```")
          message.channel.send(BanEmbed).catch((error) => { console.log(error.message) });
          return
        } else {
        if(!member.bannable) {
                var EmbedBan = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`Sanctions >> Ban >> Erreur : Pas assez de permissions | Les instructions ont été envoyé en MP`)
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
            message.author.sendMessage("```Soies sur que : \n Le Bot ai assez de permissions.\n Que vous ayez entrez un utilisateur à bannir.\n Que VOUS avez assez de permissions.\n D'avoir entrer une raison.```")
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
          .setDescription(`${message.mentions.members.first} a été banni par ${message.author.tag} raisons : ${reason}`)
          .setColor("0x02e427")
          .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473"))
        var BanLogEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(`Sanctions Appliquée( Ban )`,`L'utilisateur ${message.mentions.users.first} à été banni par ${message.author.tag} Raison : ${reason}`)
          .setColor("0x02e427")
          .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
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
            .setTitle("Sanctions >> Mute >> Permissions Insuffisantes | Les instructions ont été envoyé en MP")
            .setColor("0xff4c4c")
            .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.author.sendMessage("```Soies sur que : \n Le Bot ai assez de permissions.\n Que vous ayez entrez un utilisateur à bannir.\n Que VOUS avez assez de permissions.\n D'avoir entrer une raison.```")
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanction >> Mute >> Utilisateur | Les instructions ont été envoyé en MP")
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.author.sendMessage("```Soies sur que : \n Le Bot ai assez de permissions.\n Que vous ayez entrez un utilisateur à bannir.\n Que VOUS avez assez de permissions.\n D'avoir entrer une raison.```")
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
               let role = message.guild.roles.find(r => r.name === "❌ Silence ❌");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "❌ Silence ❌",
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
                .addField(`La Sanction a été appliquée. !`,`L'utilisateur ${message.mentions.users.first()} à été réduit au silence par ${message.author.tag}, Raison : ${mutereason}`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(MuteEmbed); 
                var MuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Sanctions Appliquée ( Mute )`,`L'utilisateur ${message.mentions.users.first()} à été mute par ${message.author.tag}, raison : ${mutereason}`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(MuteLogEmbed)
                return;
            }
        }
    }
    if (message.content.startsWith(`${prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Sanctions >> Unmute >> Permissions Insuffisantes")
            .setColor("0xff4c4c")
            .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanctions >> Unmute >> Utilisateur")
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "❌ Silence ❌");

                const memberToMute = message.guild.member(userToMute) || message.guild.fetchMember(userToMute);
                
                memberToMute.removeRole(role);
                var unMuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`La Sanction a bien été supprimé`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(unMuteEmbed);
                var unMuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Sanctions Supprimé ( Unmute )`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(unMuteLogEmbed)
                return;
            }
        }   
    }
	    if (message.content.startsWith(`${prefix}unmuteA`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Sanctions >> Unmute >> Permissions Insuffisantes")
            .setColor("0xff4c4c")
            .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle("Sanctions >> Unmute >> Utilisateur")
                .setColor("0xff4c4c")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "🔇 Mute");

                const memberToMute = message.guild.member(userToMute) || message.guild.fetchMember(userToMute);
                
                memberToMute.removeRole(role);
                var unMuteEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`La Sanction a bien été supprimé`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                message.delete()
                message.channel.send(unMuteEmbed);
                var unMuteLogEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(`Sanctions Supprimé ( Unmute )`,`L'utilisateur ${message.mentions.users.first()} à été demute par ${message.author.tag}.`)
                .setColor("0x02e427")
                .setFooter("BlitzBot, Toutes tentatives de piratage conduira à une poursuite en justice ⚠.","https://cdn.discordapp.com/attachments/434459534514454528/504356020198572044/MIUI-9-Gif-Lightning.gif?width=473&height=473")
                const logs = message.guild.channels.find(channel => channel.name === "logs");
                logs.sendMessage(unMuteLogEmbed)
                return;
            }
        }
    }
});
    client.on('message', message => {
                if (message.isMentioned(client.user)) {
                    message.channel.sendMessage("Nan ? :D")
            }
});

client.login(process.env.BOT_TOKEN);
