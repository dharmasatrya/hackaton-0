function panggil(data) {
    console.log('masuk');
  for (let i = 0; i < data.length; i++) {
    // create div;
    const tagA = document.createElement('a')
    const tagLi = document.createElement('li')
    const tagImg = document.createElement('img')
    const tagP = document.createElement('p')
    tagA.setAttribute("id", data[i].namaBarang);
    tagImg.setAttribute('src', data[i].namaBarang + '.jpg')
    tagImg.setAttribute('width', '120px')
    tagP.innerHTML = 'Rp.' + String(data[i].harga)
    tagA.appendChild(tagImg)
    tagA.appendChild(tagP)
    tagLi.appendChild(tagA)
    const tagUl = document.getElementById('steam')
    tagUl.appendChild(tagLi)
  }
}
let products= [
    {namaBarang : 'steamWallet45rb' , harga: 45000},
    {namaBarang : 'steamWallet60rb' , harga: 60000},
    {namaBarang : 'steamWallet90rb' , harga: 90000},
    {namaBarang : 'steamWallet120rb' , harga: 120000},
    {namaBarang : 'steamWallet250rb' , harga: 250000}
]
panggil(products)
