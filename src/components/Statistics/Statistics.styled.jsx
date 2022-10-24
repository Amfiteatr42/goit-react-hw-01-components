import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px;
  width: 350px;
  background-color: #ebe9e9;
`

export const Title = styled.h2`
  color: #7a7a7a;
  text-align: center;
`
export const StatList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
`
export const StatItem = styled.li`
  padding: 15px;
  background-color: ${colorRandomizer};
  width: 15%;

`

function colorRandomizer() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}