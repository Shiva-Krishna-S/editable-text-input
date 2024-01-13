import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    userText: '',
    showInputElement: true,
  }

  onChangeInput = event => {
    this.setState({userText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      showInputElement: !prevState.showInputElement,
    }))
  }

  render() {
    const {userText, showInputElement} = this.state
    const buttonText = showInputElement ? 'Save' : 'Edit'
    return (
      <div className="main-container">
        <div className="text-area-card">
          <h1 className="card-title">Editable Text Input</h1>
          <div className="input-container">
            {showInputElement ? (
              <input
                type="text"
                value={userText}
                onChange={this.onChangeInput}
                className="input-element"
              />
            ) : (
              <p className="edited-text">{userText}</p>
            )}
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
