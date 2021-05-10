package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Param")
public class ParameterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ParameterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head><title>Parameter</title></head>");
		out.print("<body>");
		
		String name = request.getParameter("name");
		String age = request.getParameter("age");
		
		out.println("name:" + name + "<br>");
		out.println("age:" + age + "<br>");
		
		out.println("</body>");
		out.println("<html>");
	}

}
