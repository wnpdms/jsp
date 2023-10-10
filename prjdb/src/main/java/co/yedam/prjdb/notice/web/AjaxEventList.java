package co.yedam.prjdb.notice.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.prjdb.notice.service.EventService;
import co.yedam.prjdb.notice.service.EventVO;
import co.yedam.prjdb.notice.serviceImpl.EventServiceImpl;


@WebServlet("/AjaxEventList.do")
public class AjaxEventList extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
    public AjaxEventList() {
        super();
        // TODO Auto-generated constructor stub
    }

	
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		EventService dao = new EventServiceImpl();
		List<EventVO> events = new ArrayList<EventVO>();
		
		ObjectMapper objectMapper = new ObjectMapper();
		
         events = dao.eventSelectList();
		
		
			String json = objectMapper.writeValueAsString(events);
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out= response.getWriter();
			out.print(json);

		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
