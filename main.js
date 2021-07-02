// get modal element
let modal = document.getElementById('simpleModal');

//get modal open button
let modalBtn = document.getElementById('modalBtn');

//get modal close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//get modal body
let modalBody = document.getElementById('modal-body')

//listen for open click
modalBtn.addEventListener('click', openModal)

//listen for close click
closeBtn.addEventListener('click', closeModal)

//listen for outside click
window.addEventListener('click', clickOutside)

//function to open modal
function openModal(){
    modal.style.display = 'block';
    // let paragraf = document.createElement('p');
    // paragraf.innerText = "test";
    // modalBody.appendChild(paragraf);
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close when clicked outside
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
        popup1.style.display = "none";
    }
}

//nampilin di html


const daftarBelanja = [
    {nama: "steam wallet 5$", jumlah: 2, harga: 50000},
    {nama: "steam wallet 10$", jumlah: 1, harga: 10000},
]

//selector
const table = document.querySelector('#listBelanjaan');

function tampilkan() {
    // get list belanjaan
    let belanjaanObj = daftarBelanja;
    // put all task to html
    for (let i = 0; i < belanjaanObj.length; i++) {

        // create table row
        const tr = document.createElement('tr');
        tr.id = `tr${i}`
        table.appendChild(tr)

        //create td gambar
        const tdGambar = document.createElement('td');
        tr.appendChild(tdGambar)

        const divGambar1 = document.createElement('div');
        divGambar1.classList.add("product-img")
        tdGambar.appendChild(divGambar1)

        const divGambar2 = document.createElement('div');
        divGambar2.classList.add("img-product")
        divGambar1.appendChild(divGambar2)

        //create td nama barang
        const tdNama = document.createElement('td');
        tr.appendChild(tdNama);

        const nama = document.createElement('p')
        nama.innerText = belanjaanObj[i].nama
        tdNama.appendChild(nama)

        //create td value
        const tdValue = document.createElement('td');
        tr.appendChild(tdValue);

        const divValue = document.createElement('td');
        divValue.classList.add("button-container");
        tdValue.appendChild(divValue);

        const quantity = document.createElement('input');
        quantity.id = `id${i}`
        quantity.setAttribute("onclick", `nambahNgurang(${i})`);
        quantity.classList.add("qty-form-control")
        quantity.type = "number"
        quantity.min = 0
        quantity.value = belanjaanObj[i].jumlah
        divValue.appendChild(quantity)

        //tombol hapus
        const hapus = document.createElement('button')
        hapus.id = "hapus"
        hapus.innerText = "hapus barang"
        hapus.setAttribute("onclick", `hapus(${i})`)
        divValue.appendChild(hapus)
        
       //crete td price
       const tdPrice = document.createElement('td');
       tr.appendChild(tdPrice);

       const inputPrice = document.createElement('p');
       inputPrice.id = `price${i}`;
       inputPrice.value = belanjaanObj[i].harga
       inputPrice.innerHTML = belanjaanObj[i].harga
       tdPrice.appendChild(inputPrice)

       //create td total
      
       const tdTotal = document.createElement('td');
       tdTotal.classList.add("tdTotal1")
       tdTotal.innerText = "IDR"
       tr.appendChild(tdTotal);

       const spanTotal = document.createElement('span')
       spanTotal.id = `total${i}`;
       spanTotal.classList.add("amount");
       spanTotal.innerHTML = 0
       tdTotal.appendChild(spanTotal)
    }

}

let voucherCode = [
    {
        namaVoucher: `Steam Wallet 5$`,
        harga: 50000,
        code: ['GX257TBQ3Q3AC9M','83JFDV6DSK37L5A','99SLA9V7SK3MAIV','8AKS7FJV63LV0AS','7DHF6V03OFKV7SF']
    },
    {
        namaVoucher: `Steam Wallet 10$`,
        harga: 120000,
        code: ['M3OA9C0AKS7V2Z2','F8SKVPQ6VD48KZC']
    }
]

function kodeVoucher(namaVoucher, jumlah){
    let totalHarga = 0
    let daftarBelanja = []
    for(let i = 0; i < voucherCode.length; i++){
        let obj = {
            nama: voucherCode[i].namaVoucher,
            jumlah: jumlah,
            harga
        }
        for(let j = 0; j < voucherCode[i].code.length; j++){
            if(jumlah > 0){
                totalHarga = voucherCode[i].harga * jumlah
                obj.harga = totalHarga
                obj.code.push(voucherCode[i].code[j])
            }
        }
        daftarBelanja.push(obj)
    }
    return daftarBelanja
}

let checkout = document.querySelector('#checkout')
checkout.addEventListener('click', function kodeVoucher(){
    alert(`nama: steam
    jumlah: 1
    harga: 5000
    code:`)
})
console.log(checkout)

  }

  tampilkan()

// var baru buat keranjang


let keranjang = daftarBelanja

function nambahNgurang(id,){
    let quantity = document.getElementById(`id${id}`)
    let price = document.getElementById(`price${id}`)
    let hargaTotal = document.getElementById(`total${id}`)

    keranjang[id].jumlah = quantity.value

    hargaTotal.textContent = quantity.value * price.value;

    keranjang[id].total = hargaTotal.textContent

    let totalSemua = document.getElementById('totalSemua')
    let kalkulasiTotal = document.querySelectorAll(".amount")

    let jumlah = 0
    for(let a = 0; a < keranjang.length; a++){
        jumlah += +keranjang[a].total
    }

    totalSemua.innerHTML = jumlah

    //update keranjang
    console.log(keranjang)    
}

function hapus(id){
    document.getElementById(`tr${id}`).remove();
    keranjang.splice(id , 1)
    console.log(keranjang)
}

let checkoutBtn = document.getElementById("checkout")

checkoutBtn.addEventListener('click', checkout)

function checkout(){
    document.getElementById("popup-1").classList.toggle("active");
    modal.style.display = 'none'
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
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
