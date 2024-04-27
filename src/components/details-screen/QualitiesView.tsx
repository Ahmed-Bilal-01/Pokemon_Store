import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../../constants/Constants';

interface QualitiesViewProps {
  heading: string;
  qualitiesStyle?: any;
  data: any;
  qualityName: string;
  qualityKey: string;
}

const QualitiesView = ({
  heading,
  qualitiesStyle,
  data,
  qualityName,
  qualityKey,
}: QualitiesViewProps) => {
  let qualities: any[] = [];

  if (data && qualityName === 'specie') {
    qualities = [data];
  } else if (data && qualityName !== 'specie') {
    qualities = data.map((item: any) => item[qualityName]);
  }

  return (
    <View style={styles.main}>
      <View style={{height: 20}}>
        <Text style={[styles.headingStyle, qualitiesStyle]}>{heading}</Text>
      </View>
      {qualities &&
        qualities.map((item: any, index: number) => (
          <Text key={index} style={[styles.qualitieText, qualitiesStyle]}>
            - {item[qualityKey]}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  qualitieText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    fontWeight: '700',
    borderColor: constants.colors.lightGray,
    color: constants.colors.lightGray,
    marginLeft: 5,
    flex: 1,
  },
  headingStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    borderColor: constants.colors.lightGray,
    color: 'white',
    height: '20%',
  },
});

export default QualitiesView;
