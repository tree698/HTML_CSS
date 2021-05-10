<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%-- 
<h1>선언문 : <%! %> : 전역변수 및 메소드 선언</h1>
<h1>스크립트릿 <% %> 프로그래밍 코드 </h1>
<h1>표현식 <%= %> 화면에 출력할 내용 </h1>
--%>


id : <%= getId()%>

<%!                             
	String id = "u001";         //멤버변수 선언
	public String getId() {     //메소드 선언
		return id;
	}
%>

</body>
</html>