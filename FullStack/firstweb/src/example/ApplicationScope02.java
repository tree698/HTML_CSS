package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ApplicationScope02")
public class ApplicationScope02 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public ApplicationScope02() {
        super();
        
    }
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/HTML, utf-8");
		PrintWriter out = response.getWriter();
		
		ServletContext application = getServletContext();
		
		try {
		int value = (int) application.getAttribute("value");
		value ++;
		
		out.println("<h1>value: " + value + "</h1>");
		}catch(NullPointerException ex) {
			out.println("value 값이 설정되지 않았습니다.");
		}
	}
}
