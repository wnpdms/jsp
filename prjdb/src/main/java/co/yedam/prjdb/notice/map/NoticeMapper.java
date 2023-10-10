package co.yedam.prjdb.notice.map;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.prjdb.notice.service.NoticeVO;

public interface NoticeMapper {
	List<NoticeVO> noticeSelectList();
	NoticeVO noticeSelect(NoticeVO vo);
	int noticeInsert(NoticeVO vo);
	int noticeUpdate(NoticeVO vo);
	int noticeDelete(NoticeVO vo);
	
	//조회수증가
	void noticeHitUpdate(int id);
	
	//매개변수 두개이상일때는 @Param을 써줘야함 넘어오는 키값이름(=변수명) key, val 값을 String key, String val로 정의할거야
	List<NoticeVO> noticeSelectList(@Param("key")String key, @Param("val")String val);
	
	
}
