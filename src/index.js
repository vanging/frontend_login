let app = new Vue
(
    {
        el:'#login_app',
        template:'<wrapper></wrapper>',
        components:
            {
                wrapper:require('./components/app.vue')
            }
    }
);