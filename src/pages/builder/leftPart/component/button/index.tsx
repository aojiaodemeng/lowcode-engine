import { Button as AntButton } from "antd";

export default function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size, type, comStyle } =
    props;
  const IconComponent = require("@ant-design/icons")[type];
  return (
    <div>
      <AntButton
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        shape={shape}
        size={size}
        icon={type ? <IconComponent /> : null}
        style={{ ...comStyle }}
      >
        {caption || "按钮"}
      </AntButton>
    </div>
  );
}
