import styled, { keyframes } from 'styled-components'

const ldsRing = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 5px;
    border: 5px solid #fff;
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`
