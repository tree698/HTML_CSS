package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/info")
public class inforServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public inforServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head><title>info</title></head>");
		out.print("<body>");
		
		String uri = request.getRequestURI();
		StringBuffer url = request.getRequestURL();
		String contentPath = request.getContextPath();
		String remoteAddr = request.getRemoteAddr();
		
		out.println("uri:" + uri + "<br>");
		out.println("url:" + url + "<br>");
		out.println("contentPath:" + contentPath + "<br>");
		out.println("remoteAddr:" + remoteAddr + "<br>");
		
		out.println("</body>");
		out.println("<html>");
	}

}
