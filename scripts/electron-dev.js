const { spawn } = require('child_process');
const { createServer } = require('vite');

async function startDev() {
  // Start Vite dev server
  const server = await createServer({
    // Vite config options
  });
  
  await server.listen(8080);
  console.log('Vite dev server started on http://localhost:8080');

  // Wait for the server to be ready, then start Electron
  setTimeout(() => {
    const electronProcess = spawn('electron', ['electron/main.js'], {
      env: { ...process.env, NODE_ENV: 'development' },
      stdio: 'inherit'
    });

    electronProcess.on('close', () => {
      server.close();
      process.exit();
    });
  }, 2000);
}

startDev().catch(console.error);