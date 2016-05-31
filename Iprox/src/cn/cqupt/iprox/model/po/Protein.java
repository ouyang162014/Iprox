package cn.cqupt.iprox.model.po;
/**
 * 蛋白质持久对象
 * @author Administrator
 *
 */
public class Protein {

	private int protein_id;			//主键自增
	private String name;				//
	private String protein;			//Uniprot蛋白质标识
	private String status;			//状态
	private float coverage;			//覆盖率
	private float pi;				//等电点
	private float threshold;		//阀值
	private int peptides;			//肽段数目
	private int distinct_peptides;	//不同肽段数目
	private int ptms;				//翻译后修饰数目
	private int group_id;			//蛋白组
	private double psms;			//
	public int getProtein_id() {
		return protein_id;
	}
	public void setProtein_id(int protein_id) {
		this.protein_id = protein_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProtein() {
		return protein;
	}
	public void setProtein(String protein) {
		this.protein = protein;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public float getCoverage() {
		return coverage;
	}
	public void setCoverage(float coverage) {
		this.coverage = coverage;
	}
	public float getPi() {
		return pi;
	}
	public void setPi(float pi) {
		this.pi = pi;
	}
	public float getThreshold() {
		return threshold;
	}
	public void setThreshold(float threshold) {
		this.threshold = threshold;
	}
	public int getPeptides() {
		return peptides;
	}
	public void setPeptides(int peptides) {
		this.peptides = peptides;
	}
	public int getDistinct_peptides() {
		return distinct_peptides;
	}
	public void setDistinct_peptides(int distinct_peptides) {
		this.distinct_peptides = distinct_peptides;
	}
	public int getPtms() {
		return ptms;
	}
	public void setPtms(int ptms) {
		this.ptms = ptms;
	}
	public int getGroup_id() {
		return group_id;
	}
	public void setGroup_id(int group_id) {
		this.group_id = group_id;
	}
	public double getPsms() {
		return psms;
	}
	public void setPsms(double psms) {
		this.psms = psms;
	}
	@Override
	public String toString() {
		return "Protein [protein_id=" + protein_id + ", name=" + name
				+ ", protein=" + protein + ", status=" + status + ", coverage="
				+ coverage + ", pi=" + pi + ", threshold=" + threshold
				+ ", peptides=" + peptides + ", distinct_peptides="
				+ distinct_peptides + ", ptms=" + ptms + ", group_id="
				+ group_id + ", psms=" + psms + "]";
	}
	
	
	
	
	
}
