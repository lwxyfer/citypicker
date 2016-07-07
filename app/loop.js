import { ChineseDistricts as CD} from './citydate.js';
/**
 * [render different node]
 * @param  {[Object]} selectTarget [event object]
 * @param  {[Object]} node         [which node to render]
 * @param  {[String]} data         [the string to render]
 * @return  [postcode]
 */
export function loop(selectTarget,node,data) {
  let index = selectTarget.selectedIndex;
  let value = selectTarget.options[index].value;
  for(let items in CD[value]) {
    if(items && CD[value][items]) {
      data += `<option value=${items}>${CD[value][items]}</option>`;
    }
  }
  node.innerHTML = data;
  return value;
}
