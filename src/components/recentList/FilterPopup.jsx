import React, { Component } from 'react';
import { IoClose } from 'react-icons/io5';
import styled from '@emotion/styled';
import Button from 'components/common/Button';
import { InputGroup } from 'components/recentList';

class FilterPopup extends Component {
  render() {
    const { isOpen, setIsOpen, setFilteredItems, getSortedLowPrice } =
      this.props;
    const onChangeHandler = func => {
      func();
      setIsOpen();
    };
    const inputInfo = [
      { value: 'recent_view', title: '최근 조회 순', method: setFilteredItems },
      { value: 'row_price', title: '낮은 가격 순', method: getSortedLowPrice },
    ];
    return (
      <FilterPopupStyle isOpen={isOpen}>
        <CloseButtonStyle
          name={'btn_close'}
          ariaLabel={'close_popup'}
          onClick={setIsOpen}
        >
          <IoClose />
        </CloseButtonStyle>
        {inputInfo.map(({ value, title, method }) => (
          <InputGroup
            type={'radio'}
            name={'sort_filter'}
            value={value}
            onChangeHandler={() => onChangeHandler(method)}
            useChecked={false}
          >
            {title}
          </InputGroup>
        ))}
      </FilterPopupStyle>
    );
  }
}
const FilterPopupStyle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 40px;
  right: 0px;
  background: white;
  z-index: 100;
  width: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 25px 0px;
  box-shadow: 2px 1px 5px 2px rgba(160, 160, 160, 0.3);

  button {
    width: 30px;
    margin-left: auto;
  }
`;

const CloseButtonStyle = styled(Button)`
  background: white;
`;
export default FilterPopup;
