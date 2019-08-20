/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button, View} from 'react-native';
import JitsiMeet, { JitsiMeetEvents } from 'react-native-jitsi-meet';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      torchMode: 'off',
      cameraType: 'back',
    };
  }

  componentDidMount(){
    console.log("Splash componentDidMount"); 
   
   }

   onButtonClicked(){
      console.log('Button clicked');
      JitsiMeet.initialize();
      JitsiMeetEvents.addListener('CONFERENCE_LEFT', (data) => {
        console.log('CONFERENCE_LEFT');
      });
      JitsiMeetEvents.addListener('CONFERENCE_JOINED', (data) => {
        console.log('CONFERENCE_JOINED');
      });
      JitsiMeetEvents.addListener('CONFERENCE_WILL_JOIN', (data) => {
        console.log('CONFERENCE_WILL_JOIN');
      });
      setTimeout(() => {
        JitsiMeet.call("https://meet.jit.si/hainn3");
      }, 5000);
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.overlay, styles.bottomOverlay]}>
          <Button
            onPress={() => { this.onButtonClicked() }}
            style={styles.enterBarcodeManualButton}
            title="Click Here"
           />
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
