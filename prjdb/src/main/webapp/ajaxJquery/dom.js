/**
 * dom.js
 */

let ul = document.createElement('ul'); //DOM 요소
let li = document.createElement('li'); //li가 텍스트의 부모요소
li.setAttribute('class','second'); //second라는 li클래스명을 만듦
let txt = document.createTextNode('Apple');// li의 하위요소로 텍스트값 들어감
li.appendChild(txt); //li의 자식으로 텍스트 
ul.appendChild(li); //ul의 자식요소로 li
		
		
li = document.createElement('li'); //li가 텍스트의 부모요소
li.setAttribute('class','second');
txt = document.createTextNode('Banana');// li의 하위요소로 텍스트값 들어감
li.appendChild(txt); //li의 자식으로 텍스트 
ul.appendChild(li); //ul의 자식요소로 li
		
	
console.log(ul);
		
document.getElementById('clone').appendChild(ul); // 아이디값으로 clone이란 애(div태그)를 찾아오고 그 밑에 ul이란 자식을 넣겠다
		