import * as React from 'react';
import { IToggleProps } from './Toggle.Props';
import './Toggle.scss';

export interface IToggleState {
  id?: string;
}

let _instance: number = 0;

export default class Toggle extends React.Component<IToggleProps, IToggleState> {

  public static initialProps = {
    label: '',
    isToggled: false,
    onText: 'On',
    offText: 'Off'
  };

  constructor() {
    super();

    this.state = {
      id: `Toggle-${ _instance++ }`
    };

    this._handleClick = this._handleClick.bind(this);
  }

  public render() {
    let { label, isToggled, onText, offText } = this.props;
    let { id } = this.state;

    return (
      <div className='ms-Toggle' onClick={ this._handleClick }>
        <span className='ms-Toggle-description' id={ id }>{ label }</span>
        <input ref='input' aria-labelledby={ id } type='checkbox' className='ms-Toggle-input' checked={ isToggled }
          onChange={ this._handleClick } />
        <label className='ms-Toggle-field' title={ label }>
          <span className='ms-Label ms-Label--off'>{ offText }</span>
          <span className='ms-Label ms-Label--on'>{ onText }</span>
        </label>
      </div>
    );
  }

  private _handleClick(ev: React.MouseEvent) {
    let { onChanged, isToggled } = this.props;

    if (onChanged) {
      onChanged(!isToggled);
    }
  }
}
