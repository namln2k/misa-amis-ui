import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerList from '../views/dictionary/customer/CustomerList.vue'
import EmployeeList from '../views/dictionary/employee/EmployeeList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dictionary/customer-list', name: 'CustomerList', component: CustomerList },
        { path: '/dictionary/employee-list', name: 'EmployeeList', component: EmployeeList }
    ]
})

export default router