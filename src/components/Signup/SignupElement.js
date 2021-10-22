import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkB } from "react-router-dom";
import { Link as LinkC } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: ;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 281, 122, 1) 100%
  );
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and(max-width:400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.div`
  margin-bottom: 24px;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`;
export const FormInput = styled.input`
  padding: 6.5px 6.5px;
  margin-bottom: 6px;
  border: none;
  border-radius: 8px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  margin-top: 25px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormBtnLink = styled(LinkC)`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const TextLink = styled(LinkB)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
