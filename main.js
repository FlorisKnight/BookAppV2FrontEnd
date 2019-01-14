(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-book-page/add-book-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-book-page/add-book-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib29rLXBhZ2UvYWRkLWJvb2stcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-book-page/add-book-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-book-page/add-book-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <form  (ngSubmit)=\"onSubmit()\">\n  <h2 class=\"text-center\">Add Book</h2>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Book tittle:</label>\n      <input [formControl]=\"name\" placeholder=\"name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"author\">Last Name:</label>\n      <input [formControl]=\"author\" placeholder=\"author\" name=\"author\" class=\"form-control\" id=\"author\">\n    </div>\n\n    <label for=\"author\">Genres:</label>\n    <mat-form-field>\n      <mat-select [formControl]=\"genresList\" multiple>\n        <mat-option *ngFor=\"let genre of genres\" [value]=\"genre\">{{genre._name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n    <button class=\"btn btn-success\">Add Book</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-book-page/add-book-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-book-page/add-book-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AddBookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookPageComponent", function() { return AddBookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_addbook_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/addbook.model */ "./src/app/model/addbook.model.ts");
/* harmony import */ var _service_genre_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/genre.service */ "./src/app/service/genre.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddBookPageComponent = /** @class */ (function () {
    function AddBookPageComponent(formBuilder, router, bookService, genreService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bookService = bookService;
        this.genreService = genreService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.author = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.genresList = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    AddBookPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (data) {
            _this.genres = data;
            console.log("response", data);
        });
    };
    AddBookPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.name.value != null && this.author.value != null && this.genresList.value) {
            var book = new _model_addbook_model__WEBPACK_IMPORTED_MODULE_4__["AddBook"](this.name.value, this.author.value, this.genresList.value);
            this.bookService.createBook(book)
                .subscribe(function (data) {
                _this.router.navigate(['']);
            });
        }
        else
            window.alert("Fields can't be left open");
    };
    AddBookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book-page',
            template: __webpack_require__(/*! ./add-book-page.component.html */ "./src/app/add-book-page/add-book-page.component.html"),
            styles: [__webpack_require__(/*! ./add-book-page.component.css */ "./src/app/add-book-page/add-book-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _service_genre_service__WEBPACK_IMPORTED_MODULE_5__["GenreService"]])
    ], AddBookPageComponent);
    return AddBookPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-book-page/add-book-page.component */ "./src/app/add-book-page/add-book-page.component.ts");
/* harmony import */ var _genres_page_genres_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres-page/genres-page.component */ "./src/app/genres-page/genres-page.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-book/edit-book.component */ "./src/app/edit-book/edit-book.component.ts");
/* harmony import */ var _genre_books_page_genre_books_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genre-books-page/genre-books-page.component */ "./src/app/genre-books-page/genre-books-page.component.ts");







var routes = [
    { path: 'addBook', component: _add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_1__["AddBookPageComponent"] },
    { path: 'genres', component: _genres_page_genres_page_component__WEBPACK_IMPORTED_MODULE_2__["GenresPageComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'book', component: _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__["BookPageComponent"] },
    { path: 'editBook', component: _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__["EditBookComponent"] },
    { path: 'genreBook', component: _genre_books_page_genre_books_page_component__WEBPACK_IMPORTED_MODULE_6__["GenreBooksPageComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">Book App</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"genres\">Genres</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"addBook\">Add Book</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"align-content-center width100\">\n\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"./assets/images/bannerImg1.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"./assets/images/bannerImg1.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"./assets/images/bannerImg1.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"routerBody\">\n    <router-outlet class=\"p-2\"></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BookAppV2Angualr';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _genres_page_genres_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genres-page/genres-page.component */ "./src/app/genres-page/genres-page.component.ts");
/* harmony import */ var _add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-book-page/add-book-page.component */ "./src/app/add-book-page/add-book-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-book/edit-book.component */ "./src/app/edit-book/edit-book.component.ts");
/* harmony import */ var _genre_books_page_genre_books_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./genre-books-page/genre-books-page.component */ "./src/app/genre-books-page/genre-books-page.component.ts");
/* harmony import */ var _service_genre_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/genre.service */ "./src/app/service/genre.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router/testing */ "./node_modules/@angular/router/fesm5/testing.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _genres_page_genres_page_component__WEBPACK_IMPORTED_MODULE_5__["GenresPageComponent"],
                _add_book_page_add_book_page_component__WEBPACK_IMPORTED_MODULE_6__["AddBookPageComponent"],
                _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_11__["BookPageComponent"],
                _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__["EditBookComponent"],
                _genre_books_page_genre_books_page_component__WEBPACK_IMPORTED_MODULE_13__["GenreBooksPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_router_testing__WEBPACK_IMPORTED_MODULE_16__["RouterTestingModule"],
            ],
            providers: [_service_book_service__WEBPACK_IMPORTED_MODULE_10__["BookService"], _service_genre_service__WEBPACK_IMPORTED_MODULE_14__["GenreService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-page/book-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-page/book-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 30em;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n/* Decorations */\n\n.col-xs-4 { color: #fff; padding-bottom: 20px; padding-top: 18px; text-align: center; }\n\n.col-xs-4:nth-child(3n+1) { background: #c69; }\n\n.col-xs-4:nth-child(3n+2) { background: #9c6; }\n\n.col-xs-4:nth-child(3n+3) { background: #69c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1wYWdlL2Jvb2stcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQsaUJBQWlCOztBQUNqQixZQUFZLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRTs7QUFDdkYsNEJBQTRCLGlCQUFpQixFQUFFOztBQUMvQyw0QkFBNEIsaUJBQWlCLEVBQUU7O0FBQy9DLDRCQUE0QixpQkFBaUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcGFnZS9ib29rLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMzBlbTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogRGVjb3JhdGlvbnMgKi9cbi5jb2wteHMtNCB7IGNvbG9yOiAjZmZmOyBwYWRkaW5nLWJvdHRvbTogMjBweDsgcGFkZGluZy10b3A6IDE4cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmNvbC14cy00Om50aC1jaGlsZCgzbisxKSB7IGJhY2tncm91bmQ6ICNjNjk7IH1cbi5jb2wteHMtNDpudGgtY2hpbGQoM24rMikgeyBiYWNrZ3JvdW5kOiAjOWM2OyB9XG4uY29sLXhzLTQ6bnRoLWNoaWxkKDNuKzMpIHsgYmFja2dyb3VuZDogIzY5YzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/book-page/book-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-page/book-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <h2>Book Page</h2>\n  <h1>Tittle: {{name}}</h1>\n  <p>Author: {{author}}</p>\n  <div class=\"container-fluid general-width container\">\n    <div class=\"row flex-row flex-nowrap\">\n      <div *ngFor=\"let genre of genres\" class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xs-4\">\n\n          <p>{{genre.name}}</p>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-page/book-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-page/book-page.component.ts ***!
  \**************************************************/
/*! exports provided: BookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageComponent", function() { return BookPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _model_genre_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/genre.model */ "./src/app/model/genre.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookPageComponent = /** @class */ (function () {
    function BookPageComponent(formBuilder, router, bookService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bookService = bookService;
    }
    BookPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = localStorage.getItem('viewBookId');
        if (!bookId) {
            alert('Invalid action.');
            this.router.navigate(['']);
            return;
        }
        this.bookService.getBookById(+bookId)
            .subscribe(function (data) {
            _this.book = data;
            _this.name = data.name;
            _this.author = data.author;
            _this.genres = [];
            for (var _i = 0, _a = data.genres; _i < _a.length; _i++) {
                var genre = _a[_i];
                _this.genres.push(new _model_genre_model__WEBPACK_IMPORTED_MODULE_4__["Genre"](genre._id, genre._name));
            }
        });
    };
    BookPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-page',
            template: __webpack_require__(/*! ./book-page.component.html */ "./src/app/book-page/book-page.component.html"),
            styles: [__webpack_require__(/*! ./book-page.component.css */ "./src/app/book-page/book-page.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], BookPageComponent);
    return BookPageComponent;
}());



/***/ }),

/***/ "./src/app/edit-book/edit-book.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYm9vay9lZGl0LWJvb2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-book/edit-book.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <form class=\"general-width\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\" >\n    <h2 class=\"text-center\">Edit Book</h2>\n    <div class=\"form-group\">\n      <label for=\"name\">Book tittle:</label>\n      <input formControlName=\"name\"[formControl]=\"name\" placeholder=\"name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"author\">author:</label>\n      <input formControlName=\"author\" [formControl]=\"author\" placeholder=\"author\" name=\"author\" class=\"form-control\" id=\"author\">\n    </div>\n\n    <label>Current genres:</label><br/>\n    <label>Select to remove</label><br/>\n    <mat-form-field>\n      <mat-select [formControl]=\"selectedGenres\" multiple>\n        <mat-option *ngFor=\"let genre of selectedGenresList\" [value]=\"genre\" >{{genre._name}}</mat-option>\n      </mat-select>\n    </mat-form-field><br/>\n\n    <label>Genres:</label><br/>\n    <label>Select to add</label><br/>\n    <mat-form-field>\n      <mat-select [formControl]=\"leftOverGenres\" multiple>\n        <mat-option *ngFor=\"let genre of leftOverGenresList\" [value]=\"genre\" >{{genre._name}}</mat-option>\n      </mat-select>\n    </mat-form-field><br/>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-book/edit-book.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.ts ***!
  \**************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_editBookModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/editBookModel */ "./src/app/model/editBookModel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_genre_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/genre.model */ "./src/app/model/genre.model.ts");
/* harmony import */ var _service_genre_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/genre.service */ "./src/app/service/genre.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(formBuilder, router, bookService, genreService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.bookService = bookService;
        this.genreService = genreService;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.author = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.selectedGenres = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.leftOverGenres = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = localStorage.getItem('editBookId');
        if (!bookId) {
            alert('Invalid action.');
            this.router.navigate(['']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            genres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.genreService.getGenres()
            .subscribe(function (data) {
            _this.leftOverGenresList = data;
            console.log("response", data);
        });
        this.bookService.getBookById(+bookId)
            .subscribe(function (data) {
            _this.selectedGenresList = [];
            for (var _i = 0, _a = data.genres; _i < _a.length; _i++) {
                var genre = _a[_i];
                console.log("Genres added");
                _this.selectedGenresList.push(new _model_genre_model__WEBPACK_IMPORTED_MODULE_6__["Genre"](genre._id, genre._name));
            }
            var _loop_1 = function (genre) {
                console.log(genre._id);
                var toBeRemoved = _this.leftOverGenresList.find(function (g) { return g._id == genre._id; });
                _this.leftOverGenresList.splice(_this.leftOverGenresList.indexOf(toBeRemoved), 1);
            };
            for (var _b = 0, _c = _this.selectedGenresList; _b < _c.length; _b++) {
                var genre = _c[_b];
                _loop_1(genre);
            }
            _this.edit = data;
            console.log(data);
            _this.editForm.setValue(data);
        });
    };
    EditBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savedGenres = [];
        if (this.selectedGenres.value != null) {
            var _loop_2 = function (genre) {
                var toBeRemoved = this_1.selectedGenresList.find(function (g) { return g._id == genre._id; });
                this_1.selectedGenresList.splice(this_1.selectedGenresList.indexOf(toBeRemoved), 1);
            };
            var this_1 = this;
            for (var _i = 0, _a = this.selectedGenres.value; _i < _a.length; _i++) {
                var genre = _a[_i];
                _loop_2(genre);
            }
        }
        if (this.selectedGenresList != null && this.selectedGenresList.length != 0) {
            for (var _b = 0, _c = this.selectedGenresList; _b < _c.length; _b++) {
                var g = _c[_b];
                this.savedGenres.push(g);
            }
        }
        if (this.leftOverGenres.value != null) {
            for (var _d = 0, _e = this.leftOverGenres.value; _d < _e.length; _d++) {
                var genre = _e[_d];
                this.savedGenres.push(genre);
            }
        }
        if (this.name.value != null && this.author.value != null && this.savedGenres.length != 0) {
            this.bookService.updateBook(new _model_editBookModel__WEBPACK_IMPORTED_MODULE_3__["EditBookModel"](this.edit.id, this.name.value, this.author.value, this.savedGenres))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                _this.router.navigate(['']);
            }, function (error) {
                alert(error);
            });
        }
        else
            window.alert("Fields can't be left open");
    };
    EditBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _service_genre_service__WEBPACK_IMPORTED_MODULE_7__["GenreService"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/genre-books-page/genre-books-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/genre-books-page/genre-books-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbnJlLWJvb2tzLXBhZ2UvZ2VucmUtYm9va3MtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/genre-books-page/genre-books-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/genre-books-page/genre-books-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <h2> Genre Books</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>BookTittle</th>\n      <th>AuthorsName</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"Books != null\">\n\n    <tr *ngFor=\"let book of Books\">\n      <td class=\"hidden\">{{book.id}}</td>\n      <td>{{book.name}}</td>\n      <td>{{book.author}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"viewBook(book)\" style=\"margin-left: 20px;\"> View</button><button class=\"btn btn-danger\" (click)=\"deleteBook(book)\"> Delete</button>\n        <button class=\"btn btn-danger\" (click)=\"editBook(book)\" style=\"margin-left: 20px;\"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/genre-books-page/genre-books-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/genre-books-page/genre-books-page.component.ts ***!
  \****************************************************************/
/*! exports provided: GenreBooksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreBooksPageComponent", function() { return GenreBooksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreBooksPageComponent = /** @class */ (function () {
    function GenreBooksPageComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
        this.Books = [];
    }
    GenreBooksPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = localStorage.getItem('genreId');
        this.bookService.getBookByGenre(bookId)
            .subscribe(function (data) {
            _this.Books = data;
            console.log("response", data);
        });
    };
    GenreBooksPageComponent.prototype.deleteBook = function (book) {
        var _this = this;
        this.bookService.deleteBook(book)
            .subscribe(function (data) {
            _this.Books = _this.Books.filter(function (u) { return u !== book; });
        });
    };
    GenreBooksPageComponent.prototype.editBook = function (book) {
        localStorage.removeItem('editBookId');
        localStorage.setItem('editBookId', book.id.toString());
        this.router.navigate(['editBook']);
    };
    GenreBooksPageComponent.prototype.viewBook = function (book) {
        localStorage.removeItem('viewBookId');
        localStorage.setItem('viewBookId', book.id.toString());
        this.router.navigate(['book']);
    };
    GenreBooksPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genre-books-page',
            template: __webpack_require__(/*! ./genre-books-page.component.html */ "./src/app/genre-books-page/genre-books-page.component.html"),
            styles: [__webpack_require__(/*! ./genre-books-page.component.css */ "./src/app/genre-books-page/genre-books-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], GenreBooksPageComponent);
    return GenreBooksPageComponent;
}());



/***/ }),

/***/ "./src/app/genres-page/genres-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/genres-page/genres-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex; /* or inline-flex */\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.item {\n  margin: auto;\n  float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VucmVzLXBhZ2UvZ2VucmVzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsQ0FBQyxvQkFBb0I7RUFDbkMsZ0JBQWdCO0VBQ2hCLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9nZW5yZXMtcGFnZS9nZW5yZXMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/genres-page/genres-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/genres-page/genres-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <h2> Genres</h2>\n  <div class=\"container\">\n    <div *ngIf=\"genres != null\" class=\"item\">\n      <div *ngFor=\"let genre of genres\">\n        <button class=\"btn btn-primary\" (click)=\"loadGenre(genre._id)\"> {{genre._name}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/genres-page/genres-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/genres-page/genres-page.component.ts ***!
  \******************************************************/
/*! exports provided: GenresPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresPageComponent", function() { return GenresPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/genre.service */ "./src/app/service/genre.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenresPageComponent = /** @class */ (function () {
    function GenresPageComponent(router, genreService) {
        this.router = router;
        this.genreService = genreService;
        this.genres = [];
    }
    GenresPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genreService.getGenres()
            .subscribe(function (data) {
            _this.genres = data;
            console.log("response", data);
        });
    };
    GenresPageComponent.prototype.loadGenre = function (id) {
        console.log(id);
        localStorage.removeItem('genreId');
        localStorage.setItem('genreId', id.toString());
        this.router.navigate(['genreBook']);
    };
    GenresPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genres-page',
            template: __webpack_require__(/*! ./genres-page.component.html */ "./src/app/genres-page/genres-page.component.html"),
            styles: [__webpack_require__(/*! ./genres-page.component.css */ "./src/app/genres-page/genres-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"]])
    ], GenresPageComponent);
    return GenresPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"general-width\">\n  <h2> Home</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>BookTittle</th>\n      <th>AuthorsName</th>\n      <th>Action</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"Books != null\">\n\n    <tr *ngFor=\"let book of Books\">\n      <td class=\"hidden\">{{book.id}}</td>\n      <td>{{book.name}}</td>\n      <td>{{book.author}}</td>\n      <td>\n      <button class=\"btn btn-primary\" (click)=\"viewBook(book)\" > View</button><td>\n      <button class=\"btn btn-danger\" (click)=\"deleteBook(book)\"> Delete</button><td>\n      <button class=\"btn btn-light\" (click)=\"editBook(book)\"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n  <button (click)=\"previousPage()\">Previous page</button>\n  <button (click)=\"nextPage()\" class=\"float-right\">Next page</button>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
        this.Books = [];
        this.page = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getTenBooks(0)
            .subscribe(function (data) {
            _this.Books = data;
            console.log("response", data);
        });
    };
    HomeComponent.prototype.deleteBook = function (book) {
        var _this = this;
        this.bookService.deleteBook(book)
            .subscribe(function (data) {
            _this.Books = _this.Books.filter(function (u) { return u !== book; });
        });
    };
    HomeComponent.prototype.editBook = function (book) {
        localStorage.removeItem('editBookId');
        localStorage.setItem('editBookId', book.id.toString());
        this.router.navigate(['editBook']);
    };
    HomeComponent.prototype.viewBook = function (book) {
        localStorage.removeItem('viewBookId');
        localStorage.setItem('viewBookId', book.id.toString());
        this.router.navigate(['book']);
    };
    HomeComponent.prototype.addBook = function () {
        this.router.navigate(['addBook']);
    };
    HomeComponent.prototype.nextPage = function () {
        var _this = this;
        this.page = this.page + 10;
        this.bookService.getTenBooks(this.page)
            .subscribe(function (data) {
            _this.Books = data;
        });
    };
    HomeComponent.prototype.previousPage = function () {
        var _this = this;
        if (this.page > 0) {
            this.page = this.page - 10;
            ;
        }
        this.bookService.getTenBooks(this.page)
            .subscribe(function (data) {
            _this.Books = data;
            console.log("response", data);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/addbook.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/addbook.model.ts ***!
  \****************************************/
/*! exports provided: AddBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBook", function() { return AddBook; });
var AddBook = /** @class */ (function () {
    /*
      constructor(name: string, author: string) {
        this._name = name;
        this._author = author;
      }
    */
    function AddBook(name, author, genres) {
        this.name = name;
        this.author = author;
        this.genres = genres;
    }
    Object.defineProperty(AddBook.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBook.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBook.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBook.prototype, "genres", {
        get: function () {
            return this._genres;
        },
        set: function (value) {
            this._genres = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddBook;
}());



/***/ }),

/***/ "./src/app/model/editBookModel.ts":
/*!****************************************!*\
  !*** ./src/app/model/editBookModel.ts ***!
  \****************************************/
/*! exports provided: EditBookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookModel", function() { return EditBookModel; });
var EditBookModel = /** @class */ (function () {
    function EditBookModel(id, name, author, genres) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._genres = genres;
    }
    Object.defineProperty(EditBookModel.prototype, "id", {
        /*
        constructor(id:number, name: string, author: string) {
          this._id = id;
          this._name = name;
          this._author = author;
        }
      
          constructor(name: string, author: string, genres: string[]) {
            this.name = name;
            this.author = author;
            this.genres = genres;
          }
        */
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditBookModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditBookModel.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditBookModel.prototype, "genres", {
        get: function () {
            return this._genres;
        },
        set: function (value) {
            this._genres = value;
        },
        enumerable: true,
        configurable: true
    });
    return EditBookModel;
}());



/***/ }),

/***/ "./src/app/model/genre.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/genre.model.ts ***!
  \**************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Genre.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Genre.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Genre;
}());



/***/ }),

/***/ "./src/app/service/book.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/book.service.ts ***!
  \*****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8071/book/';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.baseUrl + "all");
    };
    BookService.prototype.getBookById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    BookService.prototype.getTenBooks = function (index) {
        return this.http.get(this.baseUrl + '/amount/' + index);
    };
    BookService.prototype.getBookByGenre = function (id) {
        return this.http.get(this.baseUrl + '/genre/' + id);
    };
    BookService.prototype.createBook = function (book) {
        return this.http.post(this.baseUrl + "save", book);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.post(this.baseUrl + "update", book);
    };
    BookService.prototype.deleteBook = function (book) {
        return this.http.get(this.baseUrl + "delete/" + book.id);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/service/genre.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/genre.service.ts ***!
  \******************************************/
/*! exports provided: GenreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return GenreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenreService = /** @class */ (function () {
    function GenreService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8071/genre/';
    }
    GenreService.prototype.getGenres = function () {
        return this.http.get(this.baseUrl + "all");
    };
    GenreService.prototype.getBooksFromGenre = function (id) {
        return this.http.get(this.baseUrl + 'books/' + id);
    };
    GenreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/FlorisKnight/BookAppV2FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map