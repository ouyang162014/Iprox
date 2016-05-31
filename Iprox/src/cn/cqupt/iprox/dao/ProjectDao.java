package cn.cqupt.iprox.dao;

import java.util.List;
import java.util.Map;

import cn.cqupt.iprox.model.po.Project;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.STTDType;

public interface ProjectDao {
	/**
	 *	根据pid查询项目（项目信息包括所属群组名称） 
	 */
	ReturnDetail getProjectInforByPid(int pid);
	
	
	/**
	 * 分页查询项目条数
	 * @param pageNum
	 * @return
	 */
	 List<Project> getProjectByPage(int rows);//当前条数
	 
	 /**
	  * 根据群组Id分页查询项目
	  * @param rows 从多少条开始
	  * @param gid  群组id
	  * @return  返回10条项目
	  */
	 List<ReturnDetail> getProjectByGroup(Map<String, Integer> params) ;
	 
	 /**
	  * 根据群组Id查询项目总数
	  * @param gid
	  * @return   
	  */
	 int getProjectCountByGroup(int gid) ;
	 
	 /**
	  * 根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目
	  * @param params
	  * @return
	  */
	 List<Project> getProjectBySTTD(STTDType sttd) ;
	 
	 /**
	  * 根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目的总数
	  * @param params
	  * @return
	  */
	 int getProjectCountBySTTD(STTDType sttd) ;
	 
	 /**
	  * 获得项目总条数
	  * @return
	  */
	 int getProjectCount(); 
}
