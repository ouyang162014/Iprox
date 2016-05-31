package cn.cqupt.iprox.model.po;

/**
 * 谱图
 * @author Cbillow
 *
 */
public class Spectrum {

	private int spectrum_id ;				//文件中谱图编号
	private int ms_level ;			//
	private int identified ;		//‘0’，‘1’
	private int charge ;			//母粒子电荷
	private double precursor_m_z ;  //母粒子质合比
	private double sum_of_intensity ;	//总强度（计算得到，所有粒子强度之和）
	private int peaks ;				//峰的数目
	private String path ;           //谱图的图信息文件路径  
	private float precursor_Intensity;
	
	

	@Override
	public String toString() {
		return "Spectrum [spectrum_id=" + spectrum_id + ", ms_level="
				+ ms_level + ", identified=" + identified + ", charge="
				+ charge + ", precursor_m_z=" + precursor_m_z
				+ ", sum_of_intensity=" + sum_of_intensity + ", peaks=" + peaks
				+ ", path=" + path + ", precursor_Intensity="
				+ precursor_Intensity + "]";
	}

	public float getPrecursor_Intensity() {
		return precursor_Intensity;
	}

	public void setPrecursor_Intensity(float precursor_Intensity) {
		this.precursor_Intensity = precursor_Intensity;
	}

	public Spectrum() {
	}
	
	public int getSpectrum_id() {
		return spectrum_id;
	}
	public void setSpectrum_id(int spectrum_id) {
		this.spectrum_id = spectrum_id;
	}
	public int getMs_level() {
		return ms_level;
	}
	public void setMs_level(int ms_level) {
		this.ms_level = ms_level;
	}
	public int getIdentified() {
		return identified;
	}
	public void setIdentified(int identified) {
		this.identified = identified;
	}
	public int getCharge() {
		return charge;
	}
	public void setCharge(int charge) {
		this.charge = charge;
	}
	public double getPrecursor_m_z() {
		return precursor_m_z;
	}
	public void setPrecursor_m_z(double precursor_m_z) {
		this.precursor_m_z = precursor_m_z;
	}
	public double getSum_of_intensity() {
		return sum_of_intensity;
	}
	public void setSum_of_intensity(double sum_of_intensity) {
		this.sum_of_intensity = sum_of_intensity;
	}
	public int getPeaks() {
		return peaks;
	}
	public void setPeaks(int peaks) {
		this.peaks = peaks;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
}
