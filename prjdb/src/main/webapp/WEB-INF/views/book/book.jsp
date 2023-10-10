<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Insert title here</title>
        <style></style>
    </head>
    <body>
        <div align="center">
            <jsp:include page="../menu/header.jsp" />
            <ul>
                <li>
                    <p>도서코드 <input type="text" name="bookCode" /></p>
                    <p>도서명 <input type="text" name="bookName" /></p>
                    <p>저자 <input type="text" name="bookWriter" /></p>
                    <p>출판사 <input type="text" name="bookPub" /></p>
                    <p>금액 <input type="text" name="bookPrice" /></p>
                </li>
            </ul>
        </div>
        <button type="button" onclick="#">저장</button>
        <button type="button" onclick="#">선택삭제</button>
        
        <table border="1"></table>
    </body>
</html>
