import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text) throw `*\`╭━❰❰ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗 ❱❱━╮\`*\n> 𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒉𝒂𝒃𝒍𝒂𝒓 𝒄𝒐𝒏 𝒆𝒍 𝒃𝒐𝒕.`
  try {
  await conn.sendPresenceUpdate('composing', m.chat)
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es")
  let resSimi = await api.json()
  m.reply(resSimi.success)      
  } catch {
  try {
  if (text.includes('Hola')) text = text.replace('Hola', 'Hello')
  if (text.includes('hola')) text = text.replace('hola', 'Hello')
  if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO')    
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
  let resu = await reis.json()  
  let nama = m.pushName || '1'
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
  let res = await api.json()
  let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
  let resu2 = await reis2.json()
  m.reply(resu2[0][0][0])      
  } catch {  
  let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
  let resuuu = await reisss.json()      
  let res222 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}`)  
  let json222 = await res222.json()
  let resulttt = json222.result
  let lolll = await translate(`${resulttt}`, { to: 'es', autoCorrect: true })
  m.reply(lolll.text)      
  }}
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'preg', 'pregunta'] 
export default handler
