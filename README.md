<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>PRAASTORE - Top Up PUBG, ML, Free Fire</title>
<style>
  body {
    background: linear-gradient(135deg, #0b3d91, #0f1a2f);
    color: #eee;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0 16px 40px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  header {
    background-color: rgba(5, 25, 70, 0.8);
    padding: 20px 20px;
    text-align: center;
    margin-bottom: 28px;
    border-radius: 12px;
    box-shadow: 0 0 12px #0b3d91;
  }
  header h1 {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1.7px;
    color: #a9d1ff;
    text-shadow: 0 0 6px #4a90e2;
  }
  header p {
    margin: 6px 0 0;
    font-size: 15px;
    color: #c5d9ffcc;
  }
  .card {
    background-color: rgba(15, 40, 85, 0.85);
    padding: 26px 24px;
    border-radius: 14px;
    margin-bottom: 30px;
    box-shadow: 0 0 20px #0b3d91bb;
  }
  .card h2 {
    margin-top: 0;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #a3c7ff;
    text-shadow: 0 0 5px #3469d9;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #c1d9ffcc;
  }
  select, input[type="text"], input[type="email"] {
    width: 100%;
    padding: 12px 14px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    background-color: #2a3d70;
    color: #dbe9ff;
    margin-bottom: 20px;
    box-sizing: border-box;
    box-shadow: inset 0 0 8px #1f2f5e;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  select option {
    background-color: #2a3d70;
    color: #dbe9ff;
  }
  select:hover, input[type="text"]:hover, input[type="email"]:hover,
  select:focus, input[type="text"]:focus, input[type="email"]:focus {
    background-color: #3959b0;
    box-shadow: inset 0 0 12px #5a7cde;
    outline: none;
  }
  button {
    width: 100%;
    background: linear-gradient(90deg, #007aff, #0046c3);
    border: none;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 14px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 6px 12px #0046c3aa;
    transition: background 0.4s ease, box-shadow 0.4s ease;
  }
  button:hover {
    background: linear-gradient(90deg, #3399ff, #0060e3);
    box-shadow: 0 8px 16px #1a69e3cc;
  }
  .harga-jual {
    font-weight: 700;
    font-size: 18px;
    color: #90d8ff;
    margin-bottom: 16px;
    min-height: 26px;
    text-shadow: 0 0 6px #46a1ffaa;
  }
</style>
</head>
<body>

<header>
  <h1>PRAA STORE</h1>
  <p>Top Up PUBG, ML, dan Free Fire Termurah & Terpercaya</p>
</header>

<div class="card">
  <h2>Form Top Up</h2>
  <form id="topupForm">
    <label for="game">Pilih Game:</label>
    <select id="game" name="game" required>
      <option value="pubg">PUBG Mobile</option>
      <option value="ml">Mobile Legends</option>
      <option value="ff">Free Fire</option>
    </select>

    <label for="userId">User ID:</label>
    <input type="text" id="userId" name="userId" placeholder="Masukkan User ID" required autocomplete="off" />

    <!-- Server untuk Mobile Legends, default hidden -->
    <div id="serverContainer" style="display:none;">
      <label for="server">Server:</label>
      <input type="text" id="server" name="server" placeholder="Masukkan Server (contoh: 2525)" autocomplete="off" />
    </div>
<!-- Tambahkan ini setelah </div> penutup form -->
<div class="card">
  <h2>Panduan Cara Top Up</h2>
  <ol style="line-height: 1.8; color: #dde9ff; padding-left: 20px;">
    <li>Pilih game yang ingin kamu top up (PUBG, ML, atau Free Fire).</li>
    <li>Masukkan <strong>User ID</strong> (dan <strong>Server</strong> khusus ML).</li>
    <li>Masukkan <strong>Email</strong> (opsional, untuk bukti pengiriman).</li>
    <li>Pilih <strong>jumlah top up</strong> dari daftar yang tersedia.</li>
    <li>Setelah itu, klik tombol <strong>Pesan via WhatsApp</strong>.</li>
    <li>Kamu akan diarahkan ke WhatsApp dengan detail pemesanan otomatis.</li>
    <li>Konfirmasi ke admin, dan lakukan pembayaran sesuai petunjuk.</li>
    <li>Proses top up akan dilakukan maksimal 5 menit setelah pembayaran.</li>
  </ol>
</div>

    <label for="email">Email (opsional):</label>
    <input type="email" id="email" name="email" placeholder="Masukkan Email" autocomplete="off" />

    <label for="paket">Jumlah Top Up:</label>
    <select id="paket" name="paket" required>
      <option value="">-- Pilih Paket --</option>
    </select>

    <div class="harga-jual" id="hargaJual"></div>

    <button type="submit">Pesan via WhatsApp</button>
  </form>
</div>

<script>
// Harga provider asli (Rp) untuk PUBG Mobile sebagai contoh
const hargaProviderPUBG = {
  "30 UC": 6630,
  "60 UC": 13289,
  "300+25 UC": 66390,
  "600+60 UC": 132750,
  "1500+300 UC": 331890,
  "3000+850 UC": 663750,
  "6000+2100 UC": 1327500
};

// Harga provider contoh ML (bisa disesuaikan)
const hargaProviderML = {
  "10 Diamond": 2500,
  "50 Diamond": 12000,
  "100 Diamond": 23000,
  "500 Diamond": 110000,
  "1000 Diamond": 215000
};

// Harga provider contoh FF (bisa disesuaikan)
const hargaProviderFF = {
  "10 Diamond": 2500,
  "50 Diamond": 12000,
  "100 Diamond": 23000,
  "500 Diamond": 110000,
  "1000 Diamond": 215000
};

const gameSelect = document.getElementById('game');
const paketSelect = document.getElementById('paket');
const hargaJualDiv = document.getElementById('hargaJual');
const serverContainer = document.getElementById('serverContainer');

function hitungHargaJual(harga) {
  return Math.ceil(harga * 1.02);
}

function formatHarga(rp) {
  return 'Rp' + rp.toLocaleString();
}

function setPaketList(game) {
  paketSelect.innerHTML = '<option value="">-- Pilih Paket --</option>';
  let hargaProvider = {};
  if(game === 'pubg') hargaProvider = hargaProviderPUBG;
  else if(game === 'ml') hargaProvider = hargaProviderML;
  else if(game === 'ff') hargaProvider = hargaProviderFF;

  for (const paket in hargaProvider) {
    paketSelect.innerHTML += `<option value="${paket}">${paket}</option>`;
  }
  hargaJualDiv.textContent = '';
}

function toggleServerInput(game) {
  if(game === 'ml') {
    serverContainer.style.display = 'block';
    document.getElementById('server').setAttribute('required', 'required');
  } else {
    serverContainer.style.display = 'none';
    document.getElementById('server').removeAttribute('required');
  }
}

// Inisialisasi paket dan server input saat load halaman
setPaketList(gameSelect.value);
toggleServerInput(gameSelect.value);

gameSelect.addEventListener('change', () => {
  setPaketList(gameSelect.value);
  toggleServerInput(gameSelect.value);
});

// Update harga jual saat paket dipilih
paketSelect.addEventListener('change', () => {
  const paket = paketSelect.value;
  if (!paket) {
    hargaJualDiv.textContent = '';
    return;
  }
  let hargaProvider = {};
  if(gameSelect.value === 'pubg') hargaProvider = hargaProviderPUBG;
  else if(gameSelect.value === 'ml') hargaProvider = hargaProviderML;
  else if(gameSelect.value === 'ff') hargaProvider = hargaProviderFF;

  const hargaAsli = hargaProvider[paket];
  if (!hargaAsli) {
    hargaJualDiv.textContent = '';
    return;
  }
  const hargaJual = hitungHargaJual(hargaAsli);
  hargaJualDiv.textContent = `Harga: ${formatHarga(hargaJual)}`;
});

document.getElementById('topupForm').addEventListener('submit', function(e){
  e.preventDefault();

  const gameText = gameSelect.options[gameSelect.selectedIndex].text;
  const gameValue = gameSelect.value;
  const userId = this.userId.value.trim();
  const email = this.email.value.trim();
  const paket = paketSelect.value;
  const server = this.server ? this.server.value.trim() : '';

  if (!userId || !paket) {
    alert('Mohon lengkapi User ID dan paket top up.');
    return;
  }
  // Jika game ML wajib isi server
  if(gameValue === 'ml' && !server) {
    alert('Mohon isi Server untuk Mobile Legends.');
    return;
  }

  let hargaProvider = {};
  if(gameValue === 'pubg') hargaProvider = hargaProviderPUBG;
  else if(gameValue === 'ml') hargaProvider = hargaProviderML;
  else if(gameValue === 'ff') hargaProvider = hargaProviderFF;

  const hargaAsli = hargaProvider[paket];
  if(!hargaAsli){
    alert('Paket tidak valid.');
    return;
  }
  const hargaJual = hitungHargaJual(hargaAsli);

  // Buat pesan WhatsApp
  let pesan = `Halo, saya ingin melakukan top up:\n`;
  pesan += `Game: ${gameText}\n`;
  pesan += `User ID: ${userId}\n`;
  if(gameValue === 'ml') pesan += `Server: ${server}\n`;
  if(email) pesan += `Email: ${email}\n`;
  pesan += `Paket: ${paket}\n`;
  pesan += `Harga: ${formatHarga(hargaJual)}\n`;
  pesan += `Terima kasih.`;

  // Encode pesan ke URL (ganti no WA dengan nomor kamu)
  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

  // Buka WhatsApp di tab baru
  window.open(waUrl, '_blank');
});
</script>

</body>
</html>
