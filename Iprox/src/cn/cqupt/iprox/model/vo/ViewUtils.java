package cn.cqupt.iprox.model.vo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class ViewUtils {
	
	/**
	 * 传入各值charge与相应的数量
	 * 得到1,2,3,4,5,6,7,>7的值的charge的各数量
	 * @param list
	 * @return
	 */
	
	public static Map<String,Object> getChargeInfoBycount(List<Map<String,Object>> list){
		Map<String,Object> chargeInfoBycount=new HashMap<String,Object>();
		double countChargeMore7=0;
		for(Map<String,Object> map:list){
			
			Integer charge=(Integer) map.get("charge");//得到charge
			Long number= (Long) map.get("number");//得到number ！！！此处有技术上的疑问，为什么用long才可以
			
			if(charge==1){
				chargeInfoBycount.put("1", number);
			}else if(charge==2){
				chargeInfoBycount.put("2", number);
			}else if(charge==3){
				chargeInfoBycount.put("3", number);
			}else if(charge==4){
				chargeInfoBycount.put("4", number);
			}else if(charge==5){
				chargeInfoBycount.put("5", number);
			}else if(charge==6){
				chargeInfoBycount.put("6", number);
			}else if(charge==7){
				chargeInfoBycount.put("7", number);
			}else{
				chargeInfoBycount.put("more7", number);
				//countChargeMore7=countChargeMore7+number;
			}
		}
		//chargeInfoBycount.put("more7", countChargeMore7);
		return chargeInfoBycount;
	}
	
	
	/**
	 * 传入每个delta值对应的precursorMZ数量,返回每个数量与总数量的比值
	 * @param precursorMZCount
	 * @return
	 */
	public static List<BigDecimal> getPrecursorMZRatio (List<Integer> precursorMZCount){
		List<BigDecimal> precursorMZRatio = new ArrayList<BigDecimal>();
		
		int allCount=0;
		for(int i:precursorMZCount){
			allCount=allCount+i;
		}
		
		for(int i:precursorMZCount){
			float j=(float)i/(float)allCount;
			BigDecimal b=new BigDecimal(j);
			BigDecimal ratio=b.setScale(4, BigDecimal.ROUND_HALF_UP);
			precursorMZRatio.add(ratio);
		}
		
		return precursorMZRatio;
	}
	
	
	/**
	 * 传入每个肽段数目的蛋白质数目,转为比例
	 * @param byPeptideCount
	 * @return
	 */
	public static Map<String,Object> getRatio(Map<String,Object> byPeptideCount){
		Map<String,Object> map=new HashMap<String,Object>();
		
		int count1=(Integer) byPeptideCount.get("1");
		int count2=(Integer) byPeptideCount.get("2");
		int count3=(Integer) byPeptideCount.get("3");
		int count4=(Integer) byPeptideCount.get("4");
		int count5=(Integer) byPeptideCount.get("5");
		int countThan5=(Integer) byPeptideCount.get("than5");
		int allCount=count1+count2+count3+count4+count5+countThan5;
		
		float oratio1=(float)count1/(float)allCount;
		BigDecimal b1=new BigDecimal(oratio1);
		BigDecimal ratio1=b1.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		float oratio2=(float)count2/(float)allCount;
		BigDecimal b2=new BigDecimal(oratio2);
		BigDecimal ratio2=b2.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		float oratio3=(float)count3/(float)allCount;
		BigDecimal b3=new BigDecimal(oratio3);
		BigDecimal ratio3=b3.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		float oratio4=(float)count4/(float)allCount;
		BigDecimal b4=new BigDecimal(oratio4);
		BigDecimal ratio4=b4.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		float oratio5=(float)count5/(float)allCount;
		BigDecimal b5=new BigDecimal(oratio5);
		BigDecimal ratio5=b5.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		float oratioThan5=(float)countThan5/(float)allCount;
		BigDecimal bThan5=new BigDecimal(oratioThan5);
		BigDecimal ratioThan5=bThan5.setScale(2, BigDecimal.ROUND_HALF_UP);
		
		map.put("ratio1", ratio1);
		map.put("ratio2", ratio2);
		map.put("ratio3", ratio3);
		map.put("ratio4", ratio4);
		map.put("ratio5", ratio5);
		map.put("ratioThan5", ratioThan5);
		
		return map;
	}
	
	/**
	 * 传入每个蛋白质下肽段的数目，按照1,2,3,4,5,>5做统计，返回Map
	 * @param peptideCounts
	 * @return
	 */
	public static Map<String,Object> byPeptideCount(List<String> peptideCounts){
		Map<String,Object> map=new HashMap<String,Object>();
		int count1=0,count2=0,count3=0,count4=0,count5=0,countThan5=0;
		for(String peptideCount:peptideCounts){
			if(peptideCount.equals("1")){
				count1++;
			}else if(peptideCount.equals("2")){
				count2++;
			}else if(peptideCount.equals("3")){
				count3++;
			}else if(peptideCount.equals("4")){
				count4++;
			}else if(peptideCount.equals("5")){
				count5++;
			}else{
				countThan5++;
			}
		}
		map.put("1", count1);
		map.put("2", count2);
		map.put("3", count3);
		map.put("4", count4);
		map.put("5", count5);
		map.put("than5", countThan5);
		
		return map;
	}
	
	/**
	 * 将每个数目转化为比值
	 * @param deltaAndCounts
	 * @param maxCount
	 * @return
	 */
	public static Map<String,Object> toRatio(Map<Float,Integer> deltaAndCounts,int maxCount){
		Map<String,Object> map=new HashMap<String,Object>();
		
		for(Entry<Float,Integer> deltaAndCount:deltaAndCounts.entrySet()){
			float delta=deltaAndCount.getKey();//delta值
			int deltaCount=deltaAndCount.getValue();//delta值的数目
			
			float oratio=(float)deltaCount/(float)maxCount;//得到比值
			BigDecimal b=new BigDecimal(oratio);
			BigDecimal ratio=b.setScale(3, BigDecimal.ROUND_HALF_UP);//得到保留三位小数后的比值
			map.put(delta+"", ratio);
		}
		return map;
	}

	/**
	 * by liweiguo
	 * 传入所有肽段的cuttingSite数目，按照0，1,2,3,>3做统计，返回Map
	 * @param cuttingSite
	 * @return
	 */
	public static Map<String,Object> byCutSiteCount(List<Integer> cuttingSite){
		Map<String,Object> map=new HashMap<String,Object>();
		int count0 = 0, count1 = 0, count2 = 0, count3 = 0, countThan3 = 0;
		for(int value : cuttingSite){
			if(value == 0){
				count0++;
			}else if(value == 1){
				count1++;
			}else if(value == 2){
				count2++;
			}else if(value == 3){
				count3++;
			}else
				countThan3++;
			}
		//!!!!!!!!!!!!!!!!!!!!!!此处暂不知道count是否需要转化为String!!!!!!!!!!!!!
		map.put("0", count0);
		map.put("1", count1);
		map.put("2", count2);
		map.put("3", count3);
		map.put("than3", countThan3);
		return map;
	}

	/**
	 * by liweiguo
	 * 传入cuttingSite数目,转为比例
	 * @param byCutSiteCount
	 * @return
	 */
	public static Map<String,Object> getCutSiteRatio(Map<String,Object> byCutSiteCount){
		Map<String,Object> map=new HashMap<String,Object>();

		int count0 = (Integer) byCutSiteCount.get("0");
		int count1 = (Integer) byCutSiteCount.get("1");
		int count2 = (Integer) byCutSiteCount.get("2");
		int count3 = (Integer) byCutSiteCount.get("3");
		int countThan3 = (Integer) byCutSiteCount.get("than3");
		int allCount = count0+count1+count2+count3+countThan3;

		float oratio0 = (float)count0/(float)allCount;
		BigDecimal b0 = new BigDecimal(oratio0);
		BigDecimal ratio0 = b0.setScale(2, BigDecimal.ROUND_HALF_UP);

		float oratio1 = (float)count1/(float)allCount;
		BigDecimal b1 = new BigDecimal(oratio1);
		BigDecimal ratio1 = b1.setScale(2, BigDecimal.ROUND_HALF_UP);

		float oratio2 = (float)count2/(float)allCount;
		BigDecimal b2 = new BigDecimal(oratio2);
		BigDecimal ratio2 = b2.setScale(2, BigDecimal.ROUND_HALF_UP);

		float oratio3 = (float)count3/(float)allCount;
		BigDecimal b3 = new BigDecimal(oratio3);
		BigDecimal ratio3 = b3.setScale(2, BigDecimal.ROUND_HALF_UP);

		float oratioThan3 = (float)countThan3/(float)allCount;
		BigDecimal bThan3 = new BigDecimal(oratioThan3);
		BigDecimal ratioThan3 = bThan3.setScale(2, BigDecimal.ROUND_HALF_UP);

		map.put("ratio0", ratio0);
		map.put("ratio1", ratio1);
		map.put("ratio2", ratio2);
		map.put("ratio3", ratio3);
		map.put("ratioThan3", ratioThan3);

		return map;
	}
}
