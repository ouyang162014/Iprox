package cn.cqupt.iprox.dao;

import java.util.List;
import java.util.Map;

import cn.cqupt.iprox.model.po.Protein;
import cn.cqupt.iprox.model.vo.ReturnDetail;

public interface ProteinDao {
	
	/**
	 * 分页根据子项目查询蛋白质
	 * @param subId	子项目id
	 * @param rows	从多少条开始
	 * @return
	 */
	List<ReturnDetail> getProteinBySubId(Map<String, Integer> params) ;
	/**
	 * 根据子项目查询蛋白质总数
	 * @param subId
	 * @return
	 */
	int getProteinCountBySubId(int subId) ;
	


	
	
	
	
	
	/**
	 * 分页查询所有蛋白质
	 * @param rows 从多少条开始
	 * @return
	 */
	List<Protein> getProteinRows(int rows) ;
	/**
	 * 查询一共有多少蛋白质
	 * @return
	 */
	int getProteinCount() ;
	
	
	/**
	 * 根据子项目查询蛋白质包含的肽段数目并按此数目分类，得到每种数目的蛋白质数目
	 * @param subid
	 * @return
	 */
	List<String> getPeptideCountOfProteinBySubId(int subid);
}
