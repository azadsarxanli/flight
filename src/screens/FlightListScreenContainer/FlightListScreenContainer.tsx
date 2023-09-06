import {View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {Divider, Text} from '@rneui/themed';
import mockData from '../../../mock/mock-data.json';
import {convertToDateObject} from '../../utils/convertToDateObject';

export type Schema = {
  FlightId: string;
  FromAirport: string;
  FromAirportName: string;
  ToAirport: string;
  ToAirportName: string;
  AirlineName: string;
  ScheduledTimeFull: string;
};

import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  FlightListScreenContainer: {filteredData: Schema[]};
};

type FlightListScreenRouteProp = RouteProp<
  RootStackParamList,
  'FlightListScreenContainer'
>;

type FlightListScreenContainerProps = {
  route: FlightListScreenRouteProp;
};

export const FlightListScreenContainer = ({
  route,
}: FlightListScreenContainerProps) => {
  const {filteredData} = route.params;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <FlashList
        data={filteredData}
        renderItem={({item}) => (
          <View
            style={{
              height: 70,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                  }}>
                  Airline - {item.AirlineName.toString()}
                </Text>
                <Text>
                  Planned Time -{' '}
                  {new Date(
                    convertToDateObject(item.ScheduledTimeFull),
                  ).toDateString()}
                </Text>

                <Text>
                  From {item.FromAirportName.toString()} To{' '}
                  {item.ToAirportName.toString()}
                </Text>
              </View>
              <View>
                <Text>Flight Id - {item.FlightId.toString()}</Text>
              </View>
            </View>
            <Divider />
          </View>
        )}
        keyExtractor={(_, index) => `${index}${_.FlightId}`}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={100}
      />
    </View>
  );
};
