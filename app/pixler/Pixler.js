import React, { PropTypes } from 'react';
import { setPixel } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Editor from './Editor';
import Column from '../components/Column';
import Output from './Output';

function Pixler(props) {
  const { outline, shape, wide } = props;
  return (
    <div>
      <Column width={50}>
        <Editor setPixel={props.setPixel} outline={outline} shape={shape} wide={wide} />
      </Column>
      <Column width={30}>
        <Output outline={outline} shape={shape} />
      </Column>
    </div>
  );
}

Pixler.propTypes = {
  setPixel: PropTypes.func.isRequired,
  outline: PropTypes.arrayOf(PropTypes.number).isRequired,
  shape: PropTypes.arrayOf(PropTypes.number).isRequired,
  wide: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return state.pixler.toJS();
}

function mapDispatchersToProps(dispatch) {
  return bindActionCreators({ setPixel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(Pixler);