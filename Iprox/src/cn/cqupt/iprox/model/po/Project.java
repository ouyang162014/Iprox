package cn.cqupt.iprox.model.po;

import java.sql.Date;

public class Project {
	private Integer pid;    //pid
	private String identifid;//
	private String ptag;//项目标签
	private String ptitle;//项目名
	private String description;//项目描述
	private String institution;//机构
	private String contributor;//提交人
	private String reference;//参考文献
	private Integer projectowner;//项目所有者（uid）
	private Integer privacy;//权限（两种，公开的、私有的）
	private Integer status;//状态（两种，save、submit）
	//以下几种字段数据库说明中无
	private Date date;//
	private String contactinformation;//
	private Integer reviewerid;//
	private String pubmedid;//
	private Integer submitted;//
	private String ipxproid;//
	
	private String changeid;//2015年5月16日project页面任务时加入
	
	
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getIdentifid() {
		return identifid;
	}
	public void setIdentifid(String identifid) {
		this.identifid = identifid;
	}
	public String getPtag() {
		return ptag;
	}
	public void setPtag(String ptag) {
		this.ptag = ptag;
	}
	public String getPtitle() {
		return ptitle;
	}
	public void setPtitle(String ptitle) {
		this.ptitle = ptitle;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getInstitution() {
		return institution;
	}
	public void setInstitution(String institution) {
		this.institution = institution;
	}
	public String getContributor() {
		return contributor;
	}
	public void setContributor(String contributor) {
		this.contributor = contributor;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public Integer getProjectowner() {
		return projectowner;
	}
	public void setProjectowner(Integer projectowner) {
		this.projectowner = projectowner;
	}
	public Integer getPrivacy() {
		return privacy;
	}
	public void setPrivacy(Integer privacy) {
		this.privacy = privacy;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getContactinformation() {
		return contactinformation;
	}
	public void setContactinformation(String contactinformation) {
		this.contactinformation = contactinformation;
	}
	public Integer getReviewerid() {
		return reviewerid;
	}
	public void setReviewerid(Integer reviewerid) {
		this.reviewerid = reviewerid;
	}
	public String getPubmedid() {
		return pubmedid;
	}
	public void setPubmedid(String pubmedid) {
		this.pubmedid = pubmedid;
	}
	public Integer getSubmitted() {
		return submitted;
	}
	public void setSubmitted(Integer submitted) {
		this.submitted = submitted;
	}
	public String getIpxproid() {
		return ipxproid;
	}
	public void setIpxproid(String ipxproid) {
		this.ipxproid = ipxproid;
	}
	
	public String getChangeid() {
		return changeid;
	}
	public void setChangeid(String changeid) {
		this.changeid = changeid;
	}
	
	public Project(Integer pid, String identifid, String ptag, String ptitle,
			String description, String institution, String contributor,
			String reference, Integer projectowner, Integer privacy,
			Integer status, Date date, String contactinformation,
			Integer reviewerid, String pubmedid, Integer submitted,
			String ipxproid, String changeid) {
		super();
		this.pid = pid;
		this.identifid = identifid;
		this.ptag = ptag;
		this.ptitle = ptitle;
		this.description = description;
		this.institution = institution;
		this.contributor = contributor;
		this.reference = reference;
		this.projectowner = projectowner;
		this.privacy = privacy;
		this.status = status;
		this.date = date;
		this.contactinformation = contactinformation;
		this.reviewerid = reviewerid;
		this.pubmedid = pubmedid;
		this.submitted = submitted;
		this.ipxproid = ipxproid;
		this.changeid = changeid;
	}
	public Project() {
	}
	
	
	
	

}
