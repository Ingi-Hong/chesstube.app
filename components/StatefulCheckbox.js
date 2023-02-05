import { Checkbox } from "antd";
import { useState } from "react";

function StatefulCheckbox(props){
    const stateList = props.list;
    const setStateList = props.setList;
    const label = props.label;
    const [checked, setChecked] = useState(true);
    
    function handleChange(){

    }

    function addTick(){

    }

    function removeTick(){

    }

    function handleRemove(id){
        setStateList(list.filter((listItem) => listItem.item_id !== id))
    }

    return(
        <Checkbox checked={checked}>{label}</Checkbox>
    )


}