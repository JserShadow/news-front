<template>
  <div class="block">
    <div class="total">共查找到 <span style="color: #ff3333">{{totalCount}}</span> 条资讯</div>
    <!-- 添加手风琴伸缩框
    按类区分 -->
    <div class="search-result-box">
      <div>教务通知( <span style="color: #ff3333">{{Jwcnotice}}</span> )</div>
      <div>考务通知( <span style="color: #ff3333">{{Jwcexam}}</span> )</div>
      <div>通知公告( <span style="color: #ff3333">{{Neaunotices}}</span> )</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Jwcnotice: '',
      Jwcexam: '',
      Neaunotices: '',
      totalCount: 0
    }
  },
  async mounted() {
    const { keywords } = this.$router.history.current.params;
    const resdata = await axios.post('/search', {
      content: keywords
    });
    this.Jwcnotice = resdata.data.Jwcnotice;
    this.Jwcexam = resdata.data.Jwcexam;
    this.Neaunotices = resdata.data.Neaunotices;
    this.totalCount = resdata.data.total;
    console.log(resdata.data);
  }
}
</script>

<style>

</style>
