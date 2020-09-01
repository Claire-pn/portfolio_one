<template>
<div>
<Navbar/>
<center>
  <pdf src="./resume.pdf"  style="display: inline-block; width: 50%"></pdf>
</center>
</div>
</template>
 
<script>
import pdf from 'vue-pdf';
import Navbar from '@/components/Navbar.vue';
 
export default {
  components: {
    pdf,
    Navbar
  }
}
</script>