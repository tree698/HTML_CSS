<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
	List<String> list = new ArrayList<>();
	list.add("홍지화");
	list.add("김영숙");
	list.add("홍나미");
	list.add("정금나");
	
	request.setAttribute("list", list);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<c:forEach items="${list }" var="i" >${i }<br></c:forEach><br><br>

<c:forEach items="${list }" var="i" begin="0" end="2">My Lover: ${i }<br></c:forEach>



</body>
</html>