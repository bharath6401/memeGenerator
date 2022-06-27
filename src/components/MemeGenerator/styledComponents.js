// Style your components here
import styled from 'styled-components'

import './index.css'

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerForm = styled(ContainerColumn)`
  padding: 20px;
  margin: 10px;
`

export const BackgroundImage = styled.div`
  background-image: url(${props => props.imageUrl});
  font-size: ${props => props.fontSize};
  width: 40vw;
  height: 30vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const GenerateButton = styled.button`
  background-color: blue;
  color: white;
  border: 0px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
  margin-left: 0px;
`

export const TopText = styled.p`
  font-family: Open Sans;

  color: white;
`
export const BottomText = styled.p`
  font-family: Open Sans;
  color: white;
`
