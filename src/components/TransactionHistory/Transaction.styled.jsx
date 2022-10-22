import styled from 'styled-components';

export const Tdata = styled.td`
  padding: 10px 40px;
  text-align: center;
  background-color: #e7edf4;

  /* &:nth-child(odd) {
    background-color: #cdd2d8;
  } */
`

export const Theader = styled.th`
  padding: 10px 40px;
  text-align: center;
  background-color: #5492d9;
`

export const Type = styled(Tdata)`
  text-transform: capitalize;
`

export const Table = styled.table`
  tr:nth-child(even) td {
    background-color: #cdd2d8;
  }
`