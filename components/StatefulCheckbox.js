import { Checkbox } from "antd";
import { useState } from "react";

export function StatefulCreatorCheckbox(props){
    const stateList = props.stateList;
    const setStateList = props.setStateList;
    const label = props.label;
    const item_id = props.item_id;
    const [checked, setChecked] = useState(true);
    
    function addTick(){
        console.log(stateList)
        setStateList([...stateList, {creator_id: item_id, creator_name: label}])
        setChecked(true);
    }

    function removeTick(){
        setStateList(stateList.filter((listItem) => listItem.creator_id !== item_id));
        setChecked(false);
    }

    return(
        <Checkbox onChange={checked ? removeTick : addTick} defaultChecked={true} checked={checked}>{label}</Checkbox>
    )
}