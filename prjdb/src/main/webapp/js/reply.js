/**
 * reply.js
 */
console.log('js/reply.js');

class Reply {
	showInfo() {
		console.log('sssss');
	}//end of showInfo

	//목록 조회 기능
	replyList(noticeId, callback, errorcall) { //목록조회 메소드
		/*		let xhttp = new XMLHttpRequest();
				xhttp.open('get', 'AjaxReplyList.do?nid=' + noticeId);
				xhttp.send();
				xhttp.onload = function(e) {
					//console.log(xhttp.responseText);
					let data = JSON.parse(xhttp.responseText);
					//console.log(data);
					callback(data);
				}*/
		fetch('AjaxReplyList.do?nid=' + noticeId) // fetch가 전해주는게 promise객체 promise: 처리중, 완료, 실패 세가지 상태를 가짐
			.then((resolve) => resolve.json()) // 정상적으로 값가져오면 then값 실행 , => 화살표함수 resolve.json()문자 -> 객체  
			.then(result => callback(result))
			.catch(err => errorcall(err));

	}
	//댓글삭제기능
	replyRemove(replyId, callback, errorcall) {
		/*	let xhttp = new XMLHttpRequest();
			xhttp.open('get', 'AjaxReplyDelete.do?rid=' + replyId);
			xhttp.send();
			xhttp.onload = function(e) {
				let data = JSON.parse(xhttp.responseText);
				callback(data); //callback함수에 데이터를 넘겨주겠다
			}*/
		fetch('AjaxReplyDelete.do?rid=' + replyId)
			.then(resolve => resolve.json())
			.then(result => callback(result))
			.catch(err => errorcall(err));
	}
	//댓글등록기능
	replyAdd(reply = { nid: 1, replyer: 'user1', reply: 'test' }, callback) {
		/*		let xhttp = new XMLHttpRequest();
				xhttp.open('post', "AjaxReplyAdd.do");
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhttp.send('nid='+reply.nid+'&content='+reply.reply+'&writer='+reply.replyer);
				xhttp.onload = function(e){
					let data = JSON.parse(xhttp.responseText);
					callback(data);
				}*/
		fetch('AjaxReplyAdd.do', {
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'nid=' + reply.nid + '&content=' + reply.reply + '&writer=' + reply.replyer
		})
			.then(resolve => resolve.json())
			.then(result => callback(result))
			.catch(console.log);
	}
	//댓글 한건조회
	replySearch(replyId, callback) {
		/*		let xhttp = new XMLHttpRequest();
				xhttp.open('get', "AjaxReplySearch.do?rid="+replyId);
				xhttp.send();
				xhttp.onload = function(e){
					let data = JSON.parse(xhttp.responseText);
					callback(data);
				}*/
		fetch('AjaxReplySearch.do?rid=' + replyId)
			.then(resolve => resolve.json())
			.then(result => callback(result))
			.catch(console.log);
	}
	//댓글수정기능
	replyModify(reply = { rid: 10, reply: "변경값입니다." }, callback) {
		/*		let xhttp = new XMLHttpRequest();
				xhttp.open('post', "AjaxReplyModify.do");
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhttp.send('rid='+reply.rid+'&content='+reply.reply); //파라메터 전달
				xhttp.onload = function(e){
					let data = JSON.parse(xhttp.responseText);
					callback(data);
				}*/
		fetch('AjaxReplyModify.do', {
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'rid=' + reply.rid + '&content=' + reply.reply
		})
			.then(resolve => resolve.json())
			.then(result => callback(result))
			.catch(console.log);
	}

	//숫자 => 년월일시분초로 바꿔 출력하는 기능
	displayDate(millis) {
		// 2023-09-05 13:22:11
		let today = new Date(millis);
		let yyyy = today.getFullYear(); // 2023
		let mm = ('0' + (today.getMonth() + 1)).slice(-2); // 09
		let dd = ('0' + today.getDate()).slice(-2);
		let hh = ('0' + today.getHours()).slice(-2);
		let mi = ('0' + today.getMinutes()).slice(-2);
		let ss = ('0' + today.getSeconds()).slice(-2);

		return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss;
	}
}//end of replyclass
