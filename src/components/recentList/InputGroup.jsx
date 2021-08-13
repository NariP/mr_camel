import React, { Component } from 'react';
import styled from '@emotion/styled';

class InputGroup extends Component {
  render() {
    const { children, type, name, value, onChangeHandler, useChecked } =
      this.props;
    return (
      <InputGroupStyle>
        <input
          type={type}
          name={name}
          id={value}
          value={value}
          onChange={({ currentTarget: { value } }) => onChangeHandler(value)}
          checked={useChecked}
        />
        <label htmlFor={value}>{children}</label>
      </InputGroupStyle>
    );
  }
}

const InputGroupStyle = styled.div`
  display: inline-block;

  input,
  label {
    cursor: pointer;
  }

  & + & {
    margin-top: 5px;
  }

  & > input + label {
    margin-left: 5px;
  }
`;

export default InputGroup;
