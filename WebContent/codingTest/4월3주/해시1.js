/*
 * 문제 설명
 * 마라톤에 참가한 선수들 중 단 한명의 선수를 제외하고 완주하였다.
 * 참가자 배열 participant와 완주한 선수 배열 completion에서
 * 완주하지 못한 선수의 이름을 return하여라
 * 
 * 제한사항
 * 1. 참여한 수는 1명 이상 100,000명 이하이다.
 * 2. completion의 길이는 participant의 길이보다 1작다.
 * 3. 참가자의 이름은 1개이상 20개이하의 알파벳 소문자이다.
 * 4. 참가자 중 동명이인이 있을 수 있다.
 * 
 * 입출력 예
 * 1. participant - ['leo', 'kiki', 'eden'], completion - ['eden', 'kiki'], return - 'leo'
 * 2. participant - ['marina', 'josipa', 'nikola', 'vinko', 'filipa'], completion - ['josipa', 'filipa', 'marina', 'nikola'], return - 'vinko'
 * 3. participant - ['mislav', 'stanko', 'mislav', 'ana'], completion - ['stanko', 'ana', 'mislav'], return - 'mislav'
 */
let part1 = ['leo', 'kiki', 'eden'];
let part2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
let part3 = ['mislav', 'stanko', 'mislav', 'ana'];
let com1 = ['eden', 'kiki'];
let com2 = ['josipa', 'filipa', 'marina', 'nikola'];
let com3 = ['stanko', 'ana', 'mislav'];

/*(function solution(participant, completion) {
    var answer = '';
    for (let i = 0; i < completion.length; i++) {
        var person = completion[i];
        console.log(i + "번째 person: " + person);
        if (participant.indexOf(person) > -1){
            participant = participant.filter((e) => e != person);
        }
        console.log(person + "제거 후 참가자: " + participant);
    }
    answer = participant[0];
    return answer;
})(part3, com3);*/
//오류: filter를 사용하면 동일한 이름이 있는 경우 모두 제거하여 3번째 예시실패!

/*(function solution(participant, completion) {
    var answer = '';
    completion.forEach(function(e) {
    	var index = participant.indexOf(e);
    	if (index > -1) {
			participant.splice(index, 1);
		}
    	console.log('제거 후: ' + participant);
	});
    answer = participant[0];
    console.log("answer: " + answer);
    return answer;
})(part3, com3);*/
//문제점: return값은 제대로 나오나 효율성이 떨어짐

(function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    console.log('정렬 후: ' + participant);
    completion.sort();
    console.log('정렬 후: ' + completion);
    
    for (let i = 0; i < participant.length; i++) {
    	if (participant[i] != completion[i]) {
    		answer = participant[i];
    		break;
    	}
    }
    console.log(answer);
    return answer;
})(part2, com2);
//배열을 정렬 한 후 반복문을 돌면서 배열안의 요소를 비교
//배열을 정렬했기 때문에 동일한 값이 없을 경우 완주하지 못한 참가자이다.
//그 값을 리턴한다.

function answer1() {
	var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
}
//participant.find(콜백 애로우 함수, 맵함수) 두개의 전달인자 중 맵함수가 콜백함수보다 먼저 실행
//맵함수는 보통 새로운 배열 리턴, 여기서는 콜백함수보다 먼저 실행되는게 중요!!

//맵함수 설명 completion.map(name=>completion[name]=(completion[name]|0)+1)
//맵함수 completion[name]=(completion[name]|0)+1 completion[name]을 정의하는데 값이 존재하면 그 값에 +1, 존재하지 않으면 0+1로 정의
//여기서 completion은 배열이지만 객체이다. 그러므로 completion[name]으로 객체에서 'key-value'접근하듯이 접근할수 있다.
//value값이 존재하지 않으면 undefined를 리턴하게 되고 그것은 false이기때문에 0를 뱉고, 0+1이 되어 1이 된다.
//따라서 completion 배열 안에 '하나만 있는 이름'은 모두 '이름: 1'이렇게 변한다.
//만약 이름이 여러개일 경우 completion[name]이 이미 존재하는 값을 리턴할 것이고, 그 값에 +1이 되어 저장된다.
//이 작업이 끝나면 completion배열안에는 처음받았던 배열이 아닌 'name:갯수'들이 추가된 배열이 된다.

//콜백함수 설명 name=>!completion[name]--
//participant에 find를 했기때문에 모든 참가자의 name으로 completion에 해당name이 몇개가 있는지 확인한다.
//이름이 한개 있는 경우 불려오는 순간 completion[name]은 1이므로 참, !completion[name]은 거짓이 된다.
//이름이 여러개 있는 경우도 동일하게 진행된다.
//completion[name]이 거짓값을 반환할때 find는 참이기 때문에 그때까지 진행된다.
//completion[name]이 거짓값을 반환하는 경우는 값이 0이거나, undefined일때
//0인 경우는 동명의 참가자가 있을때, 한명이 못들어온 경우
//undefined인 경우는 동명의 참가자가 없고, 그 사람이 못들어온 경우