//const BASE_URL = "http://doclever.cn:；8080/mock/597f470ce550c4121bbe101e"


(function(window) {
//       var host = 'http://47.93.238.45/'  //release
// var host = 'http://192.168.10.159:8080/'
  //  var host = 'http://ph.znphjf.com/'
// var host = 'http://192.168.10.159:8080/'  //小强
 // var host = 'http://172.16.36.119:8080/'  //富川
// var host = 'http://hfw.znphjf.com:8083/'
  //  var host = 'http://192.168.30.134:8188/'
  // var host = 'http://192.168.30.191:8180/'
  // var host = 'http://192.168.30.185:8180/'
   //var host = 'http://dev.znphjf.com/hfw/'  //测试
  //var host ='http://hfw.znphjf.com:8083/'//正式
  //var host = 'http://dev.znphjf.com/'
  var host = 'http://192.168.30.134:18080/'
    var basePath = '/app'

    var debug = false; // 打印错误信息，false不打印

    var url = function(path) {
        var u = host + basePath + path
        if (debug){
          console.log(u);
        }
        return u
    }
    window.remote = {
        url: url,
        debug: function(){
          return debug;
        },
        debugUserId: function(){
          return 1888
        }
    }
})(window)
