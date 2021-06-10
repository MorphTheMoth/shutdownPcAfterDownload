const si = require('systeminformation');
require('fs').writeFileSync('shutdown.bat', 'shutdown.exe /s /t %1');

const delay = 1000 * 60 * 8;    //(milliseconds)    delay between checks
const megabytePerSec = 0.5;     //(megabytes)       downloading less than this megabytes per second will result in pc shutting down  
const shutdownDelay = 60 * 7;   //(seconds)         delay before shutting down the pc, useful to make sure that all the files are saved correctly



async function main(){

    let net = await si.networkStats(await si.networkInterfaceDefault());
    if (!net[0].rx_sec) {
        console.log(`${new Date().getHours()}:${new Date().getMinutes()}\nchecking every ${delay / 1000} seconds\nif downloaded bytes per second are less than ${megabytePerSec}\nafter that, it waits ${shutdownDelay} seconds before shutting down the computer\n\n`);
        return;
    }

    console.log(`${new Date().getHours()}:${new Date().getMinutes()}   megabytePerSec = ${net[0].rx_sec / 1024 / 1024}`);

    if (net[0].rx_sec / 1024 / 1024 < megabytePerSec)
        shutdown();
}

async function shutdown() {
    require('child_process').exec('cmd /c start "" cmd /c shutdown.bat ' + shutdownDelay);
}

/*
every -delay- milliseconds it checks if the
bytes received per second are less than -bytePerSec-
*/
main();
setInterval(main, delay);