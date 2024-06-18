'use strict';

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config';

const SketchFieldsComponent = require('../../src/components/sketch-2/SketchFields');

let props;

describe('SketchFields', () => {

  beforeEach(() => {
    props = defaultProps;
  });

  it('should pass up data onChange', () => {
    props.onChange = chai.spy((data) => {
      expect(data).to.equal('#333');
    });
    const SketchFields = TestUtils.renderIntoDocument(<SketchFieldsComponent {...props} />);
    SketchFields.handleChange('#333');
    expect(props.onChange).to.have.been.called;
  });

});
