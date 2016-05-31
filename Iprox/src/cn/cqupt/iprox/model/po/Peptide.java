package cn.cqupt.iprox.model.po;
/**
 * 肽段的持久对象
 * @author Administrator
 *
 */
public class Peptide {

	private int peptide_id;			//肽段ID，自增
	private String peptide;			//肽段序列
	private String fit;				//肽段的状态，及是否明确在蛋白质中某处 fit、fuzzy fit、no fit、unknown四种中的一种(数据库里面是枚举类型)
	private float delta_m_z;		//质荷比的误差(正负0.5之间，精确到小数点后6位)
	private int charge;				//电荷
	private float precursor_m_z;		//母粒子质荷比
	private String readablemod;
	private String modifications;	//修饰类型
	private int lons;				//粒子数目
	private float mascot_score;		//Mascot打分分数
	private int length;				//肽段长度
	private int start;				//肽段起始位置
	private int stop;				//肽段结束位置
	private int psm;				//相同肽段的谱图数目
	private float pi;				//改多肽的等电点
	private int identification_id;	//所属蛋白Protein id，int
	private int cutting_site;		//切位点数目
	
	public Peptide() {
		// TODO Auto-generated constructor stub
	}

	public Peptide(int peptide_id, String peptide, String fit, float delta_m_z,
			int charge, float precursor_m_z, String readablemod,String modifications, int lons,
			float mascot_score, int length, int start, int stop, int psm,
			float pi, int identification_id, int cutting_site) {
		super();
		this.peptide_id = peptide_id;
		this.peptide = peptide;
		this.fit = fit;
		this.delta_m_z = delta_m_z;
		this.charge = charge;
		this.precursor_m_z = precursor_m_z;
		this.readablemod = readablemod;
		this.modifications = modifications;
		this.lons = lons;
		this.mascot_score = mascot_score;
		this.length = length;
		this.start = start;
		this.stop = stop;
		this.psm = psm;
		this.pi = pi;
		this.identification_id = identification_id;
		this.cutting_site = cutting_site;
	}
	
	@Override
	public String toString() {
		return "Peptide [peptide_id=" + peptide_id + ", peptide=" + peptide
				+ ", fit=" + fit + ", delta_m_z=" + delta_m_z + ", charge="
				+ charge + ", precursor_m_z=" + precursor_m_z + ", readablemod=" + readablemod
				+ ", modifications=" + modifications + ", lons="
				+ lons + ", mascot_score=" + mascot_score + ", length="
				+ length + ", start=" + start + ", stop=" + stop + ", psm=" + psm + ", pi=" + pi +
				 ", identification_id=" + identification_id +", cutting_site=" + cutting_site +"]";
	}

	public int getPeptide_id() {
		return peptide_id;
	}

	public void setPeptide_id(int peptide_id) {
		this.peptide_id = peptide_id;
	}

	public String getPeptide() {
		return peptide;
	}

	public void setPeptide(String peptide) {
		this.peptide = peptide;
	}

	public String getFit() {
		return fit;
	}

	public void setFit(String fit) {
		this.fit = fit;
	}

	public float getDelta_m_z() {
		return delta_m_z;
	}

	public void setDelta_m_z(float delta_m_z) {
		this.delta_m_z = delta_m_z;
	}

	public int getCharge() {
		return charge;
	}

	public void setCharge(int charge) {
		this.charge = charge;
	}

	public float getPrecursor_m_z() {
		return precursor_m_z;
	}

	public void setPrecursor_m_z(float precursor_m_z) {
		this.precursor_m_z = precursor_m_z;
	}

	public String getModifications() {
		return modifications;
	}

	public void setModifications(String modifications) {
		this.modifications = modifications;
	}

	public int getLons() {
		return lons;
	}

	public void setLons(int lons) {
		this.lons = lons;
	}

	public float getMascot_score() {
		return mascot_score;
	}

	public void setMascot_score(float mascot_score) {
		this.mascot_score = mascot_score;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getStop() {
		return stop;
	}

	public void setStop(int stop) {
		this.stop = stop;
	}

	public int getPsm() {
		return psm;
	}

	public void setPsm(int psm) {
		this.psm = psm;
	}

	public float getPi() {
		return pi;
	}

	public void setPi(float pi) {
		this.pi = pi;
	}

	public int getIdentification_id() {
		return identification_id;
	}

	public void setIdentification_id(int identification_id) {
		this.identification_id = identification_id;
	}

	public int getCutting_site() {
		return cutting_site;
	}

	public void setCutting_site(int cutting_site) {
		this.cutting_site = cutting_site;
	}
	
	public String getReadablemod() {
		return readablemod;
	}

	public void setReadablemod(String readablemod) {
		this.readablemod = readablemod;
	}
	
}
