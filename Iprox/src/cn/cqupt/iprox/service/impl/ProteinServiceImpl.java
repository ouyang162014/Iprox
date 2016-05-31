package cn.cqupt.iprox.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;


import cn.cqupt.iprox.dao.ProteinDao;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.ViewUtils;
import cn.cqupt.iprox.service.ProteinService;
/**
 * 
 * @author xiezhaodong
 *
 */
@Service("proteinService")
public class ProteinServiceImpl implements ProteinService{
	private ProteinDao proteinDao;
	
	@Resource(name="proteinDao")
	public void setProteinDao(ProteinDao proteinDao) {
		this.proteinDao = proteinDao;
	}	
	/**
	 * liwei
	 */
	@Override
	public Map<String, Object> getProteinBySubId(int subId, int pageNow) {
		Map<String,Object> map = new HashMap<String,Object>();
		Map<String,Integer> params = new HashMap<String, Integer>() ;
		params.put("subId", subId) ;
		
		int proteinCount=proteinDao.getProteinCountBySubId(subId);//总记录数
		int pageNum=proteinCount%20==0?proteinCount/20:proteinCount/20+1;//总页数
		int rows=(pageNow-1)*20;//从第row条后开始查询
		params.put("rows", rows) ;
		List<ReturnDetail> allProteinByPage=proteinDao.getProteinBySubId(params);//当页protein记录
		
		map.put("AllProtein", allProteinByPage);//所有protein记录
		map.put("NextPageNum", pageNow+1);//下一页
		map.put("SumPage", pageNum);//总页数
		
		return map;
	}
	@Override
	public Map<String, Object> getPeptideCountOfProteinBySubId(int subid) {
		Map<String,Object> map=new HashMap<String,Object>();
		
		List<String> peptideCounts=proteinDao.getPeptideCountOfProteinBySubId(subid);
		
		Map<String,Object> byPeptideCount=ViewUtils.byPeptideCount(peptideCounts);//分别得到1,2,3,4,5,>5数目肽段的蛋白质数目
		
		Map<String,Object> countRatio=ViewUtils.getRatio(byPeptideCount);//分别得到1,2,3,4,5,>5数目肽段的蛋白质数目的比例
		
		map.put("byPeptideCount", byPeptideCount);
		map.put("countRatio", countRatio);
		
		return map;
	}
	
	
	


	
}
