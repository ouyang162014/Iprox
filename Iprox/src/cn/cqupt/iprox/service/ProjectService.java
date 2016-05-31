package cn.cqupt.iprox.service;

import java.util.Map;

public interface ProjectService {
	/**
	 * 	根据pid返回项目信息（项目信息中有所属群组，还返回了项目所属子项目信息）
	 * @param pid
	 * @param nowPage
	 * @return
	 */
	
	Map<String, Object> getProjectByPid(int pid,int nowPage);
	
	
	/**
	 * 分页查找项目
	 * 根据当前页返回
	 *  ProjectNames{	
            	[
             	ProjectID:1,  //项目id
            	ProjectName, //项目名字
            	]
            	......
            	}
            	NextPageNum, //下一页
            	SumProject  //总页数
             }
	 * @param pageNow
	 * @return
	 */
	Map<String, Object> getProjectByPage(int pageNow);
	
	/**
	 * 根据组id查找项目
	 * 返回{
			ProjectDetail{}，
			more:true//表示是否还有更多的项目
		}
	 * @param gid
	 * @param ProjectNum
	 * @return
	 */
	Map<String, Object> getProjectByGroup(int gid, int ProjectNum);
	
	/**
	 * 根据类型查找项目
		返回{
			projectDetails{
			   "qweqwe",
			   "qweda",
			}
			more:true//表示是否还有更多的项目
		 }
	 * @param type
	 * @param STTDName
	 * @param ProjectNum
	 * @return
	 */
	Map<String, Object> getProjectBySTTDName(String type, String STTDName, int ProjectNum) ;
	
}
