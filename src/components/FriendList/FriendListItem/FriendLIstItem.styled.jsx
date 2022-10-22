import styled from 'styled-components';

export const OnlineStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => props.isOnline ? "green" : "red"};
  border-radius: 50%;
` 