import { ChineseDistricts as CD} from './citydate.js';

export function loop(selectTarget,node,zone) {
  let index = selectTarget.selectedIndex;
  let value = selectTarget.options[index].value;
  for(let items in CD[value]) {
    if(items && CD[value][items]) {
      zone += `<option value=${items}>${CD[value][items]}</option>`;
    }
  }
  node.innerHTML = zone;
  return value;
}
