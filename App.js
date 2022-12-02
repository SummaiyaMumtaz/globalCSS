import React from 'react'
// import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// function App() {
//   return (
//     <>
//       <View style={styles.box}>
//         <Text style={styles.headng}>Log In</Text>
//             <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Email"
//     placeholderTextColor="#003f5c"
//   />
// </View>
 
// <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Password"
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
    
//   />
// </View>

// <TouchableOpacity style={styles.loginBtn}>
//   <Text style={{ fontWeight:"bold",
//     fontSize:20,
//     color :"white"}}>LOGIN</Text>
// </TouchableOpacity>
//         </View>
//         </>
//   )}



//signup
// import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// function App() {
//   return (
//     <>
//       <View style={styles.box}>
//         <Text style={styles.headng}>Log In</Text>
//             <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Email"
//     placeholderTextColor="#003f5c"
//   />
// </View>
 
// <View style={styles.inputbox}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Password"
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
    
//   />
// </View>

// <TouchableOpacity style={styles.loginBtn}>
//   <Text style={{ fontWeight:"bold",
//     fontSize:20,
//     color :"black"}}>SignUp</Text>
// </TouchableOpacity>
//         </View>
//         </>
//   )}




// const styles = StyleSheet.create({
//   headng:{
//     marginBottom:10,
//     // color:"#FF1493",
//     fontFamily: 'italic',
//     fontWeight:"bold",
//     fontSize:30,
//     color :"white",
//   },
//   box: {
//         flex: 1,
//         color :"",
//         backgroundColor: '#C5C5C5',
//         alignItems: 'center',
//         fontSize: 20,
//         justifyContent: 'center',
//        },
//        inputbox: {
//         backgroundColor: "black",
//         color:"white",
//         // borderRadius: 30,
//         borderColor:"White",
//         width: "70%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
//       },
      
//       TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//       },
   
//       loginBtn:
//  {
//    width:"50%",
//   //  borderRadius:25,
//    height:50,
//    alignItems:"center",
//    justifyContent:"center",
//    marginTop:40,
//    backgroundColor:"White",
   
//  }
 
// });

// export default App;

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
}

//global css
// const styles = StyleSheet.create({
//   container:{

//     // backgroundColor:"pink",
//     height:"100%",
//     padding: 30,
//   },
//   input:{
//     backgroundColor:"#E2C6F6",
//     marginTop:10,
//     padding:10,
//   },
//   text:{

//     fontSize:30,
//     fontWeight:"bold",
//     textAlign:"center",
//     marginTop:10,
//     color:"#D19AFA",


//   }

// })