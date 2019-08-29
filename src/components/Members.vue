<template>
  <div>
    <div class="contact-holder fade-component">
      <!-- headline START -->
      <h1>Team members</h1>
      <!-- headline END -->

      <h2 class="divider-line fade-component">
        <span>현재 활동 중인 구성원</span>
      </h2>
      <!-- content START -->

      <div class="content">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter1" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter1" @click="filter1 = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-table
          id="active-table"
          outlined
          small
          striped
          hover
          :items="active_member"
          :current-page="currentPage1"
          :per-page="perPage1"
          :filter="filter1"
          @filtered="onFiltered"
          :fields="fields"
          :sort-by.sync="sortBy1"
          :sort-desc.sync="sortDesc1"
        ></b-table>
      </div>
      <!-- content END -->

      <h2 class="divider-line fade-component">
        <span>정회원 목록</span>
      </h2>
      <!-- content START -->
      <div class="content">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter2" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter2" @click="filter2 = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-table
          id="inactive-table"
          outlined
          small
          striped
          hover
          :items="inactive_member"
          :current-page="currentPage2"
          :per-page="perPage2"
          :filter="filter2"
          @filtered="onFiltered"
          :fields="fields"
          :sort-by.sync="sortBy2"
          :sort-desc.sync="sortDesc2"
        ></b-table>
      </div>
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
import members from "../../static/members.json";
let active_member = [];
let inactive_member = [];
for (const member of members) {
  if (member.status == 0) {
    delete member.status;
    inactive_member.push(member);
  } else {
    delete member.status;
    active_member.push(member);
  }
}
export default {
  name: "Contact",
  data() {
    return {
      sortBy2: "m-id",
      sortDesc2: false,
      sortBy1: "std-id",
      sortDesc1: false,
      inactive_member: inactive_member,
      active_member: active_member,
      totalRows1: 1,
      currentPage1: 1,
      perPage1: 500,
      filter1: null,
      totalRows2: 1,
      currentPage2: 1,
      perPage2: 500,
      filter2: null,
      fields: [
        {
          key: "m-id",
          label: "정회원 번호",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        {
          key: "name",
          label: "이름",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "std-id",
          label: "학번",
          class: "text-center",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "etc", label: "비고", class: "text-center" }
      ]
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows1 = this.active_member.length;
    this.totalRows2 = this.inactive_member.length;
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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
.contact-holder {
  .content {
    position: relative;
    display: block;
    overflow: hidden;
    width: 60%;
    margin: auto;
    padding-bottom: 20px;
    padding-left: 60px;
    @include maxquery(640px) {
      width: 100%;
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