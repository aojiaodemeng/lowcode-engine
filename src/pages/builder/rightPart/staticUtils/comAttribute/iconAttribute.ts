import { ComAttribute } from "./interface";

const iconAttribute: ComAttribute[] = [
  {
    label: "图标旋转角度",
    value: "rotate",
    type: "number",
  },
  {
    label: "是否有旋转动画",
    value: "spin",
    type: "switch",
  },
  {
    label: "选择图标",
    value: "type",
    type: "modal",
    modalType: "IconSelect", // 新增弹窗类型， modalType是弹窗的类型（确定是哪个弹窗）
  },
];

export { iconAttribute };
