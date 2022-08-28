<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>This is Marble layout</title>
	<link rel="stylesheet" href="./assets/css/style.css">
	<style type="text/css">
		/* 
div is like a box

margin is used for creating the space out of the box
padding is used for creating the space inside of the box

we use hash (#) for selecting the id attribute
we use dot (.) for selecting the class attribute
we use start (*) for selecting the all elements

difference between class and id

id is used for unique element or you will use only single element
class is used for multiple elements

 */
*{
	margin: 0px;
	font-family: 'Trebuchet MS';
}
body{
	background-color: #f7f7f7;
}
.clearfix:after{
	display: table;
	content: '';
	clear: both;
}


#header{
	width: 100%;
	height: 100px;
	background-color: #e7e7e7;
	padding-left: 110px;
	padding-right: 40px;
	padding-top: 30px;
	box-sizing: border-box;
	/*it will fixed the header when you scroll in browser*/
	position: sticky;
	top: 0;
}
#logo{
	width: 20%;
	float: left;
}
#navigation{
	width: 40%;
	float: right;
}
#navigation ul li{
	float: left;
	list-style-type: none;
	margin-right: 10px;
	font-size: 18px;
	color: #4e4e4e;
	font-weight: 600;
	margin-top: 10px;
}
#image-section img{
	width: 100%;
}
.container{
	width: 80%;
	margin-left: auto;
	margin-right: auto;
}
#section-ideas{
	margin-top: 40px;
	border-bottom: 1px solid #e7e7e7;
	padding-bottom: 50px;
}
#section-ideas div{
	float: left;
	width: 23%;
	margin-right: 33px;
	text-align: center;
}
#section-ideas div:last-child{
	margin-right: 0px;
}

#section-ideas div img{
	margin-bottom: 10px;
}
#section-ideas div h4{
	margin-bottom: 10px;
	color: #4e4e4e;
}
#section-ideas div p{
	color: #6a6a6a;
}
#main-heading{
	margin-top: 30px;
	margin-bottom: 20px;
	color: #4e4e4e;
}
#project-container div{
	float: left;
	width: 30%;
	margin-right: 5%;
}
#project-container div:last-child{
	margin-right: 0px;
}
#project-container div h3{
	color: #4e4e4e;
	margin-top: 10px;
	margin-bottom: 10px;
}
#project-container div h4{
	color: #d0d0d0;	
	margin-bottom: 10px;
}
#project-container div p{
	color: #6a6a6a;	
}
#testiomonial-section{
	margin-top: 50px;
	width: 100%;
	height: 180px;
	background-color: #efefef;
	padding-top: 50px;
	box-sizing: border-box;
}
#testiomonial-section div{
	text-align: center;
}

#testiomonial-section div p{
	color: #b6b6b6;
	margin-top: 10px;
}

#footer{
	width: 100%;
	height: 400px;
	background-color: #1f1f1f;
	color: #cacaca;
	padding-top: 35px;
}
#footer-item-container{
	border-bottom: 3px solid #353535;
	padding-bottom: 30px;
	margin-bottom: 20px;
}
#footer-item-container .footer-items{
	width: 23%;
	float: left;
	margin-right: 2%;
}
#footer-item-container .footer-items h4{
	color: #6c6c6c;
	font-size: 23px;
	margin-bottom: 20px;
}
#footer-item-container .footer-items p{
	margin-bottom: 20px;
	position: relative;
}
#twitter-footer p::before{
	content: "";
	width: 15px;
	height: 15px;
	background-image: url('../images/tweet.png');
	background-repeat: no-repeat;
	position: absolute;
	left: -20px;
	top: 5px;
}

/*RESPONSIVE CODE (LOOKS GOOD IN ALL DEVICES (LAPTOP/TABLET/MOBILES))*/

@media(max-width: 1280px){
	#navigation ul{
		padding-left: 0px;
	}
	#navigation ul li{
		float: none;
	}
	#header{
		height: auto;
		padding: 0px;
		padding-top: 30px;
		padding-bottom: 30px;
		position: initial;
	}
	#logo{
		float: none;
		width: 100%;
		text-align: center;
	}
	#navigation{
		float: none;
		width: 100%;
		text-align: center;
	}
	#section-ideas{
		margin: 0px;
		width: 100%;
	}
	#section-ideas div{
		float: none;
		width: 100%;
		margin-top: 30px;
	}
}

@media(max-width: 900px){
	#project-container img{
		width: 100%;
	}
	#project-container{
		margin: 0px;
		width: 100%;
	}
	#project-container div{
		margin-right: 0;
		float: none;
		width: 100%;
		text-align: center;
		margin-bottom: 20px;
	}
	#main-heading{
		text-align: center;
	}
	#footer{
		height: auto;
		padding-bottom: 20px;
	}
	#sub-footer{
		margin: 0px;
		width: 100%;
	}
	#footer-item-container .footer-items{
		float: none;
		width: 100%;
		text-align: center;
		margin-bottom: 60px;
	}
	#sub-footer p{
		text-align: center;
	}
}


@media(max-width: 580px){
	#testiomonial-section{
		height: auto;
		padding-bottom: 30px;
	}
}
	</style>
</head>
<body>
	<div id="header" class="clearfix">
		<div id="logo">
			<img src="./assets/images/logo.png" alt="Logo">
		</div>
		<div id="navigation">
			<!-- unordered list -->
			<ul>
				<!-- list items -->
				<li>Home</li>
				<li>About</li>
				<li>Journal</li>
				<li>Services</li>
				<li>Features</li>
				<li>Contact Us</li>
			</ul>
		</div>
	</div>

	<div id="image-section">
		<img src="./assets/images/background-image.png" alt="Image Section">
	</div>

	<div id="section-ideas" class="container clearfix">
		<div>
			<img src="./assets/images/icon-1.png" alt="Icon 1">
			<h4>Pellentesque</h4>
			<p>Nulla vitae libero, a pharetra augue. Integer posuere erat a ante venenatis condimentum velit dapibus.</p>
		</div>
		
		<div>
			<img src="./assets/images/icon-2.png" alt="Icon 2">
			<h4>Consectetur</h4>
			<p>Vestibulum id ligula porta euismod semper. Aenean lacinia bibe</p>
		</div>
		
		<div>
			<img src="./assets/images/icon-3.png" alt="Icon 3">
			<h4>Tristiquet</h4>
			<p>Fusce dapibus, cursus commodo, tortor mauris condimentum nibh,</p>
		</div>

		<div>
			<img src="./assets/images/icon-4.png" alt="Icon 4">
			<h4>Fermentum</h4>
			<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venena</p>
		</div>
	</div>

	<h2 id="main-heading" class="container">Our Latest Work</h2>


	<div id="project-container" class="container clearfix">
		<div>
			<img src="./assets/images/snap-1.png" alt="Project 1">
			<h3>Nobis Business Card</h3>
			<h4>Business Card, Graphic</h4>
			<p>Sed posuere consectetur est at lobortis. Porta sagittis lacus v</p>
		</div>

		<div>
			<img src="./assets/images/snap-2.png" alt="Project 2">
			<h3>New Fun Project</h3>
			<h4>Web Design, Application</h4>
			<p>Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>
		</div>
		
		<div>
			<img src="./assets/images/snap-3.png" alt="Project 3">
			<h3>Passionaries Branding Cover</h3>
			<h4>Branding, Graphic Design</h4>
			<p>Curabitur blandit tempus porttitor. Donec id elit non mi porta</p>
		</div>
	</div>


	<div id="testiomonial-section">
		<div class="container">
			<img src="./assets/images/quote.png" alt="Quote">
			<p>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at <br>
eget metus. Duis mollis, est non commodo luctus erat porttitor.</p>
		</div>
	</div>


	<div id="footer">
		<div id="sub-footer" class="container">
			<div id="footer-item-container" class="clearfix">
				<div class="footer-items">
					<h4>Get In Touch</h4>
					<p>Fusce dapibus, tellus commodo, tortor mauris condimentum utellus fermentum, porta sem malesuada magna.</p>
					<p>
						Moonshine Street No: 14/05 <br>
						Light City, Jupiter <br>
						0247 541 65 87 <br>
						support@longwave.com
					</p>	
				</div>

				<div class="footer-items" id="twitter-footer">
					<h4>Twitter</h4>
					<p>Aenean lacinia bibendum nulla sed leo posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
					<p>Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</p>
					<p>Vestibulum id ligula porta euismod semper. Maecenas faucibus mollis.</p>
				</div>

				<div class="footer-items">
					<h4>Popular Posts</h4>
					<p>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor.
					14 Nov, 2012</p>
					
					<p>Scelerisque nisl consectetur et.
					22 May, 2012</p>
					
					<p>Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce
					15 July, 2012</p>
				</div>
				
				<div class="footer-items">
					<h4>About Us</h4>
					<p>Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
					<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus curabitur blandit tempus.</p>
				</div>
			</div>

			<p>© 2022 Marble. All rights reserved. Theme by elemis.</p>
		</div>
	</div>

	
</body>
</html>


