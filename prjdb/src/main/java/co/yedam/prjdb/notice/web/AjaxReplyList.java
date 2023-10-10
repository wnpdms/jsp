package co.yedam.prjdb.notice.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
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

@WebServlet("/AjaxReplyList.do")
public class AjaxReplyList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AjaxReplyList() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String nid = request.getParameter("nid");
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.listReply(Integer.parseInt(nid)); // 1번글 보고싶슴다 list는 자바객체
		// 추가.
		String param = request.getParameter("param");

		if (param == null) {

			ObjectMapper objectMapper = new ObjectMapper(); // LocalDate 쓰면 registerModule 넣어줘야함
			String json = objectMapper.writeValueAsString(list); // 객체를 스트링으로 바꿔줌

			response.setContentType("text/json;charset=utf-8"); // 한글깨짐방지

			PrintWriter out = response.getWriter(); // json 문자열로 반환해줌
			out.print(json);

		} else {
			// {"data":[["값"],[],....]}
			String json = "{\"data\":[";
			int cnt = 0;
//			for (ReplyVO vo : list) {
//				json += "[" //
//						+ "\"" + vo.getReplyId() + "\","//
//						+ "\"" + vo.getReply() + "\","//
//						+ "\"" + vo.getReplyer() + "\","//
//						+ "\"" + vo.getReplyDate() + "\""//
//						+ "]";
//				if(++cnt != list.size()) {
//					json += ",";
//				}
//			}
			
			json += "]}";
			Map<String, Object>map = new HashMap<>();
			map.put("data", list);
			
			ObjectMapper objectMapper = new ObjectMapper(); // LocalDate 쓰면 registerModule 넣어줘야함
			json = objectMapper.writeValueAsString(map); // 객체를 스트링으로 바꿔줌
			
			
			response.setContentType("text/json;charset=utf-8"); // 한글깨짐방지
			PrintWriter out = response.getWriter(); // json 문자열로 반환해줌
			out.print(json);

		}//end of else
		
	

	}//end of doGet

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
