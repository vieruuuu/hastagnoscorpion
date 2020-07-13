const { app, BrowserWindow } = require("electron");

function createWindow() {
  // fac fereastra principala
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // aicea loadez indexul
  mainWindow.loadFile("./src/www/index.html");

  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow();

  // cred ca ii pt macos ca acolo are cv api cu activate
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// cand se inchid toate ferestrele
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // inchide programul daca is toate inchise
    app.quit();
  }
});
