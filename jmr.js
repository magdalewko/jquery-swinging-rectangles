$("#rectanglesHolder .testimonialBox").on("click", function(){
	
	$(this).children(".testimonialContent").css({"font-size": "1em","opacity":"1"});//css for the text iside of the element 
	$(this).animate({width: "400px",height:"200px"},200,"linear");
	$(this).css({"transform":"translateY(100px)"});
	/* fadeIn only works with display:none css property
	$(this).children(".testimonialContent").fadeIn("slow");*/
	
	//all other elements
	$("#rectanglesHolder .testimonialBox").not(this).css({width:"140px",height:"400px",transform:"translateY(0px)"});
	$("#rectanglesHolder .testimonialBox").not(this).children(".testimonialContent").css({"font-size":"0.1em","opacity":"0"});
	
	/*$("#rectanglesHolder .testimonialBox").not(this).children(".testimonialContent").fadeTo("slow",0);*/
});
