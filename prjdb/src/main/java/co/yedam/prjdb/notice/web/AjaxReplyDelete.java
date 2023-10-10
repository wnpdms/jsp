package co.yedam.prjdb.notice.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prjdb.notice.service.ReplyService;
import co.yedam.prjdb.notice.serviceImpl.ReplyServiceImpl;


@WebServlet("/AjaxReplyDelete.do")
public class AjaxReplyDelete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public AjaxReplyDelete() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String replyId = request.getParameter("rid"); //rid 이 값을 가져오면
		ReplyService svc = new ReplyServiceImpl();
		if(svc.delReply(Integer.parseInt(replyId))) {// 파싱하는 이유는 파라메터는 문자열타입으로 고정돼있어서 델리플라이는 인트타입이라 인트타입으로 바꿔줌
			//{"retCode":"Success"} 성공하면 리턴코드 석세스
			response.getWriter().print("{\"retCode\":\"Success\"}");
		}else {
			//{"retCode":"Fail"} 실패하면 리턴코드 페일
			response.getWriter().print("{\"retCode\":\"Fail\"}");
		}
		
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
