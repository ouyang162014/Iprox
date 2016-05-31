package cn.cqupt.iprox.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.cqupt.iprox.model.po.Peptide;
import cn.cqupt.iprox.model.vo.ReturnDetail;

public interface PeptideDao {
	
	
	
	/**
	 * 根据蛋白质id查询该蛋白质的肽段信息
	 * @param rows
	 * @param proteinId
	 * @return
	 */
	List<ReturnDetail> getPeptideByProteinId(Map<String, Integer> params) ;
	/**
	 * 根据蛋白质id查询蛋白质的肽段数量
	 * @param proteinId
	 * @return
	 */
	int getPeptideByProteinIdCount(int proteinId);
	
	/**
	 * 根据肽段序列分页查找所有序列相同的肽段
	 * @param peptide
	 * @param rows
	 * @return
	 */
	List<ReturnDetail> getTheSameByPeptide(Map<String, Object> params) ;
	/**
	 * 查找序列相同的肽段总数
	 * @return
	 */
	int getPeptideCountByPeptide(String peptide) ;

	/**
	 * 根据子项目id分页查询序列不同的肽段(肽段信息中需包含所属蛋白质)
	 * @subid subId
	 * @prama rows 
	 * @return 
	 */
	List<ReturnDetail> getPeptideBySubId(Map<String,Object> params);
	/**
	 * 根据子项目id分页查询序列不同的肽段的总数
	 * @subid subId
	 * @prama rows 
	 * @return 
	 */
	int getPeptideCountBySubId(int subId);
	

	/**
	 * 将delta_m_z（肽段的属性）的按值分类，查询数量最多的记录的数目
	 * @return
	 */
	int getMaxCountDelta();
	
	/**
	 * 在子项目下将肽段按delta_m_z（肽段的属性）的值分类，查询值 
	 * @return
	 */
	List<Float> getDelta(int subId);
	
	/**
	 * 在子项目下将肽段按delta_m_z（肽段的属性）的值分类，查询值的数目
	 * @param subId
	 * @return
	 */
	List<Integer> getDeltaCount(int subId);
	
	/**
	 * 分页查询所有序列不同的肽段
	 * @param rows
	 * @return
	 */
	List<Peptide> getPeptideByPage(int rows) ;

	/**
	 * 查找序列不同的肽段总数
	 * @return
	 */
	int getPeptideCount() ;

	/**
	 * liweiguo
	 * 根据子项目id查询所有肽段的cutting_site属性值
	 * @param subid
	 * @return
	 */
	List<Integer> getCuttingSite(int subId);
	
	/**
	 * 在subid下将肽段按照肽段的母粒子的质量分类，得到肽段的母粒子的质量
	 * @param subId
	 * @return
	 */
	List<Float> getDeltaBySubId(int subId);
	/**
	 * 在subid下将肽段按照肽段的母粒子的质量分类，得到肽段的母粒子的质量对应的precursor_m_z数量 
	 * @param subId
	 * @return
	 */
	List<Integer> getPrecursorMZCountOfDeltaBySubId(int subId);
	/**
	 * 在subid下得到precursor_m_z的总数
	 * @param subId
	 * @return
	 */
	int getPrecusorMZCount(int subId);
}
