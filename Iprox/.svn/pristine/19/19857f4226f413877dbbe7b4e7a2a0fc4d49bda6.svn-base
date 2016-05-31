package cn.cqupt.iprox.service.impl;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.cqupt.iprox.dao.PeptideDao;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.ViewUtils;
import cn.cqupt.iprox.service.PeptideService;

@Service("peptideService")
public class PeptideServiceImpl implements PeptideService {

	private PeptideDao peptideDao;

	@Resource(name = "peptideDao")
	public void setPeptideDao(PeptideDao peptideDao) {
		this.peptideDao = peptideDao;
	}

	@Override
	public Map<String, Object> getPeptideBySubId(int subId, int pageNow) {
		Map<String,Object> map=new HashMap<String,Object>();//返回数据
		Map<String,Object> params=new HashMap<String,Object>();//传入DAO的参数
		
		int pagecount = peptideDao.getPeptideCountBySubId(subId);//总记录数
		int pageNum = pagecount%20==0?pagecount/20:pagecount/20+1;//总页数
		int rows=(pageNow-1)*20;//从第rows条后开始查询
		
		params.put("subId", subId);
		params.put("rows", rows);
		List<ReturnDetail> peptides=peptideDao.getPeptideBySubId(params);
		
		map.put("pageNum", pageNum);
		map.put("NextPageNum", pageNow+1);
		map.put("peptides", peptides);
	
		return map ;
	}

	@Override
	public Map<String, Object> getTheSamePeptideByPeptide(int pageNow,
			String peptide) {
		Map<String, Object> map = new HashMap<String, Object>();
		Map<String, Object> params = new HashMap<String, Object>() ;
		params.put("peptide", peptide) ;
		int pagecount = peptideDao.getPeptideCountByPeptide(peptide) ;
		int pageNum = pagecount % 20 == 0 ? pagecount / 20 : pagecount / 20 + 1;// 总页数

		Integer rows = (pageNow - 1) * 20; // 从多少条开始

		params.put("rows", rows) ;
		List<ReturnDetail> peptides = peptideDao.getTheSameByPeptide(params);
		map.put("PeptideDetail", peptides);
		map.put("NextPageNum", pageNow + 1); // 下一页
		map.put("SumProject", pageNum); // 总页数
		return map;
	}
	
	@Override
	public Map<String, Object> getPeptideByProteinId(int pageNow,
			int proteinId) {
		Map<String, Object> map = new HashMap<String, Object>();
		Map<String, Integer> params = new HashMap<String, Integer>();
		int peptideByProteinIdCount=peptideDao.getPeptideByProteinIdCount(proteinId);
		int pageNum = peptideByProteinIdCount%20==0?peptideByProteinIdCount/20:peptideByProteinIdCount/20+1;
		int rows = (pageNow-1)*20;
		params.put("rows", rows);
		params.put("proteinId", proteinId);
		
		List<ReturnDetail> peptideByProteinId = peptideDao.getPeptideByProteinId(params);
		
		map.put("peptideByProteinId", peptideByProteinId);
		map.put("SumPage", pageNum);
		map.put("NextPageNum", pageNow+1);
		return map;
	}
	
	
	public Map<String,Object> getDeltaCountRatio(int subId){
		Map<String,Object> map=new HashMap<String,Object>();
		
		int maxCount=peptideDao.getDeltaCount(subId).get(0);//得到有最大肽段数目的delta值的肽段数目
		List<Float> deltas=peptideDao.getDelta(subId);//得到每个delta值
		List<Integer> deltaCounts=peptideDao.getDeltaCount(subId);//得到每个delta值的肽段数目
		
		Map<Float,Integer> deltaAndCounts=new HashMap<Float,Integer>();//将delta值和delta值的数目存为键值对
		for(int i=0;i<deltas.size();i++){
			deltaAndCounts.put(deltas.get(i), deltaCounts.get(i));
		}
		
		Map<String,Object> deltaRatio=ViewUtils.toRatio(deltaAndCounts,maxCount);//得到每个delta值和其数目与最大数目的比值
		
		map.put("deltaRatio", deltaRatio);
		return map;
	}

	@Override
	public Map<String, Object> getCuttingSite(int subId) {
		Map<String, Object> map=new HashMap<String,Object>();
		List<Integer> cuttingSite = peptideDao.getCuttingSite(subId);
		Map<String, Object> byCutSiteCount = ViewUtils.byCutSiteCount(cuttingSite);
		Map<String, Object> countRatio = ViewUtils.getCutSiteRatio(byCutSiteCount);
		map.put("byCuttingSiteCount", byCutSiteCount);
		map.put("countRatio", countRatio);
		return map;
	}

	@Override
	public Map<String, Object> getDeltaInfoBySubId(int subId) {
		Map<String,Object> map=new HashMap<String,Object>();
		
		List<Float> delta=peptideDao.getDeltaBySubId(subId);//得到所有的delta值
		List<Integer> precursorMZCount=peptideDao.getPrecursorMZCountOfDeltaBySubId(subId);//得到每个delta值的precursorMZ数量
		List<BigDecimal> precursorMZRatio=ViewUtils.getPrecursorMZRatio(precursorMZCount);//得到每个delta值的precursorMZ数量的比值
		
		Map<String,Object> delta_precursorMZRatio=new HashMap<String,Object>();//将delta值与对应的precursorMZ数量的比值存为键值对
		for(int i=0;i<delta.size();i++){
			String key=delta.get(i)+"";
			BigDecimal value=precursorMZRatio.get(i);
			delta_precursorMZRatio.put(key, value);
		}
		
		map.put("delta_precursorMZRatio", delta_precursorMZRatio);
		
		return map;
	}


}
