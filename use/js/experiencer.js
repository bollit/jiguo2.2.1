// 数据渲染
var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
oajax.open('get', 'http://127.0.0.1:3000/useing/master', true);
oajax.send();

oajax.onreadystatechange = function () {
    if (oajax.readyState == 4) {
        if (oajax.status == 200) {
            var data = JSON.parse(oajax.responseText);
            console.log(data);
            show(data);
        } else {
            console.log('请求失败');
        }
    }
}
function show(val, val2) {
    var appCenter = document.querySelector('.appCenter');
    var str = '';
    for (var item of val) {
        console.log(item.img);
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