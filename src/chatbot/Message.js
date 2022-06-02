import React,{Fragment} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';

const Message = (props) => {
    return(
        <Fragment>
            {/* Incoming Message */}
            {props.inputmsg && (
                <Text style={Styles.inputbox} > {props.msg} </Text>
            )}
            {/* Outgoing Message */}
            {props.outputmsg && (
                <Text style={Styles.outputbox} > {props.msg} </Text>
            )}
        </Fragment>
    )
}

export default Message