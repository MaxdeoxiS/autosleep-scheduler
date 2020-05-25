const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const env = process.env.NODE_ENV || 'DEV';
let url
if (env === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  let window = new BrowserWindow({
      width: 800,
      height: 800,
      frame: false,
      webPreferences: {
        nodeIntegration: true
    }
    })
  window.loadURL(url)
  window.removeMenu()
  window.setResizable(false)
  window.setMovable(true)
  window.webContents.openDevTools()
})