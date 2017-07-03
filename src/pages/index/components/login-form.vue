<template>
    <form id="login_form">
        <div class="input-group">
            <span class="input-group-addon"><i class="icon-people iconfont"></i></span>
            <input type="text" id="login_account" class="form-control" placeholder="账号/手机号/邮箱">
        </div>
        <div id="login_account_message" class="input-message">&nbsp;</div>
        <div class="input-group">
            <span class="input-group-addon"><i class="icon-lock iconfont"></i></span>
            <input id="login_password" type="password" class="form-control" placeholder="密码">
        </div>
        <div id="login_password_message" class="input-message">&nbsp;</div>
        <button class="btn btn-primary form-control" type="button" id="login_button">登陆</button>
    </form>
</template>
<script>
    module.exports =
        {
            data: function ()
            {
                return {};
            },
            components:
                {}
        }
</script>
<style scoped>
    #login_form
    {
        width: 100%;
    }
    .input-message
    {
        margin-top: 0;
        margin-bottom: 10px;
        padding: 5px;
    }
</style>
