package co.yedam.prjdb.notice.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.prjdb.notice.service.ReplyService;
import co.yedam.prjdb.notice.service.ReplyVO;
import co.yedam.prjdb.notice.serviceImpl.ReplyServiceImpl;

@WebServlet("/AjaxReplyModify.do")
public class AjaxReplyModify extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public AjaxReplyModify() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String rid= request.getParameter("rid");
		String reply = request.getParameter("content");
		
		ReplyVO vo = new ReplyVO();
		vo.setReplyId(Integer.parseInt(rid));
		vo.setReply(reply);
		
		ReplyService svc = new ReplyServiceImpl();
		Map<String, Object> resultMap = new HashMap<>();
		if(svc.editReply(vo)) {
			vo = svc.getReply(Integer.parseInt(rid));
			resultMap.put("retCode", "Success");
			resultMap.put("data", vo);
		}else {
			resultMap.put("retCode", "Fail");
		}
		ObjectMapper objectMapper = new ObjectMapper(); //LocalDate 쓰면 registerModule 넣어줘야함
		String json = objectMapper.writeValueAsString(resultMap);
		
		response.setContentType("text/json;charset=UTF-8"); //한글깨짐방지
		response.getWriter().append(json);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
