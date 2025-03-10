import React, { Component } from 'react';

import styled from '@emotion/styled';

class List extends Component {
  render() {
    const { children } = this.props;

    return <ListWrap>{children}</ListWrap>;
  }
}
const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  li {
    width: calc(48% - 20px);
  }
`;
export default List;
