import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
class OrderFoodScreen extends Component {
  componentDidMount() {
    //Call api o day
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }
  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text>OrderFoodScreen</Text>
      </View>
    );
  }
}

export default OrderFoodScreen;
