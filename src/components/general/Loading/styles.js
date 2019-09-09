import styled from 'styled-components'
import { spinner } from '../../../styles/animations'

export const RollingDiv = styled.div`
  position: relative;
  width: 150px !important;
  height: 150px !important;
  -webkit-transform: translate(-50%, -100px) scale(1) translateY(100px);
  transform: translate(-50%, -100px) scale(1) translateY(100px);
  left:50%;
  & div {
    ${spinner}
    top: 100px;
    left: 50%;
  }
  & div:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  & div,
  & div:after {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 10px solid #8d00ff;
    border-top-color: transparent;
    border-radius: 50%;
  }
`
