<!DOCTYPE html>
<html>
 <head>
	<title>this is first layout</title>
  <style>
    *{
			margin:0;
		}
		#header{
			width:100%;
			height:100px;
			background-color:gray;
			padding-top:30px;
			box-sizing:border-box;
		}
		h1{
			text-align:center;
			color:white;	
		}
		#navigation{
			width:100%;
			height:100px;
			background-color:gray;
			padding-top:30px;
			box-sizing:border-box;
			margin-top:10px;
		}
		#left-content{
			width:32%;
			height:200px;
			background-color:gray;
			padding-top:30px;
			box-sizing:border-box;
			margin-top:10px;
			float:left;
			margin-right:23px;
		}
		#main-content{
			width:32%;
			height:200px;
			background-color:red;
			padding-top:30px;
			box-sizing:border-box;
			margin-top:10px;
			float:left;
			margin-right:22px;
		}
		#right-content{
			width:32%;
			height:200px;
			background-color:gray;
			padding-top:30px;
			box-sizing:border-box;
			margin-top:10px;
			float:left;
		}
		#footer{
			width:100%;
			height:100px;
			background-color:gray;
			padding-top:30px;
			box-sizing:border-box;
			margin-top:10px;
		}
		.clearfix:after{
			display:table;
			content:'';
			clear:both;
		}
  </style>
 </head>

	<body>
		<div id="header">
			<h1>Header</h1>
		</div>

		<div id="navigation">
			<h1>Navigation</h1>
		</div>
		
		<div class="clearfix">
		 <div id="left-content">
			<h1>Left Content</h1>
		 </div>

		 <div id="main-content">
			<h1>Main Content</h1>
		 </div>
	
		 <div id="right-content">
			<h1>Right Content</h1>
		 </div>
		</div>

		<div id="footer">
			<h1>Footer</h1>
		</div>


	</body>
</html>