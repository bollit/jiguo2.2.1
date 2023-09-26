/* 提醒登录界面 */
var determine = document.querySelector('.determine');
var logon = document.querySelector('.logon');
/* window.onload = function () {
    logonUi.style.display = 'flex';
} */
var topImgApply = document.querySelector('.topImgApply');
topImgApply.onclick = function () {
    logonUi.style.display = 'flex';
}

// 点击确定进入登录页
var del = document.querySelector('.del');
var logonUi = document.querySelector('.logonUi');
var confirm = document.querySelector('.confirm');
var logonUiIn = document.querySelector('.logonUiIn');
var logonUiIn2 = document.querySelector('.logonUiIn2');
confirm.onclick = function () {
    logonUi.style.display = 'flex';
    logonUiIn.style.display = 'none';
    logonUiIn2.style.display = 'block';
}
del.onclick = function () {
    logonUi.style.display = 'none';
}

// 登录页
var del2 = document.querySelector('.del2');
var confirm2 = document.querySelector('.confirm2');
confirm2.onclick = function () {
    // logonUi.style.display = 'flex';
}
del2.onclick = function () {
    logonUi.style.display = 'none';
    logonUiIn2.style.display = 'none';
    logonUiIn.style.display = 'block';
}

// 点击登录按钮
logon.onclick = function () {
    logonUi.style.display = 'flex';
    logonUiIn.style.display = 'none';
    logonUiIn2.style.display = 'block';
}