// Harga provider (harga asli dari API)
const hargaProvider = {
  "30 UC": 6630,
  "60 UC": 13289,
  "300+25 UC": 66390,
  "600+60 UC": 132750,
  "1500+300 UC": 331890,
  "3000+850 UC": 663750,
  "6000+2100 UC": 1327500
};

// Fungsi hitung harga jual dengan markup 2%
function hitungHargaJual(hargaProvider) {
  return Math.ceil(hargaProvider * 1.02); // tambah 2%, pembulatan ke atas
}

// Contoh menampilkan harga jual semua paket
for (const paket in hargaProvider) {
  const hargaAsli = hargaProvider[paket];
  const hargaJual = hitungHargaJual(hargaAsli);
  console.log(`${paket} - Harga Provider: Rp${hargaAsli.toLocaleString()} -> Harga Jual: Rp${hargaJual.toLocaleString()}`);
}
