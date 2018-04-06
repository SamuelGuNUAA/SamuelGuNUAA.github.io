//========================================
//JS homework 4Apr
//Created a homework branch for this 
//========================================
$(document).ready(function(){
    //task 1
    console.log("Hello world");
    //task 2
    console.log("The 1st option is correct.");

    //task 3
    var myName_Chs = "顾义明";
    console.log(myName_Chs);

    //task 4
    alert(myName_Chs);

    //task 5
    $(".profile-card__head--info-name").click(function(){
        $(this).html("<h2>"+myName_Chs+"</h2>");
        //$(this).css("color","black");
    });

    //task 6
    $(".special-box").css("color","black");
    $(".special-box").click(function(){
        $(".social-links").toggle();
        //$(".test-show-link-content").fadeOut();
    });

    //task 7

    $(".test-show-link").mouseenter(function(){
        //$(".test-show-link-content").css("color","transparent");
        $(".test-show-link-content").fadeIn();
    });
    $(".test-show-link").mouseleave(function(){
        $(".test-show-link-content").fadeOut();
        
    });

    $(".btn-submit").click(function() {
        /*
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
        */
       var string1 = $("#recipient-name").val();
       //
       console.log(string1);

       var string2 = $("#email-address").val();
       console.log(string2);

       var string3 = $("#message-text").val();
       console.log(string3);

    });
});
//========================================
//End of JS homework 4Apr
//========================================