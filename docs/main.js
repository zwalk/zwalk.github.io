"use strict";
(self["webpackChunkv2"] = self["webpackChunkv2"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _v1_v1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1/v1.component */ 7939);
/* harmony import */ var _v2_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2/v2.component */ 6756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routerOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 0]
};
const routes = [{
  path: '',
  component: _v2_v2_component__WEBPACK_IMPORTED_MODULE_1__.V2Component
}, {
  path: 'v2',
  component: _v2_v2_component__WEBPACK_IMPORTED_MODULE_1__.V2Component
}, {
  path: 'v1',
  component: _v1_v1_component__WEBPACK_IMPORTED_MODULE_0__.V1Component
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, routerOptions), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'v2';
  }
  shouldShowV1Button() {
    return !this.router.url.includes('v1');
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _v1_v1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v1/v1.component */ 7939);
/* harmony import */ var _v2_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v2/v2.component */ 6756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _v1_v1_component__WEBPACK_IMPORTED_MODULE_2__.V1Component, _v2_v2_component__WEBPACK_IMPORTED_MODULE_3__.V2Component],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7939:
/*!************************************!*\
  !*** ./src/app/v1/v1.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V1Component: () => (/* binding */ V1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class V1Component {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    // NOT ANGULAR BEST PRACTICE - preserving original version
    //add event listener to make sure the DOM loads first.
    document.addEventListener('DOMContentLoaded', () => {
      /**
      * Below finds nav bar anchor elements and turns them black if you have scrolled to the projects page
      */
      document.addEventListener('scroll', () => {
        if (this.router.url.includes('v1')) {
          if (document.body.scrollTop + 52.5 >= (document.getElementById('projects')?.offsetTop ?? 0) || document.documentElement.scrollTop + 52.5 >= (document.getElementById('projects')?.offsetTop ?? 0)) {
            document.querySelectorAll('li a').forEach(a => {
              a.classList.add('black');
            });
            const zachLogoElem = document.getElementById('zach-logo');
            zachLogoElem.src = "assets/v1/img/zachlogo-black.png";
            document.querySelector('.nav-container')?.classList.add('white-background');
            document.querySelector('.logo-container')?.classList.add('scaled-logo');
          } else {
            document.querySelectorAll('li a').forEach(a => {
              a.classList.remove('black');
            });
            const zachLogoElem = document.getElementById('zach-logo');
            zachLogoElem.src = "assets/v1/img/zachlogo.png";
            document.querySelector('.nav-container')?.classList.remove('white-background');
            document.querySelector('.logo-container')?.classList.remove('scaled-logo');
          }
        }
      });
    });
  }
  static #_ = this.ɵfac = function V1Component_Factory(t) {
    return new (t || V1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: V1Component,
    selectors: [["app-v1"]],
    decls: 107,
    vars: 0,
    consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://fonts.googleapis.com/css?family=Lobster", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css?family=Roboto", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "/v1"], ["id", "home"], ["id", "notice-nav-container"], ["id", "display-notice"], ["routerLink", "/"], [1, "nav-container"], [1, "logo-container"], ["fragment", "home"], ["id", "zach-logo", "src", "assets/v1/img/zachlogo.png"], ["routerLink", ".", "fragment", "home", 1, "nav-anchor"], ["routerLink", ".", "fragment", "projects", 1, "nav-anchor"], ["routerLink", ".", "fragment", "contact", 1, "nav-anchor"], ["id", "name"], ["id", "projects"], [1, "all-projects-container"], [1, "single-project-container"], ["controls", ""], ["src", "assets/v1/vid/pfDemo.mov#t=0.1", "type", "video/mp4"], ["src", "assets/v1/vid/VendingMachineWebProtoDemo.mov#t=0.1", "type", "video/mp4"], ["src", "assets/v1/vid/TexasHoldEmDemo.mov#t=0.1", "type", "video/mp4"], ["href", "https://github.com/zwalk/NationalParkRegistry"], ["src", "assets/v1/vid/NationalParkWeatherDemo.mov#t=0.1", "type", "video/mp4"], ["href", "https://github.com/zwalk/NationalParkWeatherService"], ["src", "assets/v1/vid/ParksResDemo.mov#t=0.1", "type", "video/mp4"], ["src", "assets/v1/vid/VendingMachineDemo.mov#t=0.1", "type", "video/mp4"], ["href", "https://github.com/zwalk/vendingmachine"], ["id", "contact"], [1, "contact-info-and-image-container"], [1, "zach-image-container"], ["id", "zach-image", "src", "assets/v1/img/zach1.jpg"], [1, "contact-info"], ["id", "email", "href", "mailto:me@zachwalker.dev"], [1, "social-buttons"], ["href", "https://www.linkedin.com/in/zswalker/", 1, "fa", "fa-linkedin"], ["href", "https://github.com/zwalk/", 1, "fa", "fa-github"]],
    template: function V1Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0)(2, "link", 1)(3, "link", 2)(4, "link", 3)(5, "base", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Displaying version 1 created in 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Current Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav")(14, "div", 9)(15, "div", 10)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul")(19, "li")(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1")(29, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Zach Walker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I develop dynamic web applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17)(33, "div", 18)(34, "div", 19)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Podcast Festival Scheduler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "source", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is a demo of my final capstone at Tech Elevator! I am very proud of how it turned out especially on mobile. The project was very heavy on JavaScript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vending Machine Web Edition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*Currently Developing* As my knowledge is increasing, I wanted to bring my first application, the command-line vending machine, to the web! Here you see the HTML/CSS view that I have built for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18)(51, "div", 19)(52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Texas Hold Em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "source", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "This is a code kata that I was assigned. It generates poker hands for 6 players and can effectively compare them to determine the winner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "See code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19)(62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "National Park Weather Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "source", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Built using the MVC pattern. This web app gives you detail and weather information on a selected park pulled from a SQL database. My favorite part was adding an easter egg so that when you click today's weather picture, the background darkens and rains. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "See code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19)(72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "National Park Registry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "source", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Demo of parks reservation command line. My pair programming partner and I were the first to ever complete all MVP user stories and bonus user stories. The advanced search functionality was one of the fun challenges to write! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "See code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19)(82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Vending Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "video", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "source", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Your browser does not support this video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "This is a quick demo of my first application! I'm very proud of this command-line vending machine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "See code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30)(92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Zachary S. Walker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Let's talk code.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31)(97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34)(100, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "me@zachwalker.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Columbus, Ohio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "a", 37)(106, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["html[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100%;\n\tscroll-behavior: smooth;\n}\n\nbody[_ngcontent-%COMP%] {\n\tbackground-color: whitesmoke;\n\tcolor: whitesmoke;\n\tfont-family: 'Roboto', sans-serif;\n}\n\n*[_ngcontent-%COMP%] {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n\tcolor: whitesmoke;\n}\n\n#display-notice[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 1;\n\tbackground-color: whitesmoke;\n\tjustify-content: space-between;\n\tfont-size: small;\n\talign-items: center;\n\tpadding-left: .5%;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n}\n\n#display-notice[_ngcontent-%COMP%], #display-notice[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\tpadding-bottom: .25%;\n\tpadding-top: .25%;\n}\n\n#display-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tfont-size: x-small;\n\tmargin-right: 1%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 6px 14px;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n\tborder-radius: 6px;\n\tborder: none;\n\tbackground-image: linear-gradient(to right, #9a578a, #133e6d);\n\tbox-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);\n\tcolor: #DFDEDF;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\ttouch-action: manipulation;\n\tcursor: pointer;\n}\n\n#display-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n\t\tbox-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);\n\t\t\toutline: 0;\n}\n\n#display-notice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: white;\n}\n\n#notice-nav-container[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n}\n\n#home[_ngcontent-%COMP%] {\n\theight: 100vh;\n\tbackground-image: url(\"/assets/v1/img/beautiful-sky.jpg\");\n\tbackground-size: cover;\n\tposition: relative;\n}\n\nnav[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\n.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n\tfont-family: lobster;\n\tdisplay: flex;\n\ttext-decoration: none;\n\tflex-basis: 90%;\n\tlist-style: none;\n\tjustify-content: flex-end;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n\twidth: 100%;\n\toverflow: hidden;\n\tdisplay: flex;\n\tposition: fixed;\n\tz-index: 3;\n}\n\n.nav-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tflex-basis: 25%;\n\ttext-align: center;\n\tposition: relative;\n}\n\n\n\n.logo-container[_ngcontent-%COMP%] {\n\tflex-basis: 20%;\n}\n\n.nav-anchor[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: white;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tfont-size: 18px;\n}\n\n\n.nav-anchor[_ngcontent-%COMP%]:before {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 0;\n\tleft: 0;\n\theight: 2px;\n\tbackground-color: white;\n\tvisibility: hidden;\n\ttransform: scaleX(0);\n\ttransition: all 0.3s ease-in-out 0s;\n}\n\n.black[_ngcontent-%COMP%]:before {\n\tbackground-color: black;\n}\n\n.nav-anchor[_ngcontent-%COMP%]:hover:before {\n\tvisibility: visible;\n\ttransform: scaleX(1);\n}\n\n#home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\ttext-align: center;\n\twidth: 90%;\n}\n\n#name[_ngcontent-%COMP%] {\n\tfont-size: 16px;\n\tcolor: white;\n\topacity: 0.6;\n}\n\n#projects[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tbackground-color: rgb(160, 160, 160);\n\tcolor: black;\n}\n\n#projects[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n}\n\n.page-title[_ngcontent-%COMP%] {\n\tfont-family: Lobster;\n\tposition: relative;\n\ttext-align: center;\n\tbackground-color: white;\n\tcolor: black;\n}\n\nvideo[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\n.single-project-container[_ngcontent-%COMP%] {\n\tbackground-color: white;\n}\n\n.single-project-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n\n.single-project-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tfont-size: 16px;\n\tmargin: 8px;\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n}\n\n.black[_ngcontent-%COMP%] {\n\tcolor: black;\n}\n\n#contact[_ngcontent-%COMP%] {\n\tbackground-color: #333138;\n\twidth: 100%;\n\tcolor: white;\n\tpadding-top: 50px;\n}\n\n.fa-linkedin[_ngcontent-%COMP%] {\n\tbackground: #007bb5;\n\tcolor: white;\n\tborder-radius: 2px;\n\tpadding: 1px;\n\ttext-decoration: none;\n\tfont-size: 1.8em;\n}\n\n.fa-github[_ngcontent-%COMP%] {\n\tbackground: #444444;\n\tcolor: white;\n\ttext-decoration: none;\n\tborder-radius: 2px;\n\tpadding: 1px;\n}\n\n#contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\tfont-family: Lobster;\n\tcolor: rgb(209, 24, 70);\n\ttext-align: center;\n\tfont-size: 2rem;\n\tmargin-bottom: 30px;\n}\n\n#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tmargin-bottom: 30px;\n}\n\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #email[_ngcontent-%COMP%] {\n\tdisplay: block;\n\ttext-align: center;\n\tmargin-right: 5px;\n\tfont-size: 16px;\n\tcolor: white;\n\tpadding-top: 10px;\n}\n\n.social-buttons[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tmargin-right: 5px;\n\tpadding-top: 10px;\n}\n\n.contact-info-and-image-container[_ngcontent-%COMP%] {\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tpadding-bottom: 40px;\n}\n\n.zach-image-container[_ngcontent-%COMP%] {\n\tmax-width: 260px;\n\tmargin: 0 auto;\n}\n\n.white-background[_ngcontent-%COMP%] {\n\tbackground-color: white;\n}\n\n.scaled-logo[_ngcontent-%COMP%] {\n\tflex-basis: 10%;\n}\n\n.fa[_ngcontent-%COMP%] {\n\tfont-size: 30px !important;\n}\n\n\n@media only screen and (min-width: 768px) {\n\n\t#home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\t\tfont-size: 4rem;\n\t}\n\n\t#display-notice[_ngcontent-%COMP%] {\n\t\tfont-size: medium;\n\t}\n\n\t#display-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\t\tfont-size: small;\n\t}\n\n\t.nav-anchor[_ngcontent-%COMP%] {\n\t\tfont-size: 30px;\n\t}\n\n\t.all-projects-container[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-around;\n\t\tbackground-color: white;\n\t}\n\n\t.single-project-container[_ngcontent-%COMP%] {\n\t\tflex-basis: 40%;\n\t}\n\n\t.contact-info-and-image-container[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\n\t.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #email[_ngcontent-%COMP%] {\n\t\ttext-align: left;\n\t}\n\n\t.social-buttons[_ngcontent-%COMP%] {\n\t\ttext-align: left;\n\t}\n\n\t.contact-info[_ngcontent-%COMP%] {\n\t\tmargin-left: 20px;\n\t}\n\n\t.single-project-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\t\tfont-size: 2rem;\n\t\tmin-height: 76px;\n\t}\n\n\t.single-project-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\t\tfont-size: 20px;\n\t}\n\n\t#contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n\t\tfont-size: 3rem;\n\t}\n\n\t#contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\t\tfont-size: 2rem;\n\t}\n\n\t.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #email[_ngcontent-%COMP%] {\n\t\tfont-size: 25px;\n\t}\n\n\t.fa[_ngcontent-%COMP%] {\n\t\tfont-size: 35px !important;\n\t}\n\n\t.zach-image-container[_ngcontent-%COMP%] {\n\t\tmax-width: 260px;\n\t\tmargin: inherit;\n\t}\n\n}\n\n@media only screen and (min-width: 992px) {\n\t.logo-container[_ngcontent-%COMP%] {\n\t\tflex-basis: 7%;\n\t}\n\n\t.zach-image-container[_ngcontent-%COMP%] {\n\t\tmax-width: 260px;\n\t\tmargin: inherit;\n\t}\n\n\t#name[_ngcontent-%COMP%] {\n\t\tfont-size: 1.7rem;\n\t}\n\n\t.scaled-logo[_ngcontent-%COMP%] {\n\t\tflex-basis: 3%;\n\t}\n\n\t#display-notice[_ngcontent-%COMP%] {\n\t\tfont-size: large;\n\t}\n\n\t#display-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\t\tfont-size: medium;\n\t}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdjEvdjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLGlCQUFpQjtDQUNqQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsNEJBQTRCO0NBQzVCLDhCQUE4QjtDQUM5QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixvRUFBb0U7QUFDckU7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsb0VBQW9FO0NBQ3BFLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osNkRBQTZEO0NBQzdELG1JQUFtSTtDQUNuSSxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsZUFBZTtBQUNoQjs7QUFFQTtFQUNFLDZJQUE2STtHQUM1SSxVQUFVO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixNQUFNO0NBQ04sV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlEQUF5RDtDQUN6RCxzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix5QkFB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Q2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7O0VBRUMsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLDBCQUEwQjtDQUMzQjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCOztBQUVEOztBQUVBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcblx0Y29sb3I6IHdoaXRlc21va2U7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cblxuaDEge1xuXHRjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuI2Rpc3BsYXktbm90aWNlIHtcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZvbnQtc2l6ZTogc21hbGw7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogLjUlO1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuI2Rpc3BsYXktbm90aWNlLCAjZGlzcGxheS1ub3RpY2UgKiB7XG5cdHBhZGRpbmctYm90dG9tOiAuMjUlO1xuXHRwYWRkaW5nLXRvcDogLjI1JTtcbn1cblxuI2Rpc3BsYXktbm90aWNlIGJ1dHRvbiB7XG5cdGZvbnQtc2l6ZTogeC1zbWFsbDtcblx0bWFyZ2luLXJpZ2h0OiAxJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogNnB4IDE0cHg7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWE1NzhhLCAjMTMzZTZkKTtcblx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDBweCAwLjVweCAwLjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDBweCAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGNvbG9yOiAjREZERURGO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Rpc3BsYXktbm90aWNlIGJ1dHRvbjpmb2N1cyB7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDAuOHB4IDBweCAtMC4yNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMHB4IDAuNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAwcHggMHB4IDMuNXB4IHJnYmEoNTgsIDEwOCwgMjE3LCAwLjUpO1xuXHRcdFx0b3V0bGluZTogMDtcbn1cblxuI2Rpc3BsYXktbm90aWNlIGEge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbiNub3RpY2UtbmF2LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuI2hvbWUge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3YxL2ltZy9iZWF1dGlmdWwtc2t5LmpwZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5uYXYge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtY29udGFpbmVyIHVsIHtcblx0Zm9udC1mYW1pbHk6IGxvYnN0ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0ZmxleC1iYXNpczogOTAlO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDM7XG59XG5cbi5uYXYtY29udGFpbmVyIGxpIHtcblx0ZmxleC1iYXNpczogMjUlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbi5sb2dvLWNvbnRhaW5lciB7XG5cdGZsZXgtYmFzaXM6IDIwJTtcbn1cblxuLm5hdi1hbmNob3Ige1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG5cbi5uYXYtYW5jaG9yOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiAycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG5cdHRyYW5zZm9ybTogc2NhbGVYKDApO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLmJsYWNrOmJlZm9yZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2LWFuY2hvcjpob3ZlcjpiZWZvcmUge1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuXHR0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cblxuI2hvbWUgaDEge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA5MCU7XG59XG5cbiNuYW1lIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdG9wYWNpdHk6IDAuNjtcbn1cblxuI3Byb2plY3RzIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4jcHJvamVjdHMgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuXHRmb250LWZhbWlseTogTG9ic3Rlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbnZpZGVvIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciBoMyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHAge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdG1hcmdpbjogOHB4O1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5ibGFjayB7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuI2NvbnRhY3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMTM4O1xuXHR3aWR0aDogMTAwJTtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmZhLWxpbmtlZGluIHtcblx0YmFja2dyb3VuZDogIzAwN2JiNTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdHBhZGRpbmc6IDFweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDEuOGVtO1xufVxuXG4uZmEtZ2l0aHViIHtcblx0YmFja2dyb3VuZDogIzQ0NDQ0NDtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0cGFkZGluZzogMXB4O1xufVxuXG4jY29udGFjdCBoMSB7XG5cdGZvbnQtZmFtaWx5OiBMb2JzdGVyO1xuXHRjb2xvcjogcmdiKDIwOSwgMjQsIDcwKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDJyZW07XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNjb250YWN0IGg0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY29udGFjdC1pbmZvIHAsXG4jZW1haWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbnMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXHRwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNvbnRhY3QtaW5mby1hbmQtaW1hZ2UtY29udGFpbmVyIHtcblx0cGFkZGluZy1sZWZ0OiAzMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuLnphY2gtaW1hZ2UtY29udGFpbmVyIHtcblx0bWF4LXdpZHRoOiAyNjBweDtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi53aGl0ZS1iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zY2FsZWQtbG9nbyB7XG5cdGZsZXgtYmFzaXM6IDEwJTtcbn1cblxuLmZhIHtcblx0Zm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG5cdCNob21lIGgxIHtcblx0XHRmb250LXNpemU6IDRyZW07XG5cdH1cblxuXHQjZGlzcGxheS1ub3RpY2Uge1xuXHRcdGZvbnQtc2l6ZTogbWVkaXVtO1xuXHR9XG5cblx0I2Rpc3BsYXktbm90aWNlIGJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiBzbWFsbDtcblx0fVxuXG5cdC5uYXYtYW5jaG9yIHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdH1cblxuXHQuYWxsLXByb2plY3RzLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdH1cblxuXHQuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHtcblx0XHRmbGV4LWJhc2lzOiA0MCU7XG5cdH1cblxuXHQuY29udGFjdC1pbmZvLWFuZC1pbWFnZS1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQuY29udGFjdC1pbmZvIHAsXG5cdCNlbWFpbCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXG5cdC5zb2NpYWwtYnV0dG9ucyB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXG5cdC5jb250YWN0LWluZm8ge1xuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHR9XG5cblx0LnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciBoMyB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdG1pbi1oZWlnaHQ6IDc2cHg7XG5cdH1cblxuXHQuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHAge1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0fVxuXG5cdCNjb250YWN0IGgxIHtcblx0XHRmb250LXNpemU6IDNyZW07XG5cdH1cblxuXHQjY29udGFjdCBoNCB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG5cblx0LmNvbnRhY3QtaW5mbyBwLFxuXHQjZW1haWwge1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0fVxuXG5cdC5mYSB7XG5cdFx0Zm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuemFjaC1pbWFnZS1jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogMjYwcHg7XG5cdFx0bWFyZ2luOiBpbmhlcml0O1xuXHR9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuXHQubG9nby1jb250YWluZXIge1xuXHRcdGZsZXgtYmFzaXM6IDclO1xuXHR9XG5cblx0LnphY2gtaW1hZ2UtY29udGFpbmVyIHtcblx0XHRtYXgtd2lkdGg6IDI2MHB4O1xuXHRcdG1hcmdpbjogaW5oZXJpdDtcblx0fVxuXG5cdCNuYW1lIHtcblx0XHRmb250LXNpemU6IDEuN3JlbTtcblx0fVxuXG5cdC5zY2FsZWQtbG9nbyB7XG5cdFx0ZmxleC1iYXNpczogMyU7XG5cdH1cblxuXHQjZGlzcGxheS1ub3RpY2Uge1xuXHRcdGZvbnQtc2l6ZTogbGFyZ2U7XG5cdH1cblxuXHQjZGlzcGxheS1ub3RpY2UgYnV0dG9uIHtcblx0XHRmb250LXNpemU6IG1lZGl1bTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 6756:
/*!************************************!*\
  !*** ./src/app/v2/v2.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V2Component: () => (/* binding */ V2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class V2Component {
  static #_ = this.ɵfac = function V2Component_Factory(t) {
    return new (t || V2Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: V2Component,
    selectors: [["app-v2"]],
    decls: 11,
    vars: 0,
    consts: [["id", "nav"], ["id", "info"], ["routerLink", "/v1"], ["routerLink", "/v1", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["src", "assets/v2/img/underconstruction.png"]],
    template: function V2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ZachWalker.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Version 2 - Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click the 'v1' button to check out the version I made while I was at Tech Elevator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2)(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "v1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["#info[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tz-index: 1;\n}\n\nbutton[_ngcontent-%COMP%] {\n\tfont-size: medium;\n\twidth: 5%;\n\tcursor: pointer;\n\tz-index: 1;\n\tfont-size: medium;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 6px 14px;\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n\tborder-radius: 6px;\n\tborder: none;\n\tbackground-color: #f3b509;\n\tbox-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);\n\tcolor: #DFDEDF;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\ttouch-action: manipulation;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n\tbox-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);\n\toutline: 0;\n}\n\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\n#nav[_ngcontent-%COMP%] {\n\tfont-size: x-large;\n\tfont-family: monospace;\n\tbackground-color: #242424;\n\tcolor: greenyellow;\n\tz-index: 1;\n\tposition: relative;\n}\n\nimg[_ngcontent-%COMP%] {\n\twidth: 50%;\n\tmargin-top: -10%;\n\tz-index: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n\tmargin-top: 2%;\n\tz-index: 1;\n}\nh4[_ngcontent-%COMP%] {\n\tz-index: 1;\n\tmargin-top: 1%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdjIvdjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsZUFBZTtDQUNmLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG9FQUFvRTtDQUNwRSxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixtSUFBbUk7Q0FDbkksY0FBYztDQUNkLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsNklBQTZJO0NBQzdJLFVBQVU7QUFDWDs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztDQUNkLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIiNpbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ei1pbmRleDogMTtcbn1cblxuYnV0dG9uIHtcblx0Zm9udC1zaXplOiBtZWRpdW07XG5cdHdpZHRoOiA1JTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR6LWluZGV4OiAxO1xuXHRmb250LXNpemU6IG1lZGl1bTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogNnB4IDE0cHg7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzYjUwOTtcblx0Ym94LXNoYWRvdzogMHB4IDAuNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDBweCAwLjVweCAwLjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIDBweCAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGNvbG9yOiAjREZERURGO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAwLjhweCAwcHggLTAuMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMHB4IDBweCAzLjVweCByZ2JhKDU4LCAxMDgsIDIxNywgMC41KTtcblx0b3V0bGluZTogMDtcbn1cblxuYnV0dG9uIGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuI25hdiB7XG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcblx0Y29sb3I6IGdyZWVueWVsbG93O1xuXHR6LWluZGV4OiAxO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmltZyB7XG5cdHdpZHRoOiA1MCU7XG5cdG1hcmdpbi10b3A6IC0xMCU7XG5cdHotaW5kZXg6IDA7XG59XG5cbmgxIHtcblx0bWFyZ2luLXRvcDogMiU7XG5cdHotaW5kZXg6IDE7XG59XG5oNCB7XG5cdHotaW5kZXg6IDE7XG5cdG1hcmdpbi10b3A6IDElO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map