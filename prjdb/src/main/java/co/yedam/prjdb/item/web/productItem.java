package co.yedam.prjdb.item.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.prjdb.common.ViewResolve;
import co.yedam.prjdb.item.service.ItemService;
import co.yedam.prjdb.item.service.ItemVO;
import co.yedam.prjdb.item.serviceImpl.ItemServiceImpl;


@WebServlet("/productItem.do")
public class productItem extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public productItem() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ItemService dao = new ItemServiceImpl();
		ItemVO vo = new ItemVO();
		
		vo.setItemId(Integer.valueOf(request.getParameter("itemId")));
		vo = dao.itemSelect(vo);
		
		request.setAttribute("p", vo);

		String viewPage ="/boot-shop/item.jsp";
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
