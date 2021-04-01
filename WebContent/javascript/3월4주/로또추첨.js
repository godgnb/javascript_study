let winningNums = [];
let bonusNum = '';

$(document).ready(function() {
	$('#button1').on('click', function() {
		$("#result").empty();
		$('#bonus').empty();
		makeLottoNumber();
		matchNumber();
	})
});

function makeLottoNumber() {
	//로또번호 45크기만큼 배열생성
	let lottoNumArray = Array(45)
	
	//생성한 배열을 fill로 빈값으로 초기화하고 map으로 1~45값 넣기
	let lottoNum = lottoNumArray.fill().map(function(x, index) {
		return index + 1;
	});
	console.log("lottoNum: " + lottoNum);
	
	getWinningNumber(lottoNum);
}

function getWinningNumber(lottoNum) {
	let randomNum = [];
	//랜덤하게 7개 숫자 뽑기
	while(lottoNum.length > 38) {
		let num = lottoNum.splice(Math.floor(Math.random() * lottoNum.length),1)[0];
		randomNum.push(num);
	}
	console.log("randomNum: " + randomNum);
	
	//마지막 숫자를 보너스숫자로 구한다.
	bonusNum = randomNum[randomNum.length - 1];
	// 앞에 6개 숫자를 당첨숫자로 구하고 오름차순으로 정렬
	winningNums = randomNum.splice(0,6).sort(function(p, c) {
		return p - c;
	});
	console.log("당첨번호: " + winningNums + " 보너스: " + bonusNum);
}

//화면에 추첨번호 띄위기
function setNum() {
	let size = !!winningNums ? winningNums.length : 0;
	let result = $('#result');
	for (let i = 0; i < size; i++) {
		let winningNum = winningNums[i];
		result.append('<div class=resultNum>' + winningNum + '</div>');
	}
	$('#bonus').append('<div class=resultNum>' + bonusNum + '</div>');
	$('.resultText').fadeIn();
}

//입력한 숫자와 당첨 숫자 비교하기
function matchNumber() {
	let inputNumArr = [];
	$('input[name=inputNum]').each(function(index, item) {
		inputNumArr.push($(item).val());
	});
	inputNumArr = inputNumArr.sort(function(p, c) {
		return p - c;
	});
	
	let errorMsg = validation(inputNumArr);
	if (!!errorMsg && errorMsg.length > 0) {
		alert(errorMsg);
		return;
	}
	
	let count = 0;
	let bCount = 0;
	for (let i = 0; i < winningNums.length; i++) {
		let winningNum = winningNums[i];
		
		if (inputNumArr.indexOf(winningNum) > -1) {
			count ++;
		} else if (inputNumArr.indexOf(bonusNum) > -1) {
			bCount ++;
		}
	}
	
	setResult(count, bCount);
}

//결과값 화면에 출력
function setResult(count, bCount) {
	let text = '';
	if (count == 6 && bCount == 0) { //1등당첨
		text = '축! 1등당첨';
	} else if (count == 5 && bCount == 1) { //2등당첨
		text = '축! 2등당첨';
	} else if (count == 5 && bCount == 0) { //3등당첨
		text = '축! 3등당첨';
	} else if (count == 4 && bCount == 0) { //4등당첨
		text = '축! 4등당첨';
	} else if (count == 3 && bCount == 0) { //5등당첨
		text = '축! 5등당첨';
	} else { //당첨실패
		text = '당첨되지 않았습니다';
	}
	setNum();
	$('#resultText').append(text);
}
//입력한 숫자 유효값 확인
//45보다 작은 수인지 0보다 큰수인지
//중복값 없는지
function validation(inputNumArr) {
	let size = !!inputNumArr ? inputNumArr.length : 0;
	let error = [];
	
	for(let i = 0; i < size; i++) {
		let inputNum = inputNumArr[i];
		
		if (inputNum > 45 || inputNum < 0) {
			error.push('숫자를 다시 입력해주세요.');
			break;
		}

		
	}
	
	return error;
}














