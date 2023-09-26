// 数据渲染
var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
oajax.open('get', 'http://127.0.0.1:3000/play/new', true);
oajax.send();

oajax.onreadystatechange = function () {
    if (oajax.readyState == 4) {
        if (oajax.status == 200) {
            var data = JSON.parse(oajax.responseText)[0];
            var data2 = JSON.parse(oajax.responseText)[1];
            // console.log(data);
            show(data, data2);
        } else {
            console.log('请求失败');
        }
    }
}
function show(val, val2) {
    var playIn = document.querySelector('.playIn');
    var str = '';
    for (var item of val) {
        /* str += `
            <div class="reportInItem">
                <img src='${item.img}' alt="">
                <div class="itemContext">
                  <p>${item.text}</p>
                  <span>${item.description}</span>
                  <p><span>${item.price}</span><span><img src="../img/css/img/zan.png" alt="">${item.like}<img
                            src="../img/css/img/reply.png" alt="">${item.words}</span></p>
                 </div>
            </div>
                `; */
        str += `
        <div class="reportInItem">
                <img src='${item.img}' alt="">
                <div class="itemContext">
                    <p>${item.text}</p>
                    <span>${item.description}</span>
                    <p>${item.price}
                        <span>
                            <span class="like"><i class="iconfont icon-dianzan_kuai"></i><span
                                    class="count">${item.like}</span></span>
                            <span class="like3"><i class="iconfont icon-pinglun"></i><span
                                    class="count2"></span>${item.words}</span>
                        </span>
                    </p>
                </div>
            </div>
            `
    }
    for (var item of val2) {
        console.log(item.img);
        str += `
        <div class="reportInItem">
        <img src='${item.img}' alt="">
        <div class="itemContext">
            <p>${item.text}</p>
            <span>${item.description}</span>
            <p>${item.price}
                <span>
                    <span class="like"><i class="iconfont icon-dianzan_kuai"></i><span
                            class="count">${item.like}</span></span>
                    <span class="like3"><i class="iconfont icon-pinglun"></i><span
                            class="count2"></span>${item.words}</span>
                </span>
            </p>
        </div>
    </div>
                `;
    }
    playIn.innerHTML += str;
    // 正文底部点击加载
    setInterval(function () {
        var playBottom = document.querySelector('.playBottom2');
        var playBottomload = document.querySelector('.playBottomload1');
        var play = document.querySelector('.play');
        var reportInItem1 = document.querySelectorAll('.reportInItem1');
        reportInItem1 = Array.prototype.slice.call(reportInItem1);
        console.log(reportInItem1);
        playBottom.onclick = function () {
            this.style.display = 'none';
            playBottomload.style.display = 'block';

            setTimeout(function () {
                play.style.cssText = 'height:2214px;overflow: visible;';
                playBottomload.style.display = 'none';
                playIn.innerHTML += str;
                for (var i = 0; i < reportInItem1.length; i++) {
                    reportInItem1[i].style.cssText = 'margin-bottom: 0px;';
                }
            }, 2000)
        }
    }, 1)
}

// 点击跳转详情页
setTimeout(function () {
    var appIn = document.querySelectorAll('.reportInItem');
    appIn = Array.prototype.slice.call(appIn);
    for (let i = 0; i < appIn.length; i++) {
        appIn[i].addEventListener('click', function () {
            window.location.href = './detail.html';
        }, true)
    }
}, 100);