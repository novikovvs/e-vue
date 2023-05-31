export default {
    data () {
        return {
            electron: process.versions.electron,
            vuetify: require('vuetify/package.json').version,
            name: this.$route.name,
            node: process.versions.node,
            path: this.$route.path,
            platform: require('os').platform(),
            vue: require('vue/package.json').version
        }
    }
}
