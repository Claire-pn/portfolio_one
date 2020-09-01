<template>
  <mdb-navbar expand="large" dark color="#42a5f5 blue lighten-1">
    <mdb-navbar-brand href="#">My Profile</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" @click="viewProfile" active>Home</mdb-nav-item>
        <mdb-nav-item href="#" @click="viewResume" active >Resume</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="aqua-gradient" slot="toggle" waves-fixed>Hobbies</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item @click="viewRead"> Reading</mdb-dropdown-item>
            <mdb-dropdown-item @click="viewCode">Coding</mdb-dropdown-item>
            <mdb-dropdown-item @click="viewWatch">Watching</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from "mdbvue";
export default {
  name: "HelloWorld",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  },
  
    methods: {
          viewProfile(){
            this.$router.push('/')
          },
            viewResume(){
            this.$router.push('/Resume')
          },
             viewRead(){
            this.$router.push('/Read')
          },
             viewCode(){
            this.$router.push('/Code')
          },
             viewWatch(){
            this.$router.push('/Watch')
          }
    }
};

</script>