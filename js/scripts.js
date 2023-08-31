// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplicacao-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções

const createTable = (number, multiplicadorNumber) => {
    multiplicationTable.innerHTML = "";
    for(i = 1; i <= multiplicadorNumber; i++) {
        const result = number * i;
        
        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");
        
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }   

    multiplicationTitle.innerText = number;
};


// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicadorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicadorNumber) return;

    createTable(multiplicationNumber, multiplicadorNumber);

    
});