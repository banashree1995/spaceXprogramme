import React, { Component } from 'react';
import axios from 'axios';
import nodataLogo from "./nodata.png"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spacexData: [],
      lunchsucessFilter:[],
      yearFiletr:['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
      launch_sel_val:true,
      land_sel_val:true,
      developer_name:'Banashree Panda',
      show_nodataimg:false
        
    }
  }
  componentDidMount() {
    const allspacedataUrl='https://api.spaceXdata.com/v3/launches?limit=100'
    
    axios.get(allspacedataUrl)

        .then(response => {
            console.log("list", response.data)
            this.setState({
              spacexData: response.data
            });
       if(response.data.length == 0){
              this.setState({
                show_nodataimg: true
              });
            }else{
              this.setState({
                show_nodataimg: false
              });
            }
        })
        .catch(function (error) {
            console.log(error);
        })
      }

    
  yearFilter(event){
   let selected_year = event.target.innerText;
   let yearfilterurl='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+this.state.launch_sel_val+'&land_success='+this.state.land_sel_val+'&launch_year='+ selected_year
   
     axios.get(yearfilterurl).then(response=> {
          this.setState({
            spacexData:response.data
          });
           if(response.data.length == 0){
              this.setState({
                show_nodataimg: true
              });
            }else{
              this.setState({
                show_nodataimg: false
              });
            }
        })
        .catch(function (error) {
          console.log(error);
      })
    };

    launchSuccessFilter(event){
      let selected_launch = (event.target.innerText).toLowerCase();
      this.setState({
        launch_sel_val:selected_launch
      });
      let launchsuccessilterurl='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+ selected_launch
      
        axios.get(launchsuccessilterurl).then(response=> {
             this.setState({
               spacexData:response.data
             });
              if(response.data.length == 0){
              this.setState({
                show_nodataimg: true
              });
            }else{
              this.setState({
                show_nodataimg: false
              });
            }
           })
           .catch(function (error) {
             console.log(error);
         })
        this.setState({
        launch_sel_val:true
        });
       }

       landSuccessFilter(event){
        let selected_land = (event.target.innerText).toLowerCase();
        this.setState({
          land_sel_val:selected_land
        })
        let landsuccessfilterurl='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+this.state.launch_sel_val+'&land_success='+ selected_land
        
          axios.get(landsuccessfilterurl).then(response=> {
               this.setState({
                 spacexData:response.data
               });
              if(response.data.length == 0){
              this.setState({
                show_nodataimg: true
              });
            }else{
              this.setState({
                show_nodataimg: false
              });
            }
             })
             .catch(function (error) {
               console.log(error);
           })
         }
   
  render() { 
    return (
      <div>
         
        <div className="container">
        <h3>SpaceX Launch Programs</h3>
          <div className="row mainContainer">
            <div className="col-md-2 mainContainer1">
              <label className="boldText">Filters</label>
              <div className="filterHeaderLabel">Launch Year</div>
              <div className="row">
                {this.state.yearFiletr.map((year, i) => (
               <div key={i} className="col-md-6 filterButton">
                <button className="btn btn-success buttonCustom" onClick={(event) => this.yearFilter(event)}  >{year}</button>
               </div>
              ))}
              </div>

              <div className="filterHeaderLabel">Successful Launch</div>
              <div className="row">
               <div className="col-md-6 filterButton">
                <button className="btn btn-success buttonCustom" onClick={(event)=> this.launchSuccessFilter(event)}> True</button>
               </div>
               <div className="col-md-6 filterButton">
                <button className="btn btn-success buttonCustom" onClick={(event)=> this.launchSuccessFilter(event)}>False</button>
               </div>
              </div>

              <div className="filterHeaderLabel">Successful Landing</div>
              <div className="row">
               <div className="col-md-6 filterButton">
               
                <button className="btn btn-success buttonCustom" onClick={(event)=> this.landSuccessFilter(event)}>True</button>
               </div>
               <div className="col-md-6 filterButton">
                <button className="btn btn-success buttonCustom" onClick={(event)=> this.landSuccessFilter(event)}>False</button>
               </div>
              </div>

           </div>
            <div className="col-md-10 mainContainer2">
              {this.state.show_nodataimg && <img src={nodataLogo} className="nodataImg"></img>}
              <div className="row">
               
                {this.state.spacexData.map((name, index) => (

                   <div key={index} className="col-md-3 boxContainers">
                   <img src= {name['links']['mission_patch_small']} alt="" className="ImageHolders" ></img>
                   <div className="labelContainer">
                      <lable className="missionName">{name['mission_name']} #{name['flight_number']}</lable>
                      <p className="missionIdHeader">Mission Ids:</p>
                      <ul>
                      {name['mission_id'].map((misson, id) => (
                              <li className="missionIdName" key={id}>
                                    {misson}
                              </li>
                          ))}
                      </ul>
                      <div className="row">
                      <div className="sectionHeader">Launch Year:</div>
                      <div className="sectionLeft">{name['launch_year']}</div>
                      </div>
                      <div className="row">
                      <div className="sectionHeader">Succesful Launch:</div>
                      <div className="sectionLeft">{name['launch_success'].toString()}</div>
                      </div>
                      <div className="row"> 
                      <div className="sectionHeader">Succesful Landing:</div>
                      <div className="sectionLeft ">{name['rocket']['first_stage']['cores'][0]['land_success'] ? (name['rocket']['first_stage']['cores'][0]['land_success'].toString()): 'false'}</div>
                      </div>
                   </div>

                   </div>
                ))}
              </div>
           </div>
          </div>
        </div>
        <div className="creditsDetail">
          <div className="boldText">Developed By:</div> 
                      <div>{this.state.developer_name}</div>
          </div>
      </div>
    );
  }
}

export default App;
