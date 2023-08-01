const input = document.querySelector('.input');
input.addEventListener('input', (e) =>{
    const value = e.target.value;
    const gramOutput = document.querySelector('.groutput');

    gramOutput.textContent = `${value*453.6}g` ;

    const kgOutput = document.querySelector('.kgoutput');

    kgOutput.textContent = `${value/2.205}kg`;

    const ouOutput = document.querySelector('.ououtput');

    ouOutput.textContent = `${value*16}Ounce`
});