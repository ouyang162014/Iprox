package cn.cqupt.iprox.model.po;

import java.util.Date;

public class Group {

	private Integer gid ;			//群组编号
	private String groupName ;		//群组名称
	private String description ;	//群组描述
	private Integer founder ;		//创建者
	private Integer status ;		//群组状态（系统管理员对申请处理状态，三种状态：reviewing<等待审核>  accepted<接受申请>  refused?<拒绝申请>）
	private Date createTime ;		//创建组的时间
	private String gtag ;			//群组标签
	
	public Group() {
		super();
	}
	public Group(Integer gid, String groupName, String description,
			Integer founder, Integer status, Date createTime, String gtag) {
		super();
		this.gid = gid;
		this.groupName = groupName;
		this.description = description;
		this.founder = founder;
		this.status = status;
		this.createTime = createTime;
		this.gtag = gtag;
	}
	
	public Integer getGid() {
		return gid;
	}
	public void setGid(Integer gid) {
		this.gid = gid;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getFounder() {
		return founder;
	}
	public void setFounder(Integer founder) {
		this.founder = founder;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public String getGtag() {
		return gtag;
	}
	public void setGtag(String gtag) {
		this.gtag = gtag;
	}
}
