const {app,BrowserWindow} = require("electron")

const path = require('path');
const url = require('url');
//Global variable to keep window open
let win;

function createWindow(){
    win = new BrowserWindow({icon:__dirname + '/img/ICON.png'});
    //load index.html page
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:' ,
        slashes: true
    }));

    //Open devtools (only in development)
    //win.webContents.openDevTools();
    
    //When we close the window
    win.on('closed',()=>{
        win = null;
    });
}

//When app is ready ,create we run createWindow
app.on('ready',createWindow);

//Quit when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !=='darwin'){ //goes when windows is operating system
        app.quit();
    }
});