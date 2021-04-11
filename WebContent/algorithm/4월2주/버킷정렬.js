$(document).ready(function() {
	bucket();
});


function bucket() {
	let array = [8, 2, 1, 5, 9 ,7];
	
	//양동이 배열 준비
	let bucket = new Array(10);
	
	//양동이배열 같은인덱스에 값을 입력
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		bucket[num] = num;
	}
	
	//양동이배열에 값이 있는 인덱스만 출력
	bucket = bucket.filter(function(item, index) {
		if (!!bucket[index]) {
			return item;
		}
	});
	console.log('bucket 결과: ' + bucket);
}