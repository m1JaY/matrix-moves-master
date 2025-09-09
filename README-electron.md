# Electron Desktop App

## Разработка
```bash
# Запуск в режиме разработки (веб + electron)
npm run electron:dev

# Запуск только веб-версии
npm run dev
```

## Сборка
```bash
# Сборка веб-приложения
npm run build

# Сборка desktop приложения для текущей платформы
npm run electron:build

# Сборка для всех платформ
npm run electron:build:all
```

## Команды для package.json
Добавьте эти скрипты в package.json:

```json
{
  "main": "electron/main.js",
  "scripts": {
    "electron": "electron .",
    "electron:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:8080 && electron .\"",
    "electron:build": "npm run build && electron-builder",
    "electron:build:all": "npm run build && electron-builder --mac --win --linux"
  }
}
```

## Требования
- Node.js
- Для macOS сборки: macOS + Xcode
- Для Windows сборки: Windows или macOS/Linux с wine
- Для Linux сборки: Linux

## Иконки
Поместите иконки в папку `build/`:
- `icon.ico` (Windows)
- `icon.icns` (macOS) 
- `icon.png` (Linux)