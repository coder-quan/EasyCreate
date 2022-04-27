interface ComponentCode {
  [name: string]: (className: string, text: string) => string;
}
// 特殊组件的html代码
export const componentCode: ComponentCode = {
  eaCheckbox: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
  eaMerryGoRound: (className: string, text: string): string =>
    `<div class="slide ${className}">
    <input
      type="radio"
      name="sildeInput"
      value="0"
      id="sildeInput1"
      checked
      hidden
    />
    <label for="sildeInput1">1</label>
    <input
      type="radio"
      name="sildeInput"
      value="1"
      id="sildeInput2"
      hidden
    />
    <label for="sildeInput2">2</label>
    <input
      type="radio"
      name="sildeInput"
      value="1"
      id="sildeInput3"
      hidden
    />
    <label for="sildeInput3">3</label>
    <ul>
      <li>one-点击切换</li>
      <li>two-点击切换</li>
      <li>three-点击切换</li>
    </ul>
  </div>`,
  eaNav: (className: string, text: string): string =>
    `<div class="nav ${className}">
    <div class="container">
    <ul>
    <li><a href="#">首页</a></li>
    <li>
    <a href="#">博客</a>
    <ul>
    <li><a href="#">html</a></li>
    <li><a href="#">css</a></li>
    <li><a href="#">js</a></li>
    <li><a href="#">ts</a></li>
    </ul>
    </li>
    <li>
    <a href="#">论坛</a>
    <ul>
    <li><a href="#">html</a></li>
    <li><a href="#">css</a></li>
    <li><a href="#">js</a></li>
    <li><a href="#">ts</a></li>
    </ul>
    </li>
    <li><a href="#">关于我们</a></li>
    </ul>
    </div>
    </div>`,
  eaRadio: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="radio" name="easycreate" />\n${text}\n</div>`,
  eaTable: (className: string, text: string): string =>
    `<table class="${className}">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Savings</th>
    </tr>
    <tr>
      <td>Bill</td>
      <td>Gates</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>Steve</td>
      <td>Jobs</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>Elon</td>
      <td>Musk</td>
      <td>$300</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Zuckerberg</td>
      <td>$250</td>
    </tr>
  </table>`,
};
