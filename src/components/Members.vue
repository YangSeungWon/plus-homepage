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
        ></b-table>

        <b-pagination
          v-model="currentPage1"
          :total-rows="totalRows1"
          :per-page="perPage1"
          class="my-0"
          aria-controls="active-table"
        >
          <span class="text-success" slot="first-text">First</span>
          <span class="text-danger" slot="prev-text">Prev</span>
          <span class="text-warning" slot="next-text">Next</span>
          <span class="text-info" slot="last-text">Last</span>
          <div slot="ellipsis-text">
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </div>
          <span slot="page" slot-scope="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </span>
        </b-pagination>
      </div>
      <!-- content END -->

      <h2 class="divider-line fade-component">
        <span>전체 구성원</span>
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
        ></b-table>

        <b-pagination
          v-model="currentPage2"
          :total-rows="totalRows2"
          :per-page="perPage2"
          class="my-0"
          aria-controls="inactive-table"
        >
          <span class="text-success" slot="first-text">First</span>
          <span class="text-danger" slot="prev-text">Prev</span>
          <span class="text-warning" slot="next-text">Next</span>
          <span class="text-info" slot="last-text">Last</span>
          <div slot="ellipsis-text">
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </div>
          <span slot="page" slot-scope="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <i v-else>{{ page }}</i>
          </span>
        </b-pagination>
      </div>
      <!-- content END -->
    </div>
  </div>
</template>

<script>
import members from "../../public/static/members.json";
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
      inactive_member: inactive_member,
      active_member: active_member,
      totalRows1: 1,
      currentPage1: 1,
      perPage1: 10,
      filter1: null,
      totalRows2: 1,
      currentPage2: 1,
      perPage2: 10,
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
  // social
  .social {
    ul {
      position: relative;
      overflow: hidden;
      list-style-type: none;
      text-align: center;
      float: none;
      padding: 0;
      width: 100%;
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
                width: 54px;
                height: 62px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -3;
                opacity: 0.25;
              }
              &.social-oval-small {
                width: 72px;
                height: 64px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -2;
                opacity: 0.45;
              }
              &.social-circle {
                width: 94px;
                height: 94px;
                background: #a5d6a7;
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