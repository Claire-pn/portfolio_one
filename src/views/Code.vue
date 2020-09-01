<template>
<div>
  <Navbar/>
  <section class="protfolio">
    <center>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="(org, i) in cardData" :key="i">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" :src="org.src">
                <hr>
                <h3>{{org.name}}</h3>
              </div>
              <hr>
              <span v-if="org.show" @click="shows(i, false)"><i class="fas fa-times"></i></span>
              <span v-if="!org.show" @click="shows(i, true)"><i class="fas fa-angle-down"></i></span>
              <div v-if="org.show" class="card-body">
                <p>{{org.description}}</p> 
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </center>
  </section>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return { 
      cardData: [
        {
          show: false,
          src: require("@/assets/angular.png"),
          name: "Angular",
          description:
            "5 years staying in this organization is very worth it.Being one of the luckiest scholar in my high school makes me learn a lot"
        },
        {
          show: false,
          src: require("@/assets/vue.png"),
          name: "Vue",
          description:
            "Currently a scholar of this organization in my college years. New learnings and experiences together with my co-scholars."
        },
        {
          show: false,
          src: require("@/assets/react.png"),
          name: "React",
          description:
            "Currently studying in this school for 2.5 years.New environment for the new learnings!"
        }
      ]
    };
  },
  components:{
    Navbar
  },
  methods:{
    shows(i, show){
      this.cardData[i].show = show
      console.log(show)
    }
  }
};
</script>

<style lang="css" scoped>
.protfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}
.img-custome {
  width: 140px;
  height: 140px;
  margin-top: 15px;
}
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
button{
  width:30%;
  border-radius: 7px;
}
card{
  border-radius: 20px;
}
</style>
