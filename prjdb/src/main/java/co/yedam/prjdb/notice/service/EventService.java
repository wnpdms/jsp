package co.yedam.prjdb.notice.service;

import java.util.List;

public interface EventService {
	List<EventVO> eventSelectList();
	EventVO eventSelect(EventVO vo);
	boolean eventInsert(EventVO vo);
	int eventUpdate(EventVO vo);
	int eventDelete(EventVO vo);
}
