const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "Storm Generator";
const prefix1 = "+";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
var express = require('express');
var app = express();
const chalk = require('chalk');

  bot.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                            #####                                      #####                `)));
  console.log((chalk.cyan(`                                           #     #   ##   #        ##    ####  #    # #     # ###### #    # `)));
  console.log((chalk.cyan(`                                           #        #  #  #       #  #  #    # #   #  #       #      ##   # `)));
  console.log((chalk.cyan(`                                           #  #### #    # #      #    # #      ####   #  #### #####  # #  # `)));
  console.log((chalk.cyan(`                                           #     # ###### #      ###### #      #  #   #     # #      #  # # `)));
  console.log((chalk.cyan(`                                           #     # #    # #      #    # #    # #   #  #     # #      #   ## `)));
  console.log((chalk.cyan(`                                            #####  #    # ###### #    #  ####  #    #  #####  ###### #    # `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#2556 !`)));  
  console.log((chalk.yellow(`                                                                © 2020 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/6czZmmtczp`)));   
  console.log((chalk.red(`                                                       Twitter: https://twitter.com/Galack_QSM`)));   
  console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));   
  console.log((chalk.red(`                                                        Youtube: https://youtube.com/GalackQSM`)));   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${bot.guilds.cache.size} serveurs. \nPour un total de ${bot.users.cache.size} membres.`)
  console.log("Connecté en tant que " + bot.user.id + " | Prefix : " + prefix1 + " | Nombre de Serveurs "+ bot.guilds.cache.size +" | Nombres de salons "+ bot.channels.cache.size +" | Utilisateur totaux "+ bot.users.cache.size +" | Nombre d'emojis totaux "+ bot.emojis.cache.size +'');
  bot.user.setActivity("discord.gg/stormrewards +help for info");
});

bot.on("message", message => {
    if (message.channel.id === config.botChannel) { 
        if (message.author.bot) return;
        var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

        if (command === "gen") {
            if (generated.has(message.author.id)) {
                message.channel.send(
                    "Pleas Wait cooldown! - " +
                    message.author.tag
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Veuillez fournir un service!");
                var fs = require("fs");
                const filePath = __dirname + "/comptes/" + args[0] + ".txt";

                const embed = {
                    title: "No stock",
                    description: "No stock",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                        text: "Create By Stragar#1234"
                    },
                    image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                    author: {
                        name: botname + "",
                        url: "discord.gg/stormrewards",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };

                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        if(position == -1)
                        return message.channel.send({ embed });
                        message.author.send(firstLine);
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Compte " + args[0] + " généré!",
                                    description: "Le compte de votre service demandé a été envoyé en tant que DM!",
                                    color: 0xff033d,
                                    timestamp: new Date(),
                                    footer: {
                                        icon_url: "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                                        text: "Create By Stragar"
                                    },
                                    image: {
                                        url:
                                            "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"
                                    },
                                    author: {
                                        name: botname + "",
                                        url: "discord.gg/stormrewards",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
                                generated.add(message.author.id);
                                setTimeout(() => {
                                    generated.delete(message.author.id);
                                }, 150000); // 86400000 = 24 H , 150000 = 15 Min
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send("No stock!");
                        }
                    } else {
                        const embed = {
                            title: "Not found",
                            description: "Not found!",
                            color: 0xff033d,
                            timestamp: new Date(),
                            footer: {
                                icon_url:
                                    "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                                text: "Create By Stragar#1234"
                            },
                            image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                            author: {
                                     name: botname + " - Storm Generator ",
                                     url: "https://disdiscord.gg/stormrewards",
                                icon_url: bot.displayAvatarURL
                            },
                            fields: []
                        };
                        message.channel.send({ embed });
                        return;
                    }
                });
            }
        }
        else
            if (command === "stats") {
                const embed = {
                    title: "Stats de " + botname,
                    description: "Nombre total d'utilisateurs: `" + bot.users.cache.size + " membres`\nNombre total de salon: `" + bot.channels.cache.size+ " salons`\nNombre total d'émoji: `" + bot.emojis.cache.size+ " émojis`\nNombre total de serveur: `" + bot.guilds.cache.size+ " serveur(s)`\nCrée par GalackQSM#0895",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                        text: "Create By Stragar#1234"
                    },
                    image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                    author: {
                         name: botname + " - Storm Generator ",
                         url: "https://discord.gg/6czZmmtczp",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            }
        
            if (command === "help") {

                const embed = {
                    color: 0xff033d,
                    title: botname + ' - Storm Generator ',
                    url: 'https://discord.gg/6czZmmtczp',
                    author: {
                        name: 'Liste des commandes',
                        url: 'https://discord.gg/6czZmmtczp',
                    },
                    image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},

                    description: '**Commandes**',
                    fields: [
                        {
                            name: 'How to use gen?',
                            value: "Exemple: `" + prefix1 +"gen <Name>`",
                        },
                        
                        {
                            name: 'Status ' + botname,
                            value: "Exemple: `" + prefix1 +"stats`",
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Create By Stragar#1234',
                        icon_url: 'https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024',
                    },
                };
                message.channel.send({ embed });
            }

        if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You don't have the permissions to do this!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            if(!account) return message.reply("Fournissez d'abord une chaîne de compte formatée!")
            if(!service) return message.reply("Fournir d'abord un service!")
            const filePath = __dirname + "/comptes/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "Add accounts!",
                    description: "Account successfully added to `" + service + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                        text: "Create By Stragar#1234"
                    },
                    image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                    author: {
                        name: botname + " - Storm Generator ",
                        url: "discord.gg/stormrewards",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You don't have the permissions to do this!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/comptes/" + args[0] + ".txt";
            fs.writeFile(filePath, 'GalackQSM:GalackQSM', function (err) {
                if (err) throw err;
                const embed = {
                    title: "Service créé!",
                    description: "Service créé avec succès `" + args[0] + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                        text: "Create By Stragar#1234"
                    },
                    image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                    author: {
                        name: botname + " - Storm Generator ",
                        url: "discord.gg/stormrewards", 
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        }
        if (command === "restock") {
            const embed = {
                title: "Thank you for putting a service!",
                description: "Please provide the name of the restocked service!",
                color: 0xff033d,
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024",
                    text: "Create By Stragar#1234"
                },
                 image: {url:"https://cdn.discordapp.com/icons/924949519173554186/a_300310cc260c5562a16cf32cf2cfed95.gif?size=1024"},
                author: {
                    name: botname + " - Storm Generator ",
                    url: "discord.gg/stormrewards",
                    icon_url: bot.displayAvatarURL
                },
                fields: []
            };
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You do not have permission to do this!");
            if (!args[0])
            {
                return message.channel.send({ embed });
            }
            if (!args[1])
            {
                return message.channel.send({ embed });
            }
            else {
            message.channel.send("@everyone\n● Restock de compte: **" + args[0] + "**\n● Nombre de compte restock: **" + args[1] + " compte(s)**\n● Restock par: " + "<@" + message.author.id +">");
            }
        }
    }
});

bot.login(config.token);
