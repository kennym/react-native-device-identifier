import React, {
  PixelRatio,
  Platform,
  Dimensions
} from 'react-native';

const windowDimensions = Dimensions.get('window');

class ReactNativeDeviceIdentifier {
  constructor() {
    this.width = windowDimensions.width
    this.height = windowDimensions.height
  }

  /**
   * Returns iPhone model name as a string.
   * 
   * Return values:
   * - iPhone SE
   * 
   * TODO:
   * - iPhone X
   * - iPhone 7/8
   * - iPhone XS
   */
  getModelName() {
    if (this.isIOS() && this.height === 568 && this.width === 320) {
      return "iPhone SE"
    } else {
      return "Not implemented"
    }
  }
  
  isIOS() {
    if (Platform.OS === 'ios') return true
  }

  isAndroid() {
    if (Platform.OS === 'android') return true
  }
}

module.exports = new ReactNativeDeviceIdentifier();