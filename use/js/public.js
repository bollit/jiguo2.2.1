
// 数据渲染
var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
oajax.open('get', 'http://127.0.0.1:3000/useing/public', true);
oajax.send();

oajax.onreadystatechange = function () {
    if (oajax.readyState == 4) {
        if (oajax.status == 200) {
            var data = JSON.parse(oajax.responseText);
            show(data);
        } else {
            console.log('请求失败');
        }
    }
}
function show(val) {
    var appCenter = document.querySelector('.appCenter');
    var str = '';
    for (var item of val) {
        str += `
    <div class="appIn">
                    <div class="lab">${item.info_ty}</div>
                    <img src="${item.img}" alt="">
                    <div class="appContext">
                        <p>${item.text}</p>
                        <p><span>${item.totalnum}</span><span>${item.num}台</span></p>
                        <p><span>${item.apply}</span>申请</p>
                        <p>剩余时间2天</p>
                    </div>
                </div>
                `;
    }
    appCenter.innerHTML += str;
}

// 点击跳转详情页
setTimeout(function () {
    var appIn = document.querySelectorAll('.appIn');
    appIn = Array.prototype.slice.call(appIn);
    for (let i = 0; i < appIn.length; i++) {
        console.log(appIn);
        console.log(appIn[i]);
        appIn[i].addEventListener('click', function () {
            window.location.href = './detail.html';
        }, true)
    }
}, 100);