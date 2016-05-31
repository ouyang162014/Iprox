package cn.cqupt.iprox.model.po;

/**
 * 样品处理
 * 实验信息，有六张表growth、treament、extraction、diqestion、acquisition、separation
 * @author Cbillow
 *
 */
public class Treatment {

	private int id ;
	private String cv ;
	private String accession ;	//编号
	private String name ;		//仪器名称
	private String value ;		//仪器型号
	
	
	public Treatment() {}
	public Treatment(int id, String cv, String accession, String name,
			String value) {
		this.id = id;
		this.cv = cv;
		this.accession = accession;
		this.name = name;
		this.value = value;
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
