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