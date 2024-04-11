import { styled } from "styled-components"

export const WindowContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.4));
  margin-bottom: 64px;
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

  #bYellow {
    background-color: #ffde68;
  }

  #bGreen {
    background-color: #83E181;

    &:hover{
      background-color: #fff;
    }
  }

  #bRed {
    background-color: #ea5252;
  }

  ul {

    li {
      display: inline-block;
      margin-right: 8px;
    }
  }

  p {
    margin-left: 16px;
  }
`

export const windowButton = styled.button`
  padding: 0 5px;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
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
    width: 80px;
  }
`
