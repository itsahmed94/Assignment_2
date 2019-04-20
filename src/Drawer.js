import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

//@Flow

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./img/Profile_Pic.jpg')}
        style={{ width: 30, height: 30, marginRight:10,justifyContent:'flex-end'}}
      />
    );
  }
}






class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./img/Profile_Pic.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
      
    ),
    
  };

  render() {
    return (
      <View>

           
      
      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>OBJECTIVE</Text>
      
<Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>To deliver my efforts for my organization when i get the opportunity to work on.It will be a great experiance here to become a part of this Company.{'\n'}{'\n'}{'\n'}</Text>
         
    <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Resume Details"
      />    


     </View>

    );
  }
}


class SkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Skills',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'aquamarine' }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>SKILLS:{'\n'}</Text>
        
        <Text>-> Microsoft Windows XP/7/10</Text>
        <Text>-> Microsoft Office 2007/10/16(Word/Excel/PowerPoint/Access)</Text>
        <Text>-> Computer Software / Hadware Knowledge</Text>
        <Text>-> Software Installation and Troubleshooting </Text>
        <Text>-> Adobe photoshop cs6/cc as a Graphic Designing{'\n'}</Text>
     

     
     

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}






class BioDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal Details',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'aquamarine', paddingLeft:10 }}>
         <Text style={{paddingTop:15,fontWeight:'bold', fontSize: 30}}>Personal Details:{'\n'}</Text>
      
        
        <Text>Phone Number: 0324-2430574</Text>

        <Text>Father Name: Muhammad Shabbir </Text>
        
        <Text>Religion: Islam </Text>
        <Text>Nationality: Pakistani </Text>
        <Text>Email: ahmed94.shabbir@gmail.com </Text>

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}


class ExperienceScreen extends React.Component {
  static navigationOptions = {
    title: 'Experience',
  };



  render() {
    return (
      
      <View>

      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXPERIENCE:</Text>
      
      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Teaching:</Text>  {'\n'}
      -One year teaching experiance of graduation in coaching. {'\n'}

      {'\n'}
      </Text>

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      </View>
     
    );
  }
}




class ExtraQScreen extends React.Component {
  static navigationOptions = {
    title: 'Extra Qualification',
  };



  render() {
    return (
      
      <View>

      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXTRA QUALIFICATION:</Text>
      
      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Certification in Information Technology (CIT):</Text>  {'\n'}
        - MS.Office {'\n'}
        - Adobe Photoshop for Graphic Designing  {'\n'}

      {'\n'}
      </Text>


        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      </View>
     
    );
  }
}




class EducationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />
    
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white', paddingLeft: 5, }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EDUCATION:</Text>
      
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Matriculation:</Text>  {'\n'}
        - Science Group - 2010  {'\n'}
        {'\n'}
        </Text>
         
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Intermediate:</Text>  {'\n'}
        - Commerce Group - 2012  {'\n'}
        {'\n'}
        </Text>


        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>B.COM :</Text>  {'\n'}
        - Commerce - 2016  {'\n'}
        {'\n'}
        </Text>        


   
        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      /> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Education: {
    screen: EducationScreen
  },
  Experience: {
    screen: ExperienceScreen
  },
  PersonalDetails: {
    screen: BioDetailsScreen
  },
  Skills: {
    screen: SkillsScreen
  },
  ExtraQualification: {
  screen:   ExtraQScreen

  },
});

const DrawerMenu = createAppContainer(MyDrawerNavigator);


export default class DrawerNav extends React.Component {
  render() {
    return <DrawerMenu />;
  }
}