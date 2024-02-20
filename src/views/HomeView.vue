<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RhinoPackages from '@/components/RhinoPackages.vue'; // @ is an alias to /src

@Options({
  components: {
    RhinoPackages,
  },
})
export default class HomeView extends Vue {}
</script>

<template>
  <div class="home">
    <RhinoPackages />
  </div>
</template>