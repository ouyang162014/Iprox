
function subPro(){
	var jsonData=getJson();
	loadSubInf(jsonData);
	loadInfPro(jsonData);
	loadDetOfMsIn(jsonData);
    loadDeOfExPro(jsonData);
    loadDeOfInPro(jsonData);
}

//加载第1张表SubProject Information数据
function loadSubInf(dataObj){
	var data=toJson(dataObj),
		oTable=document.getElementById('SubProject-Information'),
		oTbody=oTable.tBodies[0];
		for(var i=0;i<15;i++){
			oTbody.insertRow(i);
			oTbody.rows[i].insertCell(0);	
			oTbody.rows[i].cells[0].innerHTML=subInfoChange(i,data)[0];
			oTbody.rows[i].insertCell(1);
			oTbody.rows[i].cells[1].innerHTML=subInfoChange(i,data)[1];
		}
		setTrWidth(oTable);
		changeFormColor(oTable);
}
/*为每一张表设置样式*/
function setTrWidth(oTable){
	var trNo=oTable.getElementsByTagName('tr')[0].getElementsByTagName('td').length;
	var td=oTable.getElementsByTagName('td');
	if(trNo==2){
	    td[0].style.width="20%";
	    td[1].style.width="80%";
	}else if(trNo==4){
		td[0].style.width="20%";
	    td[1].style.width="20%";
	    td[2].style.width="40%";
	    td[3].style.width="20%";
	}
}


//适用于第1张表SubProject Information
function subInfoChange(i,data){
	var arr=new Array();
	switch(i){
		case 0:arr[0]="SubProject ID";          arr[1]=data.subProject[0].subProject.subid;            return arr;break;
		case 1:arr[0]="ProteomeXchange";        arr[1]=data.subProject[0].subProject.subid;            return arr;break;
		case 2:arr[0]="SubProject Title";       arr[1]=data.subProject[0].subProject.subtitle;         return arr;break;
		case 3:arr[0]="SubProjec Status";       arr[1]=data.subProject[0].subProject.status;           return arr;break;
		case 4:arr[0]="SubProjec Tag";          arr[1]=data.subProject[0].subProject.subtag;           return arr;break;
		case 5:arr[0]="SubProjec Description";  arr[1]=data.subProject[0].subProject.subdescription;   return arr;break;
		case 6:arr[0]="Species";                arr[1]=data.subProject[0].subProject.species;          return arr;break;
		case 7:arr[0]="Tissue";                 arr[1]=data.subProject[0].subProject.tissue;           return arr;break;
		case 8:arr[0]="Cell Type";              arr[1]=data.subProject[0].subProject.celltype;         return arr;break;
		case 9:arr[0]="Disease";                arr[1]=data.subProject[0].subProject.disease;          return arr;break;
		case 10:arr[0]="Quantitation";          arr[1]=data.subProject[0].subProject.quantitation;     return arr;break;
		case 11:arr[0]="Digestion";             arr[1]=data.subProject[0].subProject.digestion;        return arr;break;
		case 12:arr[0]="Other Information";     arr[1]=data.subProject[0].subProject.otherinformation; return arr;break;
		case 13:arr[0]="SubProject Summary";    arr[1]=data.subProject[0].subProject.subsummary;       return arr;break;
		// case 14:arr[0]="Groups";                arr[1]=data.subProject[0].group.groupName;             return arr;break;
		case 14:arr[0]="Groups";                arr[1]="";             return arr;break;
	}
}

//加载第2张表Informatics Protocol数据
function loadInfPro(dataObj){
	var data=toJson(dataObj),
		oTable=document.getElementById('Informatics-Protocol'),
		oTbody=oTable.tBodies[0];
		
		for(var i=0;i<6;i++){
			oTbody.insertRow(i);
			oTbody.rows[i].insertCell(0);
			
			//alert(InfProChange(i,data));
			oTbody.rows[i].cells[0].innerHTML=InfProChange(i,data)[0];
			oTbody.rows[i].insertCell(1);
			//alert(data.subProject[0].subProject.subid);
			oTbody.rows[i].cells[1].innerHTML=InfProChange(i,data)[1];
		}	
		setTrWidth(oTable);
		changeFormColor(oTable);

}
//适用于第2张表Informatics Protocol数据
function InfProChange(i,data){
	var arr=new Array();
	switch(i){
		case 0:arr[0]="DB search software name";    arr[1]=data.subProject[0].subProject.subid;     return arr;break;//没有
		case 1:arr[0]="DB search software version"; arr[1]=data.subProject[0].subProject.subid;     return arr;break;//没有
		case 2:arr[0]="Searched database type";     arr[1]=data.subProject[0].subProject.sdtype;    return arr;break;
		case 3:arr[0]="Searched database version";  arr[1]=data.subProject[0].subProject.sdversion; return arr;break;
		case 4:arr[0]="Decoy database type";        arr[1]=data.subProject[0].subProject.ddtype;    return arr;break;
		case 5:arr[0]="Quality estimation method";  arr[1]=data.subProject[0].subProject.quality;   return arr;break;
	}
}



//加载第3,4,5张表Informatics Protocol数据
function loadDetOfMsIn(dataObj){

    var data=toJson(dataObj),
        oTable,
        oTbody,
        tableCount=0,
        count=data.subProjectDetail.length;
    
        // alert(data.subProjectDetail[0]!=null);
        // "Ion-source" in data.subProjectDetail[0]
    if(data.subProjectDetail[0]!=null){
    	for(var j=0;j<3;j++){
    	if((j==0)){
    		if("Ion-source" in data.subProjectDetail[0]){
    			oTable=document.getElementById('Ion-source');
    		}else{
    			document.getElementById('Ion-source').style.display="none";
    			tableCount++;
    			continue;
    		}
		    
         }else if((j==1)){
         	if("Analyzer" in data.subProjectDetail[0]){
         		oTable=document.getElementById('Analyzer');
         	}else{
         		document.getElementById('Analyzer').style.display="none";
         		tableCount++;
         		continue;
         	}

         }else if((j==2)){
         	if("Detectore" in data.subProjectDetail[0]){
         		oTable=document.getElementById('Detectore');
         	}else{
         		document.getElementById('Detectore').style.display="none";
         		tableCount++;

         		if(tableCount==3){
         			document.getElementById('de-of-in').style.display="none";
         		}
         		continue;
         	}
            
         }
  
    

		    
		
		 for(var i=0;i<count;i++){
		 	//alert(j);
		 	oTbody=oTable.tBodies[0];//js里面的相除与java不一样。
		 	oTbody.insertRow(i);
		 	
		 	oTbody.rows[i].insertCell(0);
		 	//alert(3);
		 	//alert(InfProChange(i,data));
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[0].innerHTML=DetOfMsInChange(i,j,data)[0];
		     }else{
		     	oTbody.rows[i].cells[0].innerHTML=DetOfMsInChange(i,j,data)[4];
		     }
		 	oTbody.rows[i].insertCell(1);
		 	//alert(data.subProject[0].subProject.subid);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[1].innerHTML=DetOfMsInChange(i,j,data)[1];
		     }else{
		     	oTbody.rows[i].cells[1].innerHTML=DetOfMsInChange(i,j,data)[5];
		     }
		 	
		 	oTbody.rows[i].insertCell(2);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[2].innerHTML=DetOfMsInChange(i,j,data)[2];
		     }else{
		     	oTbody.rows[i].cells[2].innerHTML=DetOfMsInChange(i,j,data)[6];
		     }
		 
		 	oTbody.rows[i].insertCell(3);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[3].innerHTML=DetOfMsInChange(i,j,data)[3];
		     }else{
		     	oTbody.rows[i].cells[3].innerHTML=DetOfMsInChange(i,j,data)[7];
		     }
		 	
		 }	
	    changeFormColor(oTable);
	    setTrWidth(oTable);
	}
}else{
	document.getElementById('de-of-in').style.display="none";
}

}

//适用于第3,4,5张表Details of MS Instrument
function DetOfMsInChange(i,j,data){
	var arr=new Array(),
	    whichOfThree='';

	    if(j==0){
	    	whichOfThree='mssource';
	    	
	    }else if(j==1){
	    	whichOfThree='msanalyer';
	    }else if(j==2){
	    	whichOfThree='msdetector';
	    }
	

		switch(i){
			case 0:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProjectDetail[0].mssource.cv; // 报错       
			       return arr;break;
			case 1:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[0][whichOfThree].cv; // 报错 
			       arr[5]=data.subProjectDetail[0][whichOfThree].accession;  
                   arr[6]=data.subProjectDetail[0][whichOfThree].name;  
                   arr[7]=data.subProjectDetail[0][whichOfThree].value;                
			       return arr;break;
			case 2:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[1].mssource.CV;  
			       //arr[4]="待查";       
			       return arr;break;
			case 3:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[1][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[1][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[1][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[1][whichOfThree].value;         
			       return arr;break;
			case 4:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[2].mssource.CV;         
			       return arr;break;
			case 5:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[2][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[2][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[2][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[2][whichOfThree].value; 
			       return arr;break;
			case 6:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProject[0].subProject.subtag;         
			       return arr;break;
			case 7:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[3][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[3][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[3][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[3][whichOfThree].value; 
			       return arr;break;
			case 8:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProject[0].subProject.subtag;         
			       return arr;break;
			case 9:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[4][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[4][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[4][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[4][whichOfThree].value;         
			       return arr;break;
			case 10:arr[0]="CV"; arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProject[0].subProject.subdescription; 
			       return arr;break;
			case 11:arr[0]="CV"; arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[5][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[5][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[5][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[5][whichOfThree].value; 
			       return arr;break;
		}
		
}


//加载表Details of Experiment Protocol数据

function loadDeOfExPro(dataObj){

    var data=toJson(dataObj),
        oTable,
        tableCount=0,
        oTbody;
    if(data.subProjectDetail[0]!=null){
        for(var j=0;j<7;j++){
        	if(j==0){
        		if("growth" in data.subProjectDetail[0]){
        			oTable=document.getElementById('Growth');
        		}else{
        			document.getElementById("Growth").style.display="none";
        			tableCount++;
        			continue;
        		}
	    	    
	    	    //alert("j==0");
             }else if(j==1){
             	if("treament" in data.subProjectDetail[0]){
             		oTable=document.getElementById('Treatmen');
             	}else{
             		document.getElementById("Treatmen").style.display="none";
             		tableCount++;
             		continue;
             	}
                
                //alert("j==1");
             }else if(j==2){
             	if("digestion" in data.subProjectDetail[0]){
             		oTable=document.getElementById('Digestion');
             	}else{
             		document.getElementById("Digestion").style.display="none";
             		tableCount++;
             		continue;
             	}
                
                //alert("j==2");
             }else if(j==3){
             	if("extraction" in data.subProjectDetail[0]){
             		oTable=document.getElementById('Extraction');
             	}else{
             		document.getElementById("Extraction").style.display="none";
             		tableCount++;
             		continue;
             	}
                
                //alert("j==1");
             }else if(j==4){
             	if("Acquisition" in data.subProjectDetail[0]){
             		oTable=document.getElementById('Acquisition');
             	}else{
             		document.getElementById("Acquisition").style.display="none";
             		tableCount++;
             		continue;
             	}
                
                //alert("j==2");
             }else if(j==5){
             	if("separation" in data.subProjectDetail[0]){
             		oTable=document.getElementById('Separation');
             	}else{
             		document.getElementById("Separation").style.display="none";
             		tableCount++;
             		continue;
             	}
                
                //alert("j==1");
             }else if(j==6){
             	if("More-Information" in data.subProjectDetail[0]){
             		oTable=document.getElementById('More-Information');
             	}else{
              		document.getElementById("More-Information").style.display="none";
              		tableCount++;
              		if(tableCount==7){
              			document.getElementById('de-of-ex-pro').style.display="none";
              		}
             		continue;
             	}
             }		    
	    	
	    	 for(var i=0;i<data.subProjectDetail.length;i++){
	    	 	//alert(j);
	    	 	oTbody=oTable.tBodies[0];//js里面的相除与java不一样。
	    	 	oTbody.insertRow(i);
	    	 	
	    	 	oTbody.rows[i].insertCell(0);
	    	 	//alert(3);
	    	 	//alert(InfProChange(i,data));
	    	 	if(i%2==0){
	    	 	    oTbody.rows[i].cells[0].innerHTML=DeOfExProChange(i,j,data)[0];
	    	     }else{
	    	     	oTbody.rows[i].cells[0].innerHTML=DeOfExProChange(i,j,data)[4];
	    	     }
	    	 	oTbody.rows[i].insertCell(1);
	    	 	//alert(data.subProject[0].subProject.subid);
	    	 	if(i%2==0){
	    	 	    oTbody.rows[i].cells[1].innerHTML=DeOfExProChange(i,j,data)[1];
	    	     }else{
	    	     	oTbody.rows[i].cells[1].innerHTML=DeOfExProChange(i,j,data)[5];
	    	     }
	    	 	
	    	 	oTbody.rows[i].insertCell(2);
	    	 	if(i%2==0){
	    	 	    oTbody.rows[i].cells[2].innerHTML=DeOfExProChange(i,j,data)[2];
	    	     }else{
	    	     	oTbody.rows[i].cells[2].innerHTML=DeOfExProChange(i,j,data)[6];
	    	     }
	    	 
	    	 	oTbody.rows[i].insertCell(3);
	    	 	if(i%2==0){
	    	 	    oTbody.rows[i].cells[3].innerHTML=DeOfExProChange(i,j,data)[3];
	    	     }else{
	    	     	oTbody.rows[i].cells[3].innerHTML=DeOfExProChange(i,j,data)[7];
	    	     }
	    	 	
	    	 }	
	        changeFormColor(oTable);
	        setTrWidth(oTable)
	    
	    }
	}else{
	 	document.getElementById('de-of-ex-pro').style.display="none";
	}
}

//适用于表Details of Experiment Protocol数据
function DeOfExProChange(i,j,data){
	var arr=new Array(),
	    whichOfThree='';


	    if(data.subProjectDetail[0]!=null){
	    	if(j==0){
	    	whichOfThree='growth';
	    	
	    }else if(j==1){
	    	whichOfThree='treament';
	    }else if(j==2){
	    	whichOfThree='digestion';
	    }else if(j==3){
	    	whichOfThree='extraction';
	    }else if(j==4){
	    	whichOfThree='acquisition';
	    }else if(j==5){
	    	whichOfThree='separation';
	    }else if(j==6){
	    	whichOfThree='moreinfor';
	    }
	

		switch(i){
			case 0:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProjectDetail[0].mssource.cv;         
			       return arr;break;
			case 1:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[0][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[0][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[0][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[0][whichOfThree].value;           
			       return arr;break;
			case 2:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProjectDetail[1].mssource.CV;         
			       return arr;break;
			case 3:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[1][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[1][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[1][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[1][whichOfThree].value;         
			       return arr;break;
			case 4:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProjectDetail[2].mssource.CV;         
			       return arr;break;
			case 5:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[2][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[2][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[2][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[2][whichOfThree].value; 
			       return arr;break;
			case 6:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProject[0].subProject.subtag;         
			       return arr;break;
			case 7:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[3][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[3][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[3][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[3][whichOfThree].value; 
			       return arr;break;
			case 8:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProject[0].subProject.subtag;         
			       return arr;break;
			case 9:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[4][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[4][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[4][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[4][whichOfThree].value;         
			       return arr;break;
			case 10:arr[0]="CV"; arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProject[0].subProject.subdescription; 
			       return arr;break;
			case 11:arr[0]="CV"; arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProjectDetail[5][whichOfThree].cv;
			       arr[5]=data.subProjectDetail[5][whichOfThree].accession;  
			       arr[6]=data.subProjectDetail[5][whichOfThree].name;  
			       arr[7]=data.subProjectDetail[5][whichOfThree].value; 
			       return arr;break;
		}
	}


}
//加载表Details of Informatics Protocol数据
function loadDeOfInPro(dataObj){
	var data=toJson(dataObj),
        oTable,
        oTbody;
    for(var j=0;j<3;j++){
    	if(j==0){
		    oTable=document.getElementById('Fra-ma-to-set');
		    //alert("j==0");
         }else if(j==1){
            oTable=document.getElementById('Pep-ma-to-set');
            //alert("j==1");
         }else if(j==2){
            oTable=document.getElementById('Ma-mi-cl');
            //alert("j==2");
         }
		
		 for(var i=0;i<2;i++){
		 	//alert(j);
		 	oTbody=oTable.tBodies[0];//js里面的相除与java不一样。
		 	oTbody.insertRow(i);
		 	
		 	oTbody.rows[i].insertCell(0);
		 	//alert(3);
		 	//alert(InfProChange(i,data));
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[0].innerHTML=DeOfInProChange(i,j,data)[0];
		     }else{
		     	oTbody.rows[i].cells[0].innerHTML=DeOfInProChange(i,j,data)[4];
		     }
		 	oTbody.rows[i].insertCell(1);
		 	//alert(data.subProject[0].subProject.subid);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[1].innerHTML=DeOfInProChange(i,j,data)[1];
		     }else{
		     	oTbody.rows[i].cells[1].innerHTML=DeOfInProChange(i,j,data)[5];
		     }
		 	
		 	oTbody.rows[i].insertCell(2);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[2].innerHTML=DeOfInProChange(i,j,data)[2];
		     }else{
		     	oTbody.rows[i].cells[2].innerHTML=DeOfInProChange(i,j,data)[6];
		     }
		 
		 	oTbody.rows[i].insertCell(3);
		 	if(i%2==0){
		 	    oTbody.rows[i].cells[3].innerHTML=DeOfInProChange(i,j,data)[3];
		     }else{
		     	oTbody.rows[i].cells[3].innerHTML=DeOfInProChange(i,j,data)[7];
		     }
		 	
		 }	
		 changeFormColor(oTable);
		 setTrWidth(oTable)
	}


}

//适用于表Details of Informatics Protocol数据
function DeOfInProChange(i,j,data){
		var arr=new Array(),
	    whichOfThree='';

	    if(j==0){
	    	whichOfThree='fragment';
	    	
	    }else if(j==1){
	    	whichOfThree='peptide';
	    }else if(j==2){
	    	whichOfThree='cleavages';
	    }

		switch(i){
			case 0:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       //arr[4]=data.subProjectDetail[0].mssource.cv;         
			       return arr;break;
			case 1:arr[0]="CV";  arr[1]="Accession";arr[2]="Name";arr[3]="Value"; 
			       arr[4]=data.subProject[0].subProject[whichOfThree+"_cv"];
			       arr[5]=data.subProject[0].subProject[whichOfThree+"_accession"];
			       arr[6]=data.subProject[0].subProject[whichOfThree+"_name"];
			       arr[7]=data.subProject[0].subProject[whichOfThree+"_value"];       
			       return arr;break;
		}
}



/*隔行变色*/
function changeFormColor(oTable){
	var tr=oTable.getElementsByTagName('tr');
	for (var i=0;i<tr.length;i++) {
			if(i%2==0){
				tr[i].style.backgroundColor="#a1d6f0";
			}
			else{
				tr[i].style.backgroundColor="#aaebca";
			}
		}
}


//解析json数据
function toJson(jsontext){
	var obj=null;
	if(JSON instanceof Object){
		obj=JSON.parse(jsontext);
		
	}else{
		obj=eval(jsontext);
	
	}
	return obj;
}



/*获得返回的json数据*/
function getJson(){
	var jsonData=document.getElementById('subproject-vie-data').getAttribute("value");
	return jsonData;

}





