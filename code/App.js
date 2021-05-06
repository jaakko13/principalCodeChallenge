/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten myapp
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {date} from "yup";
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  Card,
  Input,
  Datepicker,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

//used to store input of all input fields
const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

//sets min for datepicker, allows for years to be chosen
const now = new Date();
const min = new Date(1900, now.getMonth(), now.getDate() - 1);

const SignupSchema = Yup.object().shape({
    date: date().when('ssn', {
      is: ssn => !ssn,
      then: Yup.date().required('Please enter either date or ssn'),
    }),
    first: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
    last: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
    gender: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    ssn: Yup.string()
    .matches(/^\d+$/)
    .min(9, "Too short")
    .max(9),


    //validations for all non essential fields
    phone: Yup.string()
    .matches(/^\d+$/)
    .min(10, "Too short")
    .max(10),
    altPhone: Yup.string()
    .matches(/^\d+$/)
    .min(10, "Too short")
    .max(10),
    preFix: Yup.string()
    .max(50, "Too Long"),
    postFix: Yup.string()
    .max(50, "Too Long"),
    middle: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long"),
    });

export default function MainView(){
  const [date, setDate] = React.useState(new Date());

  const preFixInputState = useInputState();
  const genderInputState = useInputState();
  const firstNameInputState = useInputState();
  const middleNameInputState = useInputState();
  const lastNameInputState = useInputState();
  const postFixInputState = useInputState();
  const dateInputState = useInputState();
  const ssnInputState = useInputState();
  const emailInputState = useInputState();
  const phoneInputState = useInputState();
  const altPhoneInputState = useInputState();

    return(
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{flex: 1}}>
        <Card style={styles.card}>
        <Text>Principal</Text>


        <Formik
          validationSchema={SignupSchema}
          initialValues={{ preFix: '', gender: '', first: '', middle: '', last: '', postFix: '', date: Date(), ssn: '', email: '', phone: '', altPhone: ''  }}
          onSubmit={values => console.log(values)}
        >     
        {({ handleChange, handleBlur, handleSubmit, values, isValid, isValidating, dirty}) => (

      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10}}>
            <Input
              placeholder='Prefix i.e Mr, Ms'
              {...preFixInputState}
              onChangeText={handleChange('preFix')}
              onBlur={handleBlur("preFix")}
              value={values.preFix}


            />
            <Input
              placeholder='[Choose Gender]'
              {...genderInputState}

              onChangeText={handleChange('gender')}
              onBlur={handleBlur("gender")}
              value={values.gender}

              style={{borderColor: '#ff0000'}}
            />
          </View>
          <Input
              placeholder='First Name'
              {...firstNameInputState}
              onChangeText={handleChange('first')}
              onBlur={handleBlur("first")}
              value={values.first}

              style={{borderColor: '#ff0000', padding: 10}}
            />
            <Text style={{fontSize: 10, paddingLeft: 20}}>
              Enter First Name.
            </Text>
            <Input
              placeholder='Middle Name'
              {...middleNameInputState}
              style = {styles.items}
              onChangeText={handleChange('middle')}
              onBlur={handleBlur("middle")}
              value={values.middle}

            />
            <Input
              placeholder='Last Name'
              {...lastNameInputState}
              onChangeText={handleChange('last')}
              onBlur={handleBlur("last")}
              value={values.last}

              style={{borderColor: '#ff0000', padding: 10}}
            />
            <Text style={{fontSize: 10, paddingLeft: 20}}>
              Enter Last Name.
            </Text>
            <Input
              placeholder='Postfix i.e. Dr., Jr., II'
              {...postFixInputState}
              value={values.postFix}
              onChangeText={handleChange('postFix')}
              onBlur={handleBlur("postFix")}

              style = {styles.items}
            />
            <Datepicker
              date={date} //can comment this out to see submission without date and only ssn
              min={min}
              placeholder='Pick a Date'
              onChangeText={handleChange('date')}
              value={values.date}
              onSelect={nextDate => setDate(nextDate)}
              status='warning'
              {...dateInputState}

              style = {styles.items}

            />
            <Text style={{fontSize: 10, paddingLeft: 20}}>
              Enter a Date of Birth or SSN.
            </Text>
            <Input
              placeholder='SSN: (000-00-0000)'
              {...ssnInputState}
              onChangeText={handleChange('ssn')}
              onBlur={handleBlur('ssn')}
              value={values.ssn}

              status='warning'
              style = {styles.items}
            />
            <Text style={{fontSize: 10, paddingLeft: 20}}>
              Enter a social security number or dob.
            </Text>
            <Input
              placeholder='noemail@noemail.com'
              {...emailInputState}
              style = {styles.items}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}            
            />
            <Input
              placeholder='(943) 390-3035'
              {...phoneInputState}
              style = {styles.items}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur("phone")}
              value={values.phone}

            />
            <Input
              placeholder='Alternate Phone (000) 000-0000 (EVC)'
              {...altPhoneInputState}
              style = {styles.items}
              onChangeText={handleChange('altPhone')}
              onBlur={handleBlur("altPhone")}
              value={values.altPhone}

            />
            <Text style={{fontSize: 10, paddingLeft: 20}}>
              Enter a secondary EVC phone number (Not Required).
            </Text>
            {/* Not sure why button is still enabled at beginning before you press anything. */}
            <Button disabled={!isValid} onPress={handleSubmit}> 
            Pull Credit Score
            </Button>
          </View>
        )}</Formik>
        </Card>
      </Layout>
    </ApplicationProvider>
  </>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  mainView: {
    flexDirection: 'column', 
  },
  items: {
    padding: 10
  },
  card: {
    borderColor: '#ddd',
    borderWidth: 5,
  }

});
