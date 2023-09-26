window.onload = function () {
    vray1()
    vray2()
}




function vray1() {
    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax.open("get", "http://127.0.0.1:3000/report/new");
    ajax.send();

    var vray1 = document.querySelector('.vray1')
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                // 字符串转对象
                var Data = JSON.parse(ajax.responseText);

                var str = '';
                for (var i = 0; i < Data.length; i++) {

                    str = `
                    <li class="li">
                        <a href="#">
                            <img  src="${Data[i].img}">
                            <div class="infor">
                                <p>${Data[i].text}</p>
                                <div class="btm">
                                    <div class="left">
                                        <span class="avt"></span>
                                        <span class="name">${Data[i].uName}</span>
                                        <span class="time">${Data[i].endTime}</span>

                                    </div>
                                    <div class="right">
                                    <span class="zan">${Data[i].num}</span>
                                    <span class="look">${Data[i].apply}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="lis">
                        <a href="#">
                            <div class="click-look">
                                关于格林威特空气净化器还有 4 篇报告，点击查看
                            </div>
                        </a>
                    </li>

                              `
                    vray1.innerHTML += str;

                }


            }
        };
    }
}

function vray2() {
    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax.open("get", "http://127.0.0.1:3000/report/hot");
    ajax.send();

    var vray2 = document.querySelector('.vray2')
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                // 字符串转对象
                var Data = JSON.parse(ajax.responseText);

                var str = '';
                for (var i = 0; i < Data.length; i++) {

                    str = `
                    <li class="li">
                        <a href="#">
                            <img  src="${Data[i].img}">
                            <div class="infor">
                                <p>${Data[i].text}</p>
                                <div class="btm">
                                    <div class="left">
                                        <span class="avt"></span>
                                        <span class="name">${Data[i].uName}</span>
                                        <span class="time">${Data[i].endTime}</span>

                                    </div>
                                    <div class="right">
                                    <span class="zan">${Data[i].num}</span>
                                    <span class="look">${Data[i].apply}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                              `
                    vray2.innerHTML += str;

                }


            }
        };
    }
}




var playMore = document.querySelector('.playMore').children;
playMore[0].onclick = function () {
    this.style.display = "none";
    playMore[1].style.display = "block";

    var timer;
    timer = setTimeout(function () {
        vray1()
        vray2()
    }, 2000)

}

