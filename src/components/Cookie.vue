<template>
  <div>
    <div class="cookies" v-if="cookies == false">
      Welcome to the homepage of
      <span class="green">PLUS</span>, POSTECH hacking team.
      <br>Powered by
      GNu
      <br>
      <span class="link" @click="allowCookies()">OK, CLOSE</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cookie",
  data() {
    return {
      cookies: false
    };
  },

  methods: {
    allowCookies: function() {
      this.cookies = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/style";

.cookies {
  position: fixed;
  display: block;
  width: 100%;
  width: calc(100% - 64px);
  // max-width: 1360px;
  height: auto;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  font-size: 12px;
  line-height: 22px;
  z-index: 1000;
  background-color: #c2c2c2;
  padding: 16px;
  span {
    &.green {
      font-weight: 700;
    }
    &.link {
      cursor: pointer;
      text-transform: uppercase;
    }
  }
  a {
    cursor: pointer;
    text-transform: uppercase;
  }
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating-fast {
  -webkit-animation: rotating 12s linear infinite;
  -moz-animation: rotating 12s linear infinite;
  -ms-animation: rotating 12s linear infinite;
  -o-animation: rotating 12s linear infinite;
  animation: rotating 12s linear infinite;
}
@-webkit-keyframes rotating-inverse /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes rotating-inverse {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.rotating-slow {
  -webkit-animation: rotating-inverse 16s linear infinite;
  -moz-animation: rotating-inverse 16s linear infinite;
  -ms-animation: rotating-inverse 16s linear infinite;
  -o-animation: rotating-inverse 16s linear infinite;
  animation: rotating-inverse 16s linear infinite;
}
</style>