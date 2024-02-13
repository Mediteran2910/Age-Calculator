const userDay = document.querySelector('#userDay');
const userMonth = document.querySelector('#userMonth');
const userYear = document.querySelector('#userYear');
const spanDay = document.querySelector('#spanDay');
const spanMonth = document.querySelector('#spanMonth');
const spanYear = document.querySelector('#spanYear');
const button = document.querySelector('button');
const dayErr = document.querySelector('#dayErr');
const monthErr = document.querySelector('#monthErr');
const yearErr = document.querySelector('#yearErr');
const labelDay = document.querySelector('#labelDay');
const labelMonth = document.querySelector('#labelMonth');
const labelYear = document.querySelector('#labelYear');


const curr = new Date();

const year = curr.getFullYear();
const month = curr.getMonth();
const day = curr.getDate();
const real = new Date(year, month, day, 0, 0, 0, 0);
console.log(real);


function calculateDifference() {

    const userY = userYear.value;
    const userM = userMonth.value;
    const userD = userDay.value;
    const userR = new Date(userY, userM - 1, userD, 0, 0, 0, 0);

    const differenceMs = Math.abs(real - userR);
    const oneDay = 1000 * 60 * 60 * 24;
    const oneMonth = oneDay * 30.44;
    const oneYear = oneDay * 365.25;
    const years = Math.floor(differenceMs / oneYear);
    const months = Math.floor((differenceMs % oneYear) / oneMonth);
    const days = Math.floor((differenceMs % oneMonth) / oneDay);

    spanDay.innerHTML = days;
    spanMonth.innerHTML = months;
    spanYear.innerHTML = years
}


button.addEventListener('click', function () {
    calculateDifference();

    if (userDay.value === '') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        dayErr.style.display = 'block';
        labelDay.style.color = 'red';
        userDay.style.borderColor = 'red'
        


    } else if (userDay.value <= 0 || userDay.value > 31 || isNaN(userDay.value)) {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        dayErr.innerHTML = 'Must be valid input'
        dayErr.style.display = 'block';
        labelDay.style.color = 'red';
        userDay.style.borderColor = 'red'
    } else{ 
        dayErr.style.display = 'none'
        labelDay.style.display = 'default'
        labelDay.style.color = 'hsl(0, 1%, 44%)'
        userDay.style.borderColor = 'hsl(0, 1%, 44%)'

    }

    if (userMonth.value === '') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        monthErr.style.display = 'block';
        labelMonth.style.color = 'red';
        userMonth.style.borderColor = 'red'

    } else if (userMonth.value <= 0 || userMonth.value > 12 || isNaN(userMonth.value)) {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        monthErr.innerHTML = 'Must be valid input'
        monthErr.style.display = 'block';
        labelMonth.style.color = 'red';
        userMonth.style.borderColor = 'red'
    } else{ 
        monthErr.style.display = 'none'
        labelMonth.style.display = 'default'
        labelMonth.style.color = 'hsl(0, 1%, 44%)'
        userMonth.style.borderColor = 'hsl(0, 1%, 44%)'

    }
    

    if (userYear.value === '') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        yearErr.style.display = 'block';
        labelYear.style.color = 'red';
        userYear.style.borderColor = 'red'
    }
    else if (userYear.value <= 0 || isNaN(userYear.value)) {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        yearErr.innerHTML = 'Must be valid input'
        yearErr.style.display = 'block';
        labelYear.style.color = 'red';
        userYear.style.borderColor = 'red'
    }else{ 
        yearErr.style.display = 'none'
        labelYear.style.display = 'default'
        labelYear.style.color = 'hsl(0, 1%, 44%)'
        userYear.style.borderColor = 'hsl(0, 1%, 44%)'

    }

})
