import { routes } from '../../utils/const/routes'
import router from '../../router'
export default {
    name: 'NavBar',
    mounted () {
        this.currentPath = this.$router.currentRoute.path
    },
    data () {
        return {
            paths: routes,
            currentPath: undefined
        }
    },
    methods: {
        router () {
            return router
        },
        open (link) {
            if (this.$router.history.current.path !== link) {
                this.currentPath = link
                this.$router.push(link).then()
            }
        }
    }
}
