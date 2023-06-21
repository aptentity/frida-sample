// 央视频
// 破解高清vip
Java.perform(function () {
    var DefinitionModel = Java.use("com.tencent.videolite.android.component.player.common.hierarchy.definition.DefinitionModel");
    DefinitionModel.$init.implementation = function(a,b,c,d,e){
        d = false;
        console.log("init");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        var ret = this.$init(a,b,c,d,e);
        return ret;
    }


    let MediaPlayerImpl = Java.use("com.tencent.videolite.android.component.player.MediaPlayerImpl");
    MediaPlayerImpl["switchDefinition"].overload('com.tencent.videolite.android.datamodel.model.DefinitionBean', 'boolean').implementation = function (definitionBean, z) {
        console.log(`MediaPlayerImpl.switchDefinition is called: definitionBean=${definitionBean}, z=${z}`);
        this["switchDefinition"](definitionBean, z);
    };

    Java.choose("com.tencent.videolite.android.component.player.common.hierarchy.definition.DefinitionModel",{
        onMatch:function(instance){
            console.log(instance.isVip);
            console.log("find =======================================================");
        },
        onComplete:function(){
            //onComplete回调会在所有onMatch完成后调用
        }
    })


    // let AnonymousClass1 = Java.use("com.tencent.videolite.android.component.player.common.hierarchy.viplayer.VipPanel$1");
    // AnonymousClass1["onClick"].implementation = function (view) {
    //     console.log(`AnonymousClass1.onClick is called: view=${view}`);
    //     this.this$0.value.buyVipSuccess();
    //     // this["onClick"](view);
    //     // let VipPanel = Java.use("com.tencent.videolite.android.component.player.common.hierarchy.viplayer.VipPanel");
    //     // VipPanel["buyVipSuccess"]();
    // };

    let VipPanel = Java.use("com.tencent.videolite.android.component.player.common.hierarchy.viplayer.VipPanel");
    VipPanel["show"].implementation = function () {
        console.log(`VipPanel.show is called`);
        this["show"]();
        this.buyVipSuccess();
    };



    // let LogTools = Java.use("com.tencent.videolite.android.component.log.LogTools");
    // LogTools["g"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
    //     console.log(`LogTools.g is called: str=${str}, str2=${str2}`);
    //     let result = this["g"](str, str2);
    //     console.log(`LogTools.g result=${result}`);
    //     return result;
    // };

    let a = Java.use("com.cctv.yangshipin.app.androidp.gpai.videoupload.impl.UGCClient$a");
    a["intercept"].implementation = function (chain) {
        console.log(`a.intercept is called: chain=${chain}`);
        let result = this["intercept"](chain);
        console.log(`a.intercept result=${result}`);
        return result;
    };


    let HttpLoggingInterceptor = Java.use("com.tencent.qcloud.core.http.HttpLoggingInterceptor");
    HttpLoggingInterceptor["intercept"].implementation = function (chain) {
        console.log(`HttpLoggingInterceptor.intercept is called: chain=${chain}`);
        let result = this["intercept"](chain);
        console.log(`HttpLoggingInterceptor.intercept result=${result}`);
        return result;
    };
})