import { w as writeAndUnwriteText } from './writeAndUnwriteText-14ec1983.js';
import { a as animationSetup, m as makeNestedStaticElementsVisible } from './animationSetup-52524301.js';
import './writeEffect-cf9d4dbc.js';
import './unwriteEffect-36ae58a6.js';
import './ssr-1bcfe341.js';

const loop = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    for (const element of elements)
      await writeAndUnwriteText(element, options);
  }
};

export { loop as default };
//# sourceMappingURL=loop-775ace92.js.map
