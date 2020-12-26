<template lang='pug'>
#app
  router-view(:set-token='setToken', :token='token')
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { getToken, setToken } from './middleware/auth';

@Component
export default class App extends Vue {
  public token = getToken() || '';

  private setToken(token: string) {
    setToken(token);
    this.token = token;
  }

  mounted() {
    console.log(this);
  }
}
</script>

<style lang="sass">
body
  font-size: 16px
#app
  min-height: 100vh
  height: 100%
</style>