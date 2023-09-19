import path from 'node:path'
import { BrowserWindow, Menu, Tray } from 'electron'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])
  tray.setContextMenu(contextMenu)
}
