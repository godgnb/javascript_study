let cardColors = ['red','orange','blue','green','black','white',
				'yellow','tomato','coral','darkkhaki',
				'olive','springgreen','pink','purple','mediumpurple'];
let checkFlag = false;
let clickCard = [];
let successCard = [];
let totalCnt = 0;
let clickCnt = 0;

$(document).ready(function() {
	btnEvent();
});

function btnEvent() {
	$('#startBtn').on('click', function() {
		gameStart();
	});
	
	$(document).on('click', '.inner-card', function() {
		cardCheck($(this));
	});
}

function gameStart() {
	$('#wrapper').children().remove();
	cardSetting();
}

function showCard() {
	//5초간 카드 보여주기
	alert('시작합니다. 4초간 카드를 보여줍니다.');
	$('.inner-card').addClass('flipped');
	setTimeout(function() {
		$('.inner-card').removeClass('flipped');
		checkFlag = true;
	}, 4000);
}

function cardSetting() {
	const opt = $('#select').val();
	const optValue = opt.split('*');
	
	//선택한 옵션에 맞춰 필요한 색가지수만큼 자르기
	let doubleCardColors = [];
	if (opt == '4*3') {
		doubleCardColors = cardColors.slice(0,6);
		totalCnt = 12;
	} else if (opt == '5*4') {
		doubleCardColors = cardColors.slice(0,10);
		totalCnt = 20;
	} else if (opt == '6*5') {
		doubleCardColors = cardColors;
		totalCnt = 30;
	}
	//같은 색 두번씩 넣기
	doubleCardColors = doubleCardColors.concat(doubleCardColors);
	//색 랜덤으로 섞기
	let randomCardColors = [];
	for (let i = 0; doubleCardColors.length > 0; i++) {
		let randomColor = doubleCardColors.splice(Math.floor(Math.random() * doubleCardColors.length), 1)[0];
		randomCardColors.push(randomColor);
	}
	
	//카드 그리기
	let cnt = 0;
	for (let i = 0; i < optValue[1]; i++) {
		let card = $('<div>', {class:'card'}); 
		for (let j = 0; j < optValue[0]; j++) {
			let innerCard = $('<div>', {class:'inner-card'});
			let frontCard = $('<div>', {class:'front-card'});
			let backCard = $('<div>', {class:'back-card'});
			innerCard.css('background-color', randomCardColors[cnt]);
			innerCard.append(frontCard);
			innerCard.append(backCard);
			card.append(innerCard);
			cnt++;
		}
		$('#wrapper').append(card);
	}
	showCard();
}

function cardCheck(card) {
	if(!card)
		return;
	
	if (checkFlag && !successCard.includes(card[0]) && !clickCard.includes(card[0])) {
		clickCnt++;
		clickCard.push(card[0]);
		$(card[0]).toggleClass('flipped');
		if (clickCard.length == 2) {
			if (clickCard[0].style.backgroundColor != clickCard[1].style.backgroundColor) {//카드 색이 다를 경우
				checkFlag = false;
				setTimeout(function() {//1초뒤 카드 닫기
					$(clickCard[0]).removeClass('flipped');
					$(clickCard[1]).removeClass('flipped');
					clickCard = [];
					checkFlag = true;
				}, 1000);
			} else {//카드 색이 같을 경우
				successCard = [...successCard, ...clickCard];
				clickCard = [];
			}
		}
	}
	
	if (successCard.length == totalCnt) {
		setTimeout(function() {
			alert(clickCnt + '회 클릭 후 성공');
			successCard = [];
		}, 1000);
	}
}
