$(document).ready(function(){
	$("button").click(function(){
		debugger
		var ex5=$("#ex1").val();
		var ex6=$("#ex2").val();
		var ex7=$("#ex3").val();
		var ex8=$("#ex4").val();
		if(ex5 == "" || ex6 == "" || ex7 == "" || ex8 == ""){
			alert("Name must be filled out");
		}
		else{
			var a=$("#ex1").val();
			$("#dispname1").text(a);
			var b=$("#ex2").val();
			$("#dispname2").text(b);
			var c=$("#ex3").val();
			$("#dispname3").text(c);
			var d=$("#ex4").val();
			$("#dispname4").text(d);
			$("#detail").css("display","block");
			$("#detailfrm").css("display","none");
		}
	});
});