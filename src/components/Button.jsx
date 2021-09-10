import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.any,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

const StyledButton = styled.button`
  all: unset;
  width: ${({ width }) => width || '130px'};
  height: ${({ height }) => height || '20px'};
  padding: 15px 20px;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-size: ${({ fontWeight }) => fontWeight || '700'};
  text-align: center;
  cursor: pointer;
  border-radius: ${({ borderRadius }) => borderRadius || '20px'};
  background-color: ${({ color }) => color || theme.pink};
  transition-property: scale, translateY;
  transition: scale 300ms ease-in;
  color: white;

  &:hover {
    transform: scale(1.02);
  }
`;
