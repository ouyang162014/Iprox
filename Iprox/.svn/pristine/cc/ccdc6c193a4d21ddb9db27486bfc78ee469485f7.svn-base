package test;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import cn.cqupt.iprox.dao.GroupDao;
import cn.cqupt.iprox.dao.PeptideDao;
import cn.cqupt.iprox.dao.ProjectDao;
import cn.cqupt.iprox.dao.ProteinDao;
import cn.cqupt.iprox.dao.SpectrumDao;
import cn.cqupt.iprox.dao.SubProjectDao;
import cn.cqupt.iprox.model.vo.STTDType;

public class T {
	
	public static void main(String[] args) {
		

		STTDType sttd = new STTDType() ;
		
		FileSystemXmlApplicationContext  applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		ProjectDao pdao=applicationContext.getBean(ProjectDao.class);
		GroupDao gdao = applicationContext.getBean(GroupDao.class) ;
		SubProjectDao spdao = applicationContext.getBean(SubProjectDao.class) ;
		PeptideDao pepdao = applicationContext.getBean(PeptideDao.class) ;
		ProteinDao prodao = applicationContext.getBean(ProteinDao.class) ;
		SpectrumDao spedao = applicationContext.getBean(SpectrumDao.class) ;
		//System.out.println(pdao.getProjectByPage(1).get(1).getPtitle());
		//System.out.println(pdao.getProjectCount());
		//System.out.println(gdao.getGroupByPage(0).get(1).getGroupName());
		//System.out.println(gdao.getGroupCount());
		//System.out.println(pdao.getProjectByPid(1).getPtitle());
		
		/*//根据（物种，组织，细胞类型，疾病类型）查询该类型
		String species = "species" ;
		sttd.setSpecies(species) ;
		String type = "species" ;
		sttd.setType(type) ;
		sttd.setRows(0) ;
		List<SubProject> subProjects = spdao.getSubProjectBySTTD(sttd) ;
		for(int i=0; i<subProjects.size(); i++) {
			System.out.print(subProjects.get(i).getSpecies());
			System.out.println();
		}*/
		
		/*//根据（物种，组织，细胞类型，疾病类型）查询该类型总数
		String type ="species" ;            
		sttd.setType(type) ;
		int pageCount = spdao.getSubProjectBySTTDCount(sttd);
		System.out.println("该类型总数：" + pageCount);*/
		
		
		/*//根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目
		String species = "Homo sapiens" ;
		sttd.setProjectNum(20) ;
		sttd.setSpecies(species) ;
		List<Project> projects = pdao.getProjectBySTTD(sttd) ;
		for(int j=0; j<projects.size(); j++) {
			System.out.print(projects.get(j).getPtitle());
			System.out.println();
		}*/
		
		/*//根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目总数
		//String species = "Homo sapiens" ;
		String tissue = "liver" ;
		//sttd.setSpecies(species) ;
		sttd.setTissue(tissue) ;
		System.out.println(pdao.getProjectCountBySTTD(sttd));*/
		
		//System.out.println(pepdao.getPeptideByPage(0));
//		Map<String,Integer> params = new HashMap<String, Integer>();
//		params.put("rows", 0);
//		params.put("proteinId", 1);
	//	System.out.println(prodao.getPeptideByProteinId(params));
		
//		List<ReturnDetail> spectrums = spedao.getSpectrumBySubId(2);
//		for(int i=0; i<spectrums.size(); i++) {
//			System.out.print(spectrums.get(i).getSpectrum().getPrecursor_m_z());
//			System.out.println();
//		}
//		System.out.println(spedao.getSpectrumBySubId(2).get(1).getSubProject().getSubtitle());
		
		//System.out.println(spedao.getSpectrumPathByPeptideId(1).getPath());
//		System.out.println(pepdao.getDeltaBySubId(2).size());
//		System.out.println(pepdao.getDeltaBySubId(2).get(0));
//		System.out.println(spedao.getPeaksBySubId(2).get(0));
//		System.out.println(spedao.getPeaksBySubId(2).get(1));
//		System.out.println(spedao.getPeaksBySubId(2).get(2));
	}

}
