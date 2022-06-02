import React , { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
import { Header, Left, Right, Icon, Footer, Label} from 'native-base';
import Button from 'react-native-button';
import t from 'tcomb-form-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField }  from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker';
// import moment from 'moment';


class FormScreens extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor})=>(
            <Icon name="paper" style={{ fontSize: 24, color: tintColor }}/>
        )
     }
    constructor(){
        super();
        this.state = {
        ketua_kegiatan: '',
        lab: '',
        level: '',
        tanggal_mulai: '',
        tanggal_selesai: '',
        jam_mulai: '',
        jam_selesai: '',
        daftar_nama: '',
        keperluan: '',
        kontak_ketua:'',
        dosen_pembina: '',
        app_laboran: '',
        app_kalab: '',
        app_kajur: '',
        app_pudir: '',
        }
    }
    submit(){
        let url = "http://192.168.43.181:8000/api/pinjams";
        let data = this.state;
        fetch(url,{
            method:'PUT',
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp)
                alert("Data is Submitted")
            })
        })
    } 
    render() {
        let lab = [{
                value: '313',
            }, {
                value: '316',
            }, {
                value: '317',
            }, {
                value: '318',
            }, {
                value: '319',
            }, {
                value: '320',
            }, {
                value: '324',
            }, {
                value: '325',
            }, {
                value: '329',
            }, {
                value: '330',
            }, {
                value: '234',
            }, {
                value: '283',
            }, {
                value: '218',
            }, {
                value: '224',
            }, {
                value: '225',
            }, {
                value: '230',
            }, {
                value: '233',
            }, {
                value: '135',
            }, {
                value: '136',
            }, {
                value: '137',
            }, {
                value: 'Workshop',
            }, {
                value: 'Lab Bahasa',
          }];  
          let level = [{
                value: 1,
            }, {
                value: 2,
            }, {
                value: 3,
          }]; 
          
        return (
            //08-08-2019 (Ubah view menjadi ScrollView)
            <ScrollView style={styles.container}>
                <StatusBar hidden />
                <Header style={{backgroundColor:'orange', flex:0.8}}>
                    <Left style={{justifyContent:"flex-start",flex:1,marginTop:5}}>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={{padding:20}}>
                <Text style={{fontSize:20,textAlign: 'center',paddingLeft:20,fontWeight: 'bold'}}>{"\n"}Halaman Pengajuan</Text>
                <TextField
                    label = 'ketua_kegiatan'
                    // value = {ketua_kegiatan}
                    onChangeText={ (ketua_kegiatan) => this.setState({ ketua_kegiatan }) }
                    // onChange={(data) => { this.setState({ketua_kegiatan:data.target.value}) }}
                    value = {this.state.ketua_kegiatan}
                    editable={false}
                    selectTextOnFocus={false}
                />
               <Dropdown
                    label='Laboratorium'
                    data={lab}
                    onChangeText={ (lab) => this.setState({ lab }) }
                />
                
                <Dropdown
                    label='Level'
                    data={level}
                    onChangeText={ (level) => this.setState({ level }) }
                />
                <TextField
                    label = 'Tanggal Mulai'
                    // value = {tanggal_mulai}
                    onChangeText={ (tanggal_mulai) => this.setState({ tanggal_mulai }) }
                    // onChange={(data) => { this.setState({tanggal_mulai:data.target.value}) }}
                    value = {this.state.tanggal_mulai}
                />
                
                <TextField
                    label = 'Tanggal Selesai'
                    // value = {tanggal_selesai}
                    onChangeText={ (tanggal_selesai) => this.setState({ tanggal_selesai }) }
                    // onChange={(data) => { this.setState({tanggal_selesai:data.target.value}) }}
                    value = {this.state.tanggal_selesai}
                />

                <TextField
                    label = 'Jam Mulai'
                    // value = {jam_mulai}
                    onChangeText={ (jam_mulai) => this.setState({ jam_mulai }) }
                    // onChange={(data) => { this.setState({jam_mulai:data.target.value}) }}
                    value = {this.state.jam_mulai}
                />


                <TextField
                    label = 'Jam Selesai'
                    // value = {jam_selesai}
                    onChangeText={ (jam_selesai) => this.setState({ jam_selesai }) }
                    // onChange={(data) => { this.setState({jam_selesai:data.target.value}) }}
                    value = {this.state.jam_selesai}
                />

                <TextField
                    label = 'Keperluan'
                    // value = {keperluan}
                    onChangeText={ (keperluan) => this.setState({ keperluan }) }
                    // onChange={(data) => { this.setState({keperluan:data.target.value}) }}
                    value = {this.state.keperluan}
                />

                <TextField
                    label = 'Daftar Nama'
                    // value = {daftar_nama}
                    onChangeText={ (daftar_nama) => this.setState({ daftar_nama }) }
                    // onChange={(data) => { this.setState({daftar_nama:data.target.value}) }}
                    value = {this.state.daftar_nama}
                />

                <TextField
                    label = 'kontak_ketua'
                    // value = {kontak_ketua}
                    onChangeText={ (kontak_ketua) => this.setState({ kontak_ketua }) }
                    // onChange={(data) => { this.setState({kontak_ketua:data.target.value}) }}
                    value = {this.state.kontak_ketua}
                />

                <TextField
                    label = 'Dosen Pembina'
                    // value = {dosen_pembina}
                    onChangeText={ (dosen_pembina) => this.setState({ dosen_pembina }) }
                    // onChange={(data) => { this.setState({dosen_pembina:data.target.value}) }}
                    value = {this.state.dosen_pembina}
                />

                 <TextField
                    label = 'app_laboran'
                    // value = {app_laboran}
                    onChangeText={ (app_laboran) => this.setState({ app_laboran }) }
                    // onChange={(data) => { this.setState({app_laboran:data.target.value}) }}
                    value = {this.state.app_laboran}
                    
                />
                <Button
                    style={{fontSize:20, color:'orange'}}
                    styleDisabled={{color:'grey'}}
                    onPress ={()=>{this.submit()}}
                    > {"\n"} Update
                </Button>
                </View>
                {/* <Form type={Pengajuan}/> */}

                <Footer style={{backgroundColor:'white'}}>
                    <Text style={{paddingTop:10,color:'grey'}}>{"\n"}Copyright reserved to @Leony_vw</Text>
                </Footer>
            </ScrollView>

            
        );
    }
    
}

export default FormScreens;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    //   ...Platform.select({
    //     android: {
    //         marginTop: StatusBar.currentHeight
    //     }
    // })
    },
  });