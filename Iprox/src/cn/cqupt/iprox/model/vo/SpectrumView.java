package cn.cqupt.iprox.model.vo;

import java.util.List;
import java.util.Map;

/**
 * 从文件中读出的谱图的图信息详情
 * 即Spectrum中的path属性对应的文件
 * @author Cbillow
 *
 */
public class SpectrumView {
	
	private int charge;
	private int scanNum;
	private String sequence ;
	private String fileName ;
	private List<Float> mzs;
	private List<Float> intensitys;
	private List<List<Float>> ms2peaks;
	public Map<String, Object> getModifications() {
		return modifications;
	}

	public void setModifications(Map<String, Object> modifications) {
		this.modifications = modifications;
	}


	private Map<String,Object> modifications;

	public int getCharge() {
		return charge;
	}

	public void setCharge(int charge) {
		this.charge = charge;
	}

	public int getScanNum() {
		return scanNum;
	}

	public void setScanNum(int scanNum) {
		this.scanNum = scanNum;
	}

	public String getSequence() {
		return sequence;
	}

	public void setSequence(String sequence) {
		this.sequence = sequence;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public List<Float> getMzs() {
		return mzs;
	}

	public void setMzs(List<Float> mzs) {
		this.mzs = mzs;
	}

	public List<Float> getIntensitys() {
		return intensitys;
	}

	public void setIntensitys(List<Float> intensitys) {
		this.intensitys = intensitys;
	}

	public List<List<Float>> getMs2peaks() {
		return ms2peaks;
	}

	public void setMs2peaks(List<List<Float>> ms2peaks) {
		this.ms2peaks = ms2peaks;
	}

	public SpectrumView(int charge, int scanNum, String sequence, String fileName,List<Float> mzs,List<Float> intensitys,List<List<Float>> ms2peaks,Map<String,Object> modifications) {
		this.charge = charge;
		this.scanNum = scanNum;
		this.sequence = sequence;
		this.fileName = fileName;
		this.mzs = mzs;
		this.intensitys = intensitys;
		this.ms2peaks = ms2peaks;
		this.modifications = modifications;
	}

	public SpectrumView() {
	}
	

	@Override
	public String toString() {
		return "SpectrumDetail [charge=" + charge + ", scanNum=" + scanNum + ", sequence=" + sequence
				+ ", fileName=" + fileName + ", mzs=" + mzs +", intensitys=" + intensitys +", ms2peaks=" + ms2peaks +"]";
	}
	
	
}
