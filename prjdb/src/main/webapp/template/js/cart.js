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
Number.prototype.formatNumber = function () {
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
	delCheckedItem: function () {
	// 선택된 상품을 삭제....금액을 재계산.
	},
	delAllItem: function () {
	// 장바구니 비우기 하면 실행되도록..
	},
	reCalc: function () {
	// 금액을 재계산.
	
	// 수량
	document.querySelector('div.sumcount').innerText = "상품갯수: " + cartItems.length+"개";
	// 금액
	let summoney = 0;
	cartItems.forEach((item,idx)=>{
		summoney += item.price*item.qty;
	})
	document.querySelector('div.summoney').onnerText = "합계금액: "+(summoney).formatNumber()+"원";
	},
	updateUI: function () {
	// 화면을 refresh.
		location.reload();
	},
	changePNum: function () {
	// 수량변경.
	},
	delItem: function () {
	// 삭제버튼 클릭시.
	e.parentElement.parentElement.parentElement.remove();
	},
	cartList: function () {
	// 상품목록 출력...아래에 있는 상품정보를 활용해서 수량만큼 출력이 되도록.
		cartItems.forEach((item, idx) => {
			let template = document.querySelector('div.row.data').cloneNode(true);
			// 이미지
			template.childNodes[1].childNodes[3].firstChild.setAttribute('src','./img/'+item.image);
			// 제품명
			template.childNodes[1].childNodes[5].childNodes[1].innerText = item.productNm;
			// 가격
			template.childNodes[3].childNodes[1].firstChild.setAttribute('id','p_price'+item.no);
			template.childNodes[3].childNodes[1].firstChild.setAttribute('value',item.price);
			template.childNodes[3].childNodes[1].innerText = (item.price).formatNumber()+"원";
			// 수량(id,name,value,button)
			template.childNodes[3].childNodes[3].childNodes[1].childNodes[1].setAttribute('id','p_num'+item.no);
			template.childNodes[3].childNodes[3].childNodes[1].childNodes[1].setAttribute('name','p_num'+item.no);
			template.childNodes[3].childNodes[3].childNodes[1].childNodes[1].setAttribute('value',item.qty);
			template.childNodes[3].childNodes[3].childNodes[1].childNodes[3].setAttribute('onclick','basket.changePNum()');
			template.childNodes[3].childNodes[3].childNodes[1].childNodes[5].setAttribute('onclick','basket.changePNum()');
			// 합계
			template.childNodes[3].childNodes[5].innerText = (item.price*item.qty).formatNumber()+"원";
			// 삭제버튼(함수)
			template.childNodes[5].childNodes[1].childNodes[1].setAttribute('onclick','basket.delItem(this)');
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

