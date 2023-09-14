import AhdhesiveElement from './AdhesiveComponent';
import React, {useState} from 'react';

import {PlusCircleOutlined, InboxOutlined} from '@ant-design/icons';
import { Button, Upload, notification} from 'antd';


function Adhesive(){

    const [adhesive, setAdhesive] = useState([{"option":["name", "brand", "family"], "name":""}])
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const {Option} = Select;
  
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };


  const add_adhesive = () => {
    
    if (adhesive.length>2){
      notification.open({
        message: 'Notifcation',
        description:
          'Vous ne pouvez ajouter que 3 Elements',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }else{

      setAdhesive([...adhesive, adhesive[0]])
    }

  }

  const OnAddhesiveSelect = (value, index)=>{
    
    // console.log(value, index)
    let adh = []
    for (const [i, elm] of adhesive.entries()){
      // console.log(index, elm);
      if(i!==index){
        console.log(index, elm);
        console.log(elm["option"].filter((x) => x!==value));
        adh.push({"option":["name", "brand", "family"].filter((x) => x!==value), "name": elm["name"]})
      }
      else{
        console.log(elm)
        adh.push(elm)
      }

      setAdhesive(adh);

    }
    console.log(adhesive);

  }

  const onRemoveAdhesive = (index) => {

    console.log(index, "remove");
    // console.log(adhesive.filter((_x, i) => i!=index));
    setAdhesive(adhesive.filter((_x, i) => i!==index));
  }

  const OnAddhesiveElmSelect = (index, value) => {

    let ad = []

    console.log(index, value)
    for (const [i, elm] of adhesive.entries()){
      if (index===i){
        ad.push({"option": elm["option"], name: value})
      }
      else{
        ad.push(elm)
      }
    }
    console.log(ad)
    setAdhesive(ad)
  }
  return (
    <div>
      <>
      {adhesive.map((Ele, index)=>{
        return (
          <AhdhesiveElement index={index} key={index} options={Ele.option} OnAddhesiveSelect={OnAddhesiveSelect} onRemoveAdhesive={onRemoveAdhesive} OnAddhesiveElmSelect={OnAddhesiveElmSelect}/>
        )
      })}
      
      
      <Button type="dashed" icon={< PlusCircleOutlined />} onClick={add_adhesive}>
                AddKey Value
      </Button>
      <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to upload PDF</p>
      </Upload.Dragger>
    </>
    </div>
  );


}

export default Adhesive;


