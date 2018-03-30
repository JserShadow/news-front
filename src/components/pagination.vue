<template>
  <div class="block">
    <h3>校内资讯 
      <!-- <span class="pro">PRO</span>  -->
    </h3>
    <el-select v-model="selector" placeholder="请选择" class="select" @change="changeOption">
      <el-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
    <transition name="search-block" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="search" v-show="insideBtn">
        <el-input v-model="input" placeholder="请输入感兴趣的内容" class="search-block"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click.native="searchBegin"></el-button>
      </div>
    </transition>
    <transition name="outter-search-btn" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <el-button type="primary" icon="el-icon-search" class="outside-search-btn" @click.native="showSearchModel" v-show="outsideBtn"></el-button>
    </transition>
    <div class="under-blur"></div>
    <ul class="news-list"> 
      <li v-for="item in dataForCurrentPage" :key="item.url" class="list-item">
        <div class="item-title">{{item.title}}</div>
        <div>{{item.createTime}}</div>
      </li>
    </ul>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-size="15"
      layout="prev, pager, next"
      :total="totalNews"
      class="pagination">
    </el-pagination>
    <img src="../assets/jser_logo.svg" alt="powered by jser" class="jser-logo">
  </div>
</template>

<script>
import animate from 'animate.css';
import axios from 'axios';
export default {
  name: 'Pagination',
  data() {
    return {
      totalNews: 7000,
      currentPage4: 1,
      input: '',
      insideBtn: false,
      outsideBtn: true,
      dataForCurrentPage: '',
      selectorIndex: 0,
      options3: [{
          label: '教务资讯',
          options: [{
            value: '/jwc/news',
            label: '教务新闻'
          }, {
            value: '/jwc/notices',
            label: '教务通知'
          }, {
            value: '/jwc/exam',
            label: '考务通知'
          }]
        }, {
          label: '官网资讯',
          options: [{
            value: '/neau/news',
            label: '东农资讯'
          }, {
            value: '/neau/notices',
            label: '通知公告'
          }, {
            value: '/neau/enrollment',
            label: '招生动态'
          }]
        }],
        selector: ''
    }
  },
  methods: {
    handleCurrentChange(current) {
      
    },
    showSearchModel() {
      this.outsideBtn = false;
      this.insideBtn = true;
    },
    searchBegin() {
      this.insideBtn = false;
      this.outsideBtn = true
    },
    async changeOption(value) {
      this.currentPage4 = 1;
      const data = await axios.get(`${value}?page=1`);
      this.dataForCurrentPage = data.data.list;
      this.totalNews = data.data.number;
    }
  },
  async mounted() {
    if (this.$store.currentSelector) {
      this.currentPage4 = this.$store.CURRENT_PAGE();
    }
    this.selector = this.options3[0].options[0].label;
    const ajaxData = await axios.get(`/jwc/news?page=${this.currentPage4}`);
    this.dataForCurrentPage = ajaxData.data.list;
    this.totalNews = ajaxData.data.number;
  }
}
</script>
