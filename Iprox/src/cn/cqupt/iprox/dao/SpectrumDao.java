package cn.cqupt.iprox.dao;

import java.util.List;
import java.util.Map;

import cn.cqupt.iprox.model.po.Spectrum;
import cn.cqupt.iprox.model.vo.ReturnDetail;

public interface SpectrumDao {

	/**
	 * 根据子项目查询质谱图信息列表
	 * @param subid
	 * @return
	 */
	List<ReturnDetail> getSpectrumBySubId(Map<String, Integer> params) ;
	/**
	 * 根据子项目查询质谱图的数量
	 * @param subId
	 * @return
	 */
	int getSpectrumBySubIdCount(int subId) ;
	
	/**
	 * 根据肽段id得到质谱图的图路径
	 * 1个肽段对应一个质谱图的图
	 * @param peptide_id
	 * @return
	 */
	Spectrum getSpectrumPathByPeptideId(int peptide_id) ;
	
	/**
	 * 根据子项目查询所有peaks
	 * @param subId
	 * @return
	 */
	List<Integer> getPeaksBySubId(int subId);
	
	
	/**
	 * 在子项目下将质谱图按照charge的数量分类（iditified为true），得到每种数量charge的值和数量
	 * @param subId
	 * @return
	 */
	List<Map<String,Object>> getChargeInfoBySubId(int subId);
	
	/**
	 * 根据质谱图id查找质谱图的路径
	 * @param spectrumId
	 * @return
	 */
	Spectrum getSpectrumPathById(int spectrumId);
	
	/**
	 *  根据Spectrum Id 获取AverageSpectrum 文件路径
	 * @param SpectrumId
	 * @return
	 */
	String getPathBySpectrumId(int SpectrumId) ;
}
