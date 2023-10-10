import { FC, useState } from "react";
import { ICar } from "../models/ICar";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  DropdownContainer,
  DropdownBtn,
  Dd,
  DdList,
  DdItem,
  DdListTitle,
  SelectedTitle,
} from "./Dropdown.styled";
import { nanoid } from "nanoid";

type Props = {
  title: string;
  list: string[];
  set: (string: string) => void;
  selected: string;
};

export const Dropdown: FC<Props> = ({ title, list, set, selected }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Dd>
      {list.length > 0 && (
        <>
          <p>{title}</p>
          <DropdownContainer>
            <DropdownBtn onClick={() => setIsShow(!isShow)}>
              {!isShow && <AiOutlineDown />}
              {isShow && <AiOutlineUp />}
            </DropdownBtn>
            <SelectedTitle>{selected}</SelectedTitle>
          </DropdownContainer>
          {isShow && (
            <DdList>
              {list.map((item) => (
                <DdItem
                  key={nanoid()}
                  onClick={() => {
                    set(item);
                    setIsShow(false);
                  }}
                >
                  <DdListTitle>{item}</DdListTitle>
                </DdItem>
              ))}
              <DdItem
                onClick={() => {
                  set('');
                  setIsShow(false);
                }}
              >
                <DdListTitle>Reset filter</DdListTitle>
              </DdItem>
            </DdList>
          )}
        </>
      )}
    </Dd>
  );
};
