'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

import { ColorWrap, Saturation, Hue } from '../common'
import PhotoshopFields from './PhotoshopFields'
import PhotoshopPointerCircle from './PhotoshopPointerCircle'
import PhotoshopPointer from './PhotoshopPointer'
import PhotoshopButton from './PhotoshopButton'
import PhotoshopPreviews from './PhotoshopPreviews'

export class Photoshop extends React.Component {
  constructor(props: any) {
    super()

    this.state = {
      currentColor: props.hex,
    }
  }

  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1]);

  handleChange = (data: any) => {
    this.props.onChange(data)
  }

  handleAccept = () => {
    this.props.onAccept && this.props.onAccept()
  }

  handleCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        picker: {
          background: '#DCDCDC',
          borderRadius: '4px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
          boxSizing: 'initial',
          width: '513px',
        },
        head: {
          backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
          borderBottom: '1px solid #B1B1B1',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
          height: '23px',
          lineHeight: '24px',
          borderRadius: '4px 4px 0 0',
          fontSize: '13px',
          color: '#4D4D4D',
          textAlign: 'center',
        },
        body: {
          padding: '15px 15px 0',
          display: 'flex',
        },
        saturation: {
          width: '256px',
          height: '256px',
          position: 'relative',
          border: '2px solid #B3B3B3',
          borderBottom: '2px solid #F0F0F0',
          overflow: 'hidden',
        },
        hue: {
          position: 'relative',
          height: '256px',
          width: '19px',
          marginLeft: '10px',
          border: '2px solid #B3B3B3',
          borderBottom: '2px solid #F0F0F0',
        },
        controls: {
          width: '180px',
          marginLeft: '10px',
        },
        top: {
          display: 'flex',
        },
        previews: {
          width: '60px',
        },
        actions: {
          flex: '1',
          marginLeft: '20px',
        },
      },
    })

    return (
      <div style={ styles.picker }>
        <div style={ styles.head }>{ this.props.header }</div>

        <div style={ styles.body } className="flexbox-fix">
          <div style={ styles.saturation }>
            <Saturation
              { ...this.props }
              pointer={ PhotoshopPointerCircle }
              onChange={ this.handleChange }
            />
          </div>
          <div style={ styles.hue }>
            <Hue
              direction="vertical"
              { ...this.props }
              pointer={ PhotoshopPointer }
              onChange={ this.handleChange }
            />
          </div>
          <div style={ styles.controls }>
            <div style={ styles.top } className="flexbox-fix">
              <div style={ styles.previews }>
                <PhotoshopPreviews
                  rgb={ this.props.rgb }
                  currentColor={ this.state.currentColor }
                />
              </div>
              <div style={ styles.actions }>
                <PhotoshopButton label="OK" onClick={ this.handleAccept } active />
                <PhotoshopButton label="Cancel" onClick={ this.handleCancel } />
                <PhotoshopFields { ...this.props } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Photoshop.defaultProps = {
  header: 'Color Picker',
}

export default ColorWrap(Photoshop)
