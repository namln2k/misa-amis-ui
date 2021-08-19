import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerList from '../views/dictionary/customer/CustomerList.vue'
import EmployeeList from '../views/dictionary/employee/EmployeeList.vue'
import Home from '../views/base/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dictionary/customer-list', component: CustomerList },
        { path: '/dictionary/employee-list', component: EmployeeList },
        { path: '/', name: 'Home', component: Home }
    ]
})

export default router