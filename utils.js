var Utils = function () {
    //函数对象自带闭包
    //私有属性
    var username;

    //私有方法
    var setUsername =function(username){
        this.username =username;
    };

    var getUsername =function () {
        return this.username;
    };

    return{
        //暴露公共方法
        setUsername: function (username) {
            setUsername(username);
        },
        getUsername: function () {
            return getUsername();
        },
    }
}();
