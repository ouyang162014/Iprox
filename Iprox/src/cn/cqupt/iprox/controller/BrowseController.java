package cn.cqupt.iprox.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.cqupt.iprox.service.GroupService;
import cn.cqupt.iprox.service.ProjectService;
import cn.cqupt.iprox.service.SubProjectService;

import com.alibaba.fastjson.JSON;
//xiezhaodong
@Controller
@RequestMapping("/browse")
public class BrowseController {
	
	private ProjectService projectService;
	private GroupService groupService ;
	private SubProjectService subprojectService ;
	@Resource(name="subProjectService")
	public void setSubprojectService(SubProjectService subprojectService) {
		this.subprojectService = subprojectService;
	}
	@Resource(name="groupService")
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}
	@Resource(name="projectService")
	public void setProjectService(ProjectService projectService) {
		this.projectService = projectService;
	}

	/**
	 * 分页查找项目
	 * @param NextPageNum	下一页
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/byProject",produces="application/json")
	@ResponseBody
	public String selectProject(int NextPageNum) throws Exception{
		Map<String, Object> map=projectService.getProjectByPage(NextPageNum);
        //commit add
        return JSON.toJSONString(map);
	}
	
	/**
	 * 分页查找群组
	 * @param NextPageNum	下一页
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/byGroup",produces="application/json")
	@ResponseBody
	public String selectGroup(int NextPageNum) throws Exception {
		Map<String, Object> map = groupService.getGroupByPage(NextPageNum) ;
		return JSON.toJSONString(map) ;
	}
	
	/**
	 * 通过群组id查找项目
	 * @param GroupId		群组id
	 * @param ProjectNum	需要查找的数目
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/byGroup/project",produces="application/json")
	@ResponseBody
	public String selectProjectByGroup(int GroupId, int ProjectNum) throws Exception {
		Map<String, Object> map = projectService.getProjectByGroup(GroupId, ProjectNum) ;
		return JSON.toJSONString(map) ;
	}
	
	/**
	 * 查找（物种，组织，细胞类型，病毒类型）列表
	 * @param type
	 * @param NextPageNum
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/BySTTD",produces="application/json")
	@ResponseBody
	public String selectSpecies(String type, int NextPageNum) throws Exception {
		Map<String, Object> map = subprojectService.getSTTDNameBySTTD(type, NextPageNum);
		return JSON.toJSONString(map) ;
	}

	/**
	 * 根据类型具体名字（物种，组织，细胞类型，病毒类型）查找该类型对应的项目
	 * @param type
	 * @param STTDName
	 * @param ProjectNum
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/BySTTD/project",produces="application/json")
	@ResponseBody
	public String selectProjectBySTTDName(String type, String STTDName, int ProjectNum) throws Exception {
		Map<String, Object> map = projectService.getProjectBySTTDName(type, STTDName, ProjectNum) ;
		return JSON.toJSONString(map) ;
	}
	

	/**
	 * 根据pid返回项目信息（项目信息中有所属群组，还返回了项目所属子项目信息）
	 * 从 iProx_browse.jsp 页面跳转到 Project.jsp 页面 
	 */
	@RequestMapping(value="/byProject/project",produces="application/json")
	@ResponseBody
	public ModelAndView selectProjectByPid(int pid,int nowPage) throws Exception{
		ModelAndView mav = new ModelAndView() ;
		Map<String,Object> map=projectService.getProjectByPid(pid, nowPage);
		mav.addObject("projectAll", JSON.toJSONString(map)) ;
		mav.setViewName("Project");
		return mav;
	}
	
	/**
	 * 根据subId查询子项目详情（连表查询）
	 * @param subId
	 * @return
	 * @throws Exception
	 * 
	 * 从 Project.jsp页面跳转到 sub_content.jsp页面
	 */
	@RequestMapping(value="/subProject",produces="application/json")
	@ResponseBody
	public ModelAndView selectSubProjectDetail(int subId) throws Exception {
		ModelAndView mav = new ModelAndView() ;
		Map<String, Object> map = subprojectService.getSubProjectDetailById(subId) ;
		mav.addObject("subProjectAll", JSON.toJSONString(map)) ;
		mav.setViewName("sub_content");
		return mav ;
	}
}
