


// 如果是java hook代码 都放到 Java.perform 中
Java.perform(function () {

    var jsonRequest = Java.use("com.dodonew.online.http.JsonRequest");
    console.log("jsonRequest:", jsonRequest);
    jsonRequest.paraMap.implementation = function (a) {
        console.log("params1: ", a);
        this.paraMap(a);
    }
    
    jsonRequest.addRequestMap.overload('java.util.Map', 'int').implementation = function (a, b) {
        console.log("addRequestMap params: ", a, b);
        var bb = Java.cast(a, Java.use("java.util.HashMap"));
        console.log("addRequestMap params: ", bb.toString());
        this.addRequestMap(a, b);
    }
    
    var utils = Java.use("com.dodonew.online.util.Utils");
    utils.md5.implementation = function (a) {
        console.log("md5 params: ", a);
        var retval = this.md5(a);
        console.log("md5 retval: ", retval);
        return retval;
    }
    
    var requestUtil = Java.use("com.dodonew.online.http.RequestUtil");
    requestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (a, b, c) {
        console.log("encodeDesMap params: ", a);
        console.log("encodeDesMap key: ", b);
        console.log("encodeDesMap iv: ", c);
        var retval = this.encodeDesMap(a, b, c);
        console.log("encodeDesMap retval:", retval);
        return retval;
    }

    
    var base64 = Java.use("android.util.Base64");
    
    var dESKeySpec = Java.use("javax.crypto.spec.DESKeySpec");
    dESKeySpec.$init.overload('[B').implementation = function (a) {
        console.log("DESKeySpec params: ", base64.encodeToString(a, 0));
        this.$init(a);
    }


    var aaa= Java.use("com.dodonew.online.http.RequestUtil");
    aaa.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(a, b, c) {
        return this.encodeDesMap(a, b, c);
        // return "xxx";
    }

    
});




