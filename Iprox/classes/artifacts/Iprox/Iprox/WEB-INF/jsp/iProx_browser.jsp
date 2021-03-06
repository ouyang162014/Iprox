<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
  <head>	
	<title>iprox_browser</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="image/vnd.microsoft.icon" rel="shortcut icon" href="/Iprox/imgs/iprox.ico"/>
	<link rel="stylesheet" href="/Iprox/html/css/reset.css"/>
	<link rel="stylesheet" href="/Iprox/html/css/iProx_main.css"/>
    <link rel="stylesheet" href="/Iprox/html/css/ProPageTurn.css">
	
  </head>
  
<body>
<!--[if lte IE 7]>
    	<p style="text-align:center; background:#000; color:#fff; margin:0; font-weight:bold;">æ¨çæµè§å¨çæ¬è¿ä½ï¼å°å¯¹æ¨çè®¿é®å¸¦æ¥ä¸ä¾¿ï¼è¯·ä½¿ç¨æ´é«çæ¬æµè§å¨</p>
    <![endif]-->
	<div id="header" class="comWidth">
    	<ul id="mainav">
        	<li><a href="/Iprox">Home</a></li>
        	<li><a href="/Iprox" class="current">Browse</a></li>
        	<li><a href="#">Search</a></li>
        	<li><a href="#">Submit</a></li>
        	<li><a href="#">Log In/Out</a></li>
        	<li><a href="#">Help</a></li>
        </ul>
        <h1>integrated Proteome resources</h1>
    </div>
    <div id="content_browse" class="comWidth clearfix">
    	<div class="con_left" id="secnav">
        	<ul>
            	<li><a href="/Iprox">Home</a></li>
            	<li><a href="/Iprox" class="active">Browse</a></li>
            	<li><a href="#">Search</a></li>
            	<li><a href="#">Submit</a></li>
            	<li><a href="#">Log in</a></li>
            	<li><a href="#">help</a></li>
            </ul>
        </div>
        <div class="con_right">
        	<p>
        		<span>Normal Use: You are NOT required to log in to access public iProX data.<br/>
            	If you wish to submit data please.</span>
        		<a href="#">Log in to iProX submission system</a>
        	</p>
        	<div id="tabModule" class="tabModule clearfix">
            	<div class="tabswitch" id="tabSwitch">
    				<a href="####" class="active">By Projects</a>
    				<a href="####">By group</a>
    				<a href="####">By Species</a>
    				<a href="####">By Tissue</a>
    				<a href="####">By Cell Type</a>
    				<a href="####">By Disease</a>
                </div>
                <div class="tabpage" id="load_content_data">
                	<div style="display:block;">
                	<table id="byproject" width="874px">
                    	<thead>
                        	<tr>
                            	<td width="100px">Project ID</td>
                            	<td width="750px">Project Name</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                   <!--  <div  style="display:block; height:60px !important; margin-top:20px;">
                	<div class="pagebox">
    					<a href="####" class="J_LINK J_PRO PageTurn">Home</a>
                        <a href="####" class="J_LINK J_PRO PageTurn">1</a>
    					<a href="####" class="J_LINK J_PRO PageTurn">2</a>
    					<a href="####" class="J_LINK J_PRO PageTurn">3</a>
    					<a href="####" class="J_LINK J_PRO PageTurn" id="pro_next">next</a>
                        <a href="####" class="J_LINK J_PRO PageTurn">end</a>
        				<span>total</span><label id="pro_pageNumber">21312</label><span>pages</span>
        				<span>go</span><label for="pro_pageid"><input type="text" id="pro_pageid"/></label><span>pages</span>
        				<a href="####" class="J_LINK J_PRO PageTurn">OK</a>
    				</div>
                    </div> -->

                    <div class="turnpagebox" id="content_data_page">
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn">Home</a>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn">1</a>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn" >2</a>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn" >3</a>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn" id="pro_next">next</a>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn">end</a>
                        <span>total</span><label id="pro_pageNumber" class="PageTurn">1</label><span>pages</span>
                        <span>go</span><label for="pro_pageid"><input id="pro_pageid" type="text" class="PageTurn"></label>
                        <span>pages</span>
                        <a href="javascript:void(0)" class="J_LINK J_PRO PageTurn">OK</a>
                    </div>

                	</div>
                    <div>
                		<ul id="bygroup" class="divide clearfix">
                    		<h3>NEWT / NCBI Taxon ID:species Name</h3>
                    		<li>
                        	<h4>Group for standard protein datasets</h4>
                            <ul>
                            	<li><a href="#"><span id="pj_count">IPX0002</span>:<span id="pj_name">Detergent-insoluble proteins of A549</span></a></li>
                				<div class="more">
    								<a href="" class="J_LINK J_GRO">more...</a>
    							</div>
                            </ul>
                        </li>
                   		</ul>
                    	<div style="display:block; height:60px !important; margin-top:40px;" class="turnpagebox">
                			<div class="pagebox">
    							<a href="####" class="J_LINK J_GRO">Home</a>
    							<a href="####" class="J_LINK J_GRO">2</a>
    							<a href="####" class="J_LINK J_GRO">3</a>
    							<a href="####" class="J_LINK J_GRO" id="bygroup_next">next</a>
        						<span>total</span><label id="bygroup_pageNumber">21312</label><span>pages</span>
        						<span>go</span><label for="bygroup_pageid"><input type="text" id="bygroup_pageid"/></label><span>pages</span>
        						<a class="J_LINK J_GRO">OK</a>
    						</div>
                    	</div>
                       <!--  <div class="turnpagebox" id="protein-page-turn">
                            <a href="javascript:void(0)" class="PageTurn">Home</a>
                            <a href="javascript:void(0)" class="PageTurn" style="color: black;">1</a>
                            <a href="javascript:void(0)" class="PageTurn" style="display: none;">2</a>
                            <a href="javascript:void(0)" class="PageTurn" style="display: none;">3</a>
                            <a href="javascript:void(0)" class="PageTurn" id="pro_next">next</a>
                            <a href="javascript:void(0)" class="PageTurn">end</a>
                            <span>total</span><label class="PageTurn ">1</label><span>pages</span>
                            <span>go</span><label for="pro_pageid"><input type="text" class="PageTurn"></label><span>pages</span>
                            <a href="javascript:void(0)" class="PageTurn">OK</a>
                        </div> -->
                	</div>
        		    <div>
                		<ul id="byspecies" class="divide clearfix">
                    		<h3>NEWT / NCBI Taxon ID:species Name</h3>
                    		<li>
                        	<h4>Group for standard protein datasets</h4>
                            <ul>
                            	<li><a href="#"><span id="pj_count">IPX0002</span>:<span id="pj_name">Detergent-insoluble proteins of A549</span></a></li>
                				<div class="more">
    								<a href="" class="J_LINK J_SPE">more...</a>
    							</div>
                            </ul>
                        </li>
                   		</ul>
                    	<div style="display:block; height:60px !important; margin-top:40px;">
                			<div class="pagebox" >
    							<a href="####" class="J_LINK J_SPE">Home</a>
    							<a href="####" class="J_LINK J_SPE">2</a>
    							<a href="####" class="J_LINK J_SPE">3</a>
    							<a href="####" class="J_LINK J_SPE" id="byspecies_next">next</a>
        						<span>total</span><label id="byspecies_pageNumber">21312</label><span>pages</span>
        						<span>go</span><label for="byspecies_pageid"><input type="text" id="byspecies_pageid"/></label><span>pages</span>
        						<a class="J_LINK J_SPE">OK</a>
    						</div>
                    	</div>
                	</div>
        		    <div>
                		<ul id="bytissue" class="divide">
                    		<h3>BRENDA  Accession：Tissue Name</h3>
                    		<li>
                        		<h4>Group for standard protein datasets</h4>
                            	<ul>
                            		<li><a href="#"><span id="pj_count">IPX0002</span>:<span id="pj_name">Detergent-insoluble proteins of A549</span></a></li>
                					<div class="more">
    									<a href="" class="J_LINK J_TIS">more...</a>
    								</div>
                            	</ul>
                        	</li>
                    	</ul>
                    	<div style="display:block; height:60px !important; margin-top:40px;">
                			<div class="pagebox">
    							<a href="####" class="J_LINK J_TIS">Home</a>
    							<a href="####" class="J_LINK J_TIS">2</a>
    							<a href="####" class="J_LINK J_TIS">3</a>
    							<a href="####" class="J_LINK J_TIS" id="bytissue_next">next</a>
        						<span>total</span><label id="bytissue_pageNumber">21312</label><span>pages</span>
        						<span>go</span><label for="bytissue_pageid"><input type="text" id="bytissue_pageid"/></label><span>pages</span>
        						<a class="J_LINK J_TIS">OK</a>
    						</div>
                    	</div>
                	</div>
          		    <div>
                	<ul id="bycelltype" class="divide">
                    	<h3>CL Accession：Cell Type Name</h3>
                    	<li>
                        	<h4>Group for standard protein datasets</h4>
                            <ul>
                            	<li><a href="#"><span id="pj_count">IPX0002</span>:<span id="pj_name">Detergent-insoluble proteins of A549</span></a></li>
                				<div class="more">
    								<a href="" class="J_LINK J_CEL">more...</a>
    							</div>
                            </ul>
                        </li>
                    </ul>
                    <div style="display:block; height:60px !important; margin-top:40px;">
                		<div class="pagebox">
    						<a href="####" class="J_LINK J_CEL">Home</a>
    						<a href="####" class="J_LINK J_CEL">2</a>
    						<a href="####" class="J_LINK J_CEL">3</a>
    						<a href="####" class="J_LINK J_CEL" id="bycelltype_next">next</a>
        					<span>total</span><label id="bycelltype_pageNumber">21312</label><span>pages</span>
        					<span>go</span><label for="bycelltype_pageid"><input type="text" id="bycelltype_pageid"/></label><span>pages</span>
        					<a class="J_LINK J_CEL">OK</a>
    					</div>
                    </div>
                	</div>
        		    <div>
                		<ul id="bydisease" class="divide">
                    		<h3>FFCL Accession：Disease Name</h3>
                            <li>
                                <h4>Group for standard protein datasets</h4>
                                <ul>
                                    <li><a href="#"><span id="pj_count">IPX0002</span>:<span id="pj_name">Detergent-insoluble proteins of A549</span></a></li>
                                    <div class="more">
                                        <a href="" class="J_LINK J_DIS">more...</a>
                                    </div>
                                </ul>
                            </li>
                    	</ul>
                    	<div style="display:block; height:60px !important; margin-top:40px;">
                			<div class="pagebox">
    							<a href="####" class="J_LINK J_DIS">Home</a>
    							<a href="####" class="J_LINK J_DIS">2</a>
    							<a href="####" class="J_LINK J_DIS">3</a>
    							<a href="####" class="J_LINK J_DIS" id="bydisease_next">next</a>
        						<span>total</span><label id="bydisease_pageNumber">21312</label><span>pages</span>
        						<span>go</span><label for="bydisease_pageid"><input type="text" id="bydisease_pageid"/></label><span>pages</span>
        						<a class="J_LINK J_DIS">OK</a>
    						</div>
                    	</div>
                	</div>
                </div> 
    	  </div>
        </div>
    </div>

    <div id="footer" class="comWidth">
    	<p>
        	<span>You can email a support request to the iProX team at the BPRC.contact information iprox@iprox.org</span><br/>
    		<span>Support by Beijing Proteome Research Center(BPRC)</span><br/>
        	<span>京ICP备11036956号-5</span>
        </p>
    </div>
    <a id="backTop" href="javascript:scroll(0,0)" title="top"><img src="html/imgs/backtop.png" alt="back to top"/></a>
    <script src="/Iprox/html/js/myJs.js"></script>
    <script src="/Iprox/html/js/main.js"></script>
</body>
</html>