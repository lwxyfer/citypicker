/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	import { ChineseDistricts as CD } from './citydate.js';
	import { loop } from './loop.js';

	export function pickerPlugin() {
	    var picker = document.querySelector('.am-picker');
	    var allSelect = document.querySelectorAll('.am-picker select');
	    var provinceNode = allSelect[0]; // 省份节点
	    var districtNode = allSelect[1]; // 城市节点
	    var areaNode = allSelect[2]; // 地区节点

	    var province = '<option value=\'sf\' >--省份--</option>';
	    var district = '<option value=\'sj\' >--市级--</option>';
	    var area = '<option value=\'dq\'>--地区--</option>';

	    // load province data
	    for (var provinces in CD[86]) {
	        if (provinces && CD[86][provinces]) {
	            province += '<option value=' + provinces + '>' + CD[86][provinces] + '</option>';
	        }
	    }

	    // first render selects
	    [provinceNode, districtNode, areaNode].forEach(function (element, index) {
	        var a = [province, district, area];
	        if (element) {
	            element.innerHTML = a[index];
	        }
	    });

	    // postcode for different selects
	    var provinceCode = void 0;
	    var distinctCode = void 0;
	    var areaCode = void 0;
	    var dataSelected = {}; // store selected data

	    // listen select change and re-render
	    picker.addEventListener('change', render, false);

	    function render(event) {
	        var target = event.target || event.srcElement;
	        var name = target.name;
	        if (target.nodeName.toUpperCase() === 'SELECT') {
	            if (name === 'province') {
	                areaNode.innerHTML = '<option value=\'dq\'>--地区--</option>'; // reset areaNode
	                provinceCode = loop(target, districtNode, district);
	                dataSelected.province = CD[86][provinceCode];
	            }
	            if (name === 'district') {
	                distinctCode = loop(target, areaNode, area);
	                dataSelected.district = CD[provinceCode][distinctCode];
	            }
	            if (name === 'area') {
	                areaCode = target.options[target.selectedIndex].value;
	                dataSelected.area = CD[distinctCode][areaCode];
	            }
	            console.log(dataSelected);
	        }
	    }
	}

/***/ }
/******/ ]);