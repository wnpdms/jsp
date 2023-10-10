package co.yedam.prjdb.notice.map;

import java.util.List;

import co.yedam.prjdb.notice.service.EventVO;

public interface EventMapper {
	List<EventVO> eventSelectList();
	EventVO eventSelect(EventVO vo);
	int eventInsert(EventVO vo);
	int eventUpdate(EventVO vo);
	int eventDelete(EventVO vo);
}
