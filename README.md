<!---
FatimaKhalid15/FatimaKhalid15 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta charset="viewport" content="width=device-width, initial-scale=1">	
<title>menu</title>
<style>
	*{
		box-sizing: border-box;
	 margin: 0;
  padding: 20px;
	margin-left:50px;
	}
	h1{
		margin-bottom:15px;
	}
	p{
 
		border :1px solid black;
		margin-bottom:15px;
		width: 400px;
		height:250px;
		margin-right: auto;
		margin-left:auto;
		font-family: serif;
		color: black;
	   background-color: grey;
	}
}
	/* simple responsive framework. */
	.row{
		width:100;
	}
	/************* desktop devices only**************/
@media (min-width: 1200px){
	.col-lg-1, .col-lg-2, .col-lg-3 {
		float:left;
		border:1px lightgrey;
	}
	.col-lg-1{
	width:8.33%;
	width: 50px;
  height: 50px;
}	
.col-lg-2{
	width: 16.66%;
}
.col-lg-3{
	width:25%; }
}

/*************** tablet devices only ****************/
@media (min-width: 768px) and (max-width: 991px){
	.col-td-1, .col-td-2, .col-td-3 {
		float:left;
		border:1px lightgrey;
	}
	.col-td-1{
	width:38.33%;
}	
.col-td-2{
	width: 36.66%;
}
.col-td-3{
	width:35%;
}
 }
 /*************** mobile devices only ****************/
@media (min-width: 767px) {
	.col-md-1, .col-md-2, .col-md-3 {
		float:left;
		border:1px lightgrey;

	
	}
	.col-md-1{
	width:8.33%;
}	
.col-md-2{
	width: 16.66%;
}
.col-md-3{
	width:25%;
}
 }
}
</style>
</head>
<body>
<h1 style="text-align:center"> Our Menu</h1>
<div class="row">
	<div  style="text-align:right" class="col-lg-3 col-td-3 col-md-3 "><p>CHICKEN</p></div>
	<div style="text-align:right" class="col-lg-3 col-td-3 col-md-3"><p>BEEF</p></div>
	<div style="text-align:right" class="col-lg-3 col-td-3 col-md-3"><p>SUSHI</p></div>
</div>
</body>
</html>
