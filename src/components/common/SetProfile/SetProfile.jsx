import React from "react";
import styled from "styled-components";
import { Button } from "../../../GlobalStyle";
import SetprofileHeader from "./SetProfileHeader/SetprofileHeader";
import SetProfileImage from "./SetProfileImage/SetProfileImage";
import SetProfileInput from "./SetProfileInput/SetProfileInput";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartButton = styled(Button)`
  width: 80%;
  font-size: 16px;
  color: white;
  padding: 13px 0;
  margin: 20px 0;
`;

export default function SetProfile() {
  return (
    <Wrapper>
      <SetprofileHeader />
      <SetProfileImage />
      <SetProfileInput
        id="username"
        label="사용자 이름"
        placeholder="2~10자 이내여야 합니다."
      />
      <SetProfileInput
        id="accountname"
        label="계정 ID"
        placeholder="영문, 숫자, 특수문자(.), (...)만 사용 가능합니다."
      />
      <SetProfileInput
        id="intro"
        label="소개"
        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
      />
      <StartButton>감귤마켓 시작하기</StartButton>
    </Wrapper>
  );
}