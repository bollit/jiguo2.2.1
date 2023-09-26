// 顶部大图倒计时
var countTime = document.querySelector('.countTime');
function distanceTime() {
    var targetTime = new Date(2023, 12, 1);
    var time = new Date();
    var distance = targetTime - time;
    var date = parseInt(distance / 1000 / 60 / 60 / 24);
    date = date > 10 ? date : '0' + date;
    var hour = parseInt((distance / 1000 / 60 / 60) % 24);
    hour = hour > 10 ? hour : '0' + hour;
    var minute = parseInt((distance / 1000 / 60) % 60);
    minute = minute > 10 ? minute : '0' + minute;
    var second = parseInt((distance / 1000) % 60);
    second = second > 10 ? second : '0' + second;
    var str = `申请时间剩余：${date}天${hour}小时${minute}分钟${second}秒`;
    countTime.innerHTML = str;
    if (date == 0 && hour == 0 && minute == 0 && second == 0) {
        clearInterval(timer);
        countTime.innerHTML = '活动已结束！';
    }
}
var timer = setInterval(distanceTime, 1000);

// 点击申请
var topImgApply = document.querySelector('.topImgApply');
var topImgCount = document.querySelector('.topImgCount');
var topIndex = 126;
var cookies = document.cookie;
var arry = cookies.split(";");
var x;
var y;
for (var i = 0; i < arry.length; i++) {
    var new_arry = arry[i].split("=");
    if (new_arry[0] == 'user') {

    }
    x = new_arry.indexOf('user');
}



var user_ = localStorage.getItem('user');
var usersession = sessionStorage.getItem('user')
topImgApply.onclick = function () {
    if (user_ == usersession && user_ != null) {
        var logonUiIn = document.querySelector('.logonUiIn');
        logonUiIn.style.display = 'none';
        topIndex++;
        if (topIndex >= 130) {
            alert('您已申请3次，每个账号最多申请三次');
        } else {
            topImgCount.style.cssText = 'transform:scale(1.2);transition: all .5s ease;';
            topImgCount.innerHTML = `${topIndex}人申请`;
        }
    } else {
        alert('请先登录，无账号请先注册！');
        var logonUi = document.querySelector('.logonUi');
        logonUi.style.display = 'flex';
    }

}

/* 提醒登录界面 */
var determine = document.querySelector('.determine');
var logon = document.querySelector('.logon');
window.onload = function () {
    logonUi2.style.display = 'flex';
}
window.onscroll = function () {
    logonUi2.style.display = 'flex';
}
// 登录后
var account = document.querySelector('.account');
var une = localStorage.getItem('username');
if (une) {
    console.log(une);
    account.innerHTML += une;
    account.style.display = 'block';
} else {
    account.style.display = 'none';
}

// 点赞和评论
var like = document.querySelectorAll('.like');
like = Array.prototype.slice.call(like);
var like2 = document.querySelectorAll('.like2');
like2 = Array.prototype.slice.call(like2);
var count = document.querySelectorAll('.count')
var count2 = document.querySelectorAll('.count2')
var itemContext = document.querySelectorAll('.itemContext');
let index = 3;
for (let j = 0; j < like.length; j++) {
    var i = 2;
    like[j].onclick = function () {
        if (i % 2 == 0) {
            like[j].style.color = '#fe5341';
            i++;
            index++;
        } else {
            like[j].style.color = '#A3A3A3';
            i++;
            index--;
        }
        count[j].innerText = `${index}`;
    }
}

setInterval(function () {
    for (var k = 0; k < count2.length; k++) {
        // count2[k].innerText = `6`;
    }
}, 10)

for (let m = 0; m < like2.length; m++) {
    like2[m].onclick = function () {
        // like2[m].style.color = '#A3A3A3';
        console.log(itemContext[m]);
        itemContext[m].style.cssText = 'height:211px;transform: translateY(-100px);transition:all .8s ease';
    }
}

// 评论功能
var text = document.querySelectorAll('.text');
text = Array.prototype.slice.call(text);
var comment = document.querySelectorAll('#comment');
comment = Array.prototype.slice.call(comment);
var button = document.querySelectorAll('.reportIn button');
button = Array.prototype.slice.call(button);
var comDel = document.querySelectorAll('.comDel');
comDel = Array.prototype.slice.call(comDel);
var c = 7;
for (let n = 0; n < text.length; n++) {
    button[n].onclick = function () {
        c++;
        text[n].innerText += `${comment[n].value}\n`;
        comment[n].value = '';
        count2[n].innerHTML = c;
    };
    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            c++;
            text[n].innerText += `${comment[n].value}\n`;
            comment[n].value = '';
            count2[n].innerHTML = c;
        }
    });
    comDel[n].onclick = function () {
        itemContext[n].style.cssText = 'height:111px;transform: translateY(0px);transition:all .8s ease';
    }
}

// 正文底部点击加载
setTimeout(function () {
    var playBottom = document.querySelector('.playBottom');
    var playBottomload = document.querySelector('.playBottomload');
    var play = document.querySelector('.play');
    var reportInItem1 = document.querySelectorAll('.reportInItem1');
    reportInItem1 = Array.prototype.slice.call(reportInItem1);
    console.log(reportInItem1);
    playBottom.onclick = function () {
        this.style.display = 'none';
        playBottomload.style.display = 'block';

        setTimeout(function () {
            play.style.cssText = 'height:1750px;overflow: visible;';
            playBottomload.style.display = 'none';
            for (var i = 0; i < reportInItem1.length; i++) {
                reportInItem1[i].style.cssText = 'margin-bottom: 0px;';
            }
        }, 2000)
    }
}, 1)

// 返回顶部
var toTop = document.querySelector('.toTop');
toTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 77) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
}