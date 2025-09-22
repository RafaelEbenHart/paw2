const express = require('express');
const app = express();
const PORT = 3000;

// Tambahkan livereload
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

// Middleware untuk inject livereload script ke HTML
app.use(connectLivereload());

// Setup livereload server untuk memantau folder 'public'
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public");

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

// 1. Layani File Statis dari Folder 'public'
app.use(express.static('public'));

// 2. (Opsional) Rute Tambahan
app.get('/about', (req, res) => {
    res.send("<h1>Tentang Kami</h1><p>Halaman tambahan dengan HTML langsung</p>");
});

// 3. Jalankan Server
app.listen(PORT, () => {
    console.log(`Server Berjalan di http://localhost:${PORT}`);
});