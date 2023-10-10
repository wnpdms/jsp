package co.yedam.prjdb.notice.service;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyId;
	private int noticeId;
	private String replyer; //댓글작성자
	private String reply; //댓글 
	private Date replyDate;
	private Date updateDate;
}
