package co.yedam.prjdb.member.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prjdb.member.service.MemberService;
import co.yedam.prjdb.member.service.MemberVO;
import co.yedam.prjdb.member.serviceImpl.MemberServiceImpl;


@WebServlet("/aJaxmemberCheck.do") // 멤버아이디 중복체크를 ajax방식으로 처리한다.
public class AJaxMemberCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public AJaxMemberCheck() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		MemberService dao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setMemberId(request.getParameter("memberId"));
		vo = dao.memberSelect(vo);
		
		String str = "Yes"; // 기본이 사용가능한 아이디
		if(vo != null) {
			str = "No"; // 사용불가 이미 존재하는 아이디입니다.
		}
		
		response.setContentType("text/html; charset=UTF-8"); //없어도 될 수 있음 안될때를 대비해서 넣어놓음
		response.getWriter().append(str);
		return;
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
