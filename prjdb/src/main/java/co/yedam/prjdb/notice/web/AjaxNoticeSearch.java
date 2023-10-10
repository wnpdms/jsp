package co.yedam.prjdb.notice.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import co.yedam.prjdb.notice.service.NoticeService;
import co.yedam.prjdb.notice.service.NoticeVO;
import co.yedam.prjdb.notice.serviceImpl.NoticeServiceImpl;


@WebServlet("/ajaxNoticeSearch.do")
public class AjaxNoticeSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public AjaxNoticeSearch() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		NoticeService dao = new NoticeServiceImpl();
		List<NoticeVO> notices = new ArrayList<NoticeVO>();
		ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule()); // json 형태의 데이터로 변환하고 날짜형 jsr310규정을 충족시키기 위해서
		
		String key = request.getParameter("key");
		String val = request.getParameter("val");
		
		notices = dao.noticeSelectList(key, val);
		
		//list to json
		String list = objectMapper.writeValueAsString(notices); // object(여기선 notices)객체를 넣으면 String 형태의 json객체로 바꿔줄게 스트링 리스트에 담고
		
		response.setContentType("text/html; charset=UTF-8"); // 한글깨짐 방지 text/html 데이터라는 인식
		response.getWriter().append(list); //리스트를 호출하는 곳에 보냄
		return;
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
