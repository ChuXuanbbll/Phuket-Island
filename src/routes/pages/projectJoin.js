/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProjectPics from "../../components/projectDetails/projectPics/";
import Paragraph from "../../components/projectDetails/paragraph/";
import ProjectProgress from "../../components/projectDetails/projectProgress/";
import JoinDrawer from "../../components/projectDetails/joinDrawer/";

import { getAsset } from "../../api/method/server.js";

const doctype = "charitydemo";

let userData = JSON.parse(window.localStorage.getItem("user")) || {};
const userId = userData && userData.id ? userData.id : null;
const token = userData && userData.token ? userData.token : null;

const projectInfoDefault = {
  //这个是参数
  id: 114514,
  title: "标题加载中...",
  paragraph: "正文加载中...",
  imgList: [
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
  ],
  progress: 75.565656,
};

//需要数据库

function ProjectDetails(props) {
  const [search, setSearch] = useSearchParams();
  // search 是Set结构。需要用get方法来取值
  // setSearch 也是函数，可以用来设置 ?xxx=xxx
  const id = search.get("id");
  const [projectInfo, setProjectInfo] = useState(projectInfoDefault);

  const getProjectDetails = async (id) => {
    console.cyan(`try to get asset`);
    const assetFromBlockchain = await getAsset(token, id, doctype);
    console.log(`got asset asset success!!  `);
    return assetFromBlockchain.asset;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjectDetails(id).then((res) => {
      console.log("rojectInfo", res);
      setProjectInfo(res);
    });
  }, [id]); //wdnmdReact

  return (
    <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
      <ProjectPics {...projectInfo}></ProjectPics>
      <Paragraph {...projectInfo}></Paragraph>
      <JoinDrawer {...projectInfo}></JoinDrawer>
    </div>
  );
}
export default ProjectDetails;
