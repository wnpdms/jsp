package co.yedam.prjdb.notice.service;

import java.util.List;

public interface NoticeService {
	List<NoticeVO> noticeSelectList();
	NoticeVO noticeSelect(NoticeVO vo);
	int noticeInsert(NoticeVO vo);
	int noticeUpdate(NoticeVO vo);
	int noticeDelete(NoticeVO vo);
	
	//조회수증가
	void noticeHitUpdate(int id);
	
	//다형성 매소드 오버라이드, 검색을 위해서 두개의 값 받음
	List<NoticeVO> noticeSelectList(String key, String val);
	
	
}
