import { w as writeAndUnwriteText } from './writeAndUnwriteText-14ec1983.js';
import { a as animationSetup, m as makeNestedStaticElementsVisible, b as rng } from './animationSetup-52524301.js';
import './writeEffect-cf9d4dbc.js';
import './unwriteEffect-36ae58a6.js';
import './ssr-1bcfe341.js';

let alreadyChoosenTexts = [];
const getRandomElement = (elements) => {
  while (true) {
    const randomIndex = rng(0, elements.length);
    const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === "number" && randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
    const hasSingleChildElement = elements.length === 1;
    const shouldAnimate = hasSingleChildElement || isTextFirstTime || isTextDifferentFromPrevious;
    if (shouldAnimate) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};
const loopRandom = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    const element = getRandomElement(elements);
    await writeAndUnwriteText(element, options);
  }
};

export { loopRandom as default };
//# sourceMappingURL=loopRandom-ca2da564.js.map
