import React, { Component } from 'react';

import { Filter, RecentProductList } from 'components/recentList';
import Loading from 'components/common/Loading';
import { localStorageHelper } from 'utils/localStorageHelper';
import { localStorageKey } from 'utils/constants/localStorageKey';
import { addUniqueData, getFilteredItems } from 'components/recentList/utils';

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clickedItems: [],
      filteredItems: [],
      selectedFilters: [],
    };
  }
  setFilteredItems = () =>
    this.setState(state => ({
      ...state,
      filteredItems: getFilteredItems(
        state.clickedItems,
        state.selectedFilters,
      ),
    }));
  setSelectedFilters = name => {
    this.setState(state => ({
      ...state,
      selectedFilters: addUniqueData(state.selectedFilters, name),
    }));
    this.setFilteredItems();
  };
  getSortedLowPrice = () =>
    this.setState(state => ({
      ...state,
      filteredItems: state.filteredItems.sort((a, b) => a.price - b.price),
    }));
  getSortedRecent = () => this.setFilteredItems();
  getClickedItem = () => {
    // 로컬호스트에서 최근 본 아이템 데이터를 받아오는 함수
    const clickedItems =
      localStorageHelper.getItem(localStorageKey['VIEWED']) ?? [];

    //실제 API가 있을 경우, 비동기로 들어올 것을 고려해 시뮬레이팅함.
    this.setState(state => ({
      ...state,
      isLoading: true,
    }));
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        isLoading: false,
        clickedItems,
        filteredItems: clickedItems,
      }));
    }, 700);
  };

  componentDidMount() {
    this.getClickedItem();
  }

  render() {
    const { isLoading, filteredItems } = this.state;
    return (
      <>
        <Filter
          selectedFilters={this.state.selectedFilters}
          setSelectedFilters={this.setSelectedFilters}
          getSortedRecent={this.getSortedRecent}
          getSortedLowPrice={this.getSortedLowPrice}
        />
        {isLoading && <Loading />}
        {!isLoading && filteredItems.length === 0 && (
          <div>아이템이 없습니다.</div>
        )}
        {!isLoading && <RecentProductList products={filteredItems} />}
      </>
    );
  }
}

export default RecentListPage;
//최근 조회된 이력을 보여주는 리스트 페이지
