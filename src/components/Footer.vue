<template>
  <div>
    <div class="footer fade-component" v-if="$route.name !== 'Home'">
      <h2 class="divider">
        <span></span>
      </h2>
      <div class="footer-inner">
        <div class="copyright">
          &copy; With Vue.js & GSAP /
          <a
            href="https://github.com/GNUp/PLUS-homepage"
            target="_blank"
          >repository</a>
        </div>
        <div class="extra">
          <ul>
            <li>
              <router-link :to="'/about'" exact>
                About
                <span>.</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'/works'" exact>
                Works
                <span>.</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'/members'" exact>
                Members
                <span>.</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="mailto:posgnu@gmail.com" class="green">
                <strong>posgnu@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: block;
  width: 100%;
  .footer-inner {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding: 32px 0;
    overflow: hidden;
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        display: inline-block;
        padding-right: 0.75rem;
        a {
          font-family: "Cardo", serif;
          font-size: 14px;
          font-weight: 300;
          &.green {
            color: #a5d6a7 !important;
          }
        }
      }
    }
  }
}
</style>
