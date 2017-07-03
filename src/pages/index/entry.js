import 'bootstrap.min.css';

import Vue from 'vue'

let app = new Vue
(
    {
        el:'#app_login',
        template:'<wrapper></wrapper>',
        components:
            {
                wrapper:require('./components/app.vue')
            }
    }
);