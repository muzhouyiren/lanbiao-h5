$(function() {
    $('.tabs li').click(function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        var $contents = $(".tabs-item");
        $contents.css('display', 'none');
        $contents[index].style.display = "block";
    })

    // 学习页-课程目录切换
    $(".course-list .lis").click(function() {
        if ($(this).siblings(".uni-list").length > 0) {
            $(this).parents().siblings().children(".lis").removeClass("on")
            $(this).parents().siblings().children(".uni-list").addClass("hide")
            if ($(this).hasClass("on")) {
                $(this).removeClass("on").siblings(".uni-list").toggleClass("hide");
            } else {
                $(this).addClass("on").siblings(".uni-list").toggleClass("hide");
            }
        }

    })

    // 学习页-常见问答展开收缩
    $(".qa-list .lis").click(function() {
        if ($(this).siblings(".uni-list").length > 0) {
            $(this).parents().siblings().children(".lis").removeClass("on")
            $(this).parents().siblings().children(".uni-list").addClass("hide")
            if ($(this).hasClass("on")) {
                $(this).removeClass("on").siblings(".uni-list").toggleClass("hide");
            } else {
                $(this).addClass("on").siblings(".uni-list").toggleClass("hide");
            }
        }

    })

    // 提问题弹窗
    $(".js-askQuestions").click(function() {
        $("#askQuestions").slideToggle(200);
        $(".mask").toggle();
        $("body").addClass("html-unscrollable")
    })

    // 课程目录-弹窗
    // $(".js-ok").click(function() {
    //     $("#directory").slideToggle(200);
    //     $(".mask").toggle();
    //     $("body").addClass("html-unscrollable")
    // })

    // 关闭课程目录-弹窗
    $(".js-ok").click(function() {
        $("#directory").hide(200);
        $("#rules").hide(200);
        $(".mask").toggle();
        $("body").removeClass("html-unscrollable")
    })

    // 联系客服--拨电话
    $(".js-tel").click(function() {
        $("#tel").slideToggle(200);
        $(".mask").toggle();
        $("body").addClass("html-unscrollable")
    })

    // 联系客服--复制微信号
    $(".js-weChat").click(function() {
        $("#WeChat").slideToggle(200);
        $(".mask").toggle();
        $("body").addClass("html-unscrollable")
    })

    // 关闭下载提示弹层
    $(".js-close").click(function() {
        $("#askQuestions").hide(200);
        $("#result").hide(200);
        $("#tel").hide(200);
        $("#WeChat").hide(200);
        $(".mask").toggle();
        $("body").removeClass("html-unscrollable")
    })


})