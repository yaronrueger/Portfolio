import { w as writeEffect } from './writeEffect-cf9d4dbc.js';
import { a as animationSetup } from './animationSetup-52524301.js';
import './ssr-1bcfe341.js';

const cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
const cascade = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  cleanChildText(elements);
  for (const element of elements) {
    await writeEffect(element, options);
    if (options.keepCursorOnFinish) {
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      !isLastElement && element.currentNode.classList.replace("typing", "finished-typing");
    } else {
      element.currentNode.classList.replace("typing", "finished-typing");
    }
    const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
    cursorHasTimeout && setTimeout(() => {
      element.currentNode.classList.replace("typing", "finished-typing");
    }, options.keepCursorOnFinish);
  }
  options.dispatch("done");
};

export { cascade as default };
//# sourceMappingURL=cascade-5167c3b3.js.map
