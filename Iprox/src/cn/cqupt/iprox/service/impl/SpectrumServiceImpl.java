package cn.cqupt.iprox.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import cn.cqupt.iprox.dao.SpectrumDao;
import cn.cqupt.iprox.model.po.Spectrum;
import cn.cqupt.iprox.model.vo.PathFileToObjectUtils;
import cn.cqupt.iprox.model.vo.ReturnDetail;
import cn.cqupt.iprox.model.vo.SpectrumView;
import cn.cqupt.iprox.model.vo.ViewUtils;
import cn.cqupt.iprox.service.SpectrumService;

@Service("spectrumService")
public class SpectrumServiceImpl implements SpectrumService {
	
	private SpectrumDao spectrumDao ;
	@Resource(name = "spectrumDao")
	public void setSpectrumDao(SpectrumDao spectrumDao) {
		this.spectrumDao = spectrumDao;
	}



	@Override
	public Map<String, Object> getSpectrumBySubId(int subId, int pageNow) {
		Map<String,Object> map = new HashMap<String,Object>();
		Map<String,Integer> params = new HashMap<String, Integer>() ;
		params.put("subId", subId) ;
		
		int proteinCount=spectrumDao.getSpectrumBySubIdCount(subId);//总记录数
		int pageNum=proteinCount%20==0?proteinCount/20:proteinCount/20+1;//总页数
		int rows=(pageNow-1)*20;//从第row条后开始查询
		params.put("rows", rows) ;
		List<ReturnDetail> speList=spectrumDao.getSpectrumBySubId(params);//当页protein记录
		
		map.put("speList", speList);//所有protein记录
		map.put("NextPageNum", pageNow+1);//下一页
		map.put("SumPage", pageNum);//总页数
		
		return map;
	}

	@Override
	public Map<String, Object> getSpectrumDetailByPeptideId (int peptide_id){
		//System.out.println("enter getSpectrumDetailByPeptideId service");
		Map<String, Object> map = new HashMap<String, Object>() ;
		Spectrum tempSpectrum = spectrumDao.getSpectrumPathByPeptideId(peptide_id) ;       //根据肽段id得到质谱图的图文件路径，以便解析
		List<SpectrumView> spectrumView;
		try {
			spectrumView = PathFileToObjectUtils.stringToSpectrumView(tempSpectrum.getPath());
			map.put("spectrumView", spectrumView) ;
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return map;
		
	}
	@Override
	public Map<String, Object> getSpectrumDetailBySpectrumId(int spectrumId) {
		Map<String,Object> map=new HashMap<String,Object>();
		
		Spectrum tempSpectrum=spectrumDao.getSpectrumPathById(spectrumId);
		String path=tempSpectrum.getPath();
		List<SpectrumView> spectrumView;
		try {
			spectrumView = PathFileToObjectUtils.stringToSpectrumView(path);
			map.put("spectrumView", spectrumView);
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
//		String name=PathFileToObjectUtils.getNameFromFile(path);
//		map.put("name", name);
		return map;
	}



	@Override
	public Map<String, Double> getPeaksInfo(int subId) {
		//Map<String,Object> map=new HashMap<String,Object>();
		
		List<Integer> allPeaks=spectrumDao.getPeaksBySubId(subId);//得到所有峰数
		int allPeaksCount=allPeaks.size();
		int maxPeaks=allPeaks.get(0);//得到最大峰数
		//int node=maxPeaks%1000==0?maxPeaks/1000:maxPeaks/1000+1;//得到范围数目（1000为单位）
		int node=10;
		//Map<String,Integer> scopes=new HashMap<String,Integer>();//初始化范围
		Map<String,Integer> scopes=new HashMap<String,Integer>();
		for(int i=1;i<=node;i++){
			//scopes.put("scope"+i, 0);
			String eachnode=((maxPeaks/100+1)*10*(i-1))+"-"+((maxPeaks/100+1)*10*i);
			scopes.put(eachnode, 0);
		}
		
		for(int peaks:allPeaks){
			for(int i=1;i<=node;i++){
				if(peaks<i*50){
					String eachnode=((maxPeaks/100+1)*10*(i-1))+"-"+((maxPeaks/100+1)*10*i);
					int value=scopes.get(eachnode);
					scopes.put(eachnode, value+1);
					break;
				}
			}
		}
		Map<String,Double> scopes_new=new HashMap<String,Double>();
		for(int i=1;i<=node;i++){
			String eachnode=((maxPeaks/100+1)*10*(i-1))+"-"+((maxPeaks/100+1)*10*i);
			double value=(scopes.get(eachnode));
			double value2=value/allPeaksCount;
			scopes_new.put(eachnode, value2);
		}
		//map.put("scopes", scopes);
		return scopes_new;
	}



	@Override
	public Map<String, Object> getChargeInfoBySubId(int subId) {
		Map<String,Object> map=new HashMap<String,Object>();
		
		List<Map<String,Object>> chargeInfo=spectrumDao.getChargeInfoBySubId(subId);
		map=ViewUtils.getChargeInfoBycount(chargeInfo);

		return map;
	}

	@Override
	public Map getPathBySpectrumId(int SpectrumId) {
		String path = spectrumDao.getPathBySpectrumId(SpectrumId);
		List<SpectrumView> spectrumDetails = new ArrayList<SpectrumView>();
		try {
			spectrumDetails = PathFileToObjectUtils.stringToSpectrumView(path);
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		SpectrumView spectrumView = spectrumDetails.get(0);
		Map map = new HashMap();
		map.put("spectrumView",spectrumView);
		return map;
	}


}
