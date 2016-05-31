package cn.cqupt.iprox.model.po;

/**
 * 检测器
 * 质谱仪信息，有三个类masource、msanalyer、msdetector
 * @author Cbillow
 *
 */
public class Msdetector {
	
	private int id ;			//检测器id
	private String cv ;
	private String accession ;	//仪器编号
	private String name ;		//仪器名称
	private String value ;		//仪器型号
	
	/*
	 *	未命名字段
	 */
	private int template ;
	
	
	public Msdetector() {}
	public Msdetector(int id, String cv, String accession, String name,
			String value, int template) {
		this.id = id;
		this.cv = cv;
		this.accession = accession;
		this.name = name;
		this.value = value;
		this.template = template;
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
