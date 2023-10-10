package co.yedam.prjdb.notice.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.prjdb.common.DataSource;
import co.yedam.prjdb.notice.map.EventMapper;
import co.yedam.prjdb.notice.service.EventService;
import co.yedam.prjdb.notice.service.EventVO;

public class EventServiceImpl implements EventService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	EventMapper map = sqlSession.getMapper(EventMapper.class);
	@Override
	public List<EventVO> eventSelectList() {
		return map.eventSelectList();
	}
	@Override
	public EventVO eventSelect(EventVO vo) {
		return map.eventSelect(vo);
	}
	@Override
	public boolean eventInsert(EventVO vo) {
		return false;
	}
	@Override
	public int eventUpdate(EventVO vo) {
		return map.eventUpdate(vo);
	}
	@Override
	public int eventDelete(EventVO vo) {
		return map.eventDelete(vo);
	}
	


}
