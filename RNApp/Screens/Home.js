import {create} from 'apisauce';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
} from 'victory-native';
function Home(props) {
  const [Arr, setArr] = useState([]);
  const fetch2 = () => {
    fetch('http://10.0.2.2:3000')
      .then(res => res.json())
      .then(json => setArr(json));
  };
  useEffect(() => {
    fetch2();
  }, []);
  const data = [
    {x: '2003', y: 13000},
    {x: '2005', y: 14000},
    {x: '2006', y: 15000},
  ];
  const data2 = [
    {x: '2003', y: 15300},
    {x: '2005', y: 16000},
    {x: '2006', y: 17000},
  ];
  const data3 = [
    {x: '2007', y: 14300},
    {x: '2005', y: 13000},
    {x: '2006', y: 13000},
  ];
  const av = Arr.map(it => it.data.map(item => item));
  const Card = ({Email, lname, id}) => {
    return (
      <View
        style={{
          width: '90%',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 10,
        }}>
        {/* <Image
          source={'https://picsum.photos/200'}
          style={{width: '50%', height: '30%'}}
        /> */}
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={{width: 340, height: 200}}
        />
        <Text>{Email}</Text>
        <Text>{lname}</Text>
        <Text>{id}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Arr.map(it => it.data.map(item => item))}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryGroup offset={20}>
              <VictoryBar
                labels={'salesforce crm'}
                data={data2}
                style={{data: {fill: '#333'}}}
              />
              <VictoryBar
                labels={'zoho crm'}
                data={data}
                style={{data: {fill: '#c43a31'}}}
              />
            </VictoryGroup>
          </VictoryChart>
        }
        renderItem={({item}) => (
          <>
            {item.map(list => (
              <Card
                key={list.id}
                Email={list.Email}
                lname={list.Last_Name}
                id={list.id}
              />
            ))}
          </>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default Home;
