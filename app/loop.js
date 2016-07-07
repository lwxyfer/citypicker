import { ChineseDistricts as CD} from './citydate.js';

export function loop(target,node,zone) {
  let index = target.selectedIndex;
  let value = target.options[index].value;

  for(let items in CD[value]) {
    if(items && CD[value][items]) {
      zone += `<option value=${items}>${CD[value][items]}</option>`;
    }
  }
  node.innerHTML = zone
}
