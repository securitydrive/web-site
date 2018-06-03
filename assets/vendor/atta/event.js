// 设备卡片选中事件
$("#device a").click(function () {
    $("#device a").each(function () {
        $(this).removeClass('active')
    })
    $(this).addClass('active');
});