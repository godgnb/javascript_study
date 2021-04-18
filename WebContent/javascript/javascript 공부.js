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

//배열 합치기
function concat() {
	//파라미터로 받은 배열이나 값들을
	//기존의 배열에 합쳐서 새로운 배열을 리턴
	
	let arr1 = [1,2,3,4,5];
	let arr2 = arr1.concat(10, 11);
	console.log('arr1: ' + arr1); // [1,2,3,4,5]
	console.log('arr2: ' + arr2); // [1,2,3,4,5,10,11]
}

//find함수
//배열에서 특정 값을 찾는다. 
//callback함수를 조건으로 받아 조건에 맞는 값중 첫번째 값을 리턴
//만족하는 값이 없는 경우 undefined를 리턴
//callback(element, index, array)
//element: 현재 처리중인 배열의 요소
//index: 현재 처리중인 배열의 index
//array: find함수가 호출한 배열
function find1() {
	let arr1 = [1, 2, 3, 4 ,5];
	
	const result = arr1.find(e => e > 3);
	
	console.log(result);// 4
}

//특정 값을 차는 filter와의 차이점
//find의 반환값: (number), filter의 반환값: array
//find는 요소를 찾은 후 즉시검색 종료, filter는 전체검색
function find2() {
	let arr1 = [1, 2, 3, 4, 5];
	let count = 0;
	
	const findResult = arr1.find(e => {
		count++;
		return e == 3;
	});
	console.log(findResult);// 3
	console.log(count);//3
	
	count = 0;
	const filterResult = arr1.filter(e => {
		count++;
		return e == 3;
	});
	console.log(filterResult);// [3]
	console.log(count);// 5
	
}
