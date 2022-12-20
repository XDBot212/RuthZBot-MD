//Credits Jangan Dihapus
//Thanks For KannaChan & Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `● Syarat & ketentuan :

「 *RULES* 」
	  「 *INDONESIAN* 」

Bot ini merupakan program open-source yang ditulis menggunakan Javascript.

Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Bot tidak menyimpan data anda di server kami.
- Bot tidak *bertanggung jawab* atas sticker yang anda buat dari bot ini serta video, gambar, text maupun data lainnya yang anda dapatkan dari bot ini.
- Bot *tidak boleh* digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
 • *Seks / masturbasi*
 • *Perilaku adiktif yang merugikan*
 • *Kejahatan*
 • *Kekerasan*
 • *Ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan*

- Adapun larangan bot itu sendiri sebagai berikut:
 • Dilarang *KERAS* menanyakan agama bot maupun owner
 • Dilarang *KERAS* menanyakan alamat bot maupun owner
 • Dilarang *KERAS* menanyakan status hubungan bot maupun owner
 • Dilarang *KERAS* menghina bot maupun owner dengan maksud apapun
 • Dilarang *KERAS* berkata kasar pada bot dengan maksud apapun
 • Dilarang melakukan *SPAMMING* pada bot dengan maksud apapun
 • Jika bot tidak respon itu *ARTINYA* bot sedang melakukan update
 • Dilarang melakukan Video call pada bot dengan maksud apapun
 • Dilarang melakukan Call pada bot dengan maksud apapun
 • Dilarang untuk melakukan abuse Command bot dengan maksud apapun
 • Melanggar larangan di atas? anda akan terkena :
 • Soft Block / Trial Block selama 1-3 Hari
 • Permanent Block
 • Teguran Keras.

「 *RULES* 」
「 *ENGLISH* 」

This bot is an open-source program written using Javascript.

By using this bot, you agree to the following Terms and Conditions:
- Bot do not store your data on our servers.
- Bot is not *responsible* for the stickers you make from this bot and the videos, images, text or other data you get from this bot.
- Bot *should not* be used for services aimed at/contributing to:
 • *sex / masturbation*
 • *addictive harmful behavior*
 • *crime*
 • *violence*
 • *hate speech or discrimination based on age, gender, gender identity, race, sexuality, religion, nationality*

- The ban on the bot itself is as follows:
 • It is strictly *forbidden* to ask about the religion of the bot and the owner
 • It is strictly *forbidden* to ask for the address of the bot or owner
 • It is strictly *forbidden* to ask about the relationship status of bots and owners
 • It is strictly *forbidden* to insult bot or owners for any purpose
 • It is strictly *forbidden* to say rudely with any purpose
 • Spamming bots for any purpose is prohibited
 • *Do not* make video call to bots for any purpose
 • *Do not* make call to bot for any purpose
 • It is forbidden to *abuse* Command bot for any purpose
 • Violating the prohibition above? you will be exposed to:
 • Soft Block / Trial Block for 1-3 Days
 • Permanent Block
 • Warnings
`
}
handler.help = ['rules']
handler.tags = ['info']
handler.command =  /^(rules|rulesbot)$/i

export default handler
