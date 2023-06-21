// 什么值得买
// 破解登录
// weixin=0&f=android&v=10.4.47&en_mobile_code=z9cGi7C9g2ReBjZEDrcfTA%3D%3D&mobile=18513011222&sign=E07BB679307ADCA5C903E83751A3AB12&is_day_activation=1&touchstone_event=&mobile_code_check_type=msg&time=1687319064000&basic_v=0
// en_mobile_code为验证码123456，先base64，然后aes加密（AES/ECB/PKCS5Padding，2a539b3783183c805e1e886cc6202c49），再取base64
// sign是md5，basic_v=0&en_mobile_code=z9cGi7C9g2ReBjZEDrcfTA==&f=android&is_day_activation=1&mobile=18513088123&mobile_code_check_type=msg&time=1687325599000&v=10.4.47&weixin=0&key=apr1$AwP!wRRT$gJ/q.X24poeBInlUJC
Java.perform(function () {
    // let b = Java.use("com.smzdm.client.b.m.b");
    // b["K0"].implementation = function (str, str2, str3, i2) {
    //     console.log(`b.K0 is called: str=${str}, str2=${str2}, str3=${str3}, i2=${i2}`);
    //     let result = this["K0"](str, str2, str3, i2);
    //     console.log(`b.K0 result=${result}`);
    //     return result;
    // };


    // let w = Java.use("com.smzdm.client.base.utils.w");
    // w["b"].implementation = function (str, str2) {
    //     console.log(`w.b is called: str=${str}, str2=${str2}`);
    //     let result = this["b"](str, str2);
    //     console.log(`w.b result=${result}`);
    //     return result;
    // };

    // let y = Java.use("com.smzdm.client.base.utils.y");
    // y["c"].implementation = function (bArr) {
    //     console.log(`y.c is called: bArr=${bArr}`);
    //     let result = this["c"](bArr);
    //     console.log(`y.c result=${result}`);
    //     return result;
    // };


    let d = Java.use("anet.channel.d");
    d["sign"].implementation = function (str) {
        console.log(`d.sign is called: str=${str}`);
        let result = this["sign"](str);
        console.log(`d.sign result=${result}`);
        return result;
    };

    let a = Java.use("com.smzdm.client.b.a0.h.a");
    a["b"].implementation = function (map, str) {
        console.log(`a.b is called: map=${map}, str=${str}`);
        let result = this["b"](map, str);
        console.log(`a.b result=${result}`);
        return result;
    };

    let l1 = Java.use("com.smzdm.client.base.utils.l1");
    l1["a"].implementation = function (str) {
        console.log(`l1.a is called: str=${str}`);
        let result = this["a"](str);
        console.log(`l1.a result=${result}`);
        return result;
    };
})