package example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/next")
public class nextServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public nextServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head><title>form</title></head>");
		out.print("<body>");
		
		int dice = (Integer)request.getAttribute("dice");
		out.print("dice:" + dice);
		for (int i=0; i<dice; i++) {
			out.print("<br>Hello");
		}
		
		out.print("</body>");
		out.print("</html>");
	}

}
