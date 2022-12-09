import React from "react";

import { Badge, Descriptions } from "antd";

import "./index.css";

function ProjectDaoInfo(props) {
  return (
    <div>
      <Descriptions title="DAO 组织信息" column={3} bordered={true}>
        <Descriptions.Item label="项目名称" span={2}>
          {props.title || "无"}
        </Descriptions.Item>
        <Descriptions.Item label="目标金额" span={2}>
          {props.aim || 0}
        </Descriptions.Item>
        <Descriptions.Item label="志愿人数" span={2}>
          10
        </Descriptions.Item>
        <Descriptions.Item label="申请时间" span={2}>
          {String(new Date(Number(props.id)))}
        </Descriptions.Item>
        <Descriptions.Item label="项目地点" span={2}>
          江苏省无锡市
        </Descriptions.Item>
        <Descriptions.Item label="负责人" span={2}>
          {props.owner}
        </Descriptions.Item>
        <Descriptions.Item label="备案编号" span={2}>
          {props.filingNo || "0000000000000"}
        </Descriptions.Item>

        <Descriptions.Item label="项目状态" span={2}>
          <Badge status="processing" text="进行中" />
        </Descriptions.Item>
        <Descriptions.Item label="行动方案">
          确定受捐助群体，募集志愿者10名，成立临时采购部门、物流部门、统计部门、监督部门等
          <br />
          公布信息，筹集善款于物资，接受公众评价
          <br />
          接受公众监督，保证募捐过程种资金与物资流向透明公开
          <br />
          统计筹集的物资，准备采购或发放给受捐助群体，志愿者在此过程中协助
          <br />
          物流部门发放物资，受捐助这确认收到捐助
          <br />
          开展项目结束会议，赠送志愿者纪念品
          <br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default ProjectDaoInfo;
