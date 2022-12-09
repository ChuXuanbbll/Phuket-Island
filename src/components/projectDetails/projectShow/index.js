import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined, SettingOutlined, ProjectOutlined } from "@ant-design/icons";
import "./index.css";
import { useState } from "react";

import ProjectTack from "./projectTask/";
import ProjectDaoInfo from "./projectDaoInfo/";

const { Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("项目详情", "sub1", <ProjectOutlined />, [getItem("项目简介", "1"), getItem("项目内容", "2"), getItem("项目进展", "3")]),
  getItem("区块信息", "sub2", <AppstoreOutlined />, [getItem("组织信息", "4"), getItem("区块数据", "5")]),
  getItem("捐款记录", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function ProjectShow(props) {
  const contents = [
    {
      tag: "项目简介",
      layout: (
        <div>
          <div className="project_title">
            <h2>{props.title}</h2>
          </div>
          <div className="project_paragraph">
            <p>{props.desc}</p>
          </div>
        </div>
      ),
    },
    {
      tag: "项目内容",
      layout: (
        <div>
          <div className="project_title">
            <h2>{props.title}</h2>
          </div>
          <div className="project_paragraph">
            <p>{props.paragraph}</p>
          </div>
        </div>
      ),
    },
    {
      tag: "项目进度",
      layout: (
        <div>
          <div className="project_title">
            <h2>项目进展</h2>
          </div>
          <div style={{ margin: "20px" }}>
            <ProjectTack></ProjectTack>
          </div>
        </div>
      ),
    },
    {
      tag: "组织信息",
      layout: (
        <div>
          <div style={{ margin: "20px" }}>
            <ProjectDaoInfo {...props}></ProjectDaoInfo>
          </div>
        </div>
      ),
    },
  ];
  const [showContent, setShowContent] = useState(contents[0].layout);

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    console.log(latestOpenKey);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout style={{ height: "30rem", margin: "2rem" }}>
      <Sider>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: "100%",
            height: "100%",
          }}
          items={items}
          onClick={(item) => {
            console.log(item);
            console.log(item.key, typeof (item.key - 0));
            let index = item.key - 1; //类型强转number 用作数组下标
            if (isNaN(index) || index > contents.length - 1) index = 0; //避免出错
            setShowContent(contents[index].layout);
          }}
        />
      </Sider>
      <Layout style={{ "background-color": "#eeeeee" }}>
        <Content>{showContent}</Content>
      </Layout>
    </Layout>
  );
}

export default ProjectShow;
