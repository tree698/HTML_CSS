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
	int value2 = (int)application.getAttribute("value2");
	value2 += 10;
%>
<h1>value2: <%=value2 %> </h1>
<%
}catch(NullPointerException ex){
%>
<h2>value2 설정값이 없습니다.</h2>
<%
}
%>

</body>
</html>