<template>
  <div>
    <div class="works-common-holder fade-component">
      <!-- headline START -->
      <h1>Works</h1>
      <!-- headline END -->
    </div>

    <h2 class="divider-line fade-component">
      <span>Recent activity</span>
    </h2>


    <!-- Work holder START -->
    <div class="works-holder fade-component">

      <!-- Work START -->
      <div
        class="work"
        data-image="#f75f57"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/codegate.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>CODEGATE 2020 University
          </p>
          <p>
            <strong>팀명</strong>
            <br>PLUS
          </p>
          <p>
            <strong>순위</strong>
            <br>2
          </p>
          <p class="copyright">
            <span>2020.9.3</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#f75f57"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon28.jpg" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Finals 2020
          </p>
          <p>
            <strong>팀명</strong>
            <br>koreanbadass
          </p>
          <p>
            <strong>순위</strong>
            <br>12
          </p>
          <p class="copyright">
            <span>2020.8.7</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#f75f57"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon28.jpg" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Qualifier 2020
          </p>
          <p>
            <strong>팀명</strong>
            <br>koreanbadass
          </p>
          <p>
            <strong>순위</strong>
            <br>7
          </p>
          <p class="copyright">
            <span>2020.5.16</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#f75f57"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon27.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Finals 2019
          </p>
          <p>
            <strong>팀명</strong>
            <br>seoulplusbadass
          </p>
          <p>
            <strong>순위</strong>
            <br>9위
          </p>
          <p class="copyright">
            <span>2019.8.9</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#552a27"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/gctf.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>GOOGLE CTF 2019 QUAL
          </p>
          <p>
            <strong>팀명</strong>
            <br>LeaveCat-PLUS
          </p>
          <p>
            <strong>순위</strong>
            <br>4위
          </p>
          <p class="copyright">
            <span>2019.6.22</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#799757"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/0ctf.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>0CTF/TCTF 2019 Finals
          </p>
          <p>
            <strong>팀명</strong>
            <br>Leavecat-PLUS
          </p>
          <p>
            <strong>순위</strong>
            <br>4위
          </p>
          <p class="copyright">
            <span>2019.6.9</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#775757"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon27.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Qualifier 2019
          </p>
          <p>
            <strong>팀명</strong>
            <br>seoulplusbadass
          </p>
          <p>
            <strong>순위</strong>
            <br>3위
          </p>
          <p class="copyright">
            <span>2019.5.12</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#777777"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/pctf.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>PCTF2019
          </p>
          <p>
            <strong>팀명</strong>
            <br>seoulplusbadass
          </p>
          <p>
            <strong>순위</strong>
            <br>3위
          </p>
          <p class="copyright">
            <span>2019.4.20</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#177177"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon26.jpg" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Finals 2018
          </p>
          <p>
            <strong>팀명</strong>
            <br>KaisHack+PLUS+GoN
          </p>
          <p>
            <strong>순위</strong>
            <br>21위
          </p>
          <p class="copyright">
            <span>2018.8.13</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#177177"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon26.jpg" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Qualifier 2018
          </p>
          <p>
            <strong>팀명</strong>
            <br>KaisHack+PLUS+GoN
          </p>
          <p>
            <strong>순위</strong>
            <br>7위
          </p>
          <p class="copyright">
            <span>2018.5.14</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#17f1f7"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/pctf.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>PlaidCTF 2018
          </p>
          <p>
            <strong>팀명</strong>
            <br>KaisHack PLUS GoN
          </p>
          <p>
            <strong>순위</strong>
            <br>4위
          </p>
          <p class="copyright">
            <span>2018.5.7</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#ef71e7"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF 2017
          </p>
          <p>
            <strong>팀명</strong>
            <br>hacking4danbi
          </p>
          <p>
            <strong>순위</strong>
            <br>11위
          </p>
          <p class="copyright">
            <span>2017.7.30</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#ef5157"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEF CON CTF Qualifier 2017
          </p>
          <p>
            <strong>팀명</strong>
            <br>hacking4danbi
          </p>
          <p>
            <strong>순위</strong>
            <br>6위
          </p>
          <p class="copyright">
            <span>2017.5.1</span>
          </p>
        </div>
      </div>
      <!-- Work END -->
      <!-- Work START -->
      <div
        class="work"
        data-image="#177177"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/codegate.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>CODEGATE2016 University
          </p>
          <p>
            <strong>팀명</strong>
            <br>PLUS
          </p>
          <p>
            <strong>순위</strong>
            <br>3위
          </p>
          <p class="copyright">
            <span>2016.6</span>
          </p>
        </div>
      </div>
      <!-- Work END -->

      <!-- Work START -->
      <div
        class="work"
        data-image="#fefe77"
        @mouseenter="over($event)"
        @mouseleave="leave($event)"
        :key="0"
      >
        <img class="logo" src="/static/defcon.png" alt="PLUS LOGO">
        <div class="logo-bg-holder">
          <div
            class="logo-bg work-oval-big rotating-fast"
            style="background-color: #FFF !important"
          ></div>
          <div
            class="logo-bg work-oval-small rotating-slow"
            style="background-color: #FFF !important"
          ></div>
          <div class="logo-bg work-circle" style="background-color: #FFF !important"></div>
        </div>
        <div class="content">
          <p>
            <strong>대회명</strong>
            <br>DEFCON CTF FINAL 2011
          </p>
          <p>
            <strong>팀명</strong>
            <br>PLUS
          </p>
          <p>
            <strong>순위</strong>
            <br>8위
          </p>
          <p class="copyright">
            <span>2011.8</span>
          </p>
        </div>
      </div>
      <!-- Work END -->
    </div>
    <!-- Work holder END -->

    <h2 class="divider-line fade-component">
      <span>PLUS가 걸어온 길</span>
    </h2>
    <div class="fade-component">
      <!-- content START -->
      <b-table striped hover :items="history"></b-table>
      <!-- content END -->
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
import history from "../../static/history.json";

export default {
  name: "Works",
  data() {
    return {
      controller: new ScrollMagic.Controller(),
      timeline: new TimelineMax({ paused: true }),
      history: history.reverse()
    };
  },
  mounted() {},
  methods: {
    animateWork: function(thisEvent, action) {
      console.log(thisEvent);
      // common
      // init variables
      this.timeline.set(thisEvent.querySelector(".work-circle"), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      this.timeline.set(thisEvent.querySelector(".work-oval-small"), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      this.timeline.set(thisEvent.querySelector(".work-oval-big"), {
        autoAlpha: 0,
        scale: 0,
        z: 0.01
      });
      // animate
      this.timeline.fromTo(
        thisEvent.querySelector(".work-circle"),
        1.25,
        { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" },
        {
          force3D: true,
          autoAlpha: 1,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut.config(1.25)
        }
      );
      this.timeline.fromTo(
        thisEvent.querySelector(".work-oval-small"),
        1.25,
        { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" },
        {
          force3D: true,
          autoAlpha: 0.25,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut.config(1.25)
        },
        "-=0.75"
      );
      this.timeline.fromTo(
        thisEvent.querySelector(".work-oval-big"),
        1.25,
        { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" },
        {
          force3D: true,
          autoAlpha: 0.45,
          scale: 1,
          transformOrigin: "50% 50%",
          ease: Back.easeOut.config(1.25)
        },
        "-=0.75"
      );
      this.timeline.to(
        thisEvent.querySelector(".work-oval-big"),
        0,
        { className: "+=rotating-fast", ease: Expo.easeOut },
        "+=0.35"
      );
      this.timeline.to(
        thisEvent.querySelector(".work-oval-small"),
        0,
        { className: "+=rotating-slow", ease: Expo.easeOut },
        "+=0.35"
      );

      if (action === "play") {
        this.timeline.play();
      }

      if (action === "reverse") {
        this.timeline.reverse();
      }
    },
    over: function(event) {
      let dataImage = event.target.dataset.image;
      $("body").attr("style", "background-color: " + dataImage);
      // this.animateWork(event.target, 'play');
    },
    leave: function(event) {
      $("body").attr("style", "background-color: #FFFFFF");
      // this.animateWork(event.target, 'reverse');
    }
  }
};
</script>

<style lang="scss" scoped>
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
// infos
.works-common-holder {
  .content {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    width: calc(100vw - 120px);
    max-width: 760px;
    padding-bottom: 20px;
    padding-left: 60px;
    @include maxquery(640px) {
      width: calc(100% - 32px);
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
// works
.works-holder {
  position: relative;
  display: table;
  overflow: hidden;
  .work {
    position: relative;
    display: table;
    overflow: visible;
    width: 33.3333%;
    height: auto;
    min-height: 400px;
    padding: 16px;
    float: left;
    @include maxquery(1000px) {
      width: 50%;
    }
    @include maxquery(640px) {
      width: 100%;
    }
    .content {
      position: absolute;
      display: block;
      width: 100%;
      height: auto;
      font-size: 14px;
      padding: 0px;
      margin: 0px;
      line-height: 18px;
      top: 50%;
      left: -16px;
      transform: translate(0%, -50%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);
      p {
        font-size: 16px;
        line-height: 20px;
        padding: 0px;
        margin: 0px;
        padding-bottom: 16px;
        span {
          font-size: 10px;
        }
        &.copyright {
          line-height: 14px;
        }
      }
      a {
        color: #363636;
        text-decoration: none;
      }
    }
    img {
      &.logo {
        max-height: 60%;
        max-width: 60%;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: -1;
        transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);
        opacity: 1;
        visibility: visible;
      }
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
        box-shadow: 0 0 36px rgba(0, 0, 0, 0.15), 0 0 36px rgba(0, 0, 0, 0.05);
        transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);
        &.work-oval-big {
          width: 400px;
          height: 360px;
          background: #a5d6a7;
          transform: translate(-50%, -50%);
          z-index: -3;
          opacity: 0;
          visibility: hidden;
        }
        &.work-oval-small {
          width: 300px;
          height: 340px;
          background: #a5d6a7;
          transform: translate(-50%, -50%);
          z-index: -2;
          opacity: 0;
          visibility: hidden;
        }
        &.work-circle {
          width: 260px;
          height: 260px;
          background: #a5d6a7;
          transform: translate(-50%, -50%);
          z-index: -1;
          opacity: 0;
          visibility: hidden;
        }
      }
    }
    &:hover {
      .content {
        left: 0px;
        opacity: 1;
        visibility: visible;
      }
      img {
        &.logo {
          opacity: 0;
          visibility: hidden;
        }
      }
      .logo-bg-holder {
        .logo-bg {
          &.work-oval-big {
            transform: scale(1) translate(-50%, -50%);
            opacity: 0.25;
            visibility: visible;
          }
          &.work-oval-small {
            transform: scale(1) translate(-50%, -50%);
            opacity: 0.45;
            visibility: visible;
          }
          &.work-circle {
            transform: scale(1) translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
          }
        }
      }
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
