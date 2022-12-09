import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Radio, Form, Input, message, Modal } from "antd";
import crypto from "crypto";
import "./index.css";

import { getAccessToken, createAsset, getAsset, updateAsset } from "../../../api/method/server.js";

const admin = "Evan Ford";
const doctype = "charityD";

let userData = JSON.parse(window.localStorage.getItem("user")) || {};
const userId = userData && userData.id ? userData.id : null;
const token = userData && userData.token ? userData.token : null;

function _md5(content) {
  if (!content) return null;
  const md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

const getProjectDetails = async (id) => {
  const { token } = await getAccessToken(admin); //#####
  const doctype = "charitydemo";
  console.cyan(`try to get asset`);
  const assetFromBlockchain = await getAsset(token, id, doctype);
  console.log(`got asset asset success!!  `);
  return assetFromBlockchain.asset;
};

//提交捐款信息 更新项目数据
const UploadDonate = async (values, callback) => {
  const id = new Date().getTime();
  const { project, projectTitle, user, amont, message } = values;
  const hash = _md5(JSON.stringify(values));
  const asset = {
    id,
    project,
    projectTitle,
    user,
    time: new Date().getTime(),
    hash,
    amont,
    message,
  };
  console.log(asset);

  console.cyan(`try to create a new asset`);
  let ledgerInfo = await createAsset(token, doctype, asset);
  console.log(`create new asset succeed!! \n ${JSON.stringify(ledgerInfo, null, 4)}`);
  //更新项目信息
  getProjectDetails(project).then((res) => {
    res.present = res.present + amont;
    updateAsset(token, res.id, res.docType, res);
  });
  //更新用户信息
  //敬请期待
  callback(ledgerInfo.ledgerInfo);
};

const DonateDrawer = (props) => {
  const [isDraweropen, setDrawerOpen] = useState(false); //抽屉是否打开
  const [isModalOpen, setModalOpen] = useState(false); //对话框是否打开
  const [modalContents, setModalContents] = useState(["测试", "aaa", "bbb"]); //对话框正文内容列表
  const [modalTitle, setModalTitle] = useState("标题"); //对话框标题
  const [modalLoding, setModalLoding] = useState(false); //上传时提交按钮进入加载状态
  const [submitDisabled, setSubmitDisabled] = useState(false); //禁止提交按钮
  const [donateInfo, setDonateInfo] = useState({}); //要提交的交易信息

  //drawer的方法
  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const onFinish = (values) => {
    //必填项 捐助额度 捐款留言
    const { donateAmont, donateMessage } = values;
    console.log("#$#$#$#", values, donateAmont, donateMessage);
    if (!(donateAmont && donateMessage)) {
      message.error("表单未完成");
      return;
    }

    let contents = ["捐助项目: " + props.title, "捐助数量: " + donateAmont, "捐助者: " + userId, "捐助留言: " + donateMessage];
    setModalTitle("捐助信息");
    setModalContents(contents);
    setDonateInfo({
      project: props.id,
      projectTitle: props.title,
      amont: donateAmont,
      user: userId,
      message: donateMessage,
    });
    showModal();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //对话框的方法
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
    UploadDonate(donateInfo, (ledgerInfo) => {
      const { txid, hash } = ledgerInfo;
      const { height, currentBlockHash } = hash;
      const currentBlockHash_md5 = _md5(currentBlockHash);
      setModalTitle("捐助成功!");
      setModalLoding(false);
      setSubmitDisabled(true);
      setModalContents(["txid: " + txid, "区块高度: " + height, "区块哈希: ", currentBlockHash_md5]);
    });
  };
  //没登陆跳转登录
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
    <>
      <div className="location">
        <Button className="button" shape="round" onClick={showDrawer}>
          我要捐助
        </Button>
        <p>增人玫瑰，手留余香</p>
      </div>
      <div className="drawer">
        <Drawer title="捐助账单" placement="bottom" height={500} onClose={closeDrawer} visible={isDraweropen}>
          <div style={{ height: "100%", width: "60%" }}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              layout="horizontal"
              initialValues={{
                donateAmont: 0,
                donateMessage: " ",
              }}
              onFinish={onFinish} //提交打开信息确认窗口
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="捐赠金额" name="donateAmont">
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value={10}>10元</Radio.Button>
                  <Radio.Button value={20}>20元</Radio.Button>
                  <Radio.Button value={50}>50元</Radio.Button>
                  <Radio.Button value={100}>100元</Radio.Button>
                  <Radio.Button value={0}>其他</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="捐助留言" name="donateMessage">
                <Input.TextArea rows={4} maxLength={150} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="button" shape="round">
                  确认捐赠
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Drawer>
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

      <div></div>
    </>
  );
};
export default DonateDrawer;
