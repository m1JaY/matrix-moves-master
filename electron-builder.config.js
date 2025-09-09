/**
 * @type {import('electron-builder').Configuration}
 */
module.exports = {
  appId: 'com.matrixmaster.app',
  productName: 'Matrix Master',
  directories: {
    output: 'release',
    app: '.',
    buildResources: 'build'
  },
  files: [
    'dist/**/*',
    'electron/**/*',
    'node_modules/**/*'
  ],
  mac: {
    icon: 'build/icon.icns',
    target: [
      {
        target: 'dmg',
        arch: ['x64', 'arm64']
      }
    ]
  },
  win: {
    icon: 'build/icon.ico',
    target: [
      {
        target: 'nsis',
        arch: ['x64']
      }
    ]
  },
  linux: {
    icon: 'build/icon.png',
    target: [
      {
        target: 'AppImage',
        arch: ['x64']
      },
      {
        target: 'deb',
        arch: ['x64']
      }
    ]
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true
  }
};