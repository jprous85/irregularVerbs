import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';

const BaseScreen = (props: any) => {
  const {children} = props;

  return (
    <SafeAreaView>
      <ScrollView style={style.body}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    padding: 20,
  },
});

export default BaseScreen;
