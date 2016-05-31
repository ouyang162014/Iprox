package cn.cqupt.iprox.service;

import java.util.Map;

public interface GroupService {

	/**
	 * 分页查找群组
	 * 根据当前页返回群组
	 *   GroupNames{
	 *   	[
	 *   	GroupId:1,		//群组id
	 *   	GroupName,		//群组名字
	 *   	]
	 *   	......
	 *   	NextPageNum,	//下一页
	 *   	SumGroup		//总页数
	 *   }
	 * @param pageNow
	 * @return
	 */
	Map<String, Object> getGroupByPage(int pageNow) ;
}
