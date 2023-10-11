// cart.js 의 시작부분.
console.log('cart.js');

// Intl 객체를 사용하여 포맷 지정.
function number_format(amount) {
	return new Intl.NumberFormat('ko-KR', {
		style: 'currency',
		currency: 'KRW'
	}).format(amount);
}

// prototype에 정의해서 메소드 추가: 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function() {
	if (this == 0) return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) nstr = nstr.replace(regex, '$1' + ',' + '$2');
	return nstr;
};

console((100000).formatNumber());
// 1,000,000 => 1000000
//console.log('1,000,000'.replace(/,/g, ''));

let basket = {
	cartCount: 0,
	cartTotal: 0,
	delCheckedItem: function() {
		// 선택된 상품을 삭제....금액을 재계산.
		let ckbox = []
		ckbox = document.querySelectorAll('input[type="checkbox"]:checked');
		ckbox.forEach((item) => {
			item.closest('div.row.data').remove();
		})
		basket.reCalc();
	},
	delAllItem: function() {
		// 장바구니 비우기 하면 실행되도록..
		let cartList = document.querySelectorAll('div.row.template');
		cartList.forEach((item) => {
			item.remove();
		})
		basket.reCalc();
	},
	reCalc: function() {
		// 금액을 재계산.

		// 수량
		let pNumArr = document.getElementsByClassName('p_num');
		let count = 0;
		for (let i = 0; i < pNumArr.length; i++) {
			count += Number(pNumArr[i].getAttribute('value'));
		}
		// 금액
		let pSumArr = [];
		pSumArr = document.getElementsByClassName('sum');
		let summoney = 0;
		for (let i = 1; i < pSumArr.length; i++) {
			summoney += Number(pSumArr[i].getAttribute('value'));
		}
		//
		document.querySelector('div.summoney').onnerText = "합계금액: " + (summoney).formatNumber() + "원";
	},
	updateUI: function() {
		// 화면을 refresh.
		location.reload();
	},
	changePNum: function(e) {
		// 수량변경.
		let val = parseInt(e.parentElement.childNodes[1].getAttribute('value'));
		//up
		if (e.childNodes[1].className.search("up") != -1) {
			e.parentElement.childNodes[1].setAttribute('value', val + 1);
			let price = Number(e.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].getAttribute('value'));
			e.parentElement.parentElement.parentElement.childNodes[5].setAttribute('value', price * (val + 1));
			e.parentElement.parentElement.parentElement.childNodes[5].innerText = (price * (val + 1)).formatNumber() + "원";
		} else if (e.childNodes[1].className.search("down") != -1 && val > 0) {
			//down
			//console.log("down");
			e.parentElement.childNodes[1].setAttribute('value', val - 1);
			let price = Number(e.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].getAttribute('value'));
			e.parentElement.parentElement.parentElement.childNodes[5].setAttribute('value', price * (val - 1));
			e.parentElement.parentElement.parentElement.childNodes[5].innerText = (price * (val - 1)).formatNumber() + "원";
		}
		basket.reCalc();
	},
	delItem: function(e) {
		// 삭제버튼 클릭시.
		e.closest('div.row.data').remove();
		basket.reCalc();
	},
	cartList: function() {
		// 상품목록 출력...아래에 있는 상품정보를 활용해서 수량만큼 출력이 되도록.
		cartItems.forEach((item) => {
			let template = document.querySelector('div.row.data').cloneNode(true);
			// 이미지
			console.log(template.querySelector('input[name="p_price"]').nextSibling);
			template.querySelector('img').setAttribute('src', './img/' + item.image);

			//제품명
			template.querySelector('.pname').querySelector('span').innerText = item.productNm;

			//가격(id,value,text)
			template.querySelector('input[name="p_price"]').setAttribute('id', 'p_price' + item.no);
			template.querySelector('input[name="p_price"]').setAttribute('value', item.price);
			template.querySelector('input[name="p_price"]').nextSibling.textContent = (item.price).formatNumber() + "원";

			//수량(id,name,value,button)
			template.querySelector('.p_num').setAttribute('id', 'p_num' + item.no);
			template.querySelector('.p_num').setAttribute('name', 'p_num' + item.no);
			template.querySelector('.p_num').setAttribute('value', item.qty);

			//합계
			template.childNodes[3].childNodes[5].innerText = (item.price * item.qty).formatNumber() + "원";
			template.childNodes[3].childNodes[5].setAttribute('value', item.price * item.qty);
			document.querySelector('div.basketdiv').append(template);

		})
		basket.reCalc();
	}
};

var cartItems = [{
	no: 1,
	productNm: '장바구니1',
	qty: 2,
	price: 12000,
	image: 'basket1.jpg'
},
{
	no: 2,
	productNm: '장바구니2',
	qty: 1,
	price: 22000,
	image: 'basket2.jpg'
},
{
	no: 3,
	productNm: '고급장바구니',
	qty: 1,
	price: 23600,
	image: 'basket3.jpg'
}
]

basket.cartList();

// 1. db를 연결해서 사용하려면 아래의 내용으로 작업을 하면 됨.
//fetch('cartSelectList')
//	.then(resolve => resolve.json())
//	.then(result => {
//		//console.log(result);
//		basket.cartList();
//	})
//	.catch(err => console.log(err))

