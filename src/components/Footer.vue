<template>
  <div class="footerWrapper">
    <div class="footerComponent text-white text-center">
      © Department of Social Welfare and Development. 2023 All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style scoped>
.footerWrapper {
  left: 0;
  width: 100%;
  z-index: 999;
}

.footerComponent {
  position: relative;
  height: 50px;
  background: red;
  padding: 5px 0;
  bottom: -115px;
}

@media only screen and (min-width: 414px) {
  .footerComponent {
    height: 50px;
    bottom: -395px;
  }
}

@media only screen and (min-width: 1024px) {
  .footerComponent {
    height: 30px;
    bottom: -7px;
  }
}
</style>
