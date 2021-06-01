import { css, cx } from "emotion";
import React from "react";

const Button = React.forwardRef(function (props, ref) {
  return (
    <button
      ref={ref}
      className={cx(css`
        appearance: none;
        border: none;
        padding: 9px 24px;
        border-radius: 4px;
        background: ${props.isDarkTheme ? '#969696' : '#39b0a4'};
        font-size: 14px;
        line-height: 18px;
        font-weight: bold;
        color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
      `)}
      {...props}
    />
  );
});

export default React.memo(Button);