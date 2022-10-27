export const home = {
    path: '/',
    name: 'Home',
    component: require('../../components/LandingPage').default
}

export const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    component: require('../../components/FinancePage.vue').default
}

export const routes = [
    home,
    dashboard
]
