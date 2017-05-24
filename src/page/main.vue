<template>
  <div class="index">
    <iframe :src="iframesrc"></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iframesrc:'http://main.yearnedu.com/'
    }
  }
}
</script>

<style lang="less" scoped>

iframe{
  width:100%;
  height:calc(100vh-3em);
  border:none;
  margin-top:3em;
}
@media screen and (max-width:800px){
  iframe{
    margin-top:2em;
  }
}
</style>
