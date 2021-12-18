import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BaseScreen from '../../screens/BaseScreen';
import {Button, Input} from 'react-native-elements';
import {IRREGULAR_VERBS} from '../../common/IrregularVerbs';
import {capitalize} from '../../common/functions';

const Question = () => {
  const [simplePast, setSimplePast] = useState('');
  const [pastParticiple, setPastParticiple] = useState('');
  const [simplePastInputError, setSimplePastInputError] = useState(false);
  const [pastParticipleInputError, setPastParticipleInputError] =
    useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [verb, setVerb] = useState({
    verb: '',
    simplePast: '',
    pastParticiple: '',
    translate: '',
  });
  useEffect(() => {
    getNewIrregularVerb();
  }, []);

  const getAIrregularVerb = () => {
    return IRREGULAR_VERBS[Math.floor(Math.random() * IRREGULAR_VERBS.length)];
  };

  const getNewIrregularVerb = () => {
    setVerb(getAIrregularVerb());
  };

  const checkAnswer = () => {
    console.log(simplePast.toUpperCase(), pastParticiple);
    if (verb.simplePast.toUpperCase() !== simplePast.toUpperCase()) {
      setSimplePastInputError(true);
    }
    if (verb.pastParticiple.toUpperCase() !== pastParticiple.toUpperCase()) {
      setPastParticipleInputError(true);
    }
    setChangeButton(true);
  };

  const newQuestion = () => {
    getNewIrregularVerb();
    setChangeButton(false);
    setSimplePastInputError(false);
    setPastParticipleInputError(false);
    this.simplePast.clear();
    this.pastParticiple.clear();
  };

  const ButtonChange = changeButton ? (
    <Button
      title="Next question"
      buttonStyle={{backgroundColor: '#44a6ff', borderRadius: 7, marginTop: 10}}
      onPress={() => newQuestion()}
    />
  ) : (
    <Button
      title="Check the answer"
      buttonStyle={{backgroundColor: '#318602', borderRadius: 7, marginTop: 10}}
      onPress={() => checkAnswer()}
    />
  );

  return (
    <BaseScreen>
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => newQuestion()}>
          <Text
            style={{
              textAlign: 'right',
              padding: 20,
              color: '#44a6ff',
              fontWeight: 'bold',
            }}>
            Next Question
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
          {capitalize(verb.verb)}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: 15,
            color: 'gray',
          }}>
          {capitalize(verb.translate)}
        </Text>
        <KeyboardAwareScrollView
          style={{flex: 1, marginTop: 40}}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}>
          <Input
            inputStyle={{
              color: !changeButton
                ? 'black'
                : changeButton && simplePastInputError
                ? 'red'
                : 'green',
            }}
            placeholder={'Simple past'}
            autoCompleteType={undefined}
            ref={simplePast => {
              this.simplePast = simplePast;
            }}
            onChange={text => setSimplePast(text.nativeEvent.text)}
            errorMessage={
              changeButton && simplePastInputError
                ? capitalize(verb.simplePast)
                : ''
            }
          />
          <Input
            inputStyle={{
              color: !changeButton
                ? 'black'
                : changeButton && pastParticipleInputError
                ? 'red'
                : 'green',
            }}
            placeholder={'Past participle'}
            autoCompleteType={undefined}
            ref={pastParticiple => {
              this.pastParticiple = pastParticiple;
            }}
            onChange={text => setPastParticiple(text.nativeEvent.text)}
            errorMessage={
              changeButton && pastParticipleInputError
                ? capitalize(verb.pastParticiple)
                : ''
            }
          />
        </KeyboardAwareScrollView>
        {ButtonChange}
      </View>
    </BaseScreen>
  );
};

const style = StyleSheet.create({});

export default Question;
