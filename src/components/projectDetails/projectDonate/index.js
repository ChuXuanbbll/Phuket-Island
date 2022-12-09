import React from "react";
import { Layout, Progress, Button } from "antd";
import "./index.css";

const { Content } = Layout;

function ProjectDonate(props) {
  return (
    <Layout style={{ height: "20rem", margin: "2rem", "flex-direction": "row" }}>
      <img alt={"img"} src={props.imgList[0]} style={{ height: "100%", width: "40%" }} />
      <Layout>
        <Content>
          <div className="project_paragraph">
            <h2>{props.title}</h2>
          </div>
          <Layout style={{ "flex-direction": "row", "justify-content": "space-between" }}>
            <div className="project_progress_detail">
              <p>已筹金额</p>
              <p className="project_progress_number">{props.present || 0}</p>
            </div>
            <div className="project_progress_detail">
              <p>捐款次数</p>
              <p className="project_progress_number">{props.donateNum || 0}</p>
            </div>
            <div className="project_progress_detail">
              <p>志愿人数</p>
              <p className="project_progress_number">{props.volunteerNum || 0}</p>
            </div>
          </Layout>
          <Progress
            percent={((props.present / props.aim) * 100).toFixed(2) || 0}
            status="active"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
          />
          <Layout style={{ "flex-direction": "row", "justify-content": "space-between" }}>
            <div className="project_progress_detail">
              <Button className="button" shape="round" style={{ marginTop: "20px" }}>
                我要捐助
              </Button>
            </div>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ProjectDonate;
