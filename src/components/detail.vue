<template>
  <div class="block">
    <!-- <h3>This Is A Title</h3>
    <h5>原文链接 <span>http://www.neau.edu.cn/a/b</span></h5> -->
    <div style="height: 5vh; margin-top: 5vh;">
      <img src="../assets/header.png" alt="text-header" class="text-header">  
    </div>
    <div class="contents-container">
      <h3 class="detail-title">this is a title</h3>
      <p v-for="item in 40" :key="item" class="detail-content">item</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
