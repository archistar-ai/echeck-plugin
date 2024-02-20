<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import echeckService from '@/service/echeck.service';
import store from '@/store'

@Options({
  data () {
    return {
      rhinoPackagesInfo: null
    }
  },
  mounted () {
    echeckService.getRhinoPluginPackages().then(response => (this.rhinoPackagesInfo = response.data))
  },
  methods: {
    download: function(version: any) {
      echeckService.getRhinoPluginPackage(version).then(response => window.open(response.data.downloadUrl))
    }
  }
})
export default class RhinoPackages extends Vue {
  setup() {
    return { echeckService }
  }
}
</script>

<template>
  <div v-for="(rhinoPackage) in rhinoPackagesInfo" :key="rhinoPackage.fileName">
    <img src="images/rhino.png">
    <p>
      {{rhinoPackage.fileName}}
    </p>
    <p>
      {{rhinoPackage.version}}
    </p>
    
    <p>
      {{$filters.formatDate(rhinoPackage.releaseDate)}}
    </p>
    <p>
      {{$filters.formatSize(rhinoPackage.sizeBytes)}}
    </p>
    <button v-on:click="download(rhinoPackage.version)">Download v{{ rhinoPackage.version }}</button>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 2rem; height: 2rem;
}
</style>