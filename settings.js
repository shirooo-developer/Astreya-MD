const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6281249122429'] //ur owner number
global.ownernomer = "6281249122429" //ur owner number2
global.ownername = "𝗞𝗲𝗶𝘇𝗵𝗮" //ur owner name
global.ytname = "YT: Keizha" //ur yt chanel name
global.socialm = "GitHub: Keizha" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = "𝗛𝗼𝘀𝗵𝗶𝗻𝗼 - 𝗠𝗗"
global.ownernumber = '6281249122429'
global.ownername = '6281249122429'
global.ownerNumber = ["6281249122429@s.whatsapp.net"]
global.ownerweb = "https://youtube.com"
global.websitex = "https://youtu.be"
global.wagc = "https://chat.whatsapp.com/E01trCuEsNM22uL4hB7ktS"
global.themeemoji = '🍀'
global.wm = "𝗛𝗼𝘀𝗵𝗶𝗻𝗼 - 𝗠𝗗"
global.botscript = 'Berada Digithub Saya' //script link
global.packname = ""
global.author = "𝗛𝗼𝘀𝗵𝗶𝗻𝗼 - 𝗠𝗗\n\n\nA Whatsapp Bot Created By\n𝗞𝗲𝗶𝘇𝗵𝗮\n\n\n\n\n\n\n\n       ━━━━━━━━━━━━━━━\n\n\n\n\n\n\n\nContact Bot: +62856-0611-4293"
global.creator = "6281249122429@s.whatsapp.net"
global.prefa = [',','!','.','#','/']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '*Sukses*',
    admin: '*Fitur Khusus Admin Grup*',
    botAdmin: '*Bot Harus Menjadi Admin Grup*',
    premime: '*Fitur Khusus Pengguna Premium*',
    owner: '*Fitur Khusus Pemilik Bot*',
    group: '*Fitur Khusus Untuk Grup*',
    private: '*Fitur Khusus Untuk Obrolan Pribadi*',
    bot: '*Fitur Khusus Bot*',
    wait: '*⏳ Permintaan Diproses...*',
    linkm: '*Masukkan Tautan Setelah Perintah*',
    endLimit: '*Limit Anda Habis, Limit Direset Sekali 24 Jam*',
    nsfw: '*Fitur NSFW Mati, Hubungi Admin Grup Untuk Mengaktifkan*',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
