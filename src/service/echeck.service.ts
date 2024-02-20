import axios from 'axios'
import store from './../store'

export default new class {
    async getRhinoPluginPackages() {
        const path = '/echeck/swagger/get/rhino/plugin/releases'
        const apiServiceUrl = `${store.state.serverUrlTemplate}${path}`
        
        console.log('echeck-api ➤➤➤ ', apiServiceUrl)
        
        return axios.get(apiServiceUrl, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
    }

    async getRhinoPluginPackage(version: any) {
        const path = '/echeck/swagger/get/rhino/plugin'
        const apiServiceUrl = `${store.state.serverUrlTemplate}${path}?version=${version}&download=true`
        
        console.log('echeck-api ➤➤➤ ', apiServiceUrl)
        
        return axios.get(apiServiceUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}