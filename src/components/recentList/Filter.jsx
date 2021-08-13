import React, { Component } from 'react';
import styled from '@emotion/styled';
import { FilterBtns, InputGroup } from 'components/recentList';

class Filter extends Component {
  render() {
    const {
      selectedFilters,
      setSelectedFilters,
      getSortedRecent,
      getSortedLowPrice,
    } = this.props;
    return (
      <FilterStyle>
        <InputGroup
          type={'checkbox'}
          name={'isInterested'}
          value={'isInterested'}
          onChangeHandler={setSelectedFilters}
        >
          관심 없는 상품 숨기기
        </InputGroup>
        <FilterBtns
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          getSortedRecent={getSortedRecent}
          getSortedLowPrice={getSortedLowPrice}
        />
      </FilterStyle>
    );
  }
}

const FilterStyle = styled.div`
  position: relative;
  margin-bottom: 20px;

  & > div + div {
    margin-top: 10px;
  }
`;

export default Filter;
