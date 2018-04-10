<template>
  <div class="block" v-loading="loadData">
    <div style="height: 5vh; margin-top: 5vh;">
      <img src="../assets/header.png" alt="text-header" class="text-header">  
    </div>
    <div class="contents-container">
      <h3 class="detail-title">{{detailData.title}}</h3>
      <div class="content-position">
        <p v-for="item in contents" :key="item" class="detail-content">{{item}}</p>
      </div>
    </div>
    <img src="../assets/jser_logo.svg" alt="jser_logo" class="jser-logo-detail">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      detailData: '',
      loadData: false,
      contents: ''
    }
  },
  methods: {
    uselessKiller () {
      let text = this.detailData.content.text
      let imgs = this.detailData.content.imgs
      let spliceArr = []
      text.forEach(function (val, index) {
        imgs.forEach(function (v, i) {
          if (val === v.title) {
            spliceArr.push(index)
          }
        })
        if (val === '' || val === ' ') {
          spliceArr.push(index)
        }
        if (index === text.length - 1) {
          spliceArr.sort(function (a, b) {
            return a < b ? 1 : -1
          }).forEach(function (value) {
            text.splice(value, 1)
          })
        }
      })
    }
  },
  async mounted() {
    this.loadData = true;
    const _id = this.$router.history.current.params.id;
    const detailClass = this.$router.history.current.params.class;
    const resdata = await axios.post('/getdetail', {
      class: detailClass,
      id: _id
    });
    this.contents = resdata.data[0].content.text;
    this.detailData = resdata.data[0];
    this.uselessKiller();
    this.loadData = false;
  }
}
</script>

<style>

</style>
