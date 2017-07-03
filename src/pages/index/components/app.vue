<template>
    <div id="login_app">
        <login-box></login-box>
    </div>
</template>
<script>
    module.exports =
        {
            data: function ()
            {
                return {};
            },
            components:
                {
                    'login-box' : require('./login-box.vue'),
                }
        }
</script>
<style scoped="">
    #login_app
    {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
</style>
<style>
    @import "//at.alicdn.com/t/font_1469889758_9089751.css";

    html,
    body
    {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-image: url(../../../assets/img/background.jpg);
        background-size: 100% 100%;
    }
</style>