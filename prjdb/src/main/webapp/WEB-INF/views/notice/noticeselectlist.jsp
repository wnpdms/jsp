<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
			<h2>게시글 목록</h2>
		</div>
		<div>
			<form id="search">
				<table border="1">
					<tr>
						<td><label for="key">choose a key: </label> 
						<select id="key" name="key">
								<option value="title">제목</option>
								<option value="subject">내용</option>
								<option value="writer">작성자</option>
						</select> <input type="text" name="val" id="val" onkeydown="enterKey(event)"> &nbsp;&nbsp; 
						<input type="button" id="btn" value="검색" onclick="searchList()">
						</td>
					</tr>
				</table>
			</form>
		</div>
		<br>
		<div>
			<table border="1" id="listtable">
				<thead>
					<tr>
						<th width="50">순번</th>
						<th width="100">이미지</th>
						<th width="250">제목</th>
						<th width="100">작성자</th>
						<th width="100">작성일자</th>
						<th width="50">조회수</th>
						<th width="100">첨부파일</th>
					</tr>
				</thead>
				<tbody id="tlist">
					<c:choose>
						<c:when test="${empty notices }">
							<tr>
								<td colspan="7" align="center">데이터가 존재하지 않습니다.</td>
							</tr>
						</c:when>
						<c:otherwise>
							<c:forEach items="${notices }" var="n">
								<tr onmouseover="this.style.background='#C8FE2E'"
									onmouseout="this.style.background='#FFFFFF'"
									onclick="selectNotice(${n.noticeId})">
									<td align="center">${n.noticeId }</td>
									<td align="center">
									<img src="attech/notice/${n.noticeThumb }"></td>
									<td>${n.noticeTitle }</td>
									<td align="center">${n.noticeWriterName }</td>
									<td align="center">${n.noticeDate }</td>
									<td align="center">${n.noticeHit }</td>
									<td align="center">${n.noticeAttech }</td>
								</tr>
							</c:forEach>
						</c:otherwise>
					</c:choose>
				</tbody>
			</table>
		</div>
		<br>
		<div>
			<c:if test="${not empty id }">
				<button type="button" onclick="location.href='noticewriteform.do'">글쓰기</button>
			</c:if>
			<form id="sform" action="noticeselect.do" method="post">
				<input type="hidden" id="noticeId" name="noticeId">
			</form>
		</div>
	</div>
	<script type="text/javascript">
	function selectNotice(id){
		let form= document.getElementById("sform");
		form.noticeId.value = id;
		form.submit();
	}

	function searchList(){
		let form = document.getElementById("search");
		let key = form.key.value;
		let val = form.val.value;
		//const formData = new FormData(form); // 자바스크립트의 FormData class. 생성할때 폼 객체를 넣어줌 그럼 html 폼이구나 인식
		//let payload = formData; // FormData를 payload라는 일반 변수에 담아 한번 더 폼객체를 일반화 시킴
		let payload = "key="+key+"&val="+val;
		let url = "ajaxNoticeSearch.do";
		fetch(url,{
			method: "POST", 
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: payload //전달할 데이터
		}).then(response=>response.json()) //결과받는 콜백함수 (json 타입으로 받겠다.)
		  .then(json=>htmlViews(json)); // 데이터가 오는지 확인위해 콘솔에 한번 출력해줘
	}
	function htmlViews(datas){
			document.querySelector('#tlist').remove(); //본문에서 <tbody> 태그 삭제하기
			const tbody = document.createElement('tbody');
			tbody.setAttribute('id','tlist'); //tbody 속성 정의
			tbody.innerHTML = datas.map(data=>htmlConvert(data)).join('');//map은 for each역할을 함. 다음데이터를 연결하라 공백없이
			document.querySelector('#listtable').appendChild(tbody);
	}

	function htmlConvert(n){ 
		 if(n.noticeAttech == null){ // 첨부파일이 존재하지 않으면
				n.noticeAttech = '';
		 }
			return `
			<tr onmouseover="this.style.background='#C8FE2E'"
					onmouseout="this.style.background='#FFFFFF'"
					onclick="selectNotice(\${n.noticeId})">
					<td align="center">\${n.noticeId }</td>
					<td align="center">
						<img src="attech/notice/\${n.noticeThumb }">
					</td>
					<td>\${n.noticeTitle }</td>
					<td align="center">\${n.noticeWriterName }</td>
					<td align="center">\${n.noticeDate }</td>
					<td align="center">\${n.noticeHit }</td>
					<td align="center">\${n.noticeAttech }</td>
			</tr>
			`
	}

	function enterkey(e){
		if(e.keyCode == 13){
			document.getElementById("btn").focus();
		}
	}

	</script>
</body>
</html>