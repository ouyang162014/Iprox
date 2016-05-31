package cn.cqupt.iprox.service.impl;

import cn.cqupt.iprox.dao.GroupDao;
import cn.cqupt.iprox.model.po.Group;
import cn.cqupt.iprox.service.GroupService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("groupService")
public class GroupServiceImpl implements GroupService {
	
	private GroupDao groupDao ;
	
	@Resource(name="groupDao")
	public void setGroupDao(GroupDao groupDao) {
		this.groupDao = groupDao;
	}



	@Override
	public Map<String, Object> getGroupByPage(int pageNow) {
		Map<String, Object> map=new HashMap<String,Object>();
		int pagecount=groupDao.getGroupCount();
		int pageNum=pagecount%20==0?pagecount/20:pagecount/20+1;//总页数
		
		int rows=(pageNow-1)*20;  //从多少条开始
		
		List<Group> group=groupDao.getGroupByPage(rows);
		map.put("GroupDetail", group);
		map.put("NextPageNum", pageNow+1);  //下一页
		map.put("SumProject", pageNum);     //总页数
		return map;

	}

}
