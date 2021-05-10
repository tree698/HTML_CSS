package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ApplicationScope04")
public class ApplicationScope04 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ApplicationScope04() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/HTML; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		ServletContext application = getServletContext();
		try {
			int value2 = (int) application.getAttribute("value2");
			value2 -= 5;
			application.setAttribute("value2", value2);
			out.println("<h1>value2: " + value2 + "</h1>");
		}catch(NullPointerException ex) {
			out.println("<h2>value 값이 설정되지 않았습니다.</h2>");
		}
	}

}
