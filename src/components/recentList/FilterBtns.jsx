import React, { Component } from 'react';
import { FaFilter } from 'react-icons/fa';
import styled from '@emotion/styled';

import Button from 'components/common/Button';
import { FilterPopup } from './index';
import { colors } from 'styles/colors';
import brands from 'utils/constants/brands';

const { GUCCI, NIKE, LOUIS_VUITTON, STONE_ISLAND } = brands;

class FilterBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  setIsOpen = () =>
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  render() {
    const {
      selectedFilters,
      setSelectedFilters,
      setFilteredItems,
      getSortedLowPrice,
    } = this.props;
    const isActive = name => selectedFilters.includes(name);
    return (
      <FilterBtnsStyle>
        <div>
          {brandButtonsInfo.map(({ name, title }) => (
            <BrandButtonStyle
              key={name}
              name={name}
              active={isActive(name)}
              onClick={setSelectedFilters}
            >
              {title}
            </BrandButtonStyle>
          ))}
        </div>
        <div>
          <SortFilterButton
            name={'btn_popup_filter'}
            ariaLabel={'popup_sort_filter'}
            onClick={this.setIsOpen}
          >
            <FaFilter />
          </SortFilterButton>
          <FilterPopup
            isOpen={this.state.isOpen}
            setIsOpen={this.setIsOpen}
            setFilteredItems={setFilteredItems}
            getSortedLowPrice={getSortedLowPrice}
          />
        </div>
      </FilterBtnsStyle>
    );
  }
}
const brandButtonsInfo = [
  { name: GUCCI['EN'], title: GUCCI['KO'] },
  { name: NIKE['EN'], title: NIKE['KO'] },
  { name: LOUIS_VUITTON['EN'], title: LOUIS_VUITTON['KO'] },
  { name: STONE_ISLAND['EN'], title: STONE_ISLAND['KO'] },
];
const FilterBtnsStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const FilterBtnsCommonStyle = styled(Button)`
  border-radius: 10px;
  padding: 7px 9px 7px 9px;
  font-size: 0.8em;
`;

const BrandButtonStyle = styled(FilterBtnsCommonStyle)`
  background: ${({ active }) => (active ? colors.camelBlue : 'white')};
  border: 1px solid ${colors.camelBlue};
  color: ${({ active }) => (active ? 'white' : colors.camelBlue)};
  font-weight: bold;
  margin-right: 5px;
`;

const SortFilterButton = styled(FilterBtnsCommonStyle)`
  background: white;
  border: 1px solid gray;
  color: gray;
  &:hover {
    background: gray;
    color: white;
  }
`;
export default FilterBtns;
// 브랜드 필터 버튼을 모아놓은 컴포넌트
// brands list : [ 구찌, 나이키, 루이비통, 스톤 아일랜드 ]
