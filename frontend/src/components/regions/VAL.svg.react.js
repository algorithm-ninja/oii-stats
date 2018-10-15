function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

import React from "react";
export default _ref => {
  let { styles = {} } = _ref,
    props = _objectWithoutProperties(_ref, ["styles"]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42.677"
      height="28.767"
      viewBox="0 0 11.291718 7.611393"
      {...props}
    >
      <path
        d="M10.474.978l-.116.212.138.738-.116.305-.011.679.216.433.426.245.077.252-.31.59.332.543-.227.14-.188.46-.465-.034-.514.221-.105.163-.51.338-.099-.105-.442.082-.305-.233-.36.082-.093-.216-.41-.163-.337.192-.227-.093-.332.081-.166.303-.277.117-.442.425-.144-.128-.37.163-.504-.012-.448.611-.614-.22-.377-.274-.077.465-.127.117-.432-.18-.033-.297-.46-.152-.143-.635-.061-.892.254-.385-.426-.087-.409.029-.188-.362-.387-.076-.415-.532-.116-.537.083-.925.542.041.138-.182.46-.146.149-.17.564-.316.017-.323.36-.293.702.891.343-.281.343.275.293-.41.387-.006.327-.463.487.117.442.24.382-.252.16-.222.271-.042.023-.234.22-.159.421.082.089-.387.254-.041.117.194.824.03.37.328.183.305.21-.217.47.281z"
        fill="#fff"
        stroke="#000"
        strokeWidth=".265"
      />
    </svg>
  );
};