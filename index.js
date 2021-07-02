function steamWallet(data) {
    const barang = [
        {namaBarang : 'steamWallet45k' , harga: 45000},
        {namaBarang : 'steamWallet60k' , harga: 60000},
        {namaBarang : 'steamWallet90k' , harga: 90000},
        {namaBarang : 'steamWallet120k' , harga: 120000},
        {namaBarang : 'steamWallet250k' , harga: 250000}
    ]
    if (data.length === 0) {
        return `MAS/MBA MAU BELANJA ATAU CUMA MAU LIAT-LIAT AJANIH? BELUM GAJIAN YAA?? xD`
    } else {
        let total = []
        for (let i = 0; i < data.length; i++) {
            let totalSementara = 0
            for (let j = 0; j < barang.length; j++) {
                if (data[i].barang === barang[i].namaBarang) {
                    totalSementara = data[i].qty * barang[i].harga
                }
            }
            total.push(totalSementara)
        }
        for (let i = 0; i < total.length; i++) {
            if (total.length === 1) total = total[i]
            else if (total.length === 2) total = total[i] + total[i+1]
            else if (total.length === 3) total = total[i] + total[i+1] + total[i+2]
            else if (total.length === 4) total = total[i] + total[i+1] + total[i+2] + total[i+3]
            else if (total.length === 5) total = total[i] + total[i+1] + total[i+2] + total[i+3] + total[i+4]
        }
        return `total harga barang yang harus kamu bayar yaitu sebesar ${total}`
    }
}
let daftarBelanja = [
    {barang: 'steamWallet45k', qty: 1},
    {barang: 'steamWallet60k', qty: 1},
    {barang: 'steamWallet90k', qty: 1},
    {barang: 'steamWallet120k', qty: 1},
    {barang: 'steamWallet250k', qty: 1}
]
console.log(steamWallet([])); // MAS/MBA MAU BELANJA ATAU CUMA MAU LIAT-LIAT AJANIH? BELUM GAJIAN YAA?? xD
console.log(steamWallet(daftarBelanja))//total harga barang yang harus kamu bayar yaitu sebesar 565000
