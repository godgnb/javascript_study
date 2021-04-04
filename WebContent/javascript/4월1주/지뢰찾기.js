let data;
let stopFlag;
let openCnt;
let row;
let column ;
let boom;

$(document).ready(function() {
	buttonEvent();
});


function buttonEvent() {
	$('#btn1').on('click', function() {
		$('#table tbody').children().empty();
		stopFlag = false;
		openCnt = 0;
		makeGame();
	});
	
	//td에 마우스 우클릭이벤트를 설정한다.
	$(document).on('contextmenu', 'td', function(e) {
		e.preventDefault();
		if (stopFlag) 
			return;
		
		let currentColIndex = e.currentTarget.cellIndex;
		let currentRowIndex = e.currentTarget.parentNode.rowIndex;
		
		if (e.currentTarget.textContent == '' || e.currentTarget.textContent == 'X') {//빈칸이거나 X일때 느낌표로
			e.currentTarget.textContent = '!';
		} else if (e.currentTarget.textContent == '!') {//느낌표일때 물음표로
			e.currentTarget.textContent = '?';
		} else if (e.currentTarget.textContent == '?') {//물음표일때 데이터확인해서 X일경우는 X로, 나머지는 빈칸으로
			if (data[currentRowIndex][currentColIndex] == 'X') {
				e.currentTarget.textContent = 'X';	
			} else {
				e.currentTarget.textContent = '';
			}
		}
	});
	
	//td에 클릭이벤트를 설정한다.
	$(document).on('click', 'td', function(e) {
		e.preventDefault();
		
		let currentColIndex = e.currentTarget.cellIndex;
		let currentRowIndex = e.currentTarget.parentNode.rowIndex;
		if (stopFlag || data[currentRowIndex][currentColIndex] == 0) 
			return;
		
		$(this).addClass('opened');
		openCnt += 1;
		if (data[currentRowIndex][currentColIndex] == 'X') {//클릭한 곳에 지뢰가 있을때
			e.currentTarget.textContent = '펑!';
			stopFlag = true;
		} else { //클릭한 곳 주변 데이터 가져오기
			data[currentRowIndex][currentColIndex] = 0;
			let around = [data[currentRowIndex][currentColIndex-1], data[currentRowIndex][currentColIndex+1]];
			
			if (data[currentRowIndex-1]) {//맨 윗줄을 클릭했을 경우 에러방지
				around = around.concat( data[currentRowIndex-1][currentColIndex-1],
										data[currentRowIndex-1][currentColIndex],
										data[currentRowIndex-1][currentColIndex+1]);
			}
			if (data[currentRowIndex+1]) {//맨 아래줄을 클릭했을 경우 에러방지
				around = around.concat( data[currentRowIndex+1][currentColIndex-1],
										data[currentRowIndex+1][currentColIndex],
										data[currentRowIndex+1][currentColIndex+1]);
			}
			
			//filter로 주변에 지뢰 파악하고 length로 값 리턴
			e.currentTarget.textContent = around.filter(function(i) {
				return i == 'X';
			}).length || '';
			
			if (e.currentTarget.textContent == 0) {
				let tbody = $('tbody').children();
				let aroundCell = [tbody[currentRowIndex].children[currentColIndex-1], tbody[currentRowIndex].children[currentColIndex+1]];
				
				if (tbody[currentRowIndex-1]) {//맨 윗줄을 클릭했을 경우 에러방지
					aroundCell = aroundCell.concat( tbody[currentRowIndex-1].children[currentColIndex-1],
													tbody[currentRowIndex-1].children[currentColIndex],
													tbody[currentRowIndex-1].children[currentColIndex+1]);
				}
				if (tbody[currentRowIndex+1]) {//맨 아래줄을 클릭했을 경우 에러방지
					aroundCell = aroundCell.concat( tbody[currentRowIndex+1].children[currentColIndex-1],
													tbody[currentRowIndex+1].children[currentColIndex],
													tbody[currentRowIndex+1].children[currentColIndex+1]);
				}
				aroundCell.filter(function(i) {
					return !!i;
				}).forEach(function(next) {
					let currentColIndex = next.cellIndex;
					let currentRowIndex = next.parentNode.rowIndex;
					if (data[currentRowIndex][currentColIndex] != 0) {
						next.click();
					}
				});
			}
		}
		if (openCnt == row * column - boom) {
			stopFlag = true;
		}
	});
}

//지뢰찾기 게임 만들기
function makeGame() {
	data = [];
	row = $('#row').val();
	column = $('#column').val();
	boom = $('#boom').val();
	
	for (let i = 0; i < column; i++) {
		let arr = [];
		let tr = $('<tr>', {id: 'row' + i});
		$('#table tbody').append(tr);
		
		for (let j = 0; j < row; j++) {
			arr.push(1);
			$('#row' + i).append('<td>');
		}
		data.push(arr);
	}
	
	console.log('data: ' + data);
	setBoomRandom();
}

//지뢰 랜덤으로 심기
function setBoomRandom() {
	
	//생성한 지뢰찾기만큼 배열만들고, 0 ~ N만큼 숫자부여
	let array = Array(row * column);
	array = array.fill().map(function(e, index) {
		return index;
	});
	console.log("array: " + array);
	
	//입력한 지뢰수만큼 랜덤으로 뽑기
	let randomArray = [];
	let boomCnt = array.length - boom;
	while(array.length > boomCnt) {
		let randomNum = array.splice(Math.floor(Math.random() * array.length), 1)[0];
		randomArray.push(randomNum);
	}
	console.log("randomArray: " + randomArray);
	
	//랜덤으로 뽑은 위치에 지뢰 심기
	for (let i = 0; i < randomArray.length; i++) {
		let random = randomArray[i];
		let boomRow = Math.floor(random / row); //10의 자리 
		let boomCol = random % column; //1의 자리
		
		$('#table tbody').children()[boomRow].children[boomCol].textContent = 'X';
		data[boomRow][boomCol] = 'X';
	}
	console.log("data after setboom: " + data);
}






















