let food = [
	{
		"name": "사과",
		"sentence": "사과는 빨간색이다."
	},
	{
		"name": "바나나",
		"sentence": "바나나는 노란색이다."
	},
	{
		"name": "오렌지",
		"sentence": "오렌지는 주황색이다."
	}
];

$('#area').html("<h3>getScript Ajax 연습</h3>");

$.each(food, function(i, e) {
	let tag = '';
	tag += '<div>';
	tag += 		'<h3>' + e.name + '</h3>';
	tag += 		'<div>' + e.sentence+ '</div>';
	tag += 	'</div>';
	
	$('#area').append(tag);
});

