import React, { Component } from 'react';
import styled from '@emotion/styled';
import { FilterBtns, InputGroup } from 'components/recentList';

const FilterStyle = styled.div`
  position: relative;
  margin-bottom: 20px;

  & > div + div {
    margin-top: 10px;
  }
`;

class Filter extends Component {
  render() {
    const { selectedFilters, setSelectedFilters } = this.props;
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
          onChangeHandler={true}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </FilterStyle>
    );
  }
}

export default Filter;
