import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "ðSelect Your Age Here !",
	rows: [
	    {title: "ðRandom Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ðO L D",
	rows: [
	    {title: "ð¸30â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.30 '},
	    {title: "ð29â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.29 '},
	    {title: "ð¸28â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.28 '},
	{title: "ð27â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.27 '},
	{title: "ð¸26â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.26 '},
	{title: "ð25â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.25 '},
	{title: "ð¸24â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.24 '},
	{title: "ð23â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.23 '},
	{title: "ð¸22â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.22 '},
	{title: "ð21â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "ðY O U N G",
	rows: [
	    {title: "ð¸20â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.20 '},
	    {title: "ð19â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.19 '},
	    {title: "ð¸18â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.18 '},
	{title: "ð17â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.17 '},
	{title: "ð¸16â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.16 '},
	{title: "ð15â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.15 '},
	{title: "ð¸14â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.14 '},
	{title: "ð13â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.13 '},
	{title: "ð¸12â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.12 '},
	{title: "ð11â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.11 '},
	{title: "ð¸10â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.10 '},
	{title: "ð9â¢ Years ÊÄ­É", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `ââºPlease select your age at the bottom button...`,
  footer: `â *Êá´á´Ê É´á´á´á´:* ${conn.getName(m.sender)}\n<â>  BOT PRIVATE\nâ á´Êá´á´á´á´ ÊÊ Virzz `,
  title: "â¢ââââã Registration ãâââââ¢",
  buttonText: "à´ Register à´",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `ð®Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (ã-`ÏÂ´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ââââ ã *Successful Registration* ãâââ
  .
â­ââã *á´sá´Ês* ã
ââ¸ *sá´á´á´á´s:* âï¸ sá´á´á´á´ssÒá´Ê
ââ¸ *É´á´á´á´:* ${name}
ââ¸ *á´É¢á´:* ${age} Êá´á´Ês
ââ¸ *sÉ´:* ${sn}
â°ââââââââââà¹

Donasinya kakk
`
  let buttonMessage= {
'document':{'url':'https://youtu.be/pwLZpdfO8AU'},
'mimetype':global.ddocx,
'fileName':'â¢ââââã Registration ãâââââ¢',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://telegra.ph/file/7dd9e7f55e9751dedec32.jpg',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/7dd9e7f55e9751dedec32.jpg')).buffer(),
'sourceUrl':'https://youtu.be/-'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'â£ M e n u â£'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'ðH a l l o'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
