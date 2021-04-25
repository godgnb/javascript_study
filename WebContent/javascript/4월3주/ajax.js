$(document).ready(function() {
	activeAjax();
});
/**
 * AJAX란 비동기 자바스크립트와 XML을 말한다.
 * 즉, 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것이다.
 * 페이지 전체를 refresh하지 않고 수행되는 '비동기성'이 큰 특징이다.
 */

/**
 * 데이터 형식
 * CSV, XML, JSON
 * 1. CSV
 * ,로 데이터의 속성을 나누고 줄바꿈으로 데이터를 나눈다.
 * 용량이 적다는 장점이 있지만 가독성이 떨어진다.
 * 2. XML
 * CSV의 가독성을 개선하기 위해 나온 데이터 형식
 * 태그로 속성과 데이터를 구분한다.
 * 가독성은 좋지만 용량이 크고 데이터가 많아지면 분석속도가 떨어지다.
 * 3. JSON
 * javascript의 객체형태로 데이터를 전송하는 형식
 * XML형식과 CSV형식의 단점을 최소화한 형식
 * 가독성이 좋고 용량이 적다는 장점이 있지만 데이터 양이 많으면 분석속도가 떨어진다.
 */

/**
 * 데이터 전송방식
 * GET, POST, PUT, DELETE, HEAD
 * 1. GET
 * 데이터를 단순히 읽어 오는 경우
 * 데이터 전송량이 POST보다 적고, URL에 정보가 고스란히 담겨있다.
 * 2. POST
 * 데이터를 생성, 수정, 삭제하는 경우 
 */


/**
 * javascript Ajax 구현
 * ajax구현하는데 XMLHttpRequest객체는 반드시 필요한 객체이다.
 */
function makeAjax() {
	let xmlhttp;
	
	//XHR 객체생성
	if (window.XMLHttpRequest) { //대부분의 웹브라우저는 XHR을 지원
		xmlhttp = new XMLHttpRequest();
	} else { // IE7이하 버전
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Ajax구현
	//onreadystatechange: 통신 이후 동작될 함수
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//성공 시 구현부분
		}
	}
	
	//open의 첫번째 인자: 전송방식 선택
	//두번째 인자: 서버의 url
	//세번째 인자: 비동기 진행 유무(생략가능) default값은 true
	xmlhttp.open("GET", "ex.xml", true);
	//데이터 교환을 요청하는 함수
	xmlhttp.send();
}

/*
 * Jquery Ajax 구현
 * 1. load함수
 * $(selector).load(URL, DATA, CALLBACK);
 * URL - 웹페이지 또는 파일을 화면의 재구성없이 동적으로 구성
 * DATA - 데이터 전송
 * CALLBACK - 통신 이후 작업을 수행
 */
function activeAjax() {
	$('#load').on('click', function() {
		$('#area').load('load.html');
		return false;
	});
	
	$('#get').on('click', function() {
		jqueryAjax();
	});
	
	$('#json').on('click', function() {
		getJSONAjax();
	});
	
	$('#script').on('click', function() {
		getScriptAjax();
	});
}

/**
 * 2. ajax함수
 * $.ajax(options);
 * option종류
 * url - 요청이 전송되는 URL이 포함된 문자열
 * type - Http요청방식(GET/POST)
 * timeout - Http요청에 대한 제한시간
 * success - Http요청 성공시 이벤트 핸들러
 * error - Http요청 실패시 이벤트 핸들러
 * complete - Http요청 완료시 이벤트 핸들러
 * data - 서버로 보낼 데이터
 * dataType - Http요청 후 return 데이터 Type지정(xml,html,json,jsonp,script,text)
 * async - 요청시 동기유무 선택(True/False)
 * cache - 요청되는 페이지를 캐시할 수 있다.(True/False)
 * beforeSend - Http요청 전 발생하는 이벤트 핸들러
 * global - 전역함수 활성여부 설정(True/False)
 */

//기본적인 ajax호출
function jqueryAjaxFormat() {
	let data = {name: "홍길동",
				age: 20,
				gender: "남"};
	$.ajax({
		type: 'GET', //type을 설정
		url: "", //서버로 보낼 주소 입력
		data: data, //서버로 보낼 데이터 
		success: function(data) { //성공적으로 실행됐을때 실행할 코드
			if (data) {
				alert("호출 성공입니다.");
			}
		}
	});
}

function jqueryAjax() {
	$.ajax({
		type: 'GET',
		url: "jqueryAjax.xml",
		dataType: 'xml',
		success: function(data) {
			if (data) {
				$('#area').empty().append('<h3>jquery Ajax 연습</h3>');
				
				$.each($(data).find('food'), function() {
					let food = $(this);
					let tag = '';
					tag += '<div>';
					tag += 		'<h3>' + food.attr('name') + '</h3>';
					tag += 		'<div>' + food.text() + '</div>';
					tag += 	'</div>';
					
					$(tag).appendTo('#area');
				});
			}
		}
		
	})
}

/*
 * 3.getJSON함수
 * $.getJSON( URL, DATA, CALLBACK );
 * JSON형식의 데이터를 불러 읽을 때 사용
 * GET방식으로 통신
 */

function getJSONAjax() {
	$.getJSON("getJSON.json", function(data) {
		if (data) {
			$('#area').empty().append('<h3>getJSON Ajax 연습</h3>');
			
			$.each(data, function(i, e) {
				let tag = '';
				tag += '<div>';
				tag += 		'<h3>' + e.name + '</h3>';
				tag += 		'<div>' + e.sentence+ '</div>';
				tag += 	'</div>';
				
				$(tag).appendTo('#area');
			});
		}
		
	})
}


/*
 * 3.getScript함수
 * $.getScript( URL );
 * script파일을 불러 읽을 때 사용
 * GET방식으로 통신
 */

function getScriptAjax() {
	$.getScript('getScript.js');
}




















