<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메뉴</title>
<link rel="stylesheet" href="/prjdb/css/menu.css">
</head>
<body>
	<ul class="menu">
		<li><a href="home.do">홈</a></li>
		<li><a href="memberjoinform.do">회원가입</a></li>
		<li><a href="noticeselectlist.do">공지사항</a> <!-- <ul class="submenu">
				<li><a href="#">submenu01</a></li>
				<li><a href="#">submenu02</a></li>
				<li><a href="#">submenu03</a></li>
				<li><a href="#">submenu04</a></li>
				<li><a href="#">submenu05</a></li>
			</ul> --></li>
		<c:if test="${empty id }">
			<li><a href="book.do">Book</a></li>
			<li><a href="#">MENU5</a></li>
			<li><a href="memberloginform.do">로그인</a></li>
			<li><a href="productList.do">index보이게</a></li>
			<li><a href="productItem.do">item</a></li>
		</c:if>
		<c:if test="${not empty id}">
			<li><a href="memberloginform.do">멤버</a></li>
			<li><a href="memberlogout.do">로그아웃</a></li>
			<li><a href="#">MENU6</a></li>
			<li>${name}님이 접속중</li>
		</c:if>
	</ul>
</body>
</html>