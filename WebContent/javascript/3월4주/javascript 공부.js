function map1() {
	let arr1 = ['사과', '배', '귤', '딸기'];
	
	arr1 = arr1.map(function() {
		return '과일';
	});
	console.log("arr1: " + arr1); //['과일', '과일', '과일' , '과일']
}

function map2() {
	let arr1 = [1, 2, 3];
	
	let arr2 = arr1.map(function(e) {
		return e+1;
	});
	console.log("arr1: " + arr1); // [1, 2, 3]
	console.log("arr2: " + arr2); // [2, 3, 4]
}

function sort1() {
	//배열안에 숫자값을 정렬하기
	
	let arr1 = [4, 1, 12, 5, 21, 16];
	
	// 매개변수 p:이전숫자, 매개변수 c: 다음숫자
	// p - c 값이 0보다 크면 위치를 바꾼다.
	// p - c 값이 0보다 작으면 위치를 안바꾼다.
	arr1.sort(function(p, c) {
		return p - c;
	});
	console.log("오름차순:" + arr1); // [1, 4, 5, 12, 16, 21];
	
	arr1.sort(function(p, c) {
		return c - p;
	});
	console.log("내림차순:" + arr1); // [21, 16, 12, 5, 4 ,1]
}




