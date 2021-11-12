// Selecting things from HTML using document.querySelector()
const myInput = document.querySelector('.my-input');
const myBtn = document.querySelector('.my-button');
const resault = document.querySelector('#resault')

// Listening to click event on the button using addEventListener()
myBtn.addEventListener("click", function() {
	//the myInput.value is the content of the input
	if( myInput.value < 10 ) {
		resault.innerHTML = "Fail"
	} else if( myInput.value > 10 && myInput.value < 15 ) {
		resault.innerHTML = "Good"
	} else if( myInput.value > 15 ) {
		resault.innerHTML = "Perfect"
	}
})


// less than 10 = fail
// from 10 to 15 = good
// abover 15 = perfect