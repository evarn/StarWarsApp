import {getListPeople} from '../../api/rest/people/people';
import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../constants/colors';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import selectCharcterData from '../../redux/store/characterSelector';
import {
  setPeople,
  setIsLoading,
  setCount,
  setNext,
  setPrevious,
} from '../../redux/store/characterSlice';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import AppButton from '../components/appButton/AppButton';

const CardScreen = () => {
  const dispatch = useAppDispatch();
  const {isLoading, count, next, previous, people} =
    useAppSelector(selectCharcterData);
  useEffect(() => {
    onFetchPeople(next);
  }, []);

  const onFetchPeople = async (nextURL: string) => {
    console.log('here', nextURL);
    dispatch(setIsLoading(true));
    try {
      const response = await getListPeople({next: nextURL});
      console.log(response);
      dispatch(setPeople(response.data.results));
      dispatch(setCount(response.data.count));
      dispatch(setNext(response.data.next));
      dispatch(setPrevious(response.data.previous));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <View>
          <Text>{'CardScreen'}</Text>
          <AppButton
            title="More..."
            onPressButton={() => onFetchPeople(next)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE_1,
  },
});

export default CardScreen;
