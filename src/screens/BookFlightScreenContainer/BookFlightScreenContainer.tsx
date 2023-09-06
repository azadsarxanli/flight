import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Tab, Text, Input, Icon} from '@rneui/themed';
import mockData from '../../../mock/mock-data.json';

import CalendarPicker from 'react-native-calendar-picker';
import {Tooltip} from '../../common/components/Tooltip';
import {SelectedDates} from '../../types/selectedDates';
import SelectDropdown from 'react-native-select-dropdown';
// mock data schema
import {Schema} from '../FlightListScreenContainer';
import {convertToDateObject} from '../../utils/convertToDateObject';
export const BookFlightScreenContainer = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [selectedDates, setSelectedDates] = useState<SelectedDates>({
    type: 'round',
    dates: [],
  });
  const [direction, setDirection] = useState({
    from: '',
    to: '',
  });
  const isSameDirection = useMemo(() => {
    return direction.from === direction.to && direction.from !== '';
  }, [direction]);

  const uniqueFromAirportNameValues = useMemo(() => {
    return mockData
      .filter(
        (item: Schema, index: number, self: Schema[]) =>
          index ===
          self.findIndex(t => t.FromAirportName === item.FromAirportName),
      )
      .map((item: Schema) => {
        return item.FromAirportName;
      });
  }, []);

  const uniqueToAirportNameValues = useMemo(() => {
    return mockData
      .filter(
        (item: Schema, index: number, self: Schema[]) =>
          index === self.findIndex(t => t.ToAirportName === item.ToAirportName),
      )
      .map((item: Schema) => {
        return item.ToAirportName;
      });
  }, []);

  const isRoundTrip = index === 1;
  const disabled = useMemo(() => {
    console.log(selectedDates);
    return (
      isSameDirection ||
      !direction.from ||
      !direction.to ||
      (isRoundTrip && selectedDates.dates.length !== 2)
    );
  }, [
    selectedDates,
    isSameDirection,
    direction.from,
    direction.to,
    isRoundTrip,
  ]);

  console.log(disabled);
  /* ! 
false way of doing this 
 const [isRoundTrip, setIsRoundTrip] = useState(false);

  useEffect(() => {
    if (index === 1) {
      setIsRoundTrip(true);
    } else {
      setIsRoundTrip(false);
    }
  }, [index]);
*/

  const navigationHandler = () => {
    const {dates} = selectedDates;
    // calculating the difference in days and sending it to the next screen
    const [startDate, endDate] = dates;
    const filteredData = mockData.filter(item => {
      const itemDate = new Date(convertToDateObject(item.ScheduledTimeFull));
      console.log(itemDate.getDate(), 'itemDate');
      console.log(new Date(startDate).getDate(), 'startDate');
      // comparing startDate day with itemDate day
      const tripDirection =
        item.FromAirportName === direction.from &&
        item.ToAirportName === direction.to;
      if (!isRoundTrip) {
        return (
          tripDirection && itemDate.getDate() === new Date(startDate).getDate()
        );
      } else {
        return (
          tripDirection &&
          itemDate.getDate() >= new Date(startDate).getDate() &&
          itemDate.getDate() <= new Date(endDate).getDate()
        );
      }
    });

    navigation.navigate('FlightListScreenContainer', {
      filteredData,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 45,
      }}>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item>One way</Tab.Item>
        <Tab.Item>Round</Tab.Item>
      </Tab>
      <View>
        <CalendarPicker
          selectedDayTextColor="#FFFFFF"
          allowRangeSelection={isRoundTrip}
          todayBackgroundColor="transparent"
          todayTextStyle="#FFFFFF"
          previousTitle="Previous"
          nextTitle="Next"
          key={isRoundTrip ? 'round' : 'one-way'}
          onDateChange={(date: Date, type: string) => {
            if (type === 'END_DATE') {
              setSelectedDates({
                type: 'round',
                dates: [selectedDates.dates[0], date],
              });
            } else {
              setSelectedDates({
                type: 'one-way',
                dates: [date],
              });
            }
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        {/* from to logic */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 16,
          }}>
          <SelectDropdown
            data={uniqueFromAirportNameValues}
            onSelect={(selectedItem, index) => {
              setDirection({
                ...direction,
                from: selectedItem,
              });
            }}
            defaultButtonText="From"
          />
          <SelectDropdown
            data={uniqueToAirportNameValues}
            onSelect={(selectedItem, index) => {
              setDirection({
                ...direction,
                to: selectedItem,
              });
            }}
            defaultButtonText="To"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'red',
            }}>
            {isSameDirection ? 'From and To cannot be the same' : ''}
          </Text>
        </View>
      </View>

      <Button
        onPress={navigationHandler}
        disabled={disabled}
        disabledStyle={{
          backgroundColor: '#E0E0E0',
        }}
        style={{
          margin: 15,
        }}>
        <Text>Search</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
