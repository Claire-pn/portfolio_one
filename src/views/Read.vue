<template>
<div>
<Navbar/>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Favorite Stories</h2>
      
      <mdb-row class="d-flex justify-content-center">
        <mdb-col md="6" xl="5" class="mb-4">
          <mdb-view class="overlay rounded z-depth-2">
            <img src="@/assets/sci.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <a href="" class="green-text"></a>
            <h4 class="font-weight-bold mb-3">Sci-fi Stories</h4>
          </mdb-card-body>
        </mdb-col>
        <mdb-col md="6" xl="5" class="mb-4">
          <mdb-view class="overlay rounded z-depth-2">
            <img src="@/assets/manga.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>

          <mdb-card-body class="pb-0">
            <a href="" class="blue-text"></a>
            <h4 class="font-weight-bold mb-3">Manga Stories</h4>
          </mdb-card-body>
        </mdb-col>

        <mdb-col md="6" xl="5" class="mb-4">
          <mdb-view class="overlay rounded z-depth-2">
            <img src="@/assets/wattpad.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>

          <mdb-card-body class="pb-0">
            <a href="" class="brown-text"></a>
            <h4 class="font-weight-bold mb-3">Wattpad Stories</h4>
          </mdb-card-body>
        </mdb-col>


        <mdb-col md="6" xl="5" class="mb-4">
          <mdb-view class="overlay rounded z-depth-2" >
          
            <img src="@/assets/tion.jpg" alt="sample photo" class="img-fluid"/>
        
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <a href="" class="cyan-text"></a>
            <h4 class="font-weight-bold mb-3">Dictionaries</h4>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbCardBody,} from 'mdbvue';
  export default {
    name: 'ProjectsPage',
    components: {
      Navbar,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbView,
      mdbMask,
      mdbCardBody,

    }
  }
</script>