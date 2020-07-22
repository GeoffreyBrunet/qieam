import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import ProfileComponent from "./views/profile.vue"
import FriendsComponent from "./views/friends.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileComponent,
        },
        {
            path: "/friends",
            name: "friends",
            component: FriendsComponent
        }
    ]
})