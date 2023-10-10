package co.yedam.prjdb.member.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.prjdb.common.ViewResolve;


@WebServlet("/memberlogout.do")
public class MemberLogout extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public MemberLogout() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		String name = (String)session.getAttribute("name");
		session.invalidate(); // 세션정보를 완전히 삭제한다.
		request.setAttribute("message", name + "님 로그아웃이 처리되었습니다."); //전달할 데이터에 처리될 결과를 담고
		String page = "member/membermessage"; //담은것을 보여줄 페이지 선택
		ViewResolve.forward(request, response, page); //선택된 페이지를 뷰리졸브를 통해 전달
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
