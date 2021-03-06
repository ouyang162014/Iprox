package cn.cqupt.iprox.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;

import cn.cqupt.iprox.service.PeptideService;

/**
 * 
 * @author Cbillow
 *
 */
@Controller
@RequestMapping("/peptide")
public class PeptideController {

	private PeptideService peptideService ;
	@Resource(name="peptideService")
	public void setPeptideService(PeptideService peptideService) {
		this.peptideService = peptideService;
	}
	
	/**
	 * 根据子项目分页查找所有肽段（返回的肽段序列不同）
	 * @param NextPageNum
	 * @return
	 */
	@RequestMapping(value="/selectAll",produces="application/json")
	@ResponseBody
	public String selectAllPeptide(int subId, int NextPageNum) throws Exception {
		Map<String, Object> map = peptideService.getPeptideBySubId(subId, NextPageNum) ;
		return JSON.toJSONString(map) ;
	}
	
	/**
	 * 根据肽段序列分页查找该序列下所有肽段
	 * @param NextPageNum
	 * @param peptide	肽段序列
	 * @return
	 */
	@RequestMapping(value="/selectPeptideByPeptide",produces="application/json")
	@ResponseBody
	public String selectTheSamePeptideByPeptide(int NextPageNum, String peptide) throws Exception{
		//System.out.println("NextPageNum:"+NextPageNum+" :peptide"+peptide);
		Map<String, Object> map = peptideService.getTheSamePeptideByPeptide(NextPageNum, peptide);
		return JSON.toJSONString(map) ;
	}
	
	/**
	 * 根据蛋白质id分页查询该蛋白质下所有的肽段详情
	 * @param NextPageNum
	 * @param proteinId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/selectPeptideByProteinId",produces="application/json")
	@ResponseBody
	public String getPeptideByProteinId(int NextPageNum,int proteinId) throws Exception{
		
		Map<String, Object> map=peptideService.getPeptideByProteinId(NextPageNum,proteinId);
		return JSON.toJSONString(map);
	}
	
	/**
	 * 将delta_m_z（肽段的属性）按值分类，得到所有记录的数目与所有记录中最大数目的比值
	 * @return
	 */
	@RequestMapping(value="/getView1",produces="application/json")
	@ResponseBody
	public String getDeltaCountRatio(int subId){
		Map<String,Object> map=peptideService.getDeltaCountRatio(subId);
		return JSON.toJSONString(map);
	}

	/**
	 * by liweiguo
	 * 根据子项目查询肽段，将肽段按照cutting_site的数目分类
	 * @param subid
	 * @return
	 */

	@RequestMapping(value="/getView3",produces="application/json")
	@ResponseBody
	public String getPeptideCountOfProteinBySubId(int subId){
		Map<String,Object> map=peptideService.getCuttingSite(subId);
		return JSON.toJSONString(map);
	}
	
	/**
	 * 在子项目下将肽段按照cutting_site的值分类
	 * 返回cutting_site值和相应肽段数目
	 * @param subId
	 * @return
	 */
	@RequestMapping(value="/getView6",produces="application/json")
	@ResponseBody
	public String getDeltaInfoBySubId(int subId){
		Map<String,Object> map=peptideService.getDeltaInfoBySubId(subId);
		System.out.println("ceshi");
		return JSON.toJSONString(map);
	}
}
