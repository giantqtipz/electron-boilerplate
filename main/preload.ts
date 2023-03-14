const { contextBridge, ipcRenderer } = require('electron');

export type Channels = 'testMessage';

const electronHandler = {
  testMessage: (channel: string, arg: unknown) =>
    ipcRenderer.send(channel, arg),
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
