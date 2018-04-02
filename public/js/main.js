$(document).ready(function(){

    $("#page-resume").click(function(){

        //$("#page-t1").fadeOut("slow");
        $("#page-t1").css("display","none");
        //$("#page-t2").fadeIn("slow");
        $("#page-t3").css("display","none");
        $("#page-t4").css("display","none");
        $("#page-t5").css("display","none");
        $("#page-t2").css("display","block");
    });

    $("#page-home").click(function(){

        //$("#page-t1").fadeOut("slow");
        $("#page-t2").css("display","none");
        $("#page-t3").css("display","none");
        $("#page-t4").css("display","none");
        $("#page-t5").css("display","none");
        $("#page-t1").css("display","block");
        //$("#page-t2").fadeIn("slow");
    });

    $("#page-services").click(function(){

        $("#page-t1").css("display","none");
        $("#page-t2").css("display","none");
        $("#page-t4").css("display","none");
        $("#page-t5").css("display","none");
        $("#page-t3").css("display","block");
    });
    
    $("#page-blog").click(function(){

        $("#page-t1").css("display","none");
        $("#page-t2").css("display","none");
        $("#page-t3").css("display","none");
        $("#page-t5").css("display","none");
        $("#page-t4").css("display","block");
    });
    
    $("#page-contact").click(function(){

        $("#page-t1").css("display","none");
        $("#page-t2").css("display","none");
        $("#page-t3").css("display","none");
        $("#page-t4").css("display","none");
        $("#page-t5").css("display","block");
    });  
    /*    
    $(".ttt").click(function(){
        $(".head-bar__header--name").show("slow");
    });
    */
   
    $(".link-style-change [href]").mouseenter(function(){
        $(this).css("color","green");
    });
    $(".link-style-change [href]").mouseleave(function(){
        $(this).css("color","goldenrod");
    });

    $(".social-links [href]").mouseenter(function(){
        $(this).css("color","black");
        //$(this).css("border-style","solid");
        //$(this).css("boarder-width","0.5px");
    });
    $(".social-links [href]").mouseleave(function(){
        $(this).css("color","grey");
    });

	//Google Maps
	$("#map").googleMap();
	$("#map").addMarker({
		address: "Level 3 / 57 Coronation Drive, Brisbane"
    });
        
});