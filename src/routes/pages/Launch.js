import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Form, Modal, Input, Button, message, Cascader, DatePicker, InputNumber, Upload, Typography } from "antd";

import crypto from "crypto";
import { createAsset } from "../../api/method/server.js";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;

const doctype = "charitydemo";

const _md5 = (content) => {
  if (!content) return null;
  const md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
};

let userData = JSON.parse(window.localStorage.getItem("user")) || {};
const userId = userData && userData.id ? userData.id : null;
const token = userData && userData.token ? userData.token : null;

const UploadProject = async (values, callback) => {
  //将UI表单拿到的values处理成标准的项目obj
  const id = new Date().getTime();
  const imgList = [];
  const imgListDefault = [
    {
      thumbUrl: "https://img1.baidu.com/it/u=4234325487,282886408&fm=253&fmt=auto&app=138&f=JPEG?w=236&h=238",
    },
  ];
  (values.upload ?? imgListDefault).forEach((item, index) => {
    imgList.push(item.thumbUrl);
  });
  // eslint-disable-next-line no-unused-vars
  const [UNDERPLANNING, INPROGRESS] = [0, 1];
  const asset = {
    id,
    title: values.projectTitle,
    desc: values.projectBrief,
    aim: values.projectAim,
    present: 0,
    paragraph: values.projectParagraph,
    donateNum: 0,
    volunteerNum: 0,
    status: UNDERPLANNING,
    imgList,
    filingNo: "53100000500009167KA21008",
    owner: userId,
  };
  console.log(asset);

  console.log(`try to create a new asset`);
  let ledgerInfo = await createAsset(token, doctype, asset);
  console.log(`create new asset succeed!! \n ${JSON.stringify(ledgerInfo, null, 4)}`);
  message.success("创建成功");
  //更新用户信息
  //敬请期待
  callback(ledgerInfo.ledgerInfo);
};

/***
	上传验证格式及大小
*/
// eslint-disable-next-line no-unused-vars
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传JPG或PNG文件!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片大小需小于2MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
}

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function Launch() {
  const [isModalOpen, setModalOpen] = useState(false); //对话框显示与否用这个而不是open属性 踩坑
  const [modalContents, setModalContents] = useState(["测试", "aaa", "bbb"]); //对话框正文内容列表
  const [modalTitle, setModalTitle] = useState("标题"); //对话框标题
  const [modalLoding, setModalLoding] = useState(false); //上传时提交按钮进入加载状态
  const [submitDisabled, setSubmitDisabled] = useState(false); //禁止提交按钮
  const [projectInfo, setProjectInfo] = useState({}); //要提交的项目信息

  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = () => {
    setModalOpen(false);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  const handleSubmit = () => {
    setModalLoding(true);
    UploadProject(projectInfo, (ledgerInfo) => {
      const { txid, hash } = ledgerInfo;
      const { height, currentBlockHash } = hash;
      const currentBlockHash_md5 = _md5(currentBlockHash);
      setModalTitle("创建成功!");
      setModalLoding(false);
      setSubmitDisabled(true);
      setModalContents(["txid: " + txid, "区块高度: " + height, "区块哈希: ", currentBlockHash_md5]);
    });
  };

  const onFinish = (values) => {
    //必填项 项目标题 项目简介 项目内容 目标额度
    const { projectTitle, projectBrief, projectParagraph, projectAim } = values;
    if (!(projectTitle && projectBrief && projectParagraph && projectAim)) {
      message.error("表单未完成");
      return;
    }
    let contents = ["项目标题: " + projectTitle, "项目简介: " + projectBrief, "项目详情: " + projectParagraph, "项目目标: " + projectAim];
    setModalTitle("项目信息");
    setModalContents(contents);
    setProjectInfo(values);
    showModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  useEffect(() => {
    userData = JSON.parse(window.localStorage.getItem("user")) || {};
    if (!userData.id) {
      navigate("/login");
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //wdnmdReact,wrnm

  return (
    <div id="contact" className="block contactBlock" style={{ marginLeft: "5%", marginRight: "15%" }}>
      <div className="container-fluid">
        <div className="titleHolder"></div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          onFinish={onFinish} //提交打开信息确认窗口
          onFinishFailed={onFinishFailed}
        >
          <div></div>

          <Title>申请项目</Title>
          <Form.Item label="项目名称" name="projectTitle" required="true">
            <Input />
          </Form.Item>
          <Form.Item label="项目简介" name="projectBrief" required="true">
            <Input maxLength={150} />
          </Form.Item>
          <Form.Item label="目标额度" name="projectAim" required="true">
            <Input type={"number"} />
          </Form.Item>
          <Form.Item label="项目地区" name="projectLotation">
            <Cascader
              options={[
                {
                  value: "浙江",
                  label: "浙江",
                  children: [
                    {
                      value: "广州",
                      label: "广州",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="项目日期" name="projectDate">
            <RangePicker />
          </Form.Item>
          <Form.Item label="志愿者人数" name="volunteerNum">
            <InputNumber type={"number"} />
          </Form.Item>
          <Form.Item label="项目详细介绍" name="projectParagraph" required="true">
            <TextArea rows={4} maxLength={500} />
          </Form.Item>

          <Form.Item name="upload" label="上传图片" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>点击上传</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="确认申请">
            <Button htmlType="submit">提交 </Button>
          </Form.Item>
        </Form>
        <div>
          <Modal
            title={modalTitle}
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                返回
              </Button>,
              <Button key="submit" type="primary" loading={modalLoding} disabled={submitDisabled} onClick={handleSubmit}>
                提交
              </Button>,
            ]}
          >
            <>
              {modalContents.map((value, index) => {
                return <p key={index}>{value}</p>;
              })}
            </>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Launch;
