<template>
  <div>
    <div class="about-holder fade-component">
      <!-- headline START -->
      <h1>About us</h1>
      <!-- headline END -->

      <!-- content START -->
      <h2 class="divider-line fade-component">
        <span>포항공과대학교 동아리 PLUS</span>
      </h2>
      <div class="content">
        <p>
          PLUS는 Postech Laboratory for Unix Security의 약자로, UNIX System 보안을 연구하는 포항공대 연구회라는 의미입니다.사실 연구대상은 Unix System 뿐 아니라 Windows, Linux 등 일반적인 Network Client/Server를 포괄합니다.
          동아리 설립 당시에는 Network Client/Server의 대부분이 UNIX였기 때문에 이런 이름이 붙여졌습니다.
        </p>
        <p>
          가 동아리로 변경된 이후 매년 경쟁을 통해 4~5명 정도의 회원을 선발하고 있습니다.
          매년 1학기에 지원자들을 수습회원으로 선발한 뒤, 내부 문제 풀이 사이트에서의 성과와 면접을 바탕으로 활동인원을 선발합니다.
          선발과정에서는 해킹/보안에 관한 열정과 스스로 공부할 수 있는 능력을 평가합니다.
          이렇게 뽑힌 신입회원들은 1년여간 학기중, 방학중 교육을 통해 다양한 분야에 대한 기본기를 갖추고, 이후 자기주도적으로 관심 분야를 집중적으로 공부합니다.
        </p>
        <p>
          한글 공식 명칭 :
          <b>플러스</b>
        </p>
        <p>
          영문 공식 명칭 :
          <b>PLUS</b>
        </p>
        <br>
        <p>PLUS is an undergraduate cyber-security study club at Pohang University of Science and Technology (POSTECH). PLUS has competed in several domestic and international CTFs since 1992.</p>
        <p>
          In Korean :
          <b>플러스</b>
        </p>
        <p>
          In English :
          <b>PLUS</b>
        </p>
      </div>

      <h2 class="divider-line fade-component">
        <span>설립 년도와 취지</span>
      </h2>
      <div class="content">
        <p>1992년 9월 교내 네트웍의 관리를 위해 탄생했습니다. 그 시절의 포항공대는 네트웍자원에서 선구자적인 위치를 띄고 있었으며, 이런 환경에서 PLUS는 UNIX와 네트웍 보안을 연구하는 모임이었습니다. 2000년도 PLUS는 좀더 자율적인 연구 환경을 위해 동아리로 거듭나서 현재까지 이어져 오고 있습니다.</p>
      </div>

      <h2 class="divider-line fade-component">
        <span>활동 내용</span>
      </h2>
      <div class="content">
        <ul>
          <li v-for="item in activities">{{ item }}</li>
        </ul>
      </div>
      <div class="content"></div>

      <h2 class="divider-line fade-component">
        <span>연락처</span>
      </h2>
      <div class="content">
        <ul>
          <li v-for="item in contact">{{ item }}</li>
        </ul>
      </div>

      <h2 class="divider-line fade-component">
        <span>PLUS 상징</span>
      </h2>
      <div class="content">
        <img src="/static/owl-logo.png">
      </div>

      <!-- content END -->

      <h2 class="divider-line fade-component">
        <span>more</span>
      </h2>

      <!-- social START -->
      <div class="social">
        <ul>
          <li>
            <a href="https://wiki.plus.or.kr" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-oval-big rotating-fast"></div>
              </div>
              <span>wiki</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/plus.postech/" target="_blank">
              <div class="logo-bg-holder">
                <div class="logo-bg social-circle"></div>
              </div>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="http://admission.postech.ac.kr/bbsLink.do?f=sub6-1_read&boardId=GSKO_POS_YEAR&BOARDSEQ=328&iNowPage=2"
              target="_blank"
            >
              <div class="logo-bg-holder">
                <div class="logo-bg social-oval-small rotating-slow"></div>
              </div>
              <span>info</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- social END -->
    </div>
  </div>
</template>

<script>
// gsap
import { TweenMax } from "gsap";
// scrollmagic
import ScrollMagic from "scrollmagic";
// jquery
import $ from "jquery";
import activities from "../../static/activities.json";
import contact from "../../static/contact.json";
export default {
  name: "About",
  data() {
    return { activities: activities, contact: contact };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../style/style";
// mixins - media query
@mixin maxquery($width, $ratio: false) {
  @if $ratio {
    @media only screen and (max-width: $width) and (min--moz-device-pixel-ratio: $ratio),
      only screen and (max-width: $width) and (-webkit-min-device-pixel-ratio: $ratio),
      only screen and (max-width: $width) and (min-device-pixel-ratio: $ratio) {
      @content;
    }
  } @else {
    @media only screen and (max-width: $width) {
      @content;
    }
  }
}
.about-holder {
  // social
  .social {
    ul {
      position: relative;
      overflow: hidden;
      list-style-type: none;
      text-align: center;
      float: none;
      padding: 0;
      width: calc(100% + 1.5rem);
      @include maxquery(640px) {
        width: 100%;
      }
      li {
        position: relative;
        display: inline-block;
        float: none;
        width: 114px;
        height: 114px;
        text-align: center;
        margin: 16px 1.5rem;
        @include maxquery(640px) {
          width: 100%;
          margin: 16px 0;
        }
        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 1;
          transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
          img {
            position: absolute;
            display: block;
            top: 50%;
            transform: translateY(-50%);
          }
          &:hover {
            opacity: 1;
          }
          span {
            position: absolute;
            display: block;
            width: auto;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            line-height: 114px;
            text-align: center;
            font-family: "Cardo", serif;
          }
          .logo-bg-holder {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            .logo-bg {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              -moz-border-radius: 50%;
              -webkit-border-radius: 50%;
              border-radius: 50%;
              top: 50%;
              left: 50%;
              box-shadow: 0 0 36px rgba(0, 0, 0, 0.15),
                0 0 36px rgba(0, 0, 0, 0.005);
              transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);
              &.social-oval-big {
                width: 72px;
                height: 64px;
                background: $big;
                transform: translate(-50%, -50%);
                z-index: -3;
                opacity: 0.25;
              }
              &.social-oval-small {
                width: 54px;
                height: 62px;
                background: $small;
                transform: translate(-50%, -50%);
                z-index: -2;
                opacity: 0.45;
              }
              &.social-circle {
                width: 94px;
                height: 94px;
                background: $circle;
                transform: translate(-50%, -50%);
                z-index: -1;
              }
            }
          }
        }
        &:nth-child(1) {
          width: 72px;
        }
        &:nth-child(3) {
          width: 92px;
        }
      }
    }
  }
  .content {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    width: calc(100vw - 100px);
    max-width: 960px;
    padding-bottom: 20px;
    padding-left: 60px;
    @include maxquery(640px) {
      width: calc(100% - 32px);
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: translate(-50%, -50%) rotate(0deg);
    -moz-transform: translate(-50%, -50%) rotate(0deg);
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -ms-transform: translate(-50%, -50%) rotate(360deg);
    -moz-transform: translate(-50%, -50%) rotate(360deg);
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    -o-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
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
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    -o-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes rotating-inverse {
  from {
    -ms-transform: translate(-50%, -50%) rotate(0deg);
    -moz-transform: translate(-50%, -50%) rotate(0deg);
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    -o-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    -ms-transform: translate(-50%, -50%) rotate(-360deg);
    -moz-transform: translate(-50%, -50%) rotate(-360deg);
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    -o-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
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