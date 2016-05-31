package cn.cqupt.iprox.model.po;

/**
 * 离子源
 * 质谱仪信息，有三个类masource、msanalyer、msdetector
 * @author Cbillow
 *
 */
public class Mssource {

	private int id ;			//离子源id
	private String cv ;
	private String accession ;	//离子源编号
	private String name ;		//仪器名称
	private String value ;		//仪器型号
	private String method ;		//电离方法
	
	/*
	 *	未命名字段
	 */
	private int template ;		
	
	
	public Mssource() {}
	public Mssource(int id, String cv, String accession, String name,
			String value, int template, String method) {
		this.id = id;
		this.cv = cv;
		this.accession = accession;
		this.name = name;
		this.value = value;
		this.template = template;
		this.method = method;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public int getTemplate() {
		return template;
	}
	public void setTemplate(int template) {
		this.template = template;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCv() {
		return cv;
	}
	public void setCv(String cv) {
		this.cv = cv;
	}
	public String getAccession() {
		return accession;
	}
	public void setAccession(String accession) {
		this.accession = accession;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
}
