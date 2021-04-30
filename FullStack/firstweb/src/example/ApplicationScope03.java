package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ApplicationScope03")
public class ApplicationScope03 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
    public ApplicationScope03() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/HTML; charset=utf-8");
		PrintWriter out = response.getWriter();
		
		ServletContext study = getServletContext();
		int value = 123;
		study.setAttribute("value", value); 
		
		out.println("<h1>value: " + value + "</h1>");	
	}

}
