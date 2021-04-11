$(document).ready(function() {
	algorithm1();
	algorithm2();
	algorithm3();
	algorithm4();
	algorithm5();
});

//1~N의 합
function algorithm1() {
	let sum = 0;
	
	for(let i = 1; i <= 5; i++) {
		sum = sum + i;
	}
	
	console.log('algorithm1 합계: ' + sum);
}

//피보나치 수열
function algorithm2() {
	let array = [0, 1];
	
	for (let i = 2; i <= 8 ; i++) {
		array[i] = array[i-2] + array[i-1];
	}
	
	console.log('algorithm2 피보나치 결과: ' + array);
}

//배열의 합
function algorithm3() {
	let array = [79, 2, 101, 59, 24];
	let sum = 0;
	
	for (let i = 0; i < array.length; i++) {
		sum = array[i] + sum;
	}
	
	console.log('algorithm3 합계: ' + sum);
}

//배열의 평균
function algorithm4() {
	let array = [88, 69, 72, 79, 80];
	let sum = 0;
	let avg = 0;
	let count = 0;
	
	for (let i = 0; i < array.length; i++) {
		count ++;
		sum = array[i] + sum;
	}
	avg = sum / count;
	
	console.log('algorithm4 평균: ' + avg);
}

//배열 내 최대값, 최소값
function algorithm5() {
	let array = [88, 69, 72, 29, 80];
	let max = 0;
	let min = 100;
	
	for (let i = 0; i < array.length; i++) {
		if (max < array[i]) {
			max = array[i];
		}
		if (min > array[i]) {
			min = array[i];
		}
	}
	
	console.log('algorithm5 최소값:' + min + ' 최대값: ' + max);
}

//배열 내 등수
function algorithm6() {
	let array = [88, 69, 72, 29, 80];
	let rank = [1, 1, 1, 1, 1];
	
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] < array[j]) {
				rank[i] = rank[i] + 1;
			}
		}
	}
	
	console.log('algorithm6 등수 결과: ' + rank);
}

//최대공약수(유클리드호제법)
function algorithm7() {
	let x = 126;
	let y = 90;
	let R;
	
	while(true) {
		R = x % y;
		if (R != 0) {
			x = y;
			y = R;
		} else {
			break;
		}
	}
	
	console.log('algorithm7 최대공약수: ' + y); 
}