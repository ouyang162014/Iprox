package cn.cqupt.iprox.model.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * 解析 质谱图的图 第三个字符串的解析方法
 * 规则：
 * 		质谱图画法：.msp数据文件中：第一列横坐标，第二列纵坐标，第三列标签。
 * 		第三列标签解析：" y5-18^2/0.044,y5-17^2/-0.456"黑色的部分在谱图的峰上标注出来，有几个标注几个，
 * 		有^2的部分就在显示y5++,没有^2的就只显示一个+，
 * 		-17,-18的部分转换成下表中的内容跟着前面的标注出来，
 		－18为［H2O］   －17为［NH3］
 * 		如这个例子则在峰上显示：y5++[H2O] y5++[NH3]
 		第三列为“？”或"?i"则不在峰上显示
 		
 		信息列表显示规则： y5:0.044 y5:－0.456
 * @author Cbillow
 *
 */
public class SpectrumStringUtils {

	static StringBuffer sBuffer = null ;
	
	/**
	 * 第三个属性的判断拆分，以便解析为标签
	 * @param s	文件里面读出来未处理的字符串s
	 * @return 
	 */
	public static String parseStringToTag(String s){
		//如果为 “？”或"?i" 则返回null
		if(s.equals("?") || s.equals("?i")) {
			return null ;
		} 
		if(s.contains(",")) {											 //判断是否有逗号，如果有逗号，说明都多个对应的值
			StringBuffer sb = new StringBuffer() ;
			String[] a = s.split(",") ;									//如果有 "," 则拆分，分别进行第二步处理
			for(int i=0; i<a.length; i++) {								
				s = SpectrumStringUtils.parseStringToTag(a[i]) ;				//拆分后的字符串分别进行标签解析
				sb.append(s + " ") ;									//将标签放入到一个字符串中
			}
			return sb.delete(sb.length()-1, sb.length()).toString() ;	//去掉末尾的空格返回
		}
		
		/*else if (s.contains(",")) {              	 					//如果有 "," 则拆分，分别进行第二步处理
			
			String s1 = s.substring(0, s.indexOf(",")) ;
			s1 = SpectrumStringUtils.parseTag(s1) ;
			String s2 = s.substring(s.indexOf(","), s.length()) ;
			s2 = SpectrumStringUtils.parseTag(s2) ;
			s = s1 + s2 ;
			s = s.replace(",", " ") ;
			return s ;
		}*/
		
		return SpectrumStringUtils.parseTag(s);						//如果只有一个对应的属性，则直接进行处理后返回
	}
	
	/**
	 * 解析第三个属性为标签
	 * @param s
	 * @return
	 */
	private static String parseTag(String s) {
		sBuffer = new StringBuffer(s) ;
		//如果有/, 则去掉除号后面的，
		if(s.contains("/")) {
			sBuffer = sBuffer.delete(s.indexOf("/"), s.length()) ;
		}
		
		//有^2的部分就在显示y5++,没有^2的就只显示一个+
		if(s.contains("^2")) {
			sBuffer = sBuffer.replace(s.indexOf("^"), s.indexOf("^")+2, "++") ;
		} else {
			sBuffer.append("+") ;
		}
		
		//-17,-18的部分转换成下表中的内容跟着前面的标注出来，
 		//－18为［H2O］   －17为［NH3］
		if(s.contains("-17")) {
			sBuffer = sBuffer.delete(s.indexOf("-17"), s.indexOf("-17")+3) ;
			sBuffer = sBuffer.append("[NH3]") ;
		}
		if(s.contains("-18")) {
			sBuffer = sBuffer.delete(s.indexOf("-18"), s.indexOf("-18")+3) ;
			sBuffer = sBuffer.append("[H2O]") ;
		}
		
		//删除i
		if(s.contains("i")) {
			sBuffer = sBuffer.delete(s.indexOf("i"), s.indexOf("i")+1) ;
		}
		return sBuffer.toString() ;
	}
	
	
	/**
	 * 第三个属性的拆分判断，以便解析为信息列表
	 * @param s
	 * @return
	 */
	public static List<String> parseStringToInfos(String s) {
		List<String> infos = new ArrayList<String>() ;
		//如果为 “？”或"?i" 则返回null
		if(s.equals("?") || s.equals("?i")) {
			return null ;
		}
		if (s.contains(",")) {
			String[] a = s.split(",") ;							//如果有 "," 则拆分，分别进行第二步处理
			for(int i=0; i<a.length; i++) {								
				s = SpectrumStringUtils.parseInfos(a[i]) ;		//拆分字符串分别进行信息解析
				infos.add(s) ;									//解析后的信息放入到列表中
			}
			return infos ;
		}
		infos.add(SpectrumStringUtils.parseInfos(s)) ;			//如果不需要拆分，则直接进行解析
		return infos;
	}
	
	/**
	 * 解析第三个属性为信息
	 * @param s
	 * @return
	 */
	private static String parseInfos(String s) {
		sBuffer = new StringBuffer(s) ;
		if(s.contains("^2")) {
			sBuffer = sBuffer.delete(s.indexOf("^"), s.indexOf("^")+2) ;						//如果有^2，则删除
		}
		if(s.contains("-17")) {
			sBuffer = sBuffer.delete(s.indexOf("-17"), s.indexOf("-17")+3) ;					//如果有－17，则删除
		}
		if(s.contains("-18")) {	
			sBuffer = sBuffer.delete(s.indexOf("-18"), s.indexOf("-18")+3) ;					//如果有－18，则删除
		}
		if(s.contains("/")) {
			sBuffer = sBuffer.replace(sBuffer.indexOf("/"), sBuffer.indexOf("/")+1, ":") ;		//如果有"/"，则转化为":"
		}
		if(s.contains("i")) {																	//删除i
			sBuffer = sBuffer.delete(s.indexOf("i"), s.indexOf("i")+1) ;
		}
		return sBuffer.toString() ;
	}
	
}
