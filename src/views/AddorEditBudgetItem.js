import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import DropDownItem from 'react-native-drop-down-item';
import { categories } from '../dummyData/categories';
import TextInputComponent from '../components/TextInputComponent';
import * as ImagePicker from 'expo-image-picker';
import { v4 } from 'uuid';
import CustomCheckBox from '../components/CustomCheckBox';

export default function AddorEditBudgetItem() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null);
  const [basicInfo, setBasicInfo] = useState({
    title: '',
    description: '',
    category: '',
    transactionType: '',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 0.5,
    });

    console.log(result, 'this is result');

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChange = (text, nameOfInput) => {
    setBasicInfo({
      ...basicInfo,
      [nameOfInput]: text,
    });
  };

  const handleTransactionType = (type) => {
    setBasicInfo({
      ...basicInfo,
      transactionType: type,
    });
  };

  const handleSubmit = () => {
    if (
      basicInfo.title ||
      basicInfo.description ||
      selectedCategory ||
      basicInfo.transactionType
    ) {
      alert('Please Ensure Relevant fields are filled.');
      return;
    }
    const transaction = {
      id: v4(),
      ...basicInfo,
      category: selectedCategory,
      // image:
    };
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}
      >
        <View style={styles.imageHolder}>
          {image && (
            <>
              <Image
                source={{ uri: image }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 75,
                  resizeMode: 'cover',
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: '50%',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 23,
                  backgroundColor: 'rgba(52, 52, 52, 0.5)',
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
                onPress={pickImage}
              >
                <Text style={{ color: '#fff', fontWeight: '500' }}>
                  Replace
                </Text>
              </TouchableOpacity>
            </>
          )}
          {!image && (
            <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
              <Text style={{ textAlign: 'center' }}>Click to Upload Image</Text>
              <Feather
                style={{ textAlign: 'center', marginTop: 5 }}
                name="upload"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TextInputComponent
        label="Title"
        onChangeText={(text) => handleChange(text, 'title')}
        maxLength={100}
      />
      <TextInputComponent
        label="Description"
        wrapperStyle={styles.descriptionContainer}
        onChangeText={(text) => handleChange(text, 'description')}
        maxLength={100}
        numberOfLines={4}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '10%',
        }}
      >
        <View style={{ width: '50%' }}>
          <Text style={{ fontSize: 20 }}>Amount</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: '#ccc',
              borderWidth: 1,
              paddingHorizontal: '2%',
              borderRadius: 8,
              height: 60,
            }}
            maxLength={10}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Transaction Type</Text>
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginTop: 10 }}
              onPress={() => handleTransactionType('income')}
            >
              <CustomCheckBox
                checked={basicInfo.transactionType === 'income'}
              />
              <Text style={{ fontSize: 18, marginLeft: 5 }}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginTop: 10 }}
              onPress={() => handleTransactionType('expense')}
            >
              <CustomCheckBox
                checked={basicInfo.transactionType === 'expense'}
              />
              <Text style={{ fontSize: 18, marginLeft: 5 }}>Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ScrollView style={{ alignSelf: 'stretch', marginTop: 20 }}>
          <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            useNativeDriver={true}
            header={
              <View>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  Category
                </Text>
              </View>
            }
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryItem}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text>{category.body}</Text>
                {selectedCategory === category.id && (
                  <AntDesign
                    name="check"
                    size={24}
                    color="green"
                    style={{ marginLeft: 10 }}
                  />
                )}
              </TouchableOpacity>
            ))}
          </DropDownItem>
          <View style={{ height: 96 }} />
        </ScrollView>
      </View>
      <View style={styles.addOrCancel}>
        <CustomButton
          title={'Cancel'}
          wrapperStyle={{ borderColor: 'grey', borderWidth: 1 }}
          onPress={() => {}}
        />
        <CustomButton
          title={'Save'}
          wrapperStyle={{ backgroundColor: '#4441cd' }}
          titleStyle={{ color: 'white', fontWeight: '600' }}
          onPress={() => handleSubmit()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: '5%',
  },
  titleTextInput: {
    marginTop: '10%',
  },
  descriptionContainer: {
    marginTop: 20,
  },
  imageHolder: {
    backgroundColor: '#e8e8ed',
    height: 150,
    width: 150,
    borderRadius: 75,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  addOrCancel: {
    flexDirection: 'row',
    paddingHorizontal: '20%',
    justifyContent: 'space-between',
    marginBottom: '50%',
  },
  categoryItem: {
    height: 30,
    borderBottomColor: '#d7d8dd',
    borderBottomWidth: 1,
    marginTop: '5%',
    flexDirection: 'row',
  },
  dropDownItem: {
    flex: 1,
  },
  uploadButton: {
    position: 'absolute',
    top: '30%',
    color: '#fff',
    fontWeight: '700',
    fontSize: 23,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  transactionType: {},
});
