import { styled } from "styled-components"

export const WindowContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

export const WindowTab = styled.div`
  background-color: #2e2e2e;
  height: 35px;
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  ul li {
    display: inline-block;
    padding: 6px;
    background-color: #ccc;
    margin-left: 16px;
    border-radius: 100px;

  }
`

export const GridContainer = styled.div`
  background-color: rgba(34,34,34,1);
  border-radius: 0px 0px 16px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  padding: 0 auto;
  justify-content: space-around;
  gap: auto;
  width: 100%;
  padding: 16px 0 12px 0;
`

export const Item = styled.div`
  margin: auto;

  img {
    height: 100%;
  }
`
