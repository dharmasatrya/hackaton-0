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

  tampilkan()

  //tombol kurang tambah


// quantity.addEventListener('oninput', nambahNgurang);

//function to close when clicked outside
function nambahNgurang(id,){
    let quantity = document.getElementById(`id${id}`)
    let price = document.getElementById(`price${id}`)
    let hargaTotal = document.getElementById(`total${id}`)
    
    let totalSemua = document.getElementById(`total${id}`)

    hargaTotal.textContent = quantity.value * price.value;
    totalSemua.textContent = hargaTotal.textContent
}