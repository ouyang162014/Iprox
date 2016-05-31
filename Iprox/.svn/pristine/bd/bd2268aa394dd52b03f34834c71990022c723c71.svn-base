package cn.cqupt.iprox.service;

import java.util.Map;

public interface SubProjectService {

	/**
	 * 只查询出相关分类
	 * @param sttd
	 * @return
	 */
	Map<String, Object> getSTTDNameBySTTD(String type, int pageNow) ;
	
	/**
	 * 根据subId查询子项目详情（连表查询）
	 * 包括子项目信息,组信息
	 * 质谱仪信息
	 * 实验信息
	 * 更多信息
	 * @param subId
	 * @return
	 */
	Map<String, Object> getSubProjectDetailById(int subId) ;
	
}
