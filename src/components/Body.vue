<template>
  <section class="protfolio">
    <center>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="(org, i) in cardData" :key="i">
            <div class="card">
              <div class="card-head">
                <img alt="Vue logo" class="rounded-circle img-custome" :src="org.src">
                <h2>{{org.name}}</h2>
              </div>
              <hr>
              <div class="card-body">
                <p>{{org.description}}</p>
                <!-- <button type="button" class="btn btn-outline-secondary">More</button> -->
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </center>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cardData: [
        {
          src: require("@/assets/sms.png"),
          name: "Sisters of Mary School",
          description:
            "5 years staying in this organization is very worth it.Being one of the luckiest scholar in my high school makes me learn a lot"
        },
        {
          src: require("@/assets/pn.png"),
          name: "Passerelles Numeriques",
          description:
            "Currently a scholar of this organization in my college years. New learnings and experiences together with my co-scholars."
        },
        {
          src: require("@/assets/usc.jpg"),
          name: "University of San Carlos",
          description:
            "Currently studying in this school for 2.5 years.New environment for the new learnings!"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.protfolio {
  /* background-color: #34345238; */
  padding-top: 10%;
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
.card-head{
   background-color: #34345238;
}
</style>-->
