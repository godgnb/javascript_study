/**
 * 병합알고리즘
 */

function algorithm() {
	let arr1 = [8, 2, 4, 12, 1, 9, 6, 3];
	
	let arr2 = sort(arr1);
	console.log("정렬:" + arr2);
}

//분할: 배열을 재귀함수돌면서 길이가 1일때까지 분할
function sort(arr) {
	if (arr.length < 2) 
		return arr;
	
	let size = Math.floor(arr.length / 2);
	
	// 배열의 가운대를 기준으로 분할
	// slice로 분할하여 원래배열에 영향을 주지 않는다.
	let left = arr.slice(0, size);
	let right = arr.slice(size, arr.length);
	
	return merge(sort(left), sort(right));
}

//병합: 배열의 요소들을 오름차순정렬하면서 병합
function merge(left, right) {
	let result = [];
	
	while(left.length && right.length) {
		//값 비교하여 result배열에 정렬하여 입력
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	
	//왼쪽 배열값이 남은 경우 모두 result배열에 넣기
	while(left.length) {
		result.push(left.shift());
	}
	//오른쪽 배열값이 남은 경우 모두 result배열에 넣기
	while(right.length) {
		result.push(right.shift());
	}
	
	return result;
}


