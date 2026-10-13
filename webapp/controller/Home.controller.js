sap.ui.define([
"sap/ui/core/mvc/Controller"
], function (Controller) {
 
"use strict";
 
return Controller.extend("fleet.onboarding.controller.Home", {
 
onInit: function () {
 
// Start application in Light Mode
this._bDarkMode = false;
 
},
 
onThemeChange: function () {
 
// Toggle mode
this._bDarkMode = !this._bDarkMode;
 
var oPage = this.byId("page");
var oButton = this.byId("themeButton");
 
if (this._bDarkMode) {
 
// -------------------------
// DARK MODE
// -------------------------
 
oPage.addStyleClass("darkMode");
 
// Change icon to Moon
oButton.setIcon("sap-icon://dark-mode");
 
// Make entire browser background dark
document.body.classList.add("darkMode");
 
} else {
 
// -------------------------
// LIGHT MODE
// -------------------------
 
oPage.removeStyleClass("darkMode");
 
// Change icon to Sun
oButton.setIcon("sap-icon://light-mode");
 
// Restore browser background
document.body.classList.remove("darkMode");
}
}
 
});
});