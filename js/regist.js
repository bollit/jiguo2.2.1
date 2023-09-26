// 信息验证
var getCode = document.querySelector('.getCode');

// 数字验证码
getCode.onclick = function () {

    var index = 60;
    var timer = setInterval(function () {
        index--;
        var countdown = `${index}秒后重新发送`;
        getCode.innerHTML = countdown;
        if (index <= 0) {
            clearInterval(timer);
            getCode.innerHTML = '重新获取验证码';
        }
    }, 1000)
}


function form() {
    var number = document.querySelector('#number').value;
    var code = document.querySelector('#code').value;
    var numCode = document.querySelector('#numCode').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    var user_ = document.getElementById('number').value;
    var psd_ = document.getElementById('password').value;
    var isrember_ = document.getElementById('isrember').checked;

    var numberRegex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    var codeText = ['r2B7', '3fv8'];
    var usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,10}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;

    setCookie('user', user_);
    setCookie('psd', psd_);
    setCookie('isrember', isrember_);
    sessionStorage.setItem('user', user_);
    sessionStorage.setItem('psd', psd_);
    sessionStorage.setItem('isrember', isrember_);
    sessionStorage.setItem('username', username);
    var logonUi = document.querySelector('.logonUi');
    logonUi.style.display = 'flex';
    return false;
}

var number_ = document.querySelector('#number');
var notice1 = document.querySelector('.notice1');
number_.onblur = function () {
    var number = number_.value;
    var reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
    if (!reg.test(number)) {
        notice1.style.display = 'block';
    } else {
        notice1.style.display = 'none';
    }
}

var code_ = document.querySelector('#code');
var notice2 = document.querySelector('.notice2');
var codeText = ["r2B7", "r2b7"];
code_.onblur = function () {
    if (code_.value !== codeText[0]) {
        notice2.style.display = 'block';
    } else {
        notice2.style.display = 'none';
    }
}

// 四位数验证码
var randomCode;
document.getElementById('myButton').addEventListener('click', function () {
    this.disabled = true;
    setTimeout(function () {
        var randomCode = Math.floor(1000 + Math.random() * 9000);
        alert(`验证码为：${randomCode}`);
        document.getElementById('myButton').disabled = false;

        var numCode_ = document.querySelector('#numCode');
        var notice3 = document.querySelector('.notice3');
        numCode_.onblur = function () {
            var numCode = numCode_.value;
            if (randomCode != numCode) {
                notice3.style.display = 'block';
            } else {
                notice3.style.display = 'none';
            }
        }
    }, 5000);
});

var numCode_ = document.querySelector('#numCode');
var notice3 = document.querySelector('.notice3');
numCode_.onblur = function () {
    var numCode = numCode_.value;
    if (randomCode != numCode) {
        notice3.style.display = 'block';
    } else {
        notice3.style.display = 'none';
    }
}

var username_ = document.querySelector('#username');
var notice4 = document.querySelector('.notice4');
username_.onblur = function () {
    var username = username_.value;
    var reg = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,10}$/;
    if (!reg.test(username)) {
        notice4.style.display = 'block';
    } else {
        notice4.style.display = 'none';
    }
}

var password_ = document.querySelector('#password');
var notice5 = document.querySelector('.notice5');
password_.onblur = function () {
    var password = password_.value;
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;
    if (!reg.test(password)) {
        notice5.style.display = 'block';
    } else {
        notice5.style.display = 'none';
    }
}

var repassword_ = document.querySelector('#repassword');
var notice6 = document.querySelector('.notice6');
repassword_.onblur = function () {
    var password = password_.value;
    var repassword = repassword_.value;
    if (password !== repassword) {
        notice6.style.display = 'block';
    } else {
        notice6.style.display = 'none';
    }
}


// 登录模块
// 如果选中了记住密码 则页面刷新直接把数据显示在页面中

if (getCookie('isrember')) {
    document.getElementById('username1').value = getCookie('user');
    document.getElementById('psd').value = getCookie('psd');
    document.getElementById('isrember').checked = getCookie('isrember');
}

function login() {
    // 获取页面数据
    var user_ = document.getElementById('username1').value;
    var psd_ = document.getElementById('psd').value;
    var isrember_ = document.getElementById('isrember').checked;

    /* if (isrember_ == true) {
        setCookie('user', user_);
        setCookie('psd', psd_);
        setCookie('isrember', isrember_);
    } else {
        removeCookie('user');
        removeCookie('psd');
        removeCookie('isrember');
    } */

    console.log(getCookie('user'));
    console.log(user_);
    if (getCookie('user') == user_ && getCookie('psd') == psd_) {
        alert('登录成功');
        logonUi.style.display = 'none';
        window.location.href = './index.html';
    } else if (getCookie('user') !== user_) {
        alert('账号错误');
    } else if (getCookie('user') === user_ && getCookie('psd') !== psd_) {
        alert('密码错误');
    }

    var keys = Object.keys(sessionStorage);
    keys.forEach(function (key) {
        localStorage.setItem(key, sessionStorage.getItem(key));
    });
}




















/* // 短信验证
PhoneNumbers

// JavaScript部分
$(document).ready(function () {
    // 点击发送验证码按钮
    $('#sendCodeBtn').on('click', function () {
        var phoneNumber = $('#phoneNumber').val();

        $.ajax({
            url: '/sendVerificationCode', // 后端接口地址
            method: 'POST',
            data: { phoneNumber: phoneNumber },
            success: function (response) {
                console.log('验证码发送成功');
                // 在此处可以处理一些相关逻辑，如倒计时等
            },
            error: function (error) {
                console.error('验证码发送失败:', error);
            }
        });
    });




    // 提交验证
    $('#verificationForm').on('submit', function (e) {
        e.preventDefault();
        var phoneNumber = $('#phoneNumber').val();
        var verificationCode = $('#verificationCode').val();

        $.ajax({
            url: '/verifyCode', // 后端接口地址
            method: 'POST',
            data: { phoneNumber: phoneNumber, verificationCode: verificationCode },
            success: function (response) {
                console.log('验证码验证成功');
                // 在此处可以进行跳转或其他操作
            },
            error: function (error) {
                console.error('验证码验证失败:', error);
            }
        });
    });
});


// 在点击事件处理程序中触发发送短信的代码
function handleButtonClick() {
    // 这里放置你要在点击按钮时执行的代码
    const Core = require('@alicloud/pop-core');

    var client = new Core({
        // 请确保 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET 环境变量已设置
        accessKeyId: process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'],
        accessKeySecret: process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
        // securityToken: process.env['ALIBABA_CLOUD_SECURITY_TOKEN'], // 使用STS Token
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });

    var params = {
        "SignName": "阿里云短信测试",
        "TemplateCode": "SMS_154950909",
        "PhoneNumbers": "18625526553",
        "TemplateParam": "{\"code\":\"1234\"}"
    }

    var requestOption = {
        method: 'POST',
        formatParams: false,
    };

    client.request('SendSms', params, requestOption).then((result) => {
        console.log(JSON.stringify(result));
    }, (ex) => {
        console.log(ex);
    });
}

// 在你的代码其他部分定义一个按钮，并为其添加点击事件监听器
var button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick); */
