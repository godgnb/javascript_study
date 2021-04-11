$(document).ready(function() {
	straightSelection();
});


function straightSelection() {
	let array = [35, 80, 21, 54, 11, 45, 92, 39];
	
	let num = 0;
	
	for (let i = 0; i < array.length; i++) {
		//기준이 되는 index설정
		let idx = i;
		//기준index 다음요소 비교
		for (let j = i+1; j < array.length; j++) {
			if (array[idx] > array[j]) {
				idx = j;
			}
		}
		num = array[idx];
		array[idx] = array[i];
		array[i] = num;
	}
	
	console.log('단순선택정렬 결과: ' + array);
}