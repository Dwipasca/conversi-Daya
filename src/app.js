
console.log('app.js isActive');

// conector
const divAc = document.querySelector('.ac');
let buttonAddAC = document.querySelector('#btn-ac');
let buttonAddTV = document.querySelector('#btn-tv');
let buttonAddIceBox = document.querySelector('#btn-icebox');
let buttonAddPump = document.querySelector('#btn-pump');

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

        inputDaya.addEventListener('keyup', () => this.sumProsesSection( parseFloat(inputDaya.value) ));

        buttonDeleteDaya.addEventListener('click', () => this.deleteEl(divContainer));
    }

    deleteEl(input) {
        this.section.removeChild(input);
    }

    sumProsesSection(value){        
        value = value * 0.7457 * 1000;
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
