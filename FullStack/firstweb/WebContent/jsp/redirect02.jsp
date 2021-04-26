<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>redirect</h1>
<p>게시판 같은 곳에서 글을 작성하는 경우가 있습니다. </p>
<p>글을 모두 작성한 후에 글 작성 버튼을 클릭한다</p>
<p>이때 클라이언트가 서버에게 "글을 작성해 주세요"라는 요청을 보낸다</p>
<p>서버는 해당 글을 저장한 후, 웹 브라우저에게 글 목록으로 이동하라고 응답을 보낸다</p>
<p>웹 브라우저는 글 목록으로 이동하라는 서버의 요청을 받은 후, 자동으로 서버에게 글 목록을 요청하여 응답받아 출력한다</p>
<p>서버가 클라이언트에게 어떤 URL로 이동하라는 요청을 보내는 것을 리다이렉트라고 한다</p>

<br><br>

<p>리다이렉트는 HTTP프로토콜로 정해진 규칙이다</p>
<p>서버는 클라이언트의 요청에 대해 특정 URL로 이동을 요청할 수 있다. 이를 리다이렉트라고 한다</p>
<p>서버는 클라이언트에게 HTTP 상태코드 <strong>302</strong>로 응답하는데 이때 헤더 내 Location 값에 이동할 URL을 추가한다</p>
<p>클라이언트는 리다이렉션 응답을 받게 되면 헤더(Location)에 포함된 URL로 재 요청을 보내게 된다.</p>
<p>이때 브라우저의 주소창은 새 URL로 바뀌게 된다</p>
<p>클라이언트는 서버로부터 받은 상태값이 302이면 Location 헤더값으로 재요청을 보내게 된다</p>
<p>이때 브라우저의 주소창은 전송받은 URL로 바뀌게 된다</p>
<p>서블릿이나 JSP는 리다이렉트하기 위해 HttpServlletResponse 클래스의 <strong>sendRedirect()</strong>메소드를 사용한다</p>



</body>
</html>