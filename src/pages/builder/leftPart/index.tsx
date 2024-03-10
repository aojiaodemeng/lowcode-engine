import React from "react";
import { Tabs, CollapseProps, Collapse } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import * as components from "./component";
import Store from "../../../store";
import { componentIconMap, componentTextMap } from "./iconList";
declare global {
  //设置全局属性
  interface Window {
    //window对象属性
    nowCom: string; //加入对象
    renderCom: any;
    comList: any[];
    setComList: any;
  }
}
export const LeftPart = () => {
  const onDragStart = (name: string) => {
    return () => {
      console.log("onDragStart:", name);
      // window.nowCom = name;
      // 更新当前拖拽的节点
      Store.dispatch({ type: "changeNowCom", value: name });
    };
  };

  console.log(components);
  const renderComponent = (comTypeList: string[]) => {
    const list = Object.keys(components).filter((item) =>
      comTypeList.includes(item)
    );
    return (
      <div className="componetGroup">
        {list.map((name) => {
          const Icon = componentIconMap[name];
          const text = componentTextMap[name];
          return (
            <div key={name} className="componentItem">
              <div
                onDragStart={onDragStart(name)}
                draggable
                style={{ display: "inline-block" }}
              >
                <Icon style={{ marginRight: "10px" }} />
                <span>{text}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  // 每个折叠面板下，根据不同的组件列表类型，展示不同的组件
  const collapseItems: CollapseProps["items"] = [
    {
      key: "enterDataCom",
      label: "数据录入组件",
      children: renderComponent([
        "Input",
        "Checkbox",
        "Radio",
        "Rate",
        "Switch",
      ]),
    },
    {
      key: "containerCom",
      label: "容器组件",
      children: renderComponent(["Card"]),
    },
    {
      key: "otherCom",
      label: "其他组件",
      children: renderComponent(["Button", "Icon"]),
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "component",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          组件
        </div>
      ),
      children: (
        <Collapse
          className="comCollapse"
          items={collapseItems}
          defaultActiveKey={"enterDataCom"}
        />
      ),
    },
    {
      key: "data",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          数据
        </div>
      ),
      children: "Content of Tab Pane 2",
    },
  ];

  const onChange = () => {};
  return (
    <div className="leftPart">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
