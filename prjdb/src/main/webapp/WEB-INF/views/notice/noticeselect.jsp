<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>

	<body>
		<div align="center">
			<jsp:include page="../menu/header.jsp" />
			<div>
				<h1 id = "noticeTitle">게시글 상세보기</h1>
			</div>
			<div>
				<div>
					<table border="1">
						<tr>
							<th width="100">작성자</th>
							<td width="150">${n.noticeWriterName }</td>
							<th width="100">작성일자</th>
							<td width="150" align="center">${n.noticeDate }</td>
							<th width="100">조회수</th>
							<td width="50" align="center">${n.noticeHit }</td>
						</tr>
						<tr>
							<th>이미지</th>
							<td colspan="5"><img height="50px" src="attech/notice/${n.noticeImage }"></td>
						</tr>
						<tr>
							<th>제 목</th>
							<td colspan="5">${n.noticeTitle }</td>
						</tr>
						<tr>
							<th>내 용</th>
							<td colspan="5"><textarea rows="10" cols="80">${n.noticeSubject }</textarea></td>
						</tr>
						<tr>
							<th>첨부파일</th>
							<td colspan="5">${n.noticeAttech }</td>
						</tr>
					</table>
				</div>
			</div>
			<br>
			<!-- 등록화면 -->
			<table border="1">
				<tr>
					<th>댓글내용</th>
					<td><input type="text" name="content"></td>
				</tr>
				<tr>
					<th>작성자</th>
					<td><input type="text" name="writer"></td>
				</tr>
				<tr>
					<td colspan="2">
						<button id="addReply">댓글등록</button>
					</td>
				</tr>
			</table>
			<br>
			<h3>댓글목록</h3>
			<table border="1">
				<tbody id="replyList">
				</tbody>
			</table>
		</div>
		<!-- modal창 -->
		<style>
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>23</p>
    <p><input class = "content"></p>
    <p><button id="editBtn">수정</button></p>
  </div>

</div>
<!-- modal창 -->


		<script src='js/reply.js'></script>
		<script>
			const replyObj = new Reply();
			replyObj.showInfo(); //reply클래스의 메소드를 호출

			let noticeId = "${n.noticeId}";
		  	const fields = ['replyId', 'reply', 'replyer', 'replyDate']; //makeTr에서 쓰도록 밖으로 뺌
			replyObj.replyList(noticeId, function (data) {
				//출력할 필드 선언.
				data.forEach(function (reply) {
					let tr = makeTr(reply);
					document.querySelector('#replyList').appendChild(tr);
				});
			});
		  	
			// 댓글정보를 매개값으로 tr요소 생성 .makeTr
			function makeTr(reply) {
					//console.log(reply);
					let tr = document.createElement('tr');
					tr.addEventListener('dblclick', showEditForm); //더블클릭이벤트 
					tr.setAttribute('rid', reply.replyId);
					for (let prop of fields) {
						let td = document.createElement('td');
						if (prop == 'replyDate') {
							td.innerText = replyObj.displayDate(reply[prop]);
						} else {
							td.innerText = reply[prop];
						}
						tr.appendChild(td);
					}
					let td = document.createElement('td');
					let btn = document.createElement('button');
					btn.innerText = "삭제";
					btn.addEventListener('click', deleteReplyFnc);
					td.appendChild(btn);
					tr.appendChild(td);
					//document.querySelector('#replyList').appendChild(tr);
					return tr;
				}
			
			// 댓글 삭제 이벤트 핸들러
			function deleteReplyFnc(e) {
				let rid = e.target.parentElement.parentElement.getAttribute('rid');

				replyObj.replyRemove(rid, function (result) { //result는 변수이름
					console.log(rid);
					console.log(result);
					if (result.retCode == 'Success') {
						e.target.parentElement.parentElement.remove();
					} else if (result.retCode == 'Fail') {
						alert("처리중 에러.");
					} else {
						alert("잘못된코드반환.");
					}
				});
			}

			//댓글등록이벤트
			document.querySelector('#addReply').addEventListener('click', function (e) {
				let content = document.querySelector('input[name=content]').value;
				let writer = document.querySelector('input[name=writer]').value;
				const r = { nid: noticeId, replyer: writer, reply: content }
				replyObj.replyAdd(r, function (data) { 
					console.log(data);
				//등록 code here
				const fields = ['replyId', 'reply', 'replyer', 'replyDate'];
				if (data.retCode == 'Success') {
					let tr= makeTr(data.data);
					document.querySelector('#replyList').appendChild(tr);
					fieldInit();//댓글등록후창비우기
					/* let tr = document.createElement('tr');
					tr.setAttribute('rid', data.data.replyId);
					for (let prop of fields) {
						let td = document.createElement('td');
						if (prop == 'replyDate') {
							td.innerText = replyObj.displayDate(data.data[prop]);
						} else {
							td.innerText = data.data[prop];
						}
						tr.appendChild(td);
					}
					// 삭제버튼
					let td = document.createElement('td');
					let btn = document.createElement('button');
					btn.innerText = "삭제";
					btn.addEventListener('click', deleteReplyFnc);
					td.appendChild(btn);
					tr.appendChild(td);
					document.querySelector('#replyList').appendChild(tr); */
				} else if (data.retCode == 'Fail') {
					alert("처리중 에러")
				} else {
					alert("잘못된코드반환")
				}
			})
			});
			
			function fieldInit() { //댓글등록후 창 비우기
				document.querySelector('input[name=content]').value='';
				document.querySelector('input[name=writer]').value='';
			}
		
			// 수정화면 open 
			function showEditForm(e){ //더블클릭이벤트
				var modal = document.getElementById("myModal");
				 modal.style.display = "block";
				 console.log(this);
				 //
				 let rid = this.getAttribute('rid');
				 replyObj.replySearch(rid,function(data){
					 console.log(data);
					 document.querySelector('#myModal p').innerText =rid;
					 document.querySelector('#myModal input.content').value = data.reply; //data가 가지고있는 reply 값을 content에 넣어줌
				 });
				 
			}
			// modal창의 닫기버튼 클릭하면 이벤트 발생
			document.querySelector('span.close').addEventListener('click', function(){
				var modal = document.getElementById("myModal");
				 modal.style.display = "none";

			})
		    // When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
					var modal = document.getElementById("myModal");
				
				  if (event.target == modal) {
				    modal.style.display = "none";
				  }
				}
			
			//수정버튼 이벤트
			document.querySelector('#editBtn').addEventListener('click', editReplyHandler)
			
			function editReplyHandler(e){
				//Ajax 호출(db변경) / 화면 수정.
				let rid = document.querySelector('#myModal p').innerText;
				let content = document.querySelector('#myModal input.content').value;
				replyObj.replyModify({rid:rid, reply:content}, function (data) {
					console.log(data);
				if(data.retCode == 'Success'){
					let oldTr = document.querySelector('tr[rid="'+rid+'"]') //rid라고 하는 속성중에 그 값을가지고 있는 tr을 찾아오겠다
					let newTr = makeTr(data.data);
					document.querySelector('#replyList').replaceChild(newTr,oldTr); //replaceChild(바꿀새로운값,바뀔값)새로 만든 Tr을 oldTr로 바꾸겠다
				}else{
					alert('처리중 오류'); 
				}
				//modal닫기
				var modal = document.getElementById("myModal");
				modal.style.display = "none";
				}); // 수정기능 호출
				
			}

			/* let xhttp = new XMLHttpRequest();
			xhttp.open('get','AjaxReplyList.do?nid='+noticeId);
			xhttp.send();
			xhttp.onload = function(e) {
				console.log(xhttp.responseText);
				let data = JSON.parse(xhttp.responseText);
				console.log(data);
				//출력할 필드 선언.
				const fields=['replyId', 'reply','replyer','replyDate'];
				
				data.forEach(function(reply) {
					let tr=document.createElement('tr');
						for(let prop of fields){
							let td=document.createElement('td');
							if(prop == 'replyDate'){
								td.innerText = displayDate(reply[prop]);
							}else{
								td.innerText=reply[prop];
							}
							tr.appendChild(td);
					}
					document.querySelector('#replyList').appendChild(tr);
				}); */

				
	

				
		</script>
	</body>

	</html>