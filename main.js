const electron = require('electron')
const {app, BrowserWindow} = electron;

const path = require('path');
const url = require('url');

app.on('ready', function(){
	let win = new BrowserWindow({
		width : 800, 
		height : 600
	});
	win.loadURL(url.format({
    	pathname: path.join(__dirname, 'views/base/index.html'),
		protocol: 'file:',
		slashes: true
	}))

	win.webContents.openDevTools()

  // Emitted when the window is closed.
	win.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null
	});
});
