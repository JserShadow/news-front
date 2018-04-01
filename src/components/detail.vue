<template>
  <div class="block" v-loading="loadData">
    <div style="height: 5vh; margin-top: 5vh;">
      <img src="../assets/header.png" alt="text-header" class="text-header">  
    </div>
    <div class="contents-container">
      <h3 class="detail-title">{{detailData.title}}</h3>
      <div class="content-position">
        <p v-for="item in detailData.init.text" :key="item" class="detail-content">{{item}}</p>
      </div>
    </div>
    <img src="../assets/jser_logo.svg" alt="jser_logo" class="jser-logo jser-logo-detail">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      detailData: '',
      loadData: false
    }
  },
  async mounted() {
    this.loadData = true;
    const _id = this.$router.history.current.params.id;
    const detailClass = this.$router.history.current.params.class;
    //需要添加去多余部分的方法
    const resdata = await axios.post('/getdetail', {
      class: detailClass,
      id: _id
    });
    this.detailData = resdata.data[0];
    this.loadData = false;
  }
}
</script>

<style>

</style>
