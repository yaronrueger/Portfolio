import { a as animationSetup, r as runOnEveryParentUntil } from './animationSetup-52524301.js';
import { w as writeEffect, t as typingInterval } from './writeEffect-cf9d4dbc.js';
import { u as unwriteEffect } from './unwriteEffect-36ae58a6.js';
import './ssr-1bcfe341.js';

const loopOnce = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  for (const element of elements) {
    const { currentNode, text } = element;
    await writeEffect(element, options);
    const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
    const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
    if (fullyWritten) {
      options.dispatch("done");
      await typingInterval(options.wordInterval);
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      if (!isLastElement) {
        await unwriteEffect(currentNode, options);
        runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
          currentNode === element2 ? element2.classList.remove("typing") : element2.classList.remove("finished-typing");
        });
      }
      runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
        const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
        cursorHasTimeout && setTimeout(() => {
          element2.classList.replace("typing", "finished-typing");
        }, options.keepCursorOnFinish);
      });
    }
  }
};

export { loopOnce as default };
//# sourceMappingURL=loopOnce-0c88e611.js.map
