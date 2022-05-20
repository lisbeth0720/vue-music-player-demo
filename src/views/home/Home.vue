<template>
  <div class="content">
      <div>主页</div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        songList: [], // 存储歌曲列表的数组
        page: 1, // 加载的页数
        totalPage: 0, // 总页数
        allLoaded: false, // 数据是否全部加载完毕
        isLoading: false, // 是否处于加载中
      };
    },
    computed: {
     
    },
    watch: {
      
    },
    created() {
      
    },
    mounted() {
      
    },
    methods: {
      // 渲染列表数据
      getList() {
        
      },
    },
    components: {
      
    },
  }
</script>

<style scoped>
  
</style>
