<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	try {
		int value = (int) application.getAttribute("value");
		value += 2;
%>

<h1>value: <%= value %> </h1>

<%
	}catch(NullPointerException ex){
%>

<h2>value 값이 설정되지 않았습니다.</h2>

<%
	}
%>


</body>
</html>