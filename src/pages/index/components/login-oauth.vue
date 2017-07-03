<template>
    <div id="login_oauth">

        <div id="login_oauth_title">
            <div class="login-oauth-title-line"></div>
            <h4 id="login_oauth_title_text">第三方账号登录</h4>
            <div class="login-oauth-title-line"></div>
        </div>

        <div id="login_oauth_manner_icons">
            <img id="qq_login" class="manner-icon" src="../../../assets/img/icons/qq.jpg" alt="QQ账号登录">
            <img id="wx_login" class="manner-icon" src="../../../assets/img/icons/wx.jpg" alt="微信账号登录">
            <img id="alipay_login" class="manner-icon" src="../../../assets/img/icons/alipay.png" alt="支付宝账号登录">
        </div>

    </div>
</template>
<script>
    module.exports =
        {
            data: function()
            {
                return {};
            },
            components:
                {

                }
        }
</script>
<style scoped>
    #login_oauth
    {
    }
    #login_oauth_title
    {
        display: flex;
        justify-content: center;
        padding: 0;
    }
    #login_oauth_title_text
    {
        margin: 0;
        padding: 0;
    }
    .login-oauth-title-line
    {
        flex-grow: 1;
        margin: 9px 5px;
        padding: 0;
        background-color: white;
    }
    #login_oauth_manner_icons
    {
        display: flex;
        justify-content: center;
    }
    .manner-icon
    {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        cursor: pointer;
        margin: 10px;
    }
</style>