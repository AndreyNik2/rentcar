import { styled } from "styled-components";

export const Dd = styled.div`
  position: relative;
  z-index: 3;
`;

export const DropdownContainer = styled.div`
  width: 224px;
  height: 41px;
  border-radius: 8px;
  background-color: #f7f7fb;
  position: relative;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const SelectedTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #3470ff;
  padding-left:10px;
`;

export const DropdownBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 41px;
  height: 41px;
  outline: none;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: #d9d9dc;
  }
`;

export const DdList = styled.ul`
position: absolute;
border-radius:12px;
overflow: hidden;
  width: 224px;
  list-style: none;
`;

export const DdItem = styled.li`
  display: flex;
  padding-left:10px;
  align-items:center;
  border-bottom:1px solid #d9d9dc;
  width: 214px;
  height: 30px;
  background-color: #f7f7fb;
  &:hover {
    background-color: #d9d9dc;
  }
`;

export const DdListTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
`;
