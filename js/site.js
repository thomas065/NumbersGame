// get the start and end numbers from the page 
function getValues() {
    // get the start number
    let startNumber = document.getElementById('startValue').value;
    // get the end number
    let endNumber = document.getElementById('endValue').value;

    alert('start number is: ' + startNumber);
    alert('end number is: ' + endNumber);

    // turn the values into actual numbers
    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber);

    // generate the range of numbers
    generateValues(startNumber, endNumber)
}

// generate a list of all numbers between the start and end
function generateValues(start, end) {

    // create a variable that can hold a bunch of numbers

    // put the start number into that variable

    // add 1 to that number, then add THAT to the variable
    // keep adding 1 and putting into the variable UNTIL we get to the end number

    // somehow tell displayValues to show those numbers???


}

// display each of those numbers on the page
function displayValues() {

}
