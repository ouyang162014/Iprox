package cn.cqupt.iprox.service;

import java.util.Map;

public interface PeptideService {
	
	/**
	 * wangyq
	 * 根据蛋白质id分页查找该蛋白质下肽段详情
	 * @param pageNow
	 * @param proteinId
	 * @return
	 */
	Map<String, Object> getPeptideByProteinId(int pageNow, int proteinId);

	/**
	 * 根据子项目Id分页查找肽段
	 * 返回的是肽段序列不相同的肽段详情
	 * @param pageNow
	 * @return
	 */
	Map<String, Object> getPeptideBySubId(int subId, int pageNow) ;
	
	/**
	 * 根据肽段序列分页查找所有序列相同的肽段
	 * @param pageNow
	 * @param peptide
	 * @return
	 */
	Map<String, Object> getTheSamePeptideByPeptide(int pageNow, String peptide);
	/**
	 * 在子项目下将肽段按照delta_m_z（肽段的属性）的值分类，得到所有的值和相应值的肽段的数目，
	 * 返回delta_m_z的值和相应肽段数目与最大数目的比值
	 * @return
	 */
	Map<String,Object> getDeltaCountRatio(int subId);

	/**
	 * by liweiguo
	 * 在子项目下将肽段按照cutting_site的值分类
	 * 返回cutting_site值和相应肽段数目
	 * @param subId
	 */
	 Map<String, Object> getCuttingSite(int subId);
	/**
	 * 在子项目下将肽段按照delta_m_z的值进行分类，得到每个值和相应的precursor_m_z数量比值
	 * @param subId
	 * @return
	 */
	Map<String,Object> getDeltaInfoBySubId(int subId);
	
}
