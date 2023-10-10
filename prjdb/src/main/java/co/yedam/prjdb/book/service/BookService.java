package co.yedam.prjdb.book.service;

import java.util.List;

public interface BookService {
	List<BookVO> bookSelectList();
	int bookInsert(BookVO vo);
	int bookUpdate(BookVO vo);
	int bookDelete(BookVO vo);
}
