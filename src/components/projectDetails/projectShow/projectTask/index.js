import React from "react";

import { Timeline } from "antd";

import "./index.css";

function ProjectTask(props) {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <Timeline pending="持续追踪项目进展中...">
            <Timeline.Item color={"green"}>
              截止2022年3月29日10：30分，项目共筹集资金8511.13。自12日启动紧急救助响应机制、成立专项工作小组以来，我们持续了解一线需求，继续积极动员企业及公众参与捐款捐物，感谢您的关注与支持！
              2022-3-29
            </Timeline.Item>
            <Timeline.Item color={"green"}>
              截止2022年3月22日14：30，项目在布吉岛平台上线以来共筹集捐款7840.83元。针平台3月12日启动紧急救助响应机制，成立专项工作小组。 2022-3-22
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default ProjectTask;
