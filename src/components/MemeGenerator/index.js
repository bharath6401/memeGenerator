import {Component} from 'react'
import {
  ContainerRow,
  ContainerForm,
  GenerateButton,
  BackgroundImage,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    displayImage: false,
  }

  formSubmitted = event => {
    event.preventDefault()
    this.setState({displayImage: true})
  }

  inputUrlChange = event => {
    this.setState({url: event.target.value})
  }

  inputTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  inputBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  inputFontSizeChange = event => {
    console.log(event)
    console.log(event.target)

    this.setState({fontSize: event.target.value})
  }

  render() {
    const {url, topText, bottomText, fontSize, displayImage} = this.state
    console.log(this.state)
    return (
      <ContainerRow>
        <ContainerForm as="form">
          <h1>Meme Generator</h1>
          <label htmlFor="url">Image URL</label>
          <input onChange={this.inputUrlChange} id="url" type="text" />
          <label htmlFor="topText">Top Text</label>
          <input onChange={this.inputTopTextChange} id="topText" type="text" />
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            onChange={this.inputBottomTextChange}
            id="bottomText"
            type="text"
          />
          <label htmlFor="fontSize">Font Size</label>
          <select onChange={this.inputFontSizeChange} id="fontSize">
            {fontSizesOptionsList.map(eachOption => (
              <option id={eachOption.optionId}>{eachOption.displayText}</option>
            ))}
          </select>
          <GenerateButton onClick={this.formSubmitted} type="submit">
            Generate
          </GenerateButton>
        </ContainerForm>
        {displayImage && (
          <BackgroundImage
            fontSize={fontSize}
            imageUrl={url}
            data-testid="meme"
          >
            <TopText>{topText}</TopText>
            <BottomText>{bottomText}</BottomText>
          </BackgroundImage>
        )}
      </ContainerRow>
    )
  }
}
export default MemeGenerator
