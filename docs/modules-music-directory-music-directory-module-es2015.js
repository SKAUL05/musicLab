(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-music-directory-music-directory-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/add-dialog/add-dialog.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** /Users/sarathkaul/Documents/Apps/MusicLab/musicLab/node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/add-dialog/add-dialog.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form autocomplete = \"off\" class=\"example-container\" #profileForm = \"ngForm\">\n        <mat-form-field>\n          <input matInput placeholder=\"Title\" name = \"title\" [(ngModel)] = \"songData.title\" required>\n        </mat-form-field>\n        <mat-form-field>\n                <input matInput placeholder=\"Album\" name = \"album\"  [(ngModel)] = \"songData.album\">\n        </mat-form-field>\n        <mat-form-field>\n                <input matInput placeholder=\"Year\" name = \"year\" [(ngModel)] = \"songData.year\">\n        </mat-form-field>\n        <mat-form-field>\n                <input matInput placeholder=\"Artist\" name = \"artist\" [(ngModel)] = \"songData.artist\" required>\n        </mat-form-field>\n        <mat-form-field>\n                <input matInput placeholder=\"Cover URL\" name = \"url\" [(ngModel)] = \"songData.coverUrl\">\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>Genre</mat-label>\n            <mat-select name = \"genre\" [(ngModel)] = \"songData.genre\" required>\n                <mat-option *ngFor=\"let genre of genreList\" [value]=\"genre\" >\n                {{genre}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <button mat-stroked-button color=\"primary\" [disabled] = \"profileForm.invalid\" (click) = \"onSave()\" class =\"save-button\"> Save </button>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/sarathkaul/Documents/Apps/MusicLab/musicLab/node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n        <mat-list-item *ngFor=\"let genre of genreList\" (click) = \"genreClicked(genre)\">\n            {{genre}}\n        </mat-list-item>\n</mat-nav-list>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /Users/sarathkaul/Documents/Apps/MusicLab/musicLab/node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class = \"full-height\">\n    <mat-sidenav mode = \"side\" opened>\n        <div>\n            <left-side-bar></left-side-bar>\n        </div>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <div>\n            <music-list></music-list>\n        </div>\n    </mat-sidenav-content>\n\n</mat-sidenav-container>\n\n<!-- <mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n      <p>Auto-resizing sidenav</p>\n      <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n      <mat-progress-bar mode=\"query\" *ngIf=\"showFiller\"></mat-progress-bar>\n\n      <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n        Toggle extra text\n      </button>\n    </mat-drawer>\n  \n    <div class=\"example-sidenav-content\">\n      <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        Toggle sidenav\n      </button>\n    </div>\n  \n  </mat-drawer-container> -->");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-list/music-list.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** /Users/sarathkaul/Documents/Apps/MusicLab/musicLab/node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-list/music-list.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div>\n        <mat-grid-list cols = \"5\" rowHeight=\"300px\" class = \"grid-list\">\n            <mat-grid-tile *ngFor = \"let song of songList\" class = \"grid-tile\" >\n                <mat-card class = \"song-card\" >\n                    <div class = \"delete-icon\">\n                        <mat-icon aria-hidden=\"false\" (click) = \"deleteSong(song)\">delete</mat-icon>\n                    </div>\n                    <mat-card-content class = \"card-content\" >\n                        <div class= \"image-section\">\n                            <img defaultCoverUrl src = {{song.coverUrl}} alt=\"\">\n                        </div>\n                        <mat-divider></mat-divider>\n                        <div class = \"details-section\">\n                            <div class = \"title\">{{song.title}}</div>\n                            <div class = \"artist\">{{song.artist}}</div>\n                        </div>\n                    </mat-card-content>\n                    <mat-card-content class = \"hidden-card\" >\n                        <div class=\"hidden-card-form\">\n                        <form autocomplete = \"off\"  #profileForm = \"ngForm\">\n                                <mat-form-field appearance=\"standard\" class = \"form-field\">\n                                        <input matInput placeholder=\"Title\" name = \"title\" [(ngModel)] = \"song.title\" required>\n                                      </mat-form-field>\n                                      <mat-form-field appearance=\"standard\" class = \"form-field\">\n                                              <input matInput placeholder=\"Album\" name = \"album\"  [(ngModel)] = \"song.album\">\n                                      </mat-form-field>\n                                      <mat-form-field appearance=\"standard\" class = \"form-field\">\n                                              <input matInput placeholder=\"Year\" name = \"year\" [(ngModel)] = \"song.year\">\n                                      </mat-form-field>\n                                      <mat-form-field appearance=\"standard\" class = \"form-field\">\n                                              <input matInput placeholder=\"Artist\" name = \"artist\" [(ngModel)] = \"song.artist\" required>\n                                      </mat-form-field>\n                    \n                                      <mat-form-field appearance=\"standard\" class = \"form-field\">\n                                          <mat-select name = \"genre\" [(ngModel)] = \"song.genre\" required>\n                                              <mat-option *ngFor=\"let genre of genreList\" [value]=\"genre\" >\n                                              {{genre}}\n                                              </mat-option>\n                                          </mat-select>\n                                      </mat-form-field>\n                                      <button mat-icon-button [disabled] = \"profileForm.invalid || !profileForm.dirty\" (click) = \"update(song)\" class = \"update-button\"> \n                                            <mat-icon>update</mat-icon>\n                                        </button>\n                        </form>\n                    </div>\n                    </mat-card-content>\n                </mat-card>\n                \n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n    <div class = \"add-button\">\n    <button mat-fab color=\"primary\" (click) = \"openDialog()\" class = \"button-add\"> \n        <mat-icon>add</mat-icon>\n    </button>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/music-directory/components/add-dialog/add-dialog.component.styl":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/add-dialog/add-dialog.component.styl ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n}\n.example-container .save-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  margin-left: 45%;\n}\n/*# sourceMappingURL=projects/musicApp/src/app/modules/music-directory/components/add-dialog/add-dialog.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9hZGQtZGlhbG9nL3Byb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9hZGQtZGlhbG9nL2FkZC1kaWFsb2cuY29tcG9uZW50LnN0eWwiLCJwcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvYWRkLWRpYWxvZy9hZGQtZGlhbG9nLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBUTtFQUNSLHNCQUFlO0VBQ2YsWUFBTTtBQ0NWO0FEQUk7RUFDSSxhQUFRO0VBQ1Isc0JBQWU7RUFDZixtQkFBWTtFQUNaLHVCQUFnQjtFQUNoQixXQUFNO0VBQ04sZ0JBQVk7QUNFcEI7QUFDQSwySEFBMkgiLCJmaWxlIjoicHJvamVjdHMvbXVzaWNBcHAvc3JjL2FwcC9tb2R1bGVzL211c2ljLWRpcmVjdG9yeS9jb21wb25lbnRzL2FkZC1kaWFsb2cvYWRkLWRpYWxvZy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciBcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICB3aWR0aCA1MDBweFxuICAgIC5zYXZlLWJ1dHRvblxuICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gICAgICAgIHdpZHRoIDMwcHhcbiAgICAgICAgbWFyZ2luLWxlZnQgNDUlXG5cblxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5zYXZlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9hZGQtZGlhbG9nL2FkZC1kaWFsb2cuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/modules/music-directory/components/add-dialog/add-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/add-dialog/add-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/genre.service */ "./src/app/modules/music-directory/services/genre.service.ts");
/* harmony import */ var _services_music_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/music-list.service */ "./src/app/modules/music-directory/services/music-list.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm2015/snack-bar.js");






let AddDialogComponent = class AddDialogComponent {
    /******* Constructor */
    constructor(genreService, musicService, matDialogRef, _matSnackBar) {
        this.genreService = genreService;
        this.musicService = musicService;
        this.matDialogRef = matDialogRef;
        this._matSnackBar = _matSnackBar;
        /************* Properties */
        this.genreList = [];
        this.songData = {
            title: "",
            album: "",
            year: null,
            artist: "",
            coverUrl: "",
            genre: "",
            id: ""
        };
    }
    /************* Method */
    ngOnInit() {
        this.genreList = this.genreService.getGenreList();
    }
    onSave() {
        this.musicService.addSong(this.songData);
        this._matSnackBar.open(this.songData['title'], "", {
            duration: 1000,
        });
        this.matDialogRef.close(true);
    }
};
AddDialogComponent.ctorParameters = () => [
    { type: _services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"] },
    { type: _services_music_list_service__WEBPACK_IMPORTED_MODULE_3__["MusicListService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-dialog.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/add-dialog/add-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-dialog.component.styl */ "./src/app/modules/music-directory/components/add-dialog/add-dialog.component.styl")).default]
    })
], AddDialogComponent);



/***/ }),

/***/ "./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.styl":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.styl ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-nav-list {\n  margin-top: 70px;\n}\n/*# sourceMappingURL=projects/musicApp/src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9sZWZ0LXNpZGUtYmFyL3Byb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9sZWZ0LXNpZGUtYmFyL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50LnN0eWwiLCJwcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQVc7QUNDZjtBQUNBLGlJQUFpSSIsImZpbGUiOiJwcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1uYXYtbGlzdCBcbiAgICBtYXJnaW4tdG9wIDcwcHgiLCIubWF0LW5hdi1saXN0IHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9sZWZ0LXNpZGUtYmFyL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LeftSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBarComponent", function() { return LeftSideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/genre.service */ "./src/app/modules/music-directory/services/genre.service.ts");
/* harmony import */ var _services_music_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/music-list.service */ "./src/app/modules/music-directory/services/music-list.service.ts");




let LeftSideBarComponent = class LeftSideBarComponent {
    /***************************** Constructor **************************/
    constructor(genreService, musicService) {
        this.genreService = genreService;
        this.musicService = musicService;
        /***************************** Properties **************************/
        this.genreList = [];
        this.songsList = [];
    }
    /***************************** Methods **************************/
    ngOnInit() {
        this.genreList = this.genreService.getGenreList();
        this.songsList = this.musicService.getSongsList();
    }
    genreClicked(genre) {
        this.musicService.emitNewGenre(genre);
    }
};
LeftSideBarComponent.ctorParameters = () => [
    { type: _services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"] },
    { type: _services_music_list_service__WEBPACK_IMPORTED_MODULE_3__["MusicListService"] }
];
LeftSideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'left-side-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-side-bar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-side-bar.component.styl */ "./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.styl")).default]
    })
], LeftSideBarComponent);



/***/ }),

/***/ "./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.styl":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.styl ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  height: 100%;\n  border: 1px solid rgba(0,0,0,0.5);\n}\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.example-sidenav {\n  padding: 20px;\n}\n.full-height {\n  height: 100%;\n}\n/*# sourceMappingURL=projects/musicApp/src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1kaXJlY3RvcnktY29udGFpbmVyL3Byb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1kaXJlY3RvcnktY29udGFpbmVyL211c2ljLWRpcmVjdG9yeS1jb250YWluZXIuY29tcG9uZW50LnN0eWwiLCJwcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbXVzaWMtZGlyZWN0b3J5LWNvbnRhaW5lci9tdXNpYy1kaXJlY3RvcnktY29udGFpbmVyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBUTtFQUNSLGlDQUFRO0FDQ1Y7QURFQTtFQUNFLGFBQVM7RUFDVCxZQUFRO0VBQ1IsbUJBQWE7RUFDYix1QkFBaUI7QUNBbkI7QURHQTtFQUNFLGFBQVM7QUNEWDtBRElBO0VBQ0UsWUFBUztBQ0ZYO0FBQ0EseUpBQXlKIiwiZmlsZSI6InByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1kaXJlY3RvcnktY29udGFpbmVyL211c2ljLWRpcmVjdG9yeS1jb250YWluZXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodCA6IDEwMCU7XG59IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNSk7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1wcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbXVzaWMtZGlyZWN0b3J5LWNvbnRhaW5lci9tdXNpYy1kaXJlY3RvcnktY29udGFpbmVyLmNvbXBvbmVudC5jc3MubWFwICovIl19 */");

/***/ }),

/***/ "./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MusicDirectoryContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDirectoryContainerComponent", function() { return MusicDirectoryContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let MusicDirectoryContainerComponent = class MusicDirectoryContainerComponent {
    constructor() {
        this.showFiller = false;
    }
    ngOnInit() {
    }
};
MusicDirectoryContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'music-directory-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-directory-container.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-directory-container.component.styl */ "./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.styl")).default]
    })
], MusicDirectoryContainerComponent);



/***/ }),

/***/ "./src/app/modules/music-directory/components/music-list/music-list.component.styl":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/music-list/music-list.component.styl ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-button {\n  right: 1px;\n  transition: all 2s ease-in-out;\n  padding: 20px 20px;\n  position: absolute;\n}\n.delete-icon {\n  display: none;\n}\n.hidden-card {\n  visibility: hidden;\n}\n.song-card:hover .hidden-card {\n  visibility: visible;\n}\n.song-card:hover .card-content {\n  display: none;\n}\n.form-field {\n  width: 150px;\n  height: 15px;\n}\n.update-icon {\n  position: absolute;\n  display: flex;\n  margin-left: 40px;\n  cursor: pointer;\n}\n.grid-tile:hover .delete-icon {\n  display: inline-block;\n  position: absolute;\n  right: 1px;\n  top: 3px;\n  margin-right: 7px;\n  cursor: pointer;\n}\n.grid-list {\n  margin-top: 70px;\n}\n.song-card {\n  width: 200px;\n  height: 240px;\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n.song-card .card-content {\n  flex: 1;\n}\n.song-card .card-content .image-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.song-card .card-content .image-section img {\n  height: 175px;\n  width: 175px;\n  border-radius: 50%;\n}\n.song-card .card-content .details-section {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  text-align: center;\n  justify-content: center;\n  margin-top: 16px;\n}\n.song-card .card-content .details-section .title {\n  font-size: 1.25em;\n  font-family: Tahoma;\n}\n.song-card .card-content .details-section .artist {\n  margin-top: 5px;\n  font-size: 1em;\n  font-family: Andale Mono;\n}\n/*# sourceMappingURL=projects/musicApp/src/app/modules/music-directory/components/music-list/music-list.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1saXN0L3Byb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1saXN0L211c2ljLWxpc3QuY29tcG9uZW50LnN0eWwiLCJwcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbXVzaWMtbGlzdC9tdXNpYy1saXN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBTTtFQUVOLDhCQUFXO0VBQ1gsa0JBQVE7RUFDUixrQkFBUztBQ0NiO0FEQ0E7RUFDSSxhQUFRO0FDQ1o7QURDQTtFQUNJLGtCQUFXO0FDQ2Y7QURFSTtFQUNJLG1CQUFXO0FDQW5CO0FERUk7RUFDSSxhQUFRO0FDQWhCO0FERUE7RUFDSSxZQUFNO0VBQ04sWUFBTztBQ0FYO0FERUE7RUFDSSxrQkFBUztFQUNULGFBQVE7RUFDUixpQkFBWTtFQUNaLGVBQU87QUNBWDtBREVBO0VBQ0kscUJBQVE7RUFDUixrQkFBUztFQUNULFVBQU07RUFDTixRQUFJO0VBQ0osaUJBQWE7RUFDYixlQUFPO0FDQVg7QURFQTtFQUNJLGdCQUFXO0FDQWY7QURFQTtFQUNJLFlBQU07RUFDTixhQUFPO0VBQ1AsaUJBQVE7RUFDUixhQUFRO0VBQ1Isc0JBQWU7RUFDZixnQkFBWTtFQUNaLGlCQUFZO0FDQWhCO0FERUk7RUFDSSxPQUFLO0FDQWI7QURDUTtFQUNJLGFBQVE7RUFDUixzQkFBZTtFQUNmLG1CQUFZO0VBQ1osdUJBQWdCO0VBQ2hCLG1CQUFjO0FDQzFCO0FEQVk7RUFDSSxhQUFPO0VBQ1AsWUFBTTtFQUNOLGtCQUFjO0FDRTlCO0FERFE7RUFDSSxhQUFRO0VBQ1Isc0JBQWU7RUFDZixpQkFBYTtFQUNiLGtCQUFXO0VBQ1gsdUJBQWdCO0VBQ2hCLGdCQUFXO0FDR3ZCO0FERlk7RUFDSSxpQkFBVTtFQUNWLG1CQUFZO0FDSTVCO0FESFk7RUFDSSxlQUFXO0VBQ1gsY0FBVztFQUNYLHdCQUFZO0FDSzVCO0FBQ0EsMkhBQTJIIiwiZmlsZSI6InByb2plY3RzL211c2ljQXBwL3NyYy9hcHAvbW9kdWxlcy9tdXNpYy1kaXJlY3RvcnkvY29tcG9uZW50cy9tdXNpYy1saXN0L211c2ljLWxpc3QuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJ1dHRvblxuICAgIHJpZ2h0IDFweFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0XG4gICAgdHJhbnNpdGlvbiBhbGwgMnMgZWFzZS1pbi1vdXRcbiAgICBwYWRkaW5nIDIwcHggMjBweFxuICAgIHBvc2l0aW9uIGFic29sdXRlXG5cbi5kZWxldGUtaWNvblxuICAgIGRpc3BsYXkgbm9uZVxuXG4uaGlkZGVuLWNhcmQgICAgXG4gICAgdmlzaWJpbGl0eSBoaWRkZW4gXG5cbi5zb25nLWNhcmQ6aG92ZXIgXG4gICAgLmhpZGRlbi1jYXJkXG4gICAgICAgIHZpc2liaWxpdHkgdmlzaWJsZVxuICAgICAgIFxuICAgIC5jYXJkLWNvbnRlbnRcbiAgICAgICAgZGlzcGxheSBub25lXG5cbi5mb3JtLWZpZWxkXG4gICAgd2lkdGggMTUwcHhcbiAgICBoZWlnaHQgMTVweFxuXG4udXBkYXRlLWljb25cbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIGRpc3BsYXkgZmxleFxuICAgIG1hcmdpbi1sZWZ0IDQwcHhcbiAgICBjdXJzb3IgcG9pbnRlclxuXG4uZ3JpZC10aWxlOmhvdmVyIC5kZWxldGUtaWNvblxuICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICByaWdodCAxcHhcbiAgICB0b3AgM3B4XG4gICAgbWFyZ2luLXJpZ2h0IDdweFxuICAgIGN1cnNvciBwb2ludGVyXG5cbi5ncmlkLWxpc3RcbiAgICBtYXJnaW4tdG9wIDcwcHhcblxuLnNvbmctY2FyZFxuICAgIHdpZHRoIDIwMHB4XG4gICAgaGVpZ2h0IDI0MHB4XG4gICAgcGFkZGluZyAxNnB4IDhweFxuICAgIGRpc3BsYXkgZmxleCBcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICBtYXJnaW4tdG9wICAyMHB4XG4gICAgbWFyZ2luLWxlZnQgMjBweFxuXG4gICAgLmNhcmQtY29udGVudFxuICAgICAgICBmbGV4IDFcbiAgICAgICAgLmltYWdlLXNlY3Rpb25cbiAgICAgICAgICAgIGRpc3BsYXkgZmxleFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgICAgICAgICBhbGlnbi1pdGVtcyBjZW50ZXIgXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDE2cHhcbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgIGhlaWdodCAxNzVweFxuICAgICAgICAgICAgICAgIHdpZHRoIDE3NXB4XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA1MCVcbiAgICAgICAgLmRldGFpbHMtc2VjdGlvblxuICAgICAgICAgICAgZGlzcGxheSBmbGV4XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICAgICAgICAgIGFsaWduLWl0ZW1zICBsZWZ0XG4gICAgICAgICAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgICAgICAgICAgbWFyZ2luLXRvcCAxNnB4XG4gICAgICAgICAgICAudGl0bGVcbiAgICAgICAgICAgICAgICBmb250LXNpemUgMS4yNWVtXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHkgVGFob21hXG4gICAgICAgICAgICAuYXJ0aXN0XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcCA1cHhcbiAgICAgICAgICAgICAgICBmb250LXNpemUgIDFlbVxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5IEFuZGFsZSBNb25vXG4iLCIuYWRkLWJ1dHRvbiB7XG4gIHJpZ2h0OiAxcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRlbGV0ZS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oaWRkZW4tY2FyZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zb25nLWNhcmQ6aG92ZXIgLmhpZGRlbi1jYXJkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zb25nLWNhcmQ6aG92ZXIgLmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnVwZGF0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdyaWQtdGlsZTpob3ZlciAuZGVsZXRlLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFweDtcbiAgdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ3JpZC1saXN0IHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5zb25nLWNhcmQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIHBhZGRpbmc6IDE2cHggOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5zb25nLWNhcmQgLmNhcmQtY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG4uc29uZy1jYXJkIC5jYXJkLWNvbnRlbnQgLmltYWdlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5zb25nLWNhcmQgLmNhcmQtY29udGVudCAuaW1hZ2Utc2VjdGlvbiBpbWcge1xuICBoZWlnaHQ6IDE3NXB4O1xuICB3aWR0aDogMTc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zb25nLWNhcmQgLmNhcmQtY29udGVudCAuZGV0YWlscy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uc29uZy1jYXJkIC5jYXJkLWNvbnRlbnQgLmRldGFpbHMtc2VjdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgZm9udC1mYW1pbHk6IFRhaG9tYTtcbn1cbi5zb25nLWNhcmQgLmNhcmQtY29udGVudCAuZGV0YWlscy1zZWN0aW9uIC5hcnRpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogQW5kYWxlIE1vbm87XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1wcm9qZWN0cy9tdXNpY0FwcC9zcmMvYXBwL21vZHVsZXMvbXVzaWMtZGlyZWN0b3J5L2NvbXBvbmVudHMvbXVzaWMtbGlzdC9tdXNpYy1saXN0LmNvbXBvbmVudC5jc3MubWFwICovIl19 */");

/***/ }),

/***/ "./src/app/modules/music-directory/components/music-list/music-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/music-directory/components/music-list/music-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MusicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListComponent", function() { return MusicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_music_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/music-list.service */ "./src/app/modules/music-directory/services/music-list.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-dialog/add-dialog.component */ "./src/app/modules/music-directory/components/add-dialog/add-dialog.component.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/genre.service */ "./src/app/modules/music-directory/services/genre.service.ts");






let MusicListComponent = class MusicListComponent {
    /***************************** Constructor **************************/
    constructor(musicListService, dialog, genreService) {
        this.musicListService = musicListService;
        this.dialog = dialog;
        this.genreService = genreService;
        /***************************** Properties **************************/
        this.songList = [];
        this.showCard = false;
        this.genreList = [];
    }
    /***************************** Methods **************************/
    ngOnInit() {
        this.songList = this.musicListService.getSongsList();
        this.setUpdateListener();
        this.genreList = this.genreService.getGenreList();
    }
    setUpdateListener() {
        this.musicListService.checkGenreChanged().subscribe((genre) => {
            this.songList = this.musicListService.getGenreSongsList(genre);
        });
    }
    openDialog() {
        let matDialogRef = this.dialog.open(_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddDialogComponent"]);
        matDialogRef.afterClosed().subscribe((data) => {
            if (data) {
                this.songList = this.musicListService.getSongsList();
            }
            console.log('dialog closed', data);
        });
    }
    deleteSong(song) {
        console.log(song);
        this.songList = this.musicListService.deleteSong(song['id'], this.songList);
    }
    update(song) {
        console.log(song);
        this.songList = this.musicListService.updateSong(song, this.songList);
    }
};
MusicListComponent.ctorParameters = () => [
    { type: _services_music_list_service__WEBPACK_IMPORTED_MODULE_2__["MusicListService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_genre_service__WEBPACK_IMPORTED_MODULE_5__["GenreService"] }
];
MusicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'music-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/music-directory/components/music-list/music-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-list.component.styl */ "./src/app/modules/music-directory/components/music-list/music-list.component.styl")).default]
    })
], MusicListComponent);



/***/ }),

/***/ "./src/app/modules/music-directory/music-directory-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/music-directory/music-directory-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MusicDirectoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDirectoryRoutingModule", function() { return MusicDirectoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_music_directory_container_music_directory_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/music-directory-container/music-directory-container.component */ "./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.ts");




const routes = [
    { path: '', component: _components_music_directory_container_music_directory_container_component__WEBPACK_IMPORTED_MODULE_3__["MusicDirectoryContainerComponent"] }
];
let MusicDirectoryRoutingModule = class MusicDirectoryRoutingModule {
};
MusicDirectoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MusicDirectoryRoutingModule);



/***/ }),

/***/ "./src/app/modules/music-directory/music-directory.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/music-directory/music-directory.module.ts ***!
  \*******************************************************************/
/*! exports provided: MusicDirectoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDirectoryModule", function() { return MusicDirectoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _music_directory_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music-directory-routing.module */ "./src/app/modules/music-directory/music-directory-routing.module.ts");
/* harmony import */ var _components_music_directory_container_music_directory_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/music-directory-container/music-directory-container.component */ "./src/app/modules/music-directory/components/music-directory-container/music-directory-container.component.ts");
/* harmony import */ var _components_left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/left-side-bar/left-side-bar.component */ "./src/app/modules/music-directory/components/left-side-bar/left-side-bar.component.ts");
/* harmony import */ var _components_music_list_music_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/music-list/music-list.component */ "./src/app/modules/music-directory/components/music-list/music-list.component.ts");
/* harmony import */ var _shared_pipes_generate_dash_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/generate-dash.pipe */ "./src/app/shared/pipes/generate-dash.pipe.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-dialog/add-dialog.component */ "./src/app/modules/music-directory/components/add-dialog/add-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");












let MusicDirectoryModule = class MusicDirectoryModule {
};
MusicDirectoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_music_directory_container_music_directory_container_component__WEBPACK_IMPORTED_MODULE_5__["MusicDirectoryContainerComponent"], _components_left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSideBarComponent"], _components_music_list_music_list_component__WEBPACK_IMPORTED_MODULE_7__["MusicListComponent"], _shared_pipes_generate_dash_pipe__WEBPACK_IMPORTED_MODULE_8__["GenerateDashPipe"], _components_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddDialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _music_directory_routing_module__WEBPACK_IMPORTED_MODULE_4__["MusicDirectoryRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        entryComponents: [_components_add_dialog_add_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddDialogComponent"]]
    })
], MusicDirectoryModule);



/***/ }),

/***/ "./src/app/modules/music-directory/services/genre.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/music-directory/services/genre.service.ts ***!
  \*******************************************************************/
/*! exports provided: GenreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return GenreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let GenreService = class GenreService {
    /***************************** Constructor **************************/
    constructor() {
        /***************************** Properties **************************/
        this.genreList = ['All', 'Bollywood', 'Classical', 'IndiPop', 'Hollywood', 'Punjabi'];
    }
    /***************************** Methods **************************/
    getGenreList() {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(this.genreList);
    }
};
GenreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GenreService);



/***/ }),

/***/ "./src/app/modules/music-directory/services/music-list.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/music-directory/services/music-list.service.ts ***!
  \************************************************************************/
/*! exports provided: MusicListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListService", function() { return MusicListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");




let MusicListService = class MusicListService {
    /***************************** Constructor **************************/
    constructor() {
        /***************************** Properties **************************/
        this.songList = [
            {
                title: "Hud Hud",
                album: "Dabangg 3",
                year: 2019,
                artist: "Shabab Sabri, Divya Kumar, Sajid",
                id: "1",
                coverUrl: "https://c.saavncdn.com/019/Dabangg-3-Hindi-2019-20191119135116-500x500.jpg",
                genre: "Bollywood"
            },
            {
                title: "O Saki Saki",
                album: "Batla House",
                year: 2019,
                artist: "Tulsi Kumar, Neha Kakkar, B Praak",
                id: "2",
                coverUrl: "https://c.saavncdn.com/810/O-Saki-Saki-From-Batla-House--Hindi-2019-20190715121320-500x500.jpg",
                genre: "Bollywood"
            },
            {
                title: "Muqabla",
                album: "Street Dancer 3D",
                year: 2019,
                artist: "Parampara Thakur, Yash Narvekar",
                id: "3",
                coverUrl: "https://c.saavncdn.com/597/Muqabla-From-Street-Dancer-3D-Hindi-2019-20191226110928-500x500.jpg",
                genre: "Bollywood"
            },
            {
                title: "Oh Ho Ho Ho",
                album: "Ishq Tera Tadpave",
                year: 2018,
                artist: "Sukhbir",
                id: "4",
                coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
                genre: "Punjabi"
            },
            {
                title: "Oh Ho Ho Ho",
                album: "Ishq Tera Tadpave",
                year: 2018,
                artist: "Sukhbir",
                id: "5",
                coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
                genre: "Punjabi"
            },
            {
                title: "Oh Ho Ho Ho",
                album: "Ishq Tera Tadpave",
                year: 2018,
                artist: "Sukhbir",
                id: "6",
                coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
                genre: "Punjabi"
            },
            {
                title: "Oh Ho Ho Ho",
                album: "Ishq Tera Tadpave",
                year: 2018,
                artist: "Sukhbir",
                id: "7",
                coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
                genre: "Punjabi"
            }
        ];
        this.genreChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /***************************** Methods **************************/
    getSongsList() {
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(this.songList);
    }
    getGenreSongsList(genre) {
        let songs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(this.songList);
        if (genre == "All") {
            return songs;
        }
        let returnList = [];
        for (let a_song in songs) {
            if (songs[a_song]["genre"] == genre) {
                returnList.push(songs[a_song]);
            }
        }
        return returnList;
    }
    checkGenreChanged() {
        return this.genreChangeSubject.asObservable();
    }
    emitNewGenre(genre) {
        this.genreChangeSubject.next(genre);
    }
    addSong(songData) {
        songData['id'] = (this.songList.length + 1).toString();
        this.songList.push(songData);
    }
    deleteSong(id, songs) {
        console.log(id);
        console.log(songs);
        this.songList.splice(id - 1, 1);
        for (let a_song in songs) {
            if (songs[a_song]['id'] == id) {
                songs.splice(a_song, 1);
            }
        }
        return songs;
    }
    updateSong(song, songs) {
        for (let a_song in songs) {
            if (songs[a_song]['id'] == song['id']) {
                songs[a_song] = song;
            }
        }
        for (let a_song in this.songList) {
            if (this.songList[a_song]['id'] == song['id']) {
                this.songList[a_song] = song;
            }
        }
        return songs;
    }
};
MusicListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicListService);



/***/ }),

/***/ "./src/app/shared/pipes/generate-dash.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/generate-dash.pipe.ts ***!
  \****************************************************/
/*! exports provided: GenerateDashPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateDashPipe", function() { return GenerateDashPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let GenerateDashPipe = class GenerateDashPipe {
    transform(value, ...args) {
        if (value) {
            return value;
        }
        else {
            return "-------";
        }
    }
};
GenerateDashPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'generateDash'
    })
], GenerateDashPipe);



/***/ })

}]);