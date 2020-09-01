<template>
  <section class-="view">
    <div >
      <Navbar/>
      <center>
   
      <mdb-container >
        <h2 class="h1-responsive font-weight-bold text-center my-5">About Me</h2>
        <p class="text-center w-responsive mx-auto mb-5">Short details about me!</p>
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="@/assets/cl.jpg" alt="Sample image">
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="green-text">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="desktop" class="pr-2"/>Me
              </h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>Information Technology</strong>
            </h3>
            <p>Currently studying for the Certificate of Computer Technology in the University of San Carlos.Being an I.T. student is not easy yet it's very fun!</p>
          </mdb-col>
        </mdb-row>
        <hr class="my-5">
        <mdb-row>
          <mdb-col lg="7">
            <a class="pink-text">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="home" class="pr-2"/>Hometown
              </h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>Taga Oroquieta Ko!</strong>
            </h3>
            <p>The City of Good Life! I am very proud to have Oroquieta City to be my HOMETOWN! Oroquieta city is the capital city of Misamis Occidental.</p>
          </mdb-col>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="@/assets/town.jpg" alt="Sample image">
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
        </mdb-row>
        <hr class="my-5">
        <mdb-row>
          <mdb-col lg="5">
            <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
              <img class="img-fluid" src="@/assets/reporter.jpg" alt="Sample image">
              <a>
                <mdb-mask overlay="white-slight" waves/>
              </a>
            </mdb-view>
          </mdb-col>
          <mdb-col lg="7">
            <a class="indigo-text">
              <h6 class="font-weight-bold mb-3">
                <mdb-icon icon="suitcase" class="pr-2"/>Dream Job
              </h6>
            </a>
            <h3 class="font-weight-bold mb-3 p-0">
              <strong>Journalist</strong>
            </h3>
            <p>Though I am an IT student but I dream to be one of the journalist/reporter someday. This will always be my ever dream since highschool.</p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      </center>
    </div>
  </section>
</template>


 <script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMask,
  mdbIcon,
  mdbView
} from "mdbvue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "BlogPage",
  components: {
    Navbar,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbIcon,
    mdbView
  }
};
</script>

<style>
.img-fluid {
  height: 335px;
}
.view{
  background-color: #34345238;


}
</style>
