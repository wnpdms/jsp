package co.yedam.prjdb.notice.service;

import java.util.List;

public interface ReplyService {
	public boolean addReply(ReplyVO vo);
	public boolean editReply(ReplyVO vo);
	public boolean delReply(int replyId); //삭제
	public ReplyVO getReply(int replyId); //한건조회
	public List<ReplyVO> listReply(int noticeId); //전체목록
	
}
