import React, { useState } from "react";
import { FloatLabel } from "../../components/common";
import { Form, Button, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import "./index.scss";

import userImg from "../../assets/images/top-creator4.png";

const dateFormat = "YYYY/MM/DD";

const ProfileSettingTab = () => {
  const storedFormData = JSON.parse(localStorage.getItem("formData"));

  const [name, setName] = useState(storedFormData?.firstName || "Aryaa Patel");
  const [email, setEmail] = useState(
    storedFormData?.email || "akp.arvindpatel@gmail.com"
  );
  const [mobile, setMobile] = useState(
    storedFormData?.mobile || "+971 525511634"
  );

  const [dob, setDob] = useState("Shivani Patel");
  const [gender, setGender] = useState("male");
  const [maritalStatus, setmaritalStatus] = useState("Marital Status");
  const [minimumSpend, setminimumSpend] = useState("54 AED");
  return (
    <div className="right-tab-inner">
      <h1 className="tab-heading">Profile Setting</h1>
      <div
        className="tab-content profile-setting"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <Form name="basic" autoComplete="off" layout="vertical">
          <div className="change-profile-row">
            <div className="profile-img">
              <img src={userImg} alt="" />{" "}
            </div>
            <Button type="text">Change Photo</Button>
          </div>
          <Form.Item className="icon-less">
            <FloatLabel label="Name" name="name" value={name}>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel label="Email" name="email" value={email}>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel label="Mobile" name="mobile" value={mobile}>
              <Input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel label="Date of Birth" name="dob" value={dob}>
              <DatePicker
                defaultValue={dayjs("2015/01/01", dateFormat)}
                onChange={(e) => setDob(e.target.value)}
                format={dateFormat}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel label="Gender" name="gender" value={gender}>
              <Select
                defaultValue="male"
                suffixIcon={false}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel
              label="Marital Status"
              name="maritalStatus"
              value={maritalStatus}
            >
              <Input
                value={maritalStatus}
                onChange={(e) => setmaritalStatus(e.target.value)}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="icon-less">
            <FloatLabel
              label="Minimum Spend"
              name="minimumSpend"
              value={minimumSpend}
            >
              <Input
                value={minimumSpend}
                onChange={(e) => setminimumSpend(e.target.value)}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item className="m-0 py-3">
            <Button type="secondary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfileSettingTab;
