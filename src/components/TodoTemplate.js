import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <Box>
      <AppTitle>{children}</AppTitle>
      <Content />
    </Box>
  );
};

export default TodoTemplate;
