<template>
<div>
    <Navbar/>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">What I watch?</h2>
      <p class="grey-text text-center w-responsive mx-auto mb-5">These are my favorite types of series and movies that I am watching</p>
      <mdb-row>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
          <mdb-card collection class="z-depth-1-half">
            <div class="view zoom">
              <img src="@/assets/kdrama.png" class="img-fluid" alt=""/>
              <div class="stripe dark">
                <a>
                  <p>Korean Drama <mdb-icon icon="angle-right"></mdb-icon></p>
                </a>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
          <mdb-card collection class="z-depth-1-half">
            <div class="view zoom">
              <img src="@/assets/hollywood.jpg" class="img-fluid" alt=""/>
              <div class="stripe light">
                <a>
                  <p>Hollywood Movies <mdb-icon icon="angle-right"></mdb-icon></p>
                </a>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
          <mdb-card collection class="z-depth-1-half">
            <div class="view zoom">
              <img src="@/assets/cdrama.jpeg" class="img-fluid" alt=""/>
              <div class="stripe dark">
                <a>
                  <p>Chinese Drama<mdb-icon icon="angle-right"></mdb-icon></p>
                </a>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
          <mdb-card collection class="z-depth-1-half">
            <div class="view zoom">
              <img src="@/assets/bollywood.jpg" class="img-fluid" alt=""/>
              <div class="stripe light">
                <a>
                  <p>Bollywood Movies<mdb-icon icon="angle-right"></mdb-icon></p>
                </a>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mdbContainer, mdbRow, mdbCol, mdbCard, } from 'mdbvue';
export default {
  name: 'EcommercePage',
  components: {
    Navbar,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,

  },
  data() {
    return {
    };
  }
}
</script>
<style scoped>
    .img-fluid{
        height: 400px !important;
    }
</style>
