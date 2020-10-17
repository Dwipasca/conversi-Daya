
console.log('app.js isActive');

// conector
const divAc = document.querySelector('.ac');
let buttonAddAC = document.querySelector('#btn-ac');
let buttonAddTV = document.querySelector('#btn-tv');
let buttonAddIceBox = document.querySelector('#btn-icebox');
let buttonAddPump = document.querySelector('#btn-pump');

class Daya {

    constructor(section) {
        this.arrayAC = [];
        this.arrayTV = [];
        this.arrayIceBox = [];
        this.section = document.querySelector("."+section);
        this.createEl(section);
    }

    createEl(section) {

        let divContainer = document.createElement('div');
        divContainer.classList.add('input-group', 'mt-3');

        let inputDaya = document.createElement('input');
        inputDaya.classList.add('form-control', 'input-'+section);
        inputDaya.setAttribute('type', 'number');
        inputDaya.setAttribute('value', '0');
        
        // let divButtonDeleteDaya = document.createElement('div');
        // divButtonDeleteDaya.classList.add('input-group-append');
        
        // let buttonDeleteDaya = document.createElement('button');
        // buttonDeleteDaya.innerHTML="x";
        // buttonDeleteDaya.classList.add('btn', 'btn-danger');
        
        // divButtonDeleteDaya.appendChild(buttonDeleteDaya);
        
        divContainer.appendChild(inputDaya);
        // divContainer.appendChild(divButtonDeleteDaya);

        // let divSection = document.querySelector(section);
        // divSection.appendChild(divContainer);
        this.section.appendChild(divContainer);

        // buttonDeleteDaya.addEventListener('click', () => this.deleteEl(divContainer));
    }

    deleteEl(input) {
        this.section.removeChild(input);
    }

    sumProsesSection(value){        
        // value = value * 0.7457 * 1000;
        
        this.sumSection = value * 0.7457 * 1000;

        let print = document.querySelector('#hasil-'+section);
        print.textContent = 'Hasil :'+this.sumSection;
        console.log(value);
    }

}

buttonAddAC.addEventListener('click', function() {
    new Daya('ac');
})

buttonAddTV.addEventListener('click', function() {
    new Daya('tv');
})
buttonAddIceBox.addEventListener('click', function() {
    new Daya('icebox');
})
buttonAddPump.addEventListener('click', function() {
    new Daya('pump');
})


$(document).on('keyup', ".input-ac",function () {
    let totalAC = 0
    // pertambahan akan terus dilakukan sebanyak, banyaknya inputan
    $('.input-ac').each(function(){
        totalAC +=  parseFloat($(this).val())* 0.7457 * 1000;
    })
    
    // tampilkan hasil pertambahan
    $('#hasil-ac').text(`Total : ${totalAC.toFixed(2)} Watt`)
    $('.hasil-angka-ac').text(totalAC.toFixed(2));

});

$(document).on('keyup', ".input-tv",function () {
    let totalTV = 0
    // pertambahan akan terus dilakukan sebanyak, banyaknya inputan
    $('.input-tv').each(function(){
        totalTV +=  parseFloat($(this).val());
    })  
    
    // tampilkan hasil pertambahan
    $('#hasil-tv').text(`Total : ${totalTV.toFixed(2)} Watt`)
    $('.hasil-angka-tv').text(totalTV.toFixed(2));

});

$(document).on('keyup', ".input-icebox",function () {
    let totalIcebox = 0
    // pertambahan akan terus dilakukan sebanyak, banyaknya inputan
    $('.input-icebox').each(function(){
        totalIcebox +=  parseFloat($(this).val());
    })  
    
    // tampilkan hasil pertambahan
    $('#hasil-icebox').text(`Total : ${totalIcebox.toFixed(2)} Watt`)
    $('.hasil-angka-icebox').text(totalIcebox.toFixed(2));

});

$(document).on('keyup', ".input-pump",function () {
    let totalPump = 0
    // pertambahan akan terus dilakukan sebanyak, banyaknya inputan
    $('.input-pump').each(function(){
        totalPump +=  parseFloat($(this).val());
    })  
    
    // tampilkan hasil pertambahan
    $('#hasil-pump').text(`Total : ${totalPump.toFixed(2)} Watt`)
    $('.hasil-angka-pump').text(totalPump.toFixed(2));

});

let btnDayaDecision = document.querySelector('.btn-info');
btnDayaDecision.addEventListener('click', function(){
    let totalDayaAC = $('.hasil-angka-ac').text();
    let totalDayaTV = $('.hasil-angka-tv').text();
    let totalDayaIcebox = $('.hasil-angka-icebox').text();
    let totalDayaPump = $('.hasil-angka-pump').text();
    
    let sum = parseFloat(totalDayaAC) + parseFloat(totalDayaTV) + parseFloat(totalDayaIcebox) + parseFloat(totalDayaPump);
    let printVA = '';
    
    if (sum <= 2200){
        printVA = '2.200';
    } else if( sum <= 3500){
        printVA = '3.500';
    } else if (sum <= 4400){
        printVA = '4.400';
    } else if (sum >= 5000){
        printVA = '5.000';
    }

    $('.allHasil').text(printVA+' VA');
    console.log(printVA);

});