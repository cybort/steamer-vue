import Vue from 'vue'
import Main from './main.vue'
import './css/main.css'
import './css/main.less'
import './css/main.sass'

new Vue({
    el: '#main',
    render: h => h(Main)
})