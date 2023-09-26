// 设置cookie 需要传入三个参数  键 值  过期时间
function setCookie(key, value, time) {
    // console.log('time:'+time)
    var date_ = new Date();
    date_.setDate(date_.getDate() + time);
    document.cookie = key + '=' + value + ';expires=' + date_;
}

// 获取cookie 键名
function getCookie(key) {
    //多cookie进行字符串分割
    var arr = document.cookie.split("; ");
    console.log('arr:' + arr.length);

    for (var i = 0; i < arr.length; i++) {
        var n_arr = arr[i].split('=');
        console.log(n_arr);
        // console.log(key);
        if (n_arr[0] == key) {

            return n_arr[1];
        }
    }
    return '';
}

//删除cookie  通过键名
function removeCookie(key) {
    this.setCookie(key, '', -1);
}