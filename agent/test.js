//调用方法
function printStack() {
    Java.perform(function () {
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();
        if (straces != undefined && straces != null) {
            var strace = straces.toString();
            var replaceStr = strace.replace(/,/g, "\r\n");
            console.log("=============================Stack strat=======================");
            console.log(replaceStr);
            console.log("=============================Stack end=======================\r\n");
            Exception.$dispose();
        }
    });
}

function showStacks(){
    console.log(
        Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new())
    )
}

function main()
{
     //使用java平台
     Java.perform(
        function() {
            console.log('2222')
            var loginVM = Java.use("com.stew.kb_user.viewmodel.LoginViewModel")
            console.log('loginVM:',loginVM)
            loginVM.login.implementation = function(a,b){
                console.log("param1:",a)
                console.log("param12:",b)
                // showStacks()
                printStack()
                return this.login(a,b)
            }

            // var arrayList = Java.use("java.util.ArrayList")
            // arrayList.add.overload('java.lang.Object').implementation = function(a){
            //     try{
            //         // console.log("arrayList.add:",a.toString())
            //         if(a=="user"){
            //             console.log("arrayList.add:",a)
            //             //     // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));//java打印堆栈
            //             }
            //     }catch{}

            //     // console.log("arrayList.add:",a)
            //     return this.add(a)
            // }

            // arrayList.add.overload('int','java.lang.Object').implementation = function(a,b){
            //     // console.log("arrayList.add.overload('int','java.lang.Object'):",a,b)
            //     return this.add(a,b)
            // }

            // Hook方法的所有重载
            var log = Java.use("android.util.Log")
            var overloadArr = log.d.overloads;
            for (var i=0;i<overloadArr.length;i++){
                overloadArr[i].implementation = function(){
                    var params = ""
                    for (var j=0;j<arguments.length;j++){
                        params += arguments[j]+" "
                    }
                    console.log("android.util.Log.d is called params is:",params)
                    return this.d.apply(this,arguments)
                }
            }

            // log.d.overload('java.lang.String', 'java.lang.String').implementation = function(tag,message){
            //     console.log("log.w:",tag,message)
            //     printStack()
            //     return this.w(tag,message)
            // }
            // // log.d.overload('java.lang.String', 'java.lang.Throwable').implementation = function(tag,throwable){
            // //     console.log("log.w:",tag,throwable)
            // //     return this.w(tag,throwable)
            // // }
            // log.d.overload('java.lang.String', 'java.lang.String', 'java.lang.Throwable').implementation = function(tag,message,throwable){
            //     console.log("log.w:",tag,message,throwable)
            //     printStack()
            //     return this.w(tag,message,throwable)
            // }


            var module = Process.findModuleByName("linker64")
            console.log(JSON.stringify(module))
            console.log(module.enumerateExports()[0])

        }

     );

}
setImmediate(main)