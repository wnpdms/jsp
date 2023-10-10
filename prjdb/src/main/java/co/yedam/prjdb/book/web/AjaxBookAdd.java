package co.yedam.prjdb.book.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.mapping.ResultMap;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import co.yedam.prjdb.book.service.BookService;
import co.yedam.prjdb.book.service.BookVO;
import co.yedam.prjdb.book.serviceImpl.BookServiceImpl;

@WebServlet("/ajaxbookadd.do")
public class AjaxBookAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxBookAdd() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService dao = new BookServiceImpl();
		BookVO vo = new BookVO();
		
		String bookCode = request.getParameter("bookCode");
		String bookName = request.getParameter("bookName");
		String bookWriter = request.getParameter("bookWriter");
		String bookPub = request.getParameter("bookPub");
		System.out.println(bookWriter+bookPub);
		int bookPrice = Integer.parseInt(request.getParameter("bookPrice"));
		
		vo.setBookCode(bookCode);
		vo.setBookName(bookName);
		vo.setBookWriter(bookWriter);
		vo.setBookPub(bookPub);
		vo.setBookPrice(bookPrice);
		
		Map<String, Object> resultmap = new HashMap<>();
		int n = dao.bookInsert(vo);
		
		if (n != 0) {
			resultmap.put("retCode", "Success");
			resultmap.put("book", vo);
		} else {
			resultmap.put("retCode", "Fail");
		}
		
		ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule());
		String json = objectMapper.writeValueAsString(resultmap);
		
		response.setContentType("text/json; charset=UTF-8");
		response.getWriter().print(json);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
