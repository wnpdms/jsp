
App = {
	adoptedAry: [], // adopted.json 의 정보를 저장. 입양버튼을 클릭시 id를 저장.
	init: function() {
		// pets.json 파일의 정보를 읽어서 애완견의 정보를 활용해서 페이지 생성.
		fetch("./json/pets.json")
			.then((res) => {
				return res.json()
			})
			.then(obj => App.info(obj));
			
	}, // end of init;
	info: function(data){
		console.log(data);
		data.forEach((item,idx)=>{
			console.log(item.name);
			let template = document.querySelector('div.col-lg-3').cloneNode(true);
			template.querySelector('.panel-title').innerText=item.name;
			template.querySelector('.pet-breed').innerText=item.breed;
			template.querySelector('.pet-age').innerText=item.age;
			template.querySelector('.pet-location').innerText=item.location;
			template.querySelector('img').src=item.picture;
			template.querySelector('button.btn').setAttribute('data-id',item.id);
			document.querySelector('#petsRow').append(template);
		})
		App.initContract();
	},

	initContract: function() {
		// initMarkData 호출.
		// bindEvents 호출.
		App.initMarkData();
		App.bindEvents();

	}, // end of initContract;

	bindEvents: function() {
		// 입양버튼에 이벤트 등록. -> markAdopted 를 활용하세요.
		let btnAry = [];
		btnAry = Array.from(document.querySelectorAll('button.btn-adopt'));
		// console.log(btnAry);
		btnAry.forEach((item)=>{
			item.addEventListener('click', function(){
				App.markAdopted(this);
			})
		})		
	},

	initMarkData: function() {
		// adopted.json 정보를 활용해서 입양처리하기.
		fetch("./json/adopted.json")
		.then((res) => {
				return res.json()
			})
		.then(obj => {
			obj.forEach((item)=>{
				App.adoptedAry.push(item);
			})
			console.log(App.adoptedAry);
		});
	
	},

	markAdopted: function(e) {
		// 입양처리. adoptedAry에 추가.
		console.log(e.getAttribute('data-id'));
		App.adoptedAry.push(e.getAttribute('data-id'));
		console.log(App.adoptedAry);
	}, // end of markAdopted;

	handleAdopt: function(event) {
		// 사용자화면에서 입양버튼 클릭 시 처리. 버튼 비활성화 작업.

	} // end of handleAdopt;

}; // end of App;


$(function() {
	App.init();
});
