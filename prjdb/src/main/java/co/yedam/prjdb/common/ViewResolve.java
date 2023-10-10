package co.yedam.prjdb.common;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ViewResolve {
	public static void forward(HttpServletRequest request, HttpServletResponse response, String page) throws ServletException, IOException {
		String prefix = "WEB-INF/views/";
		String suffix = ".jsp";
		String viewPage = prefix + page + suffix; // => WEB-INF/views/main/main.jsp 요 값을 viewPage에 저장
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
	}
}
