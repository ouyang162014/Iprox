package cn.cqupt.iprox.service;

import java.io.IOException;
import java.util.Map;

public interface SpectrumService {

	/**
	 * 分页查询子项目下质谱图
	 * @param pageNow
	 * @return
	 */
	Map<String, Object> getSpectrumBySubId(int subId, int pageNow);
	
	
	
	/**
	 * 根据肽段id，显示质谱图的图像
	 * 需要将path对应的文件进行解析
	 * @param peptide_id
	 * @return
	 */
	Map<String, Object> getSpectrumDetailByPeptideId(int peptide_id) ;
	
	
	/**
	 * 根据子项目得到峰数的分布情况
	 * @param subId
	 * @return
	 */
	Map<String,Double> getPeaksInfo(int subId);
	
	/**
	 * 在子项目下将质谱图按照charge的数量分类（iditified为true）为1、2、3、4、5、6、7、>7这8种，
	 * 得到8种charge的数量
	 * @param subId
	 * @return
	 */
	Map<String,Object> getChargeInfoBySubId(int subId);


	/**
	 * 通过质谱图id返回质谱图数据
	 * @param spectrumId
	 * @return
	 * @throws IOException 
	 */
	Map<String, Object> getSpectrumDetailBySpectrumId(int spectrumId) ;
	
	/**
	 * 通过SpectrumId返回对应的xml本地文件路径
	 * @param SpectrumId
	 * @return
	 */
	Map  getPathBySpectrumId(int SpectrumId) ;
	

}
