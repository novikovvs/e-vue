export const home = {
    path: '/',
    name: 'Home',
    component: require('../../components/LandingPage.vue').default
}

export const gitlab = {
    path: '/git',
    name: 'Github',
    component: require('../../components/GithubPage.vue').default
}

export const routes = [
    home,
    gitlab
]
