// get modal element
let modal = document.getElementById('simpleModal');

//get modal open button
let modalBtn = document.getElementById('modalBtn');

//get modal close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal)

//listen for close click
closeBtn.addEventListener('click', closeModal)

//listen for outside click
window.addEventListener('click', clickOutside)

//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close when clicked outside
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// utk masukin ke kerangjang
let checkout = []
function tambahKeKeranjang(event) {
    // console.log(event.target.getAttribute(git 'index-product'));
    let index = Number(event.target.getAttribute('index-product'))
    // checkout.push(products[index])
    // console.log(products[index]);
    let obj = {namaBarang : products[index].namaBarang, harga: products[index].harga, quantity: 1} 
    checkout.push(obj)
    console.log(checkout);
}

function panggil(data) {
  for (let i = 0; i < data.length; i++) {
    // create div;
    const tagButton = document.createElement('button')
    tagButton.innerHTML = 'beli'
    tagButton.addEventListener("click", tambahKeKeranjang);
    const tagA = document.createElement('a')
    const tagLi = document.createElement('li')
    const tagImg = document.createElement('img')
    const tagP = document.createElement('p')
    tagA.setAttribute("id", data[i].namaBarang);
    tagImg.setAttribute('src', data[i].namaBarang + '.jpg')
    tagButton.setAttribute('index-product', i)
    tagImg.setAttribute('width', '120px')
    tagP.innerHTML = 'Rp.' + String(data[i].harga)
    tagA.appendChild(tagImg)
    tagA.appendChild(tagP)
    tagLi.appendChild(tagA)
    tagLi.appendChild(tagButton)
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

