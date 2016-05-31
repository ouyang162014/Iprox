package cn.cqupt.iprox.test;

import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.cqupt.iprox.dao.GroupDao;
import cn.cqupt.iprox.dao.PeptideDao;
import cn.cqupt.iprox.dao.ProjectDao;
import cn.cqupt.iprox.dao.ProteinDao;
import cn.cqupt.iprox.dao.SubProjectDao;
import cn.cqupt.iprox.model.vo.STTDType;

public class T {
	
	public static void main(String[] args) {
		

		STTDType sttd = new STTDType() ;
		
		FileSystemXmlApplicationContext  applicationContext=new FileSystemXmlApplicationContext("WebRoot/WEB-INF/applicationContext.xml");
		ProjectDao pdao=applicationContext.getBean(ProjectDao.class);
		GroupDao gdao = applicationContext.getBean(GroupDao.class) ;
		SubProjectDao spdao = applicationContext.getBean(SubProjectDao.class) ;
		ProteinDao proDao = applicationContext.getBean(ProteinDao.class) ;
		PeptideDao pepDao = applicationContext.getBean(PeptideDao.class) ;
		
		//System.out.println(gdao.getGroupByPage(0).get(1).getGroupName());
		//System.out.println(gdao.getGroupCount());
		//System.out.println(pdao.getProjectByPage(1).get(1).getPtitle());
		//System.out.println(pdao.getProjectCount());
		//System.out.println(pdao.getProjectByPid(1).getPtitle());
		
		//根据群组查询项目
		/*Map<String, Integer> params = new HashMap<String, Integer>() ;
		params.put("ProjectNum", 10) ;
		params.put("gid", 1) ;
		List<ReturnDetail> projects = pdao.getProjectByGroup(params);
		for(int i=0; i<projects.size(); i++) {
			System.out.println("GroupName: " + projects.get(i).getGroup().getGroupName() + " " +i);
			System.out.println("Ptitle: " + projects.get(i).getProject().getPtitle() + " " + i);
			System.out.println();
		}
		System.out.println(pdao.getProjectCountByGroup(1));*/
		
		//根据（物种，组织，细胞类型，疾病类型）查询该类型
		/*String species = "species" ;
		sttd.setSpecies(species) ;
		String type = "species" ;
		sttd.setType(type) ;
		sttd.setRows(0) ;
		List<SubProject> subProjects = spdao.getSTTDNameBySTTD(sttd) ;
		for(int i=0; i<subProjects.size(); i++) {
			System.out.print(subProjects.get(i).getSpecies());
			System.out.println();
		}*/
		
		//根据（物种，组织，细胞类型，疾病类型）查询该类型总数
		/*type ="species" ;            
		sttd.setType(type) ;
		int pageCount = spdao.getSTTDNameBySTTDCount(sttd);
		System.out.println("该类型总数：" + pageCount);*/
		
		
		//根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目
		/*String species = "Homo sapiens" ;
		sttd.setProjectNum(20) ;
		sttd.setSpecies(species) ;
		List<Project> projects = pdao.getProjectBySTTD(sttd) ;
		for(int j=0; j<projects.size(); j++) {
			System.out.println(projects.get(j).getPtitle());
			System.out.println(projects.get(j).getPid());
		}*/
		
		//根据（物种，组织，细胞类型，疾病类型）查询包含该条件的项目总数
		/*//String species = "Homo sapiens" ;
		String tissue = "liver" ;
		//sttd.setSpecies(species) ;
		sttd.setTissue(tissue) ;
		System.out.println(pdao.getProjectCountBySTTD(sttd));*/
		
		//根据id查询子项目详情（子项目信息和组信息）
		//System.out.println(spdao.getSubProjectById(2).get(0).getGroup().getGroupName());
		//System.out.println(spdao.getSubProjectById(2).get(0).getSubProject().getSubtitle());
		//根据id查询子项目详情（连表）
		//System.out.println(spdao.getSubProjectById(220).get(0).getSubtitle()) ;
		//System.out.println(spdao.getSubProjectDetailById(220).get(1).getMssource().getCv());
		
		//查询蛋白质对应的肽段，
		//查询蛋白质对应的肽段数量
		/*Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("rows", 0);
		params.put("proteinId", 1);
		List<ReturnDetail> peptides = pepDao.getPeptideByProteinId(params);
		for(int i=0; i<peptides.size(); i++) {
			System.out.println(peptides.get(i).getPeptide().getPeptide());
			System.out.println(peptides.get(i).getPeptide().getPrecursor_m_z());
		}
		System.out.println(pepDao.getPeptideByProteinIdCount(1));*/
		
		
		//查询序列相同的肽段
		/*Map<String, Object> params = new HashMap<String, Object>() ;
		Integer rows = 0 ;
		params.put("rows", rows) ;
		params.put("peptide", "GITWGEETLMEYLENPK") ;
		List<ReturnDetail> peptides = pepDao.getTheSameByPeptide(params);
		for(int i=0; i<peptides.size(); i++) {
			System.out.println(peptides.get(i).getPeptide().getModifications());
			System.out.println(peptides.get(i).getPeptide().getDelta_m_z());
			System.out.println(peptides.get(i).getPeptide().getPeptide_id());
		}
		System.out.println(pepDao.getPeptideCountByPeptide("GITWGEETLMEYLENPK"));*/
		
		//根据子项目id查询蛋白质
		/*Map<String, Integer> params = new HashMap<String, Integer>() ;
		params.put("rows", 0) ;
		params.put("subId", 2) ;
		List<ReturnDetail> proteins = proDao.getProteinBySubId(params) ;
		for(int i=0; i<proteins.size(); i++) {
			System.out.println("Subtitle: " + proteins.get(i).getSubProject().getSubtitle() + " " + i);
			System.out.println("Protein: " + proteins.get(i).getProtein().getProtein() + " " + i);
			System.out.println();
		}
		System.out.println(proDao.getProteinCountBySubId(2));*/
		
		//根据子项目id查询肽段(返回的肽段序列不相同)
		
	}
}
