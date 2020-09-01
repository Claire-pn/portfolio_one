<template>
  <div>
    <HelloWorld/>
    <Body/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

import Body from "@/components/Body.vue";

export default {
  components: {
    HelloWorld,
    Body
  }
};
</script>
