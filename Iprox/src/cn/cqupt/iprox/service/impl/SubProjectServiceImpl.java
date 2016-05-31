package cn.cqupt.iprox.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.cqupt.iprox.dao.SubProjectDao;
import cn.cqupt.iprox.model.po.SubProject;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.STTDType;
import cn.cqupt.iprox.model.vo.SubProjectDetail;
import cn.cqupt.iprox.service.SubProjectService;

@Service("subProjectService")
public class SubProjectServiceImpl implements SubProjectService {
	
	private SubProjectDao subProjectDao ;
	
	@Resource(name="subProjectDao")
	public void setSubProjectDao(SubProjectDao subProjectDao) {
		this.subProjectDao = subProjectDao;
	}

	@Override
	public Map<String, Object> getSTTDNameBySTTD(String type, int pageNow) {
		Map<String, Object> map = new HashMap<String, Object>() ;
		STTDType sttd = new STTDType() ;
		/*if(type.equals("species")){
			sttd.setType(type) ;
		} else if (type.equals("tissue")) {
			sttd.setType(type) ;
		} else if (type.equals("cellType")) {
			sttd.setType(type) ;
		} else if (type.equals("disease")) {
			sttd.setType(type) ;
		}*/
		sttd.setType(type) ;
		
		int pagecount = subProjectDao.getSTTDNameBySTTDCount(sttd);
		int pageNum = pagecount%20==0?pagecount/20:pagecount/20+1 ;
		int rows = (pageNow-1)*20 ;
		sttd.setRows(rows) ;
		List<SubProject> STTDNames = subProjectDao.getSTTDNameBySTTD(sttd);
		map.put("STTDDetail", STTDNames) ;         //返回分类总数的名称
		map.put("SumProject", pageNum) ;        //总页数
		map.put("NextPageNum", pageNow+1) ;    //下一页
		return map ;
	}

	@Override
	public Map<String, Object> getSubProjectDetailById(int subId) {
		Map<String, Object> map = new HashMap<String, Object>() ;
		List<ReturnDetail> subProject = subProjectDao.getSubProjectById(subId);
		List<SubProjectDetail> subProjectDetail = subProjectDao.getSubProjectDetailById(subId);
		map.put("subProject", subProject) ;				//返回的子项目详情（包括组信息）
		map.put("subProjectDetail", subProjectDetail) ;	//返回的子项目详情（连表查询后的结果）
		return map;
	}

}

