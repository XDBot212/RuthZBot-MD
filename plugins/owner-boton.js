let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan RuthZBotラ 🤖* ')
}


handler.tags = ['grouo']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true
handler.owner = true

export default handler
