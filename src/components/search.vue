<template>
  <div class="block" v-loading="loadData">
    <div class="total">
      <div>根据"<span style="color: #ff3333;">{{keywords}}</span>"</div>
      <div>共查找到 <span style="color: #ff3333">{{totalCount}}</span> 条资讯</div>
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="教务通知" name="1">
        <div v-for="item in Jwcnotice.content" :key="item._id" class="list-item" @click="jumpToDetail(item, 'jwcnotices')">
          <div class="item-title">{{item.title}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="考务通知" name="2">
        <div v-for="item in Jwcexam.content" :key="item._id" class="list-item" @click="jumpToDetail(item, 'jwcexam')">
          <div class="item-title">{{item.title}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="通知公告" name="3">
        <div v-for="item in Neaunotices.content" :key="item._id" class="list-item" @click="jumpToDetail(item, 'neaunotices')">
          <div class="item-title">{{item.title}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Jwcnotice: {},
      Jwcexam: {},
      Neaunotices: {},
      totalCount: 0,
      activeName: 1,
      loadData: false,
      keywords: ''
    }
  },
  methods: {
    jumpToDetail(item, judgeStr) {
      this.$router.push(`/detail/${judgeStr}/${item._id}`);
    }
  },
  async mounted() {
    this.loadData = true;
    const { keywords } = this.$router.history.current.params;
    const resdata = await axios.post('/search', {
      content: keywords
    });
    this.keywords = keywords;
    this.loadData = false;
    this.Jwcnotice.content = resdata.data.Jwcnotice;
    this.Jwcnotice.count = resdata.data.Jwcnotice.length;
    this.Jwcexam.content = resdata.data.Jwcexam;
    this.Jwcexam.count = resdata.data.Jwcexam.length;
    this.Neaunotices.content = resdata.data.Neaunotices;
    this.Neaunotices.count = resdata.data.Neaunotices.length;
    this.totalCount = resdata.data.total;
    console.log(resdata.data);
  }
}
</script>

<style>

</style>
