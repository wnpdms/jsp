/*obj.js*/

let name = "Hong"; //String
let age = 20; //number
let obj = {
	//name : name,
	//age : age,
	name,
	age,
	phone: '010-1111', //key : value
	showInfo: function() {
		return this.name + ", " + this.age;
	}
} //자스에서 중괄호 쓰면 객체 end of obj

console.log(obj.name);
console.log(obj.age);
console.log(obj['phone']);
console.log(obj.showInfo()); //showInfo function 정의 구문
obj.hobbies = ['reading', 'eating', 'sleeping']; //변수에 . 연산자로 배열 값 추가 할 수 있음
console.log(obj.hobbies[0]); //배열의 첫번째값 reading 가져오기

for (let prop in obj) {
	console.log(`속성: ${prop}, 값: ${obj[prop]}`); // []없이 쓰면 key값 obj[]로 쓰면 들어있는 밸류값 출력됨
}

let yourHobbies = ['운동하기', '영화보기', '자전거타기'];

function makeHobbies(hobbies) { //()안에 배열이 들어가야함
	for (let i = 0; i < obj.hobbies.length; i++) {
		li = document.createElement('li');//<li><li>
		txt = document.createTextNode(obj.hobbies[i]); //reading
		li.appendChild(txt); //<li>reading<li>
		document.getElementById('myHobby').appendChild(li)
	} //교수님방법

}
makeHobbies(yourHobbies); // makeHobbies함수를 실행하세요 

// code here
li = document.createElement('li');
txt = document.createTextNode(obj.hobbies[0]);
li.appendChild(txt); //li의 자식으로 텍스트 
document.getElementById('myHobby').appendChild(li)

li = document.createElement('li');
txt = document.createTextNode(obj.hobbies[1]);
li.appendChild(txt); //li의 자식으로 텍스트 
document.getElementById('myHobby').appendChild(li)

li = document.createElement('li');
txt = document.createTextNode(obj.hobbies[2]);
li.appendChild(txt); //li의 자식으로 텍스트 
document.getElementById('myHobby').appendChild(li)


for (let i in obj.hobbies) {
	li = document.createElement('li');
	txt = document.createTextNode(obj.hobbies[i]);
	li.appendChild(txt);
	document.getElementById('myHobby').appendChild(li)
}





