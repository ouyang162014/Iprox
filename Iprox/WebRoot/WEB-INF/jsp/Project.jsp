<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>iProX_subProject</title>
<link type="image/vnd.microsoft.icon" rel="shortcut icon" href="/Iprox/html/imgs/iprox.ico">
<link type="text/css" rel="stylesheet" href="/Iprox/html/css/reset.css">
<link type="text/css" rel="stylesheet" href="/Iprox/html/css/iProx_main.css">
</head>
<body>
	<div id="header" class="comWidth">
    	<ul class="nav clearfix" id="mainav">
        	<li><a href="/Iprox">Home</a></li>
        	<li><a href="/Iprox" class="current">Browse</a></li>
        	<li><a href="#">Search</a></li>
        	<li><a href="#">Submit</a></li>
        	<li><a href="#">Log In/Out</a></li>
        	<li><a href="#">Help</a></li>
        </ul>
        <h1>integrated Proteome resources</h1>
    </div>
    <div id="content_sub" class="comWidth clearfix">
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
            <div>
            <h2>Project Information</h2>
            <table id="pro-inf-table">
                <tr>
                    <td width="20%">Project ID</td>
                    <td width="80%"></td>
                </tr>
                <tr>
                    <td>Proteome X change ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Project Title</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Project Status</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Project Tag</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Recference</td>
                    <td>
                        <table class="childTable">
                            <tr>
                                <td>Reference</td>
                                <td>Pub Med Id</td>
                            </tr>
                            <tr>
                                <td>XX</td>
                                <td>XX</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>
                        <table class="childTable">
                            <tr>
                                <td>Contributors</td>
                                <td>Institution</td>
                                <td>Contact Information</td>
                            </tr>
                            <tr>
                                <td>XX</td>
                                <td>XX</td>
                                <td>XX</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Additional Information</td>
                    <td>
                        <table class="childTable">
                            <tr>
                                <td>Source</td>
                                <td>Name</td>
                                <td>Value</td>
                            </tr>
                            <tr>
                                <td>XX</td>
                                <td>XX</td>
                                <td>XX</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Project Sub miter</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Subproject Count</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Groups</td>
                    <td></td>
                </tr>
            </table>
            </div>
            <div>
        	<h2>Search Summary View</h2>
        	<h3>Select an Experiment (The results will remain restricted according to your original search)</h3>
        	<p>Search filtered on: Experiments Browsed By CV Term , with parameters A Fast Workflow for Identification and Quantification of Proteomes</p>
        	<h3><a href="">View Instructions</a></h3>
        	<h4>This Table Describes 6 Experiments.</h4>
            <table id="vie-Ins-table">
            	<thead>
                	<tr>
                    	<td>Subproject ID</td>
                    	<td>Title </td>
                    	<td>Species</td>
                    	<td>Tissue</td>
                    	<td>Cell Type</td>
                    	<td>GO Term</td>
                    	<td>Disease</td>
                    	<td>Protein Count</td>
                    	<td>Peptide Count</td>
                    	<td>Spectra Count</td>
                    	<td>Details </td>
                    </tr>
                </thead>
                <tbody>
                	<tr>
                    	<td><a href="#">IPX00001701</a></td>
                    	<td>Chinese adult liver C012</td>
                    	<td>Homo sapiens</td>
                    	<td>liver</td>
                    	<td>N/A</td>
                    	<td>-</td>
                    	<td>N/A</td>
                    	<td>0</td>
                    	<td>0</td>
                    	<td>0</td>
                    	<td><a href="#">DownLoad</a></td>
                    </tr>
                	
                </tbody>
            </table>
          </div>
        </div>
    </div>
    <div class="pagebox">
        <a href="####" >Home</a>
        <a href="####">2</a>
        <a href="####">3</a>
        <a href="####" id="pro_next">next</a>
        <span>total</span><label id="subpro_pageNumber">---</label><span>pages</span>
        <span>go</span><label for="subpro_pageid"><input type="text" id="subpro_pageid"/></label><span>pages</span>
        <a id="pageOk" class="J_LINK J_PRO">OK</a>
    </div>
    <div id="footer" class="comWidth">
    	<p>
        	<span>You can email a support request to the iProX team at the BPRC.contact information iprox@iprox.org</span><br/>
    		<span>Support by Beijing Proteome Research Center(BPRC)</span><br/>
        	<span>京ICP备11036956号-5</span>
        </p>
    </div>
    
    <a id="backTop" href="javascript:scroll(0,0)"><img src="/Iprox/html/imgs/backTop.jpg"/></a>
    <input type="hidden" id="json" name="json" value='${projectAll}'/>
    <script type="text/javascript" src="/Iprox/html/js/subProject.js"></script>
</body>
</html>