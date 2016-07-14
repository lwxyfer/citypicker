import {
  ChineseDistricts as CD
} from './citydate';
import {
  loop
} from './loop';

export function picker() {
  let picker = document.querySelector('.am-picker');
  let allSelect = document.querySelectorAll('.am-picker select');
  let provinceNode = allSelect[0]; // 省份节点
  let districtNode = allSelect[1]; // 城市节点
  let areaNode = allSelect[2]; // 地区节点
  let province = `<option value='sf' >--省份--</option>`;
  let district = `<option value='sj' >--市级--</option>`;
  let area = `<option value='dq'>--地区--</option>`;
  // load province data
  for (let provinces in CD[86]) {
    if (provinces && CD[86][provinces]) {
      province += `<option value=${provinces}>${CD[86][provinces]}</option>`;
    }
  }
  // first render selects
  [provinceNode, districtNode, areaNode].forEach((element, index) => {
      let a = [province, district, area]
      if (element) {
        element.innerHTML = a[index];
      }
    })
    // postcode for different selects
  let provinceCode;
  let distinctCode;
  let areaCode;
  let dataSelected = {}; // store selected data
  // listen select change and re-render
  picker.addEventListener('change', render, false);

  function render(event) {
    let target = event.target || event.srcElement;
    let name = target.name;
    if (target.nodeName.toUpperCase() === 'SELECT') {
      if (name === 'province') {
        areaNode.innerHTML = `<option value='dq'>--地区--</option>`; // reset areaNode
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
      console.log(dataSelected)
    }
  }
  return dataSelected;
}
