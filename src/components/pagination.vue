<template>
  <div class="block">
    <h3>校内资讯 <span class="pro">PRO</span> </h3>
    <el-button type="primary" icon="el-icon-search" class="search-btn"></el-button>
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
export default {
  name: 'Pagination',
  data() {
    return {
      totalNews: 7000,
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
h3 {
  font-weight: normal;
  font-size: 2.5rem;
  margin-top: 10px;
  text-align: left;
  margin-left: 10vw;
  color: #aaaaaa;
}
.pro {
  font-size: 14px;
  color: rgb(255, 169, 71);
  font-weight: normal;
  font-style: italic;
}
.search-btn {
  position: absolute;
  top: 3vh;
  right: 10vw;
}
.pagination {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%)
}
.el-pager li {
  min-width: 30px;
}
.block {
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-pagination .btn-next, .el-pagination .btn-prev {
  background: 0 0;
}
.el-pagination button.disabled {
  background: 0 0;
}
.el-pager li {
  background: 0 0;
}
.jser-logo {
  width: 80px;
  height: 40px;
  position: absolute;
  bottom: 2%;
  transform: translate(-50%, -1%);
}
.news-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  height: 70vh;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  list-style: none;
  background-image: linear-gradient(110deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
  padding: 10px;
}
.list-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #aaa;
}
.under-blur {
  width: 80vw;
  height: 70vh;
  /* border-radius: 15px; */
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  background: white;
  filter: blur(1px);
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, .18), 0px 6px 10px rgba(0, 0, 0, .22);
}
</style>
