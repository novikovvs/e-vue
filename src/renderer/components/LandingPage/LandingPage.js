import SystemInformation from './../SystemInfo/SystemInfo.vue'

export default {
    name: 'landing-page',
    components: { SystemInformation },
    data () {
        return {}
    },
    methods: {
        open (link) {
            this.$router.push(link)
        }
    }
}
