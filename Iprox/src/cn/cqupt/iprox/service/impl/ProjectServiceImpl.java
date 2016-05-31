package cn.cqupt.iprox.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.cqupt.iprox.dao.ProjectDao;
import cn.cqupt.iprox.dao.SubProjectDao;
import cn.cqupt.iprox.model.po.Project;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.STTDType;
import cn.cqupt.iprox.service.ProjectService;
@Service("projectService")
public class ProjectServiceImpl implements ProjectService {
	

	private ProjectDao projectDao;
	private SubProjectDao subProjectDao;

	
	@Resource(name="projectDao")
	public void setProjectDao(ProjectDao projectDao) {
		this.projectDao = projectDao;
	}
	@Resource(name="subProjectDao")
	public void setSubProjectDao(SubProjectDao subProjectDao){
		this.subProjectDao=subProjectDao;
	}

	
	
	@Override
	public Map<String, Object> getProjectByPage(int pageNow) {
		Map<String, Object> map=new HashMap<String, Object>();
		int pagecount=projectDao.getProjectCount();
		int pageNum=pagecount%20==0?pagecount/20:pagecount/20+1;//总页数
		
		int rows=(pageNow-1)*20;//从多少条开始
		List<Project> project=projectDao.getProjectByPage(rows);
		
		map.put("ProjectDetail", project);
		map.put("NextPageNum", pageNow+1);     //下一页
		map.put("SumProject", pageNum);     //总页数
	
		return map;
	}


	@Override
	public Map<String, Object> getProjectByGroup(int gid, int ProjectNum) {
		Map<String, Object> map=new HashMap<String, Object>();           //返回给前端参数
		Map<String, Integer> params = new HashMap<String, Integer>() ;   //数据库参数
		boolean more=false;					//是否显示more
		params.put("gid", gid) ;
		
		int count=projectDao.getProjectCountByGroup(gid);
		if(ProjectNum<count){ 									//如果需要的比总数少，则显示more
			more=true;
			params.put("ProjectNum", ProjectNum) ;
		}else{
			params.put("ProjectNum", count) ;        //需要的比总数多，则查询全部			
		}
		List<ReturnDetail> project=projectDao.getProjectByGroup(params);
		map.put("more", more);
		map.put("ProjectDetail", project);
		
		return map;
	}


	@Override
	public Map<String, Object> getProjectBySTTDName(String type,
			String STTDName, int ProjectNum) {
		Map<String, Object> map = new HashMap<String, Object>() ;
		STTDType sttd = new STTDType() ;
		boolean more = false ;
		
		//判断类型，并设置相应的类型名称
		if(type.equals("species")){
			sttd.setSpecies(STTDName) ;
		} else if (type.equals("tissue")) {
			sttd.setTissue(STTDName) ;
		} else if (type.equals("cellType")) {
			sttd.setCellType(STTDName) ;
		} else if (type.equals("disease")) {
			sttd.setDisease(STTDName) ;
		}
		
		int count = projectDao.getProjectCountBySTTD(sttd) ;
		if(ProjectNum<count) {			//需查要的比总数少，则询需要的条数
			more = true ;
			sttd.setProjectNum(ProjectNum) ;
		}else{
			sttd.setProjectNum(count) ; 	//需要的比总数多，则查询总数			
		}
		List<Project> project = projectDao.getProjectBySTTD(sttd) ;
		map.put("more", more) ;
		map.put("ProjectDetail", project) ;
		return map;
	}


	@Override
	public Map<String, Object> getProjectByPid(int pid,int nowPage) {
		Map<String,Object> map = new HashMap<String, Object>() ;
		Map<String,Integer> params=new HashMap<String,Integer>();
		ReturnDetail projectDetail=projectDao.getProjectInforByPid(pid);//得到项目信息
		int count=subProjectDao.getSubProjectCountByPid(pid);//得到该项目的子项目数目
		
		int pageNum=count%20==0?count/20:count/20+1;//得到该项目的子项目页数
		int rows=(pageNum-1)*20;//从第rows条后开始查询
		params.put("pid", pid);
		params.put("rows", rows);
		
		List<ReturnDetail> subProjectDetail=subProjectDao.getSubProjectByPid(params);//得到子项目信息
	
		map.put("projectDetail", projectDetail);
		map.put("subProjectCount", count);
		map.put("subProjectDetail", subProjectDetail);
		map.put("nowPage", nowPage);
		map.put("pageNum", pageNum);
		
		return map;
	}
	


}
