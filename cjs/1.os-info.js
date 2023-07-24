// Modulos nativos

const os = require('node:os')

console.log("Informacion del SO: ")
console.log("-----------------")
console.log("Nombre del sistema operativo", os.platform())
console.log("Version del sistema operativo",os.release())
console.log("Arquitectura", os.arch())
console.log("CPUs", os.cpus())
console.log("Memoria RAM libre", os.freemem() / 1024 / 1024)
console.log("Memoria RAM total", os.totalmem() /1024 / 1024)
console.log("UPTIME" , os.uptime() / 60 / 60 / 24 + " Days")
console.log("User info" , os.userInfo())