'use strict';

// 通过data-picker做判断,给出API

import { ChineseDistricts as CD} from './citydate.js';
import { loop } from './loop.js'

let picker = document.querySelector('.am-picker');
let allSelect = document.querySelectorAll('.am-picker select');
let provinceNode = allSelect[0];
let districtNode = allSelect[1];
let areaNode = allSelect[2];
let data = {}; // store selected data

let PROVINCE = `<option value='sf' >--省份--</option>`;
let DISTRICT = `<option value='sj' >--市级--</option>`;
let AREA = `<option value='dq'>--地区--</option>`;

// first render province data
for(let prv in CD[86]) {
  if(prv && CD[86][prv]) {
    PROVINCE += `<option value=${prv}>${CD[86][prv]}</option>`;
  }
}
if( provinceNode && provinceNode.name === 'province') {
provinceNode.innerHTML = PROVINCE;
}
if( districtNode && districtNode.name === 'district') {
districtNode.innerHTML = DISTRICT;
}
if( areaNode && areaNode.name === 'area') {
areaNode.innerHTML = AREA;
}

// postcode for different select
let proCode;
let disCode;
let arCode;
// listener event and change items
picker.addEventListener('change',function(event){
  let target = event.target || event.srcElement;
  // console.log(target.id)
  // console.log(event.type)
  if( target.nodeName.toUpperCase() === 'SELECT' && target.name === 'province') {
    // reset when this is reelected
    DISTRICT = `<option value='sj'>--市级--</option>`;
    areaNode.innerHTML = `<option value='dq'>--地区--</option>`;
    proCode = loop(target,districtNode,DISTRICT);
    data.province = CD[86][proCode];
  }
  if( target.nodeName.toUpperCase() === 'SELECT' && target.name === 'district' ) {
    disCode = loop(target,areaNode,AREA);
    data.district = CD[proCode][disCode]
  }
  if( target.nodeName.toUpperCase() === 'SELECT' && target.name === 'area') {
    arCode = target.options[target.selectedIndex].value;
    data.area = CD[disCode][arCode];
  }
  console.log(data)
})
