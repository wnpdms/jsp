/*ary.js*/
const myNumbers = [20, 30, 45, 66, 88, 22];
let sum = 0;

for (let i = 0; i < myNumbers.length; i++) {
	console.log(myNumbers[i]);
	sum += myNumbers[i];
}

sum = 0;
for (let num of myNumbers) { //배열안에 든 개수만큼 반복하겠습니다
	sum += num;
}

myNumbers.forEach(function(elem, idx) {
	//mynumbers의 개수만큼 돌겠다 elem 배열요소 , idx 인덱스
	console.log(`index: ${idx}, value: ${elem}`);
}); //배열의 경우 forEach 메소드 제공, ()매개값으로 실행하는 함수받음
console.log(`배열의 누적합: ${sum}`);

let fruits = ['Apple', 'Banana', 'Cherry'];
document.querySelector('.fruit').innerHTML = '';

fruits.forEach(function(elem, idx) {
	li = document.createElement('li');
	txt = document.createTextNode(elem);
	li.appendChild(txt);
	document.querySelector('.fruit').appendChild(li);
});


fruits.forEach(function(elem, idx) {
	li = document.createElement('li'); //<li><li>
	txt = document.createTextNode(elem);//Apple
	li.appendChild(txt); //여기까진 li에 텍스트 넣기 
	let btn = document.createElement('button');
	btn.onclick = function() {
		console.log(btn);
		btn.parentElement.remove(); // 화면에서 해당요소 삭제해주는거
		//버튼의 부모요소 삭제=> li요소 삭제
	} //버튼 속성 넣어주기
	btn.innerText = '삭제'; //<button>삭제<button>
	li.appendChild(btn);//여기까진 li에 버튼 넣기

	document.querySelector('.fruit').appendChild(li); //쿼리셀럭터는 젤먼저나오는값 데려옴
});
