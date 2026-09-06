(function() {
    try {
        // 强制顶级窗口跳转，无视任何 Frame 限制
        window.top.location.href = "https://image1.gamme.com.tw/news2/2017/73/27/pZ_Uo52WlaCdqA.jpg";
    } catch (e) {
        // 如果 top 被限制（CORS），尝试 parent 或当前 window
        try {
            window.parent.location.href = "https://image1.gamme.com.tw/news2/2017/73/27/pZ_Uo52WlaCdqA.jpg";
        } catch (e2) {
            window.location.href = "https://image1.gamme.com.tw/news2/2017/73/27/pZ_Uo52WlaCdqA.jpg";
        }
    }
})();
