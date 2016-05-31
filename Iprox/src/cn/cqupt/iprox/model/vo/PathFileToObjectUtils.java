package cn.cqupt.iprox.model.vo;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import cn.cqupt.iprox.dao.ProteinDao;

/**
 * 将质谱图路径转换为对象的方法 返回一个SpectrumDetail的List 即一个质谱图的图的所有坐标信息
 * 
 * @author Cbillow
 * 
 */
public class PathFileToObjectUtils {

	/**
	 * 根据文件路径返回Name,现在name在第一行，以后如果name的位置修改了就需要修改该代码。
	 * 
	 * @param path
	 * @return
	 * @throws IOException
	 */
	public static String getNameFromFile(String path) throws IOException {
		File file = new File("path");
		FileInputStream in = new FileInputStream(file);
		InputStreamReader inReader = new InputStreamReader(in);
		BufferedReader reader = new BufferedReader(inReader);
		String line = reader.readLine();
		return line;
	}

	/**
	 * 将文件path解析为对象
	 * 
	 * @param path
	 * @return 返回一个SpectrumDetail的List 即一个质谱图的图的所有坐标信息
	 * @throws ParserConfigurationException
	 * @throws IOException
	 * @throws SAXException
	 */
	
	
	
	public static List<SpectrumView> stringToSpectrumView(String path)
			throws ParserConfigurationException, SAXException, IOException {
		List<SpectrumView> spectrumDetails = new ArrayList<SpectrumView>();
		SpectrumView spectrumView = new SpectrumView();
		Element element = null;
		// 可以使用绝对路劲
		File f = new File(path);
		// documentBuilder为抽象不能直接实例化(将XML文件转换为DOM文件)
		DocumentBuilder db = null;
		DocumentBuilderFactory dbf = null;
		try {
			// 返回documentBuilderFactory对象
			dbf = DocumentBuilderFactory.newInstance();
			// 返回db对象用documentBuilderFatory对象获得返回documentBuildr对象
			db = dbf.newDocumentBuilder();
			// 得到一个DOM并返回给document对象
			Document dt = db.parse(f);
			// 得到一个elment根元素
			element = dt.getDocumentElement();
			// 获得根元素下的子节点
			NodeList childNodes = element.getChildNodes();
			// 遍历这些子节点
			for (int i = 0; i < childNodes.getLength(); i++) {
				// 获得每个对应位置i的结点
				Node node = childNodes.item(i);
				if ("name".equals(node.getNodeName())){
					spectrumView.setSequence(node.getTextContent());
				}else if("numPeaks".equals(node.getNodeName())){
					spectrumView.setScanNum(Integer.parseInt(node.getTextContent()));
				}else if("modifications".equals(node.getNodeName())){
					NodeList modifications = node.getChildNodes();
					Map<String,Object> modificationsMap = new HashMap<String,Object>();
					for(int n = 0; n < modifications.getLength(); n++){
						NodeList modification = modifications.item(n).getChildNodes();
						for (int j = 0; j < modification.getLength(); j++) {
							Map<String,Object> modificationMap = new HashMap<String,Object>();
							// 获得每个对应位置i的结点
							Node modificationNode = modification.item(j);
							if ("modificationName".equals(modificationNode.getNodeName())){
								modificationMap.put("modificationName", modificationNode.getTextContent());
							}else if("modAccession".equals(node.getNodeName())){
								modificationMap.put("modAccession", modificationNode.getTextContent());
							}else if("monoisotopicMassDelta".equals(node.getNodeName())){
								//读取monoisotopicMassDelta信息
								NodeList monoisotopicMassDelta = modificationNode.getChildNodes();
								List<String> monoisotopicMassDeltaList = new ArrayList<String>();
								for(int k =0; k < monoisotopicMassDelta.getLength(); k++){
									monoisotopicMassDeltaList.add(monoisotopicMassDelta.item(k).getTextContent());
								}
								modificationMap.put("monoisotopicMassDelta",monoisotopicMassDelta);
							}
							modificationsMap.put("modification"+j, modificationMap);
						}
					}
					spectrumView.setModifications(modificationsMap);
					
				}else if("peakList".equals(node.getNodeName())) {
					//获取所有peaks对象
					NodeList peaks = node.getChildNodes();
					List<Float> mz = new ArrayList<Float>();
					List<Float> intensity = new ArrayList<Float>();
					for(int m = 0; m < peaks.getLength(); m++){
						NodeList peakList = peaks.item(m).getChildNodes();
						for(int n= 0; n < peakList.getLength(); n++){
							if("mz".equals(peakList.item(n).getNodeName())){
								mz.add(Float.parseFloat(peakList.item(n).getTextContent()));
							}else if("intensity".equals(peakList.item(n).getNodeName())){
								intensity.add(Float.parseFloat(peakList.item(n).getTextContent()));
							}else if("charges".equals(peakList.item(n).getNodeName())){
								spectrumView.setCharge(Integer.parseInt(peakList.item(n).getTextContent()));
							}else {
								continue;
							}
						}
					}
					//创建集合存储mz和intensity值
					List<List<Float>> ms2peaks = new ArrayList<List<Float>>();
					for(int mn = 0; mn < mz.size(); mn++){
						List<Float> peakList = new ArrayList<Float>();
						peakList.add(mz.get(mn));
						peakList.add(intensity.get(mn));
						ms2peaks.add(peakList);
					}
					spectrumView.setMzs(mz);
					spectrumView.setIntensitys(intensity);
					spectrumView.setMs2peaks(ms2peaks);
					spectrumView.setFileName(path.substring(path.lastIndexOf(File.separator),path.length()));
				}else{
					continue;
				}
			}
			spectrumDetails.add(spectrumView);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return spectrumDetails;
	}

	/**
	 * 将路径对应的文件解析为字符串 去掉有冒号的行
	 * 
	 * @param path
	 * @return
	 */
	/*private static String pathToString(String path) {
		StringBuffer sBuffer = new StringBuffer();
		try {
			File tmp = new File("");
			// path = tmp.getAbsolutePath() +
			// "/document/其它文档/030918_hfl_HF_SDS_01.00279.00279.2.msp" ;
			File file = new File(path);

			if (file.isFile() && file.exists()) { // 判断文件是否存在
				InputStreamReader read = new InputStreamReader(
						new FileInputStream(file), "utf-8");// 考虑到编码格式
				BufferedReader bufferedReader = new BufferedReader(read);
				String s1 = null;
				// 开始读取
				while ((s1 = bufferedReader.readLine()) != null) { // 依次读取每一行，如果有：则不读取
					if (!s1.contains("\t")) {
						s1 = null; // 去除无用的行
					} else {
						sBuffer.append(s1 + "&&&"); // 如果不属于无用行，则在每一行后面加&&&，以便拆分
					}
				}
				read.close();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sBuffer.toString();
	}*/

	/*public static void main(String[] args) {

		String path = "D:\\iprox\\Human_Fetal_Liver\\CHPP_97H_RP10_1.dat-pride.xml14413.xml";

		List<SpectrumView> spectrumDetails;
		try {
			spectrumDetails = PathFileToObjectUtils.stringToSpectrumView(path);
			for (SpectrumView sd : spectrumDetails) {
				System.out.println(sd);
			}
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}*/
}