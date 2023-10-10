package co.yedam.prjdb.book.map;

import java.util.List;

import co.yedam.prjdb.book.service.BookVO;

public interface BookMapper {
List<BookVO> bookSelectList();
int bookInsert(BookVO vo);
int bookUpdate(BookVO vo);
int bookDelete(BookVO vo);

}
