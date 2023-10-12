// get the start and end numbers from the page 
function getValues() {
    // get the start number
    let startNumber = document.getElementById('startValue').value;
    // get the end number
    let endNumber = document.getElementById('endValue').value;

    // turn the values into actual numbers
    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber);

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber) && startNumber < endNumber) {
        // generate the range of numbers
        let generatedNumbers = generateValues(startNumber, endNumber);
    
        displayValues(generatedNumbers);
    } else {
        // Uh oh, something went wrong!
        Swal.fire({
                icon: 'error',
                backdrop: false,
                title: 'Oops!',
                text: 'Please enter valid integers and ensure your start number is less than your end number.'
            });
    }
}

// generate a list of all numbers between the start and end
function generateValues(start, end) {

    // create a variable that can hold a bunch of numbers
    let numbers = [];

    // put the start number into that variable

    // add 1 to that number, then add THAT to the variable
    // keep adding 1 and putting into the variable UNTIL we get to the end number

    for (let n = start; n <= end; n++) {
        numbers.push(n);
    }

    return numbers;
}

// display each of those numbers on the page
function displayValues(numbers) {

    let html = "";

    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];

        let className = ''

        if (currentNumber % 2 == 0) {
            className = 'even'
        } else {
            className = 'odd'
        }

        html += `<tr><td class="${className}">${currentNumber}</td></tr>`

    }


    // with each number, put it on the page
    // <tr><td> 4 </td></tr>
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;

    /*
        TO-DO NOTES:
        - make the even numbers bold
    */
}
