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


@WebServlet("/productList.do")
public class ProductList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public ProductList() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ItemService dao = new ItemServiceImpl();
		List<ItemVO> items = new ArrayList<ItemVO>();
		
		ObjectMapper objectMapper = new ObjectMapper();
		items = dao.itemSelectList();
		request.setAttribute("products", items);
		
		String viewPage="/boot-shop/index.jsp";
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
		ViewResolve.forward(request, response, viewPage);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
