<template>
    <div id="login_box">
        <div id="login_box_bg"></div>
        <div id="login_box_content">
            <div id="login_box_header">
                <h2>登录</h2>
                <h4>没有账号？<a href="//www.vanging.com/register">现在注册</a></h4>
            </div>
            <hr class="login_box_separator_horizontal">
            <div id="login_manners">
                <br>
                <br>
                <login-form></login-form>
                <br>
                <br>
                <login-oauth></login-oauth>
            </div>
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
                    'login-form': require('./login-form.vue'),
                    'login-oauth': require('./login-oauth.vue'),
                }
        }
</script>
<style scoped>
    #login_box
    {
        position: relative;
        width: 500px;
        padding:20px;
        border: 1px solid white;
        transition: all .2s;
    }
    #login_box_bg
    {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        background-color: black;
        opacity: 0.7;
    }
    #login_box_content
    {
        position: relative;
        z-index: 999;
        color: white;
    }
    #login_box_header
    {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .login_box_separator_horizontal
    {
        margin-top: 5px;
    }
    #login_manners
    {

    }
</style>