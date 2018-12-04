// client starter code
const net = require('net')

const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt('~: ')

const HOST = '127.0.0.1'
const PORT = 3000
const client = new net.Socket()

client.connect(PORT, HOST, () => {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT)
    rl.prompt()
    rl.on('line', (line) => {
        if (line === "close") {
            rl.close()
        } else {
            client.write(line)
            rl.prompt()
        }
    }).on('close',function(){
        process.exit(0)
    })
})

client.on('data', (data) => {
    console.log('DATA: ' + data)
})

client.on('close', () => console.log('Connection closed'))