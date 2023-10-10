package co.yedam.prjdb.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.prjdb.notice.map.ReplyMapper;
import co.yedam.prjdb.notice.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		ReplyMapper map = sqlSession.getMapper(ReplyMapper.class);
		
		ReplyVO rvo = new ReplyVO();
		//rvo.setNoticeId(1);
		//rvo.setReply("댓글테스트임~!!");
		rvo.setReplyId(1);
		System.out.println(map.select(rvo.getReplyId()));
		
		List<ReplyVO> list = map.list(1); //1번 글에 대한 댓글목록을 가져오겠다
		for(ReplyVO vo : list) {
			System.out.println(vo.toString());
		}
	}
}
