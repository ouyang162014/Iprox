package cn.cqupt.iprox.dao;

import java.util.List;
import java.util.Map;

import cn.cqupt.iprox.model.po.SubProject;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.STTDType;
import cn.cqupt.iprox.model.vo.SubProjectDetail;

public interface SubProjectDao {

	/**
	 * 根据（物种，组织，细胞类型，疾病类型）查询包含该条件的列表
	 * @param params
	 * @return
	 */
	List<SubProject> getSTTDNameBySTTD(STTDType sttd) ;
	
	/**
	 * 根据（物种，组织，细胞类型，疾病类型）查询包含该条件的总数
	 * @param params
	 * @return
	 */
	Integer getSTTDNameBySTTDCount(STTDType sttd) ;
	
	/**
	 * 根据Id查询子项目详情（关联组信息）
	 * @param subId
	 * @return
	 */
	List<ReturnDetail> getSubProjectById(int subId) ;
	
	/**
	 * 根据Id查询子项目详情（关联其他表，质谱仪，实验信息，更多信息）
	 * @param subId
	 * @return
	 */
	List<SubProjectDetail> getSubProjectDetailById(int subId) ;
	
	/**
	 * 根据项目id查询该项目下子项目的数量
	 */
	int getSubProjectCountByPid(int pid);
	/**
	 * 根据项目id查询该项目下每个子项目信息(分页)
	 */
	List<ReturnDetail> getSubProjectByPid(Map<String, Integer> params);


}
