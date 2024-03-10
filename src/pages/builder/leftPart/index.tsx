import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import * as components from "./component";
import Store from "../../../store";
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

  const renderComponet = () => {
    return (
      <div>
        {Object.keys(components).map((name) => {
          return (
            <div
              onDragStart={onDragStart(name)}
              draggable
              key={name}
              className="componentItem"
            >
              <div style={{ display: "inline-block" }}>
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const items: TabsProps["items"] = [
    {
      key: "component",
      label: (
        <div style={{ fontSize: "18px", width: "100px", textAlign: "center" }}>
          组件
        </div>
      ),
      children: renderComponet(),
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
