/**
 * Created by Yang on 2017/3/30.
 */
$(function(){
    // $(".box").eq(0).click(function () {
    //     // $(".tabContent").hide()
    //     // $(".tabContent").eq(0).fadeToggle("slow","linear");
    //
    // })

    $(".box").click(function(){
        var $this = $(this),
            index = $this.index();
        if($this.hasClass("active")){

        }else {
            $this.siblings(".box").children('span').removeClass("rotate135")
        }

        $this.toggleClass("active").siblings("div").removeClass("active");
        $this.children('span').toggleClass("rotate135")
        $(".tabContent").eq(index).fadeToggle().siblings(".tabContent").hide().children('span').removeClass("rotate135")
    });


});