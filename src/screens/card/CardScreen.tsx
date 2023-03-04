import {getListPeople} from '../../api/rest/people/people';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Colors from '../../constants/colors';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import selectCharcterData from '../../redux/store/characterSelector';
import {
  setPeople,
  setIsLoading,
  setCount,
  setNext,
  setMoreIsLoading,
} from '../../redux/store/characterSlice';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import CardCharacter from './components/CardCharacter';
import TitleCardScreen from './components/TitleCardScreen';
import Strings from './../../constants/strings';
import Fonts from './../../constants/fonts';
import ModalCharacter from './components/modal/ModalCharacter';

const CardScreen = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    count,
    next,
    moreIsLoading,
    people,
    filterPeople,
    isFiltred,
  } = useAppSelector(selectCharcterData);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    onFetchPeople(next);
  }, []);

  const dataFlatlist = isFiltred ? filterPeople : people;

  // Подсчёт ширины экрана и вычисление количество столбцов
  const {width} = Dimensions.get('window');
  const column = Math.round(width / 200);
  const margin = 10;
  const widthSIZE = (width - margin * column * 2) / column;

  const onFetchPeople = async (nextURL: string) => {
    if (isFiltred) {
      return;
    }
    dispatch(setIsLoading(true));
    try {
      const response = await getListPeople({next: nextURL});
      dispatch(setPeople(response.data.results));
      dispatch(setCount(response.data.count));
      dispatch(setNext(response.data.next));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  const onFetchMorePeople = async (nextURL: string) => {
    if (isFiltred) {
      return;
    }
    if (nextURL === null) {
      return;
    }
    if (moreIsLoading) {
      return;
    }
    dispatch(setMoreIsLoading(true));

    try {
      const response = await getListPeople({next: nextURL});
      dispatch(setPeople(response.data.results));
      dispatch(setCount(response.data.count));
      dispatch(setNext(response.data.next));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setMoreIsLoading(false));
    }
  };
  const _ListHeaderComponent = () => {
    return (
      <>{dataFlatlist.length ? <TitleCardScreen count={count} /> : undefined}</>
    );
  };
  const _ListFooterComponent = () => {
    return (
      <>
        {dataFlatlist.length ? (
          <>
            {moreIsLoading && <LoadingIndicator />}
            {next === null && (
              <Text style={styles.endText}>{Strings.CHARACTERS_END_TEXT}</Text>
            )}
          </>
        ) : undefined}
      </>
    );
  };

  const _ListEmptyComponent = () => {
    return (
      <Text style={styles.emptyText}>{Strings.CHARACTERS_EMPTY_TEXT}</Text>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.flatListView}>
          <ModalCharacter
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <FlatList
            data={dataFlatlist}
            renderItem={({item}) => (
              <CardCharacter
                item={item}
                widthSIZE={widthSIZE}
                setModalVisible={setModalVisible}
              />
            )}
            numColumns={column}
            columnWrapperStyle={styles.row}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            onEndReached={() => onFetchMorePeople(next)}
            onEndReachedThreshold={0.2}
            ListHeaderComponent={_ListHeaderComponent}
            ListFooterComponent={_ListFooterComponent}
            ListEmptyComponent={_ListEmptyComponent}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE_1,
  },
  flatListView: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  endText: {
    color: Colors.BLACK_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  emptyText: {
    color: Colors.BLACK_1,
    fontFamily: Fonts.PRIMARY,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 36,
    textAlign: 'center',
  },
});

export default CardScreen;
