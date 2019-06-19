<p align="center">
    <a href="https://github.com/GNUp/PLUS-homepage">
        <img src="https://img.shields.io/github/stars/GNUp/PLUS-homepage.svg?style=social" alt="GitHub stars">
    </a>
</p>

# PLUS homepage Template

A template made with [Vue.js](https://vuejs.org/) & [GSAP](https://greensock.com/).

## Installation
``` bash
# CD into your folder
$ cd path/to/your/folder

# clone this project
$ git clone https://github.com/GNUp/PLUS-homepage.git
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start
```

## Before Deploy
1. Change the information of the president in `/static/contact.json`

2. Fill the member list in `/static/members.json`

   - `status` field indicates whether the member is now active. If then, set `1`.

3. Fill the history in `/static/history.json`

4. Add recent activities by adding division element in `/src/components/Works.vue`

   - ```html
     <div
             class="work"
             data-image="#777777"
             @mouseenter="over($event)"
             @mouseleave="leave($event)"
             :key="0"
           >
             <img class="logo" src="/static/plus-logo.png" alt="PLUS LOGO">
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
     ```

   - You can change `data-image` to other colors

   - You can add another paragraph in `content division`

## No license No credit but do not distribute
