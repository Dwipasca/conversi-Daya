
console.log('app.js isActive');

// conector
const divAc = document.querySelector('.ac');
let buttonAddAC = document.querySelector('#btn-ac');
let buttonAddTV = document.querySelector('#btn-tv');

class Daya {

    constructor(section) {
        this.sumSection = [];
        this.section = document.querySelector("."+section);
        this.createEl(section);
    }

    createEl(section) {

        let divContainer = document.createElement('div');
        divContainer.classList.add('input-group', 'mt-3');

        let inputDaya = document.createElement('input');
        inputDaya.classList.add('form-control', section);
        inputDaya.setAttribute('type', 'number');

        
        let divButtonDeleteDaya = document.createElement('div');
        divButtonDeleteDaya.classList.add('input-group-append');
        
        let buttonDeleteDaya = document.createElement('button');
        buttonDeleteDaya.innerHTML="x";
        buttonDeleteDaya.classList.add('btn', 'btn-danger');
        
        divButtonDeleteDaya.appendChild(buttonDeleteDaya);
        
        divContainer.appendChild(inputDaya);
        divContainer.appendChild(divButtonDeleteDaya);

        // let divSection = document.querySelector(section);
        // divSection.appendChild(divContainer);
        this.section.appendChild(divContainer);


        // inputDaya.addEventListener('keyup', () => this.sumProsesSection( parseFloat(inputDaya.value) ));


        buttonDeleteDaya.addEventListener('click', () => this.deleteEl(divContainer));
    }

    deleteEl(input) {
        this.section.removeChild(input);
    }

    sumProsesSection(value){
        
        value += value * 0.7457 * 1000;
        console.log(value);
    }



}

$(document).on('keyup', ".ac",function () {
    let totalAC = 0
    // pertambahan akan terus dilakukan sebanyak, banyaknya inputan
    $('.ac').each(function(){
        totalAC +=  parseFloat($(this).val())* 0.7457 * 1000;
    })  
    
    // tampilkan hasil pertambahan
    $('#hasil-ac').text(`Total : ${totalAC.toFixed(2)} Watt`)

});


buttonAddAC.addEventListener('click', function() {

    new Daya('ac');

})

buttonAddTV.addEventListener('click', function() {

    // alert('dada');
    new Daya('tv');

})
