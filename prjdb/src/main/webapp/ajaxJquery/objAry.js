/*objAry.js*/
const mem1 = {
	name:"홍길동",
	age:20,
	phone:'010-1111'
}
const mem2 = {
	name:"김길동",
	age:23,
	phone:'010-2222'
}
const mem3 = {
	name:"박길동",
	age:26,
	phone:'010-3333'
}
const members = [mem1, mem2, mem3];

//테이블 id값이 memberList tbody, 멤버리스트 테이블의 자식인 tbody
let target = document.querySelector('#memberList>tbody');
/*target.innerHTML='';*/ 
members.forEach(addMemberFnc);

document.querySelector('#memberList>tbody button').onclick = function(e){
	e.target.parentElement.parentElement.remove();
}

/*document.querySelectorAll('#memberList>tbody>tr').forEach(function(tr){
	tr.setAttribute('style', 'backgroud: yellow')
})*/
console.log(document.querySelectorAll('#memberList>tbody>tr'));
document.querySelectorAll('#memberList>tbody>tr').forEach(function(tr){
	tr.addEventListener('mouseover',function(){
		tr.setAttribute('style', 'background: yellow');		
	})
	tr.addEventListener('mouseout', function(){
		tr.setAttribute('style', 'background: none');
	})
})

// document.querySelector('.add').onclick=function(){
// 	let tr = document.createElement('tr');
	 
// 	let td = document.createElement('td');
// 	td.innerText = document.querySelector('input[name=name]').value; 
// 	tr.appendChild(td); 

// 	td = document.createElement('td');
// 	td.innerText = document.querySelector('input[name=age]').value; 
// 	tr.appendChild(td); 

// 	td = document.createElement('td');
// 	td.innerText = document.querySelector('input[name=phone]').value; 
// 	tr.appendChild(td);

	
// 	// 삭제 button 생성
// 	td=document.createElement('td');
// 	let btn = document.createElement('button');
// 	btn.addEventListener('click',function(e){
// 		console.log(e); // 이벤트 핸들로 쓰이는 this는 이벤트를 받는 대상
		
// 		this.parentElement.parentElement.remove();
// 	});
// 	btn.innerText='삭제';
// 	td.appendChild(btn);
	
// 	tr.appendChild(td); 
// 	target.appendChild(tr); //tbody안에 자식으로 tr넣을라고 tr안에 td도 있음
// }; //유진이랑 한 부분

//등록버튼찾기
document.querySelector('.add').addEventListener('click',function(){
	let name = document.querySelector('input[name="name"]').value;
	let age = document.querySelector('input[name="age"]').value;
	let phone = document.querySelector('input[name="phone"]').value;
	const member={
		// name:name, age:age, phone:phone
		name,
		age,
		phone
	}
	addMemberFnc(member);
})

function addMemberFnc(member){ //member={}는 object타입
	let tr = document.createElement('tr');
	for(let prop in member){ //for in은 속성을 루틴돈다 name, age , phone
		let td = document.createElement('td');
		td.innerText = member[prop]; //value값 가져오기 []
		tr.appendChild(td); 
	}
	// 삭제 button 생성
	let td=document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click',function(e){
		console.log(e); // 이벤트 핸들로 쓰이는 this는 이벤트를 받는 대상
		/*e.target.parentElement.parentElement.remove();*/
		this.parentElement.parentElement.remove();
	});
	btn.innerText='삭제';
	td.appendChild(btn);
	
	tr.appendChild(td); 
	target.appendChild(tr); //tbody안에 자식으로 tr넣을라고 tr안에 td도 있음
}




document.querySelector('#memberList>tbody button').setAttribute('style','color:red');



