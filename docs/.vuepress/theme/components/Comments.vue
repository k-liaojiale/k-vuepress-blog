<template>
    <div class="vcomment" v-if="data.comments === true">
      <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },
  mounted: function() {
    this.createValine()
  },
  methods: {
    createValine () {
      window.AV = require('leancloud-storage')
      const Valine = require('valine')
      const secretKeyConf = require('../../../../config/secretKeyConf')
      new Valine({
          el: '#vcomments' ,
          appId: secretKeyConf.appId,
          appKey: secretKeyConf.appKey,
          notify:false, 
          verify:false, 
          avatar: 'retro',
          path: window.location.pathname,
          placeholder: '欢迎留言与我分享您的想法...' 
      })
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path !==  from.path){
        setTimeout(() => {
          //重新刷新valine
          this.createValine()
        }, 180)
      }
    }
  }
}
</script>

<style lang="stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>