/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/StormBook/common/standalone.module.js';

const Build = () => html`
<div class="divBuild">
      <div class="divBuildTitle"> <p> Build 1
      </p></div>
      
      
      <table>  
      
      <colgroup>
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
      </colgroup>
      
      <tr>
      <th>1</th>
      <th>4</th>
      <th>7</th>
      <th>10</th>
      <th>13</th>
      <th>16</th>
      <th>20</th>
      </tr>
      
      <tr class="rowTalent">
         <td><img src="../../images/talents/Alarak/01_Extended_Lightning.png" class="imgTalent"/> </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
         
      </tr>
      
   </table>
  
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate">  </div>
      <div> 55.5% </div>
   </div>
  
  </div>
`;


render(html`<${Build}/>`, document.getElementById("divBuildAll"));
   