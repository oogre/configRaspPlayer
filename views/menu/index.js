

const {remote} = require('electron');
const {Menu} = remote;
const {ipcRenderer} = require('electron');

var menu = Menu.buildFromTemplate([
	{
		label : "Electron",
		submenu : [
			{
				label : 'Prefs',
				click: function(){
					ipcRenderer.send('show-prefs', {hello:"world"});
				}
			}
		]
	}
]);

Menu.setApplicationMenu(menu);