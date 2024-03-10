import { Input, Switch, Select, Button, ColorPicker } from "antd";
import { useState } from "react";
export default function InputComponent(props: any) {
  const {
    onChange,
    type,
    defaultValue,
    options,
    value,
    modalType,
    selectNode,
    label,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  // 获取组件的弹窗
  const ModalComponent = require("../../../modal")[modalType || "IconSelect"];
  // const ModalComponent = "IconSelect"

  const showModal = () => {
    setOpenModal(true);
  };

  const getComponent = () => {
    switch (type) {
      case "input": {
        return (
          <Input
            style={{ width: "120px" }}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      }
      case "switch": {
        return <Switch defaultValue={defaultValue} onChange={onChange} />;
      }
      case "select": {
        return (
          <Select
            style={{ width: "120px" }}
            options={options}
            defaultValue={defaultValue}
            onChange={onChange}
          ></Select>
        );
      }
      case "number": {
        return (
          <Input
            type="number"
            value={
              selectNode[value] ||
              parseInt(selectNode?.comStyle?.[value] || "") ||
              "0"
            }
            style={{ width: "120px" }}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        );
      }
      case "modal": {
        return (
          <Button onClick={showModal} style={{ width: "120px" }}>
            {label}
          </Button>
        );
      }
      case "color": {
        return (
          <ColorPicker
            disabledAlpha
            showText
            value={selectNode?.comStyle?.[value] || ""}
            style={{ width: "120px" }}
            defaultValue={defaultValue}
            onChangeComplete={onChange}
          />
        );
      }
    }
  };

  return (
    <div>
      {getComponent()}
      <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
