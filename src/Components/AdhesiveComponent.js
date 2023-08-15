import React, { useState } from "react";
import {Select, Input, Button} from "antd";

const  AhdhesiveElement = function ({add, options, OnDeleteOption, index, OnAddhesiveSelect, onRemoveAdhesive, OnAddhesiveElmSelect}) {

    console.log(index);

    const {Option} = Select;
    return (
    <div style={{display:"flex", "gap":"8px", flexDirection:"row"}}>
            <Select style={{ width: "130px" }} onChange={value => OnAddhesiveSelect(value, index)}>
        {options.map((opt, index)=> {
            return (
                <Option key={index} value={opt}>
                    {opt}
                </Option>
            );
        })}
      </Select>
    <Input type="text" placeholder="Entre une value" onChange={(e) => OnAddhesiveElmSelect(index, e.target.value)}/>
    { 
    
        index!==0 && (
        
        <Button type="primary" danger onClick={() => onRemoveAdhesive(index)}>Remove</Button>)
    }

    </div>
      )
}

export default AhdhesiveElement;
