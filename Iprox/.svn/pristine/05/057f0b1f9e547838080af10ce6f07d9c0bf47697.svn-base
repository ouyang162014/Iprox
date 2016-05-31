package cn.cqupt.iprox.model.vo;

import cn.cqupt.iprox.model.po.Acquisition;
import cn.cqupt.iprox.model.po.Digestion;
import cn.cqupt.iprox.model.po.Extraction;
import cn.cqupt.iprox.model.po.Growth;
import cn.cqupt.iprox.model.po.Moreinfor;
import cn.cqupt.iprox.model.po.Msanalyer;
import cn.cqupt.iprox.model.po.Msdetector;
import cn.cqupt.iprox.model.po.Mssource;
import cn.cqupt.iprox.model.po.Separation;
import cn.cqupt.iprox.model.po.SubProject;
import cn.cqupt.iprox.model.po.Treatment;

/**
 * 向前端发送的关于子项目详细信息
 * 包括子项目信息SubProject
 * 
 * 质谱仪信息，有三个类masource、msanalyer、msdetector
 * Mssource，Msanalyer，Msdetector  
 * 
 * 实验信息，有六个类growth、treament、extraction、digestion、acquisition、separation
 * Growth，Treament，Extraction，Digestion，Acquisition，Separation
 * 
 * 子项目的更多信息
 * Moreinfor
 * @author Cbillow
 *
 */
public class SubProjectDetail {

	private SubProject subProject ;   	//子项目
		
	private Mssource mssource ;			//离子源
	private Msanalyer msanalyer ;		//分析器
	private Msdetector msdetector ;		//检测器
	
	private Growth growth ;				//可以多行
	private Treatment treatment ;			//样品处理
	private Extraction extraction ;		//样品提取
	private Digestion digestion ;		//样品酶解
	private Acquisition acquisition ;	//获取样品
	private Separation separation ;		//样品打断
	
	private Moreinfor moreinfor ;		//更多子项目的信息
	
	
	

	public SubProjectDetail() {
	}
	public SubProjectDetail(SubProject subProject, Mssource mssource,
			Msanalyer msanalyer, Msdetector msdetector, Growth growth,
			Treatment treatment, Extraction extraction, Digestion digestion,
			Acquisition acquisition, Separation separation, Moreinfor moreinfor) {
		this.subProject = subProject;
		this.mssource = mssource;
		this.msanalyer = msanalyer;
		this.msdetector = msdetector;
		this.growth = growth;
		this.treatment = treatment;
		this.extraction = extraction;
		this.digestion = digestion;
		this.acquisition = acquisition;
		this.separation = separation;
		this.moreinfor = moreinfor;
	}

	public SubProject getSubProject() {
		return subProject;
	}

	public void setSubProject(SubProject subProject) {
		this.subProject = subProject;
	}

	public Mssource getMssource() {
		return mssource;
	}

	public void setMssource(Mssource mssource) {
		this.mssource = mssource;
	}

	public Msanalyer getMsanalyer() {
		return msanalyer;
	}

	public void setMsanalyer(Msanalyer msanalyer) {
		this.msanalyer = msanalyer;
	}

	public Msdetector getMsdetector() {
		return msdetector;
	}

	public void setMsdetector(Msdetector msdetector) {
		this.msdetector = msdetector;
	}

	public Growth getGrowth() {
		return growth;
	}

	public void setGrowth(Growth growth) {
		this.growth = growth;
	}

	public Treatment getTreament() {
		return treatment;
	}

	public void setTreament(Treatment treatment) {
		this.treatment = treatment;
	}

	public Extraction getExtraction() {
		return extraction;
	}

	public void setExtraction(Extraction extraction) {
		this.extraction = extraction;
	}

	public Digestion getDigestion() {
		return digestion;
	}

	public void setDigestion(Digestion digestion) {
		this.digestion = digestion;
	}

	public Acquisition getAcquisition() {
		return acquisition;
	}

	public void setAcquisition(Acquisition acquisition) {
		this.acquisition = acquisition;
	}

	public Separation getSeparation() {
		return separation;
	}

	public void setSeparation(Separation separation) {
		this.separation = separation;
	}

	public Moreinfor getMoreinfor() {
		return moreinfor;
	}

	public void setMoreinfor(Moreinfor moreinfor) {
		this.moreinfor = moreinfor;
	}
}
