// 登录页
var del2 = document.querySelector('.del2');
var confirm2 = document.querySelector('.confirm2');
var logon = document.querySelector('.logon');
var logonUiIn2 = document.querySelector('.logonUiIn2');
var logonUi = document.querySelector('.logonUi');

// 点击登录按钮
logon.onclick = function () {
    logonUi.style.display = 'flex';
}

del2.onclick = function () {
    logonUi.style.display = 'none';
}