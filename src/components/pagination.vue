<template>
  <div class="block">
    <h3>校内资讯 <span class="pro">PRO</span> </h3>
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
      <li v-for="item in 15" :key="item" class="list-item"><div>{{item}}</div><div>time</div></li>
    </ul>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
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

export default {
  name: 'Pagination',
  data() {
    return {
      totalNews: 7000,
      currentPage4: 1,
      input: '',
      insideBtn: false,
      outsideBtn: true,
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    showSearchModel() {
      this.outsideBtn = false;
      this.insideBtn = true;
    },
    searchBegin() {
      this.insideBtn = false;
      this.outsideBtn = true
    }
  }
}
</script>
