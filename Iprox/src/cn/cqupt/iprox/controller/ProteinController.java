package cn.cqupt.iprox.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;

import cn.cqupt.iprox.service.ProteinService;
/**
 * 
 * @author xiezhaodong/LIWEI
 *
 */
@Controller
@RequestMapping("/protein")
public class ProteinController {
	private ProteinService proteinService;
	
	@Resource(name="proteinService")
	public void setProteinService(ProteinService proteinService) {
			this.proteinService = proteinService;
	}
	
	/**
	 * 根据子项目id分页查询所有蛋白质
	 * @param NextPageNum
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/selectAll",produces="application/json")
	@ResponseBody
	public String getProteinBypage(int subId, int NextPageNum) throws Exception{
		
		Map<String, Object> map=proteinService.getProteinBySubId(subId, NextPageNum);
		return JSON.toJSONString(map);
	}
	
	/**
	 * 根据子项目查询蛋白质，将蛋白质按照肽段的数目分类,同时返回每种蛋白质数目与总数目的比值
	 * @param subid
	 * @return
	 */
	
	@RequestMapping(value="/getView2",produces="application/json")
	@ResponseBody
	public String getPeptideCountOfProteinBySubId(int subId){
		Map<String,Object> map=proteinService.getPeptideCountOfProteinBySubId(subId);
		return JSON.toJSONString(map);
	}
}
