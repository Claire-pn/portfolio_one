<template>
  <div
    class="jumbotron card card-image"
    style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);"
  >
    <div class="text-white text-center py-5 px-4">
      <div>
        <h2 class="card-title h1-responsive pt-3 mb-5 font-bold">
          <strong>CLAIRE FELIZA BANAWAN</strong>
        </h2>
        <p class="mx-5 mb-5">
          Don't stop in believing. You will be able to achieve your dreams just keep doing and always try your best!
        </p>
        <mdb-btn gradient="peach" rounded @click="viewProfile">View Profile</mdb-btn>
        <!-- <a class="btn btn-outline-white btn-md">
          <i class="fas fa-clone left"></i> View Profile
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
    import { mdbBtn } from 'mdbvue';
    export default {
        name: 'ButtonPage',
        components: {
            mdbBtn
        },
          methods: {
            viewProfile(){
              this.$router.push('/Profile')
            }
        }
    }
</script>
    


<style lang="css" scoped>
.cover {
  height: 100vh;
}
</style>