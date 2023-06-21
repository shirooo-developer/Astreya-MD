const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PEMILIK* 〙
┃ .self
┃ .public
┃ .join
┃ .bctext
┃ .bcimage
┃ .bcvideo
┃ .creategc
┃ .setexif
┃ .shutdown
┃ .autostickergc
┃ .setppbot
┃ .addprem
┃ .delprem
┃ .addowner
┃ .delowner
┃ .addvn
┃ .delvn
┃ .addsticker
┃ .delsticker
┃ .addimage
┃ .delimage
┃ .addvideo
┃ .delvideo
┃ .block add
┃ .unblock del
┃ .leavegc
┗━━━━━━━━━━━━━━━━━━━༓

┏━━━〘 *MENU PENGUNDUH* 〙
┃ .tiktokvideo
┃ .tiktokaudio
┃ .ytsearch
┃ .mediafire
┃ .play
┃ .ytmp3
┃ .ytmp4
┃ .google
┃ .spotify
┃ .gitclone
┃ .happymod
┃ .facebook
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU GRUP* 〙
┃ .antilink
┃ .antiwame
┃ .grouplink
┃ .ephemeral
┃ .delete
┃ .setppgroup
┃ .setname
┃ .setdesc
┃ .add
┃ .kick
┃ .promote
┃ .demote
┃ .hidetag
┃ .tagall
┃ .editinfo
┃ .opentime
┃ .closetime
┃ .resetlink
┃ .autostickerpc
┃ .antilinkgc
┃ .antiwame
┃ .antilinkall
┃ .antilinktiktok
┃ .antilinkfb
┃ .antilinktwitter
┃ .antilinkig
┃ .antlinktg
┃ .antilinkytvid
┃ .antilinkytch
┃ .antivirus
┃ .antitoxic
┃ .nsfw
┃ .react
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU VIDIO ACAK* 〙
┃ .tiktokgirl
┃ .tiktoknukthy
┃ .tiktokkayes
┃ .tiktokpanrika
┃ .tiktoknotnot
┃ .tiktokghea
┃ .tiktoksantuy
┃ .tiktokbocil
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU PENGUNTIT* 〙
┃ .igstalk
┃ .ffstalk
┃ .mlstalk
┃ .npmstalk
┃ .ghstalk
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU INFORMASI* 〙
┃ .ping
┃ .menu
┃ .listpem
┃ .liststicker
┃ .listimage
┃ .listvideo
┃ .listvn
┃ .listbadword
┃ .listpc
┃ .listgc
┃ .owner
┃ .rentbot
┃ .listrentbot
┃ .donate
┃ .quoted
┃ .runtime
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU ALAT* 〙
┃ .cekapikey
┃ .friend
┃ .obfuscate
┃ .styletext
┃ .fliptext
┃ .tts
┃ .say
┃ .togif
┃ .toqr
┃ .tinyurl
┃ .tinyurl
┃ .tovn
┃ .toaudio
┃ .tomp3
┃ .tomp4🅕
┃ .toimg
┃ .toonce
┃ .sticker
┃ .take
┃ .emoji
┃ .volume
┃ .ebinary
┃ .dbinary
┃ .ssweb
┃ .define
┃ .confess
┃ .leave
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU PERMAINAN* 〙
┃ .truth
┃ .dare
┃ .couple
┃ .soulmate
┃ .stupidcheck
┃ .handsomecheck
┃ .uncleancheck
┃ .hotcheck
┃ .smartcheck
┃ .greatcheck
┃ .evilcheck
┃ .dogcheck
┃ .coolcheck
┃ .waifucheck
┃ .awesomecheck
┃ .gaycheck
┃ .cutecheck
┃ .lesbiancheck
┃ .hornycheck
┃ .prettycheck
┃ .lovelycheck
┃ .uglycheck
┃ .cekmati
┃ .halah
┃ .huluh
┃ .hilih
┃ .holoh
┃ .heleh
┃ .wangy
┃ .hot
┃ .sexy
┃ .kind
┃ .idiot
┃ .handsome
┃ .beautiful
┃ .cute
┃ .pretty
┃ .lesbian
┃ .noob
┃ .bastard
┃ .foolish
┃ .nerd
┃ .asshole
┃ .gay
┃ .smart
┃ .stubble
┃ .doggo
┃ .horny
┃ .cunt
┃ .wibu
┃ .noobra
┃ .nibba
┃ .nibbi
┃ .comrade
┃ .mumu
┃ .rascal
┃ .scumbag 
┃ .nuts
┃ .fagot
┃ .scoundrel
┃ .ditch
┃ .dope
┃ .gucci
┃ .lit
┃ .dumbass
┃ .crackhead
┃ .mf
┃ .motherfucker
┃ .sucker
┃ .fuckboy
┃ .playboy
┃ .fuckgirl
┃ .playgirl
┃ .quotes
┃ .bisakah
┃ .saya
┃ .kapankah
┃ .dimanakah
┃ .apakah
┃ .bagaimanakah
┃ .rate
┃ .checkme
┃ .squirrel
┃ .horny
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU SUARA* 〙
┃ .bass
┃ .blown
┃ .deep
┃ .earrape
┃ .fast
┃ .fat
┃ .nightcore
┃ .reverse
┃ .robot
┃ .slow
┃ .smooth
┃ .sound1 - sound161
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU ISLAM* 〙
┃ .juzamma
┃ .hadis
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU GAMBAR ACAK* 〙
┃ .aesthetic
┃ .coffee
┃ .wikimedia
┃ .wallpaper
┃ .art
┃ .bts
┃ .woof
┃ .meow
┃ .lizard
┃ .cosplay
┃ .hacker
┃ .cyber
┃ .gamewallpaper
┃ .islamic
┃ .jennie
┃ .jiso
┃ .satanic
┃ .justina
┃ .cartoon
┃ .pentol
┃ .cat
┃ .kpop
┃ .exo
┃ .lisa
┃ .space
┃ .car
┃ .technology
┃ .bike
┃ .shortquote
┃ .antiwork
┃ .hacking
┃ .boneka
┃ .rose
┃ .ryujin
┃ .ulzzangboy
┃ .ulzzanggirl
┃ .wallml
┃ .wallphone
┃ .mountain
┃ .goose
┃ .profilepic
┃ .couplepic
┃ .programming
┃ .pubg
┃ .blackpink
┃ .randomboy  
┃ .randomgirl
┃ .hijab  
┃ .chinese
┃ .indo
┃ .japanese
┃ .korean
┃ .malay
┃ .thai
┃ .vietnamese
┃ .paptt
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU ANIME* 〙
┃ .akira
┃ .akiyama
┃ .ana
┃ .asuna
┃ .ayuzawa
┃ .boruto
┃ .chiho
┃ .chitoge
┃ .cosplayloli
┃ .cosplaysagiri
┃ .deidara
┃ .doraemon
┃ .elaina
┃ .emilia
┃ .erza
┃ .gremory
┃ .hestia
┃ .hinata
┃ .husbu
┃ .inori
┃ .isuzu
┃ .itachi
┃ .itori
┃ .kaga
┃ .kagura
┃ .kakasih
┃ .kaori
┃ .keneki
┃ .kotori
┃ .kurumi
┃ .loli
┃ .madara
┃ .megumin
┃ .mikasa
┃ .mikey
┃ .miku
┃ .minato
┃ .naruto
┃ .neko
┃ .neko2
┃ .nekonime
┃ .nezuko
┃ .onepiece
┃ .pokemon
┃ .randomnime
┃ .randomnime2
┃ .rize
┃ .sagiri
┃ .sakura
┃ .sasuke
┃ .shina
┃ .shinka
┃ .shinomiya
┃ .shizuka
┃ .shota
┃ .tejina
┃ .toukachan
┃ .tsunade
┃ .waifu
┃ .animewall
┃ .yotsuba
┃ .yuki
┃ .yulibocil
┃ .yumeko
┃ .8ball
┃ .tickle
┃ .gecg
┃ .feed
┃ .kill
┃ .hug
┃ .pat
┃ .lick 
┃ .kiss
┃ .bite
┃ .yeet
┃ .bully
┃ .bonk
┃ .wink
┃ .poke
┃ .nom
┃ .slap
┃ .smile 
┃ .wave
┃ .awoo
┃ .blush
┃ .smug
┃ .glomp 
┃ .happy
┃ .dance
┃ .cringe
┃ .cuddle
┃ .cry
┃ .highfive 
┃ .shinobu
┃ .handhold
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU NSFW* 〙
┃ .hentai
┃ .gifhentai
┃ .gifblowjob
┃ .hentaivid
┃ .hneko
┃ .nwaifu
┃ .animespank
┃ .trap
┃ .gasm
┃ .ahegao
┃ .ass
┃ .bdsm
┃ .blowjob
┃ .cuckold
┃ .cum
┃ .milf
┃ .eba
┃ .ero
┃ .femdom
┃ .foot
┃ .gangbang
┃ .glasses
┃ .jahy
┃ .masturbation
┃ .manga
┃ .neko-hentai
┃ .neko-hentai2
┃ .nsfwloli
┃ .orgy
┃ .panties 
┃ .pussy
┃ .tentacles
┃ .thights
┃ .yuri
┃ .zettai
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU TEXTPRO* 〙
┃ .candy 
┃ .christmas 
┃ .3dchristmas 
┃ .sparklechristmas
┃ .deepsea 
┃ .scifi 
┃ .rainbow 
┃ .waterpipe 
┃ .spooky 
┃ .pencil 
┃ .circuit 
┃ .discovery 
┃ .metalic 
┃ .fiction 
┃ .demon 
┃ .transformer 
┃ .berry 
┃ .thunder 
┃ .magma 
┃ .3dstone 
┃ .neonlight 
┃ .glitch 
┃ .harrypotter 
┃ .brokenglass 
┃ .papercut 
┃ .watercolor 
┃ .multicolor 
┃ .neondevil 
┃ .underwater 
┃ .graffitibike
┃ .snow 
┃ .cloud 
┃ .honey 
┃ .ice 
┃ .fruitjuice 
┃ .biscuit 
┃ .wood 
┃ .chocolate 
┃ .strawberry 
┃ .matrix 
┃ .blood 
┃ .dropwater 
┃ .toxic 
┃ .lava 
┃ .rock 
┃ .bloodglas 
┃ .hallowen 
┃ .darkgold 
┃ .joker 
┃ .wicker
┃ .firework 
┃ .skeleton 
┃ .blackpink 
┃ .sand 
┃ .glue 
┃ .1917 
┃ .leaves
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU PHOTOOXY* 〙
┃ .shadow 
┃ .write 
┃ .romantic 
┃ .burnpaper
┃ .smoke 
┃ .narutobanner 
┃ .love 
┃ .undergrass
┃ .doublelove 
┃ .coffecup
┃ .underwaterocean
┃ .smokyneon
┃ .starstext
┃ .rainboweffect
┃ .balloontext
┃ .metalliceffect
┃ .embroiderytext
┃ .flamingtext
┃ .stonetext
┃ .writeart
┃ .summertext
┃ .wolfmetaltext
┃ .nature3dtext
┃ .rosestext
┃ .naturetypography
┃ .quotesunder
┃ .shinetext
┗━━━━━━━━━━━━━━━━━━━༓

┏━━〘 *MENU EPHOTO360* 〙
┃ .glitchtext
┃ .writetext
┃ .advancedglow
┃ .typographytext
┃ .pixelglitch
┃ .neonglitch
┃ .flagtext
┃ .flag3dtext
┃ .deletingtext
┃ .blackpinkstyle
┃ .glowingtext
┃ .underwatertext
┃ .logomaker
┃ .cartoonstyle
┃ .papercutstyle
┃ .watercolortext
┃ .effectclouds
┃ .blackpinklogo
┃ .gradienttext
┃ .summerbeach
┃ .luxurygold
┃ .multicoloredneon
┃ .sandsummer
┃ .galaxywallpaper
┃ .1917style
┃ .makingneon
┃ .royaltext
┃ .freecreate
┃ .galaxystyle
┃ .lighteffects
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.animemenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU ANIME* 〙
┃ .akira
┃ .akiyama
┃ .ana
┃ .asuna
┃ .ayuzawa
┃ .boruto
┃ .chiho
┃ .chitoge
┃ .cosplayloli
┃ .cosplaysagiri
┃ .deidara
┃ .doraemon
┃ .elaina
┃ .emilia
┃ .erza
┃ .gremory
┃ .hestia
┃ .hinata
┃ .husbu
┃ .inori
┃ .isuzu
┃ .itachi
┃ .itori
┃ .kaga
┃ .kagura
┃ .kakasih
┃ .kaori
┃ .keneki
┃ .kotori
┃ .kurumi
┃ .loli
┃ .madara
┃ .megumin
┃ .mikasa
┃ .mikey
┃ .miku
┃ .minato
┃ .naruto
┃ .neko
┃ .neko2
┃ .nekonime
┃ .nezuko
┃ .onepiece
┃ .pokemon
┃ .randomnime
┃ .randomnime2
┃ .rize
┃ .sagiri
┃ .sakura
┃ .sasuke
┃ .shina
┃ .shinka
┃ .shinomiya
┃ .shizuka
┃ .shota
┃ .tejina
┃ .toukachan
┃ .tsunade
┃ .waifu
┃ .animewall
┃ .yotsuba
┃ .yuki
┃ .yulibocil
┃ .yumeko
┃ .8ball
┃ .tickle
┃ .gecg
┃ .feed
┃ .kill
┃ .hug
┃ .pat
┃ .lick 
┃ .kiss
┃ .bite
┃ .yeet
┃ .bully
┃ .bonk
┃ .wink
┃ .poke
┃ .nom
┃ .slap
┃ .smile 
┃ .wave
┃ .awoo
┃ .blush
┃ .smug
┃ .glomp 
┃ .happy
┃ .dance
┃ .cringe
┃ .cuddle
┃ .cry
┃ .highfive 
┃ .shinobu
┃ .handhold
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.ownermenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PEMILIK* 〙
┃ .self
┃ .public
┃ .join
┃ .bctext
┃ .bcimage
┃ .bcvideo
┃ .creategc
┃ .setexif
┃ .shutdown
┃ .autostickergc
┃ .setppbot
┃ .addprem
┃ .delprem
┃ .addowner
┃ .delowner
┃ .addvn
┃ .delvn
┃ .addsticker
┃ .delsticker
┃ .addimage
┃ .delimage
┃ .addvideo
┃ .delvideo
┃ .block add
┃ .unblock del
┃ .leavegc
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.suaramenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU SUARA* 〙
┃ .bass
┃ .blown
┃ .deep
┃ .earrape
┃ .fast
┃ .fat
┃ .nightcore
┃ .reverse
┃ .robot
┃ .slow
┃ .smooth
┃ .sound1 - sound161
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.downloadmenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PENGUNDUH* 〙
┃ .tiktokvideo
┃ .tiktokaudio
┃ .ytsearch
┃ .mediafire
┃ .play
┃ .ytmp3
┃ .ytmp4
┃ .google
┃ .spotify
┃ .gitclone
┃ .happymod
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.groupmenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU GRUP* 〙
┃ .antilink
┃ .antiwame
┃ .grouplink
┃ .ephemeral
┃ .delete
┃ .setppgroup
┃ .setname
┃ .setdesc
┃ .add
┃ .kick
┃ .promote
┃ .demote
┃ .hidetag
┃ .tagall
┃ .editinfo
┃ .opentime
┃ .closetime
┃ .resetlink
┃ .autostickerpc
┃ .antilinkgc
┃ .antiwame
┃ .antilinkall
┃ .antilinktiktok
┃ .antilinkfb
┃ .antilinktwitter
┃ .antilinkig
┃ .antlinktg
┃ .antilinkytvid
┃ .antilinkytch
┃ .antivirus
┃ .antitoxic
┃ .nsfw
┃ .react
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.stalkermenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PENGUNTIT* 〙
┃ .igstalk
┃ .ffstalk
┃ .mlstalk
┃ .npmstalk
┃ .ghstalk
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.randphotomenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU GAMBAR ACAK* 〙
┃ .aesthetic
┃ .coffee
┃ .wikimedia
┃ .wallpaper
┃ .art
┃ .bts
┃ .woof
┃ .meow
┃ .lizard
┃ .cosplay
┃ .hacker
┃ .cyber
┃ .gamewallpaper
┃ .islamic
┃ .jennie
┃ .jiso
┃ .satanic
┃ .justina
┃ .cartoon
┃ .pentol
┃ .cat
┃ .kpop
┃ .exo
┃ .lisa
┃ .space
┃ .car
┃ .technology
┃ .bike
┃ .shortquote
┃ .antiwork
┃ .hacking
┃ .boneka
┃ .rose
┃ .ryujin
┃ .ulzzangboy
┃ .ulzzanggirl
┃ .wallml
┃ .wallphone
┃ .mountain
┃ .goose
┃ .profilepic
┃ .couplepic
┃ .programming
┃ .pubg
┃ .blackpink
┃ .randomboy  
┃ .randomgirl
┃ .hijab  
┃ .chinese
┃ .indo
┃ .japanese
┃ .korean
┃ .malay
┃ .thai
┃ .vietnamese
┃ .paptt
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.randvideomenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU VIDIO ACAK* 〙
┃ .tiktokgirl
┃ .tiktoknukthy
┃ .tiktokkayes
┃ .tiktokpanrika
┃ .tiktoknotnot
┃ .tiktokghea
┃ .tiktoksantuy
┃ .tiktokbocil
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.textpromenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU TEXTPRO* 〙
┃ .candy 
┃ .christmas 
┃ .3dchristmas 
┃ .sparklechristmas
┃ .deepsea 
┃ .scifi 
┃ .rainbow 
┃ .waterpipe 
┃ .spooky 
┃ .pencil 
┃ .circuit 
┃ .discovery 
┃ .metalic 
┃ .fiction 
┃ .demon 
┃ .transformer 
┃ .berry 
┃ .thunder 
┃ .magma 
┃ .3dstone 
┃ .neonlight 
┃ .glitch 
┃ .harrypotter 
┃ .brokenglass 
┃ .papercut 
┃ .watercolor 
┃ .multicolor 
┃ .neondevil 
┃ .underwater 
┃ .graffitibike
┃ .snow 
┃ .cloud 
┃ .honey 
┃ .ice 
┃ .fruitjuice 
┃ .biscuit 
┃ .wood 
┃ .chocolate 
┃ .strawberry 
┃ .matrix 
┃ .blood 
┃ .dropwater 
┃ .toxic 
┃ .lava 
┃ .rock 
┃ .bloodglas 
┃ .hallowen 
┃ .darkgold 
┃ .joker 
┃ .wicker
┃ .firework 
┃ .skeleton 
┃ .blackpink 
┃ .sand 
┃ .glue 
┃ .1917 
┃ .leaves
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.photooxymenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PHOTOOXY* 〙
┃ .shadow 
┃ .write 
┃ .romantic 
┃ .burnpaper
┃ .smoke 
┃ .narutobanner 
┃ .love 
┃ .undergrass
┃ .doublelove 
┃ .coffecup
┃ .underwaterocean
┃ .smokyneon
┃ .starstext
┃ .rainboweffect
┃ .balloontext
┃ .metalliceffect
┃ .embroiderytext
┃ .flamingtext
┃ .stonetext
┃ .writeart
┃ .summertext
┃ .wolfmetaltext
┃ .nature3dtext
┃ .rosestext
┃ .naturetypography
┃ .quotesunder
┃ .shinetext
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.ephoto360menu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU EPHOTO360* 〙
┃ .glitchtext
┃ .writetext
┃ .advancedglow
┃ .typographytext
┃ .pixelglitch
┃ .neonglitch
┃ .flagtext
┃ .flag3dtext
┃ .deletingtext
┃ .blackpinkstyle
┃ .glowingtext
┃ .underwatertext
┃ .logomaker
┃ .cartoonstyle
┃ .papercutstyle
┃ .watercolortext
┃ .effectclouds
┃ .blackpinklogo
┃ .gradienttext
┃ .summerbeach
┃ .luxurygold
┃ .multicoloredneon
┃ .sandsummer
┃ .galaxywallpaper
┃ .1917style
┃ .makingneon
┃ .royaltext
┃ .freecreate
┃ .galaxystyle
┃ .lighteffects
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.nsfwmenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU NSFW* 〙
┃ .hentai
┃ .gifhentai
┃ .gifblowjob
┃ .hentaivid
┃ .hneko
┃ .nwaifu
┃ .animespank
┃ .trap
┃ .gasm
┃ .ahegao
┃ .ass
┃ .bdsm
┃ .blowjob
┃ .cuckold
┃ .cum
┃ .milf
┃ .eba
┃ .ero
┃ .femdom
┃ .foot
┃ .gangbang
┃ .glasses
┃ .jahy
┃ .masturbation
┃ .manga
┃ .neko-hentai
┃ .neko-hentai2
┃ .nsfwloli
┃ .orgy
┃ .panties 
┃ .pussy
┃ .tentacles
┃ .thights
┃ .yuri
┃ .zettai
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.infomenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU INFORMASI* 〙
┃ .ping
┃ .menu
┃ .listpem
┃ .liststicker
┃ .listimage
┃ .listvideo
┃ .listvn
┃ .listbadword
┃ .listpc
┃ .listgc
┃ .owner
┃ .rentbot
┃ .listrentbot
┃ .donate
┃ .quoted
┃ .runtime
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.toolsmenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU ALAT* 〙
┃ .cekapikey
┃ .friend
┃ .obfuscate
┃ .styletext
┃ .fliptext
┃ .tts
┃ .say
┃ .togif
┃ .toqr
┃ .tinyurl
┃ .tinyurl
┃ .tovn
┃ .toaudio
┃ .tomp3
┃ .tomp4🅕
┃ .toimg
┃ .toonce
┃ .sticker
┃ .take
┃ .emoji
┃ .volume
┃ .ebinary
┃ .dbinary
┃ .ssweb
┃ .define
┃ .confess
┃ .leave
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.funmenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU PERMAINAN* 〙
┃ .truth
┃ .dare
┃ .couple
┃ .soulmate
┃ .stupidcheck
┃ .handsomecheck
┃ .uncleancheck
┃ .hotcheck
┃ .smartcheck
┃ .greatcheck
┃ .evilcheck
┃ .dogcheck
┃ .coolcheck
┃ .waifucheck
┃ .awesomecheck
┃ .gaycheck
┃ .cutecheck
┃ .lesbiancheck
┃ .hornycheck
┃ .prettycheck
┃ .lovelycheck
┃ .uglycheck
┃ .cekmati
┃ .halah
┃ .huluh
┃ .hilih
┃ .holoh
┃ .heleh
┃ .wangy
┃ .hot
┃ .sexy
┃ .kind
┃ .idiot
┃ .handsome
┃ .beautiful
┃ .cute
┃ .pretty
┃ .lesbian
┃ .noob
┃ .bastard
┃ .foolish
┃ .nerd
┃ .asshole
┃ .gay
┃ .smart
┃ .stubble
┃ .doggo
┃ .horny
┃ .cunt
┃ .wibu
┃ .noobra
┃ .nibba
┃ .nibbi
┃ .comrade
┃ .mumu
┃ .rascal
┃ .scumbag 
┃ .nuts
┃ .fagot
┃ .scoundrel
┃ .ditch
┃ .dope
┃ .gucci
┃ .lit
┃ .dumbass
┃ .crackhead
┃ .mf
┃ .motherfucker
┃ .sucker
┃ .fuckboy
┃ .playboy
┃ .fuckgirl
┃ .playgirl
┃ .quotes
┃ .bisakah
┃ .saya
┃ .kapankah
┃ .dimanakah
┃ .apakah
┃ .bagaimanakah
┃ .rate
┃ .checkme
┃ .squirrel
┃ .horny
┗━━━━━━━━━━━━━━━━━━━༓
`}

global.islammenu = (prefix) => {
return `
Nama Bot: *Astreya-MD*
Pemilik Bot: *Keizha*
Versi Bot: *1.0*
Rilis Pada: *21/06/2023*
Jumlah Fitur: *512*


┏━━〘 *MENU ISLAM* 〙
┃ .juzamma
┃ .hadis
┗━━━━━━━━━━━━━━━━━━━༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})