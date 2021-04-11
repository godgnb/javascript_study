$(document).ready(function() {
	bubble();
});

function bubble() {
	let array = [35, 80, 21, 54, 11, 45, 92, 39];
	
	let num = 0;
	let length = array.length;
	
	while(length > 1) {
		for (let i = 0; i < array.length-1; i++) {
			if (array[i] > array[i+1]) {
				num = array[i];
				array[i] = array[i+1];
				array[i+1] = num;
			}
		}
		length--;
	}
	
	console.log('단순교환정렬 결과: ' + array);
}