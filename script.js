$(document).ready(
    //menu top//
    function(){
        $('#namk').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky')
                }else {
                    $('nav').removeClass('sticky');
                } 
            },{
                offset: '600px'
            }
        )
        //mobile navigation//
        $('.mobile-icon').click(
            function(){
                $('#menu').slideToggle(200);
                
                if($('.mobile-icon').hasClass('fa-bars')){
                    $('.mobile-icon').addClass('fa-times');
                    $('.mobile-icon').removeClass('fa-bars')
                }
                else{
                    $('.mobile-icon').addClass('fa-bars');
                    $('.mobile-icon').removeClass('fa-times')
                }
            }
        )
     //liên hệ //
        $('.user-support').click(function(event) {$('.social-button-content').slideToggle();})
    }
)
