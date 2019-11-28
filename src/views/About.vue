<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getRepos } from '../api/repo'
export default {
  data() {
    return {
    }
  },
  mounted() {
    getRepos('matthewwu5/repo-search').then(res => {
      console.log(res)
    })
  },
}
</script>

