// 数据渲染
var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
oajax.open('get', 'http://127.0.0.1:3000/guid/new', true);
oajax.send();

oajax.onreadystatechange = function () {
    if (oajax.readyState == 4) {
        if (oajax.status == 200) {
            var data = JSON.parse(oajax.responseText);
            // var data2 = JSON.parse(oajax.responseText)[1];
            console.log(data);
            show(data);
        } else {
            console.log('请求失败');
        }
    }
}
function show(val, val2) {
    var guideIn = document.querySelector('.guideIn');
    var str = '';
    for (var item of val) {
        console.log(item.img);
        str += `
        <div class="guideInItem">
        <img src="${item.img}" alt="">
        <img src="../img/css/img/listbg.jpg" alt="">
        <div class="guideInItemContext">
            <p>${item.text}</p>
            <p>
                <span>
                    <img src="../img/css/img/zan.png" alt="">${item.like}
                    <img src="../img/css/img/reply.png" alt="">${item.words}
                </span>
            </p>
        </div>
    </div>
                `;
    }
    guideIn.innerHTML += str;
}

// 点击跳转详情页
setTimeout(function () {
    var appIn = document.querySelectorAll('.guideInItem');
    appIn = Array.prototype.slice.call(appIn);
    for (let i = 0; i < appIn.length; i++) {
        console.log(appIn);
        console.log(appIn[i]);
        appIn[i].addEventListener('click', function () {
            window.location.href = './detail.html';
        }, true)
    }
}, 100);