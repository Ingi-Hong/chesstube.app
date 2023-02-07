import { Checkbox, TreeSelect } from "antd";
import { useState } from "react";

export function CreatorCheckbox(props) {
  const stateList = props.stateList;
  const setStateList = props.setStateList;
  const label = props.label;
  const item_id = props.item_id;
  const [checked, setChecked] = useState(true);

  function addTick() {
    setStateList([...stateList, { creator_id: item_id, creator_name: label }]);
    setChecked(true);
  }

  function removeTick() {
    setStateList(
      stateList.filter((listItem) => listItem.creator_id !== item_id)
    );
    setChecked(false);
  }

  return (
    <Checkbox
      onChange={checked ? removeTick : addTick}
      defaultChecked={true}
      checked={checked}
    >
      {label}
    </Checkbox>
  );
}

export function OpeningCheckbox({ openingTree, setOpenings }) {
  var treeData = [];
  console.log(openingTree)
  for (const key in openingTree) {
    var children = [];
    openingTree[key].children.forEach((element) => {
      children.push({ value: element.opening_id, title: element.opening });
    });
    treeData.push({
      value: key,
      title: openingTree[key].opening,
      children: children,
    });
  }

  function handleChange(e) {
    var idList = [];
    e.forEach((item) => idList.push(parseInt(item)));
    setOpenings(idList);
  }

  return (
    <TreeSelect
      treeData={treeData}
      placeholder="Select openings"
      onChange={(e) => handleChange(e)}
      treeCheckable={true}
      style={{ width: "100%" }}
      multiple={true}
      treeselect={TreeSelect.SHOW_PARENT}
      showSearch={false}
      defaultValue={treeData}
    />
  );
}

export function ColorCheckbox({color, setColors, colors}){

  const [checked, setChecked] = useState(true);
  console.log('colors', colors)

  function addTick(){
    setColors([...colors, color]);
    setChecked(true);
  }

  function removeTick(){
    setColors(
      colors.filter((listItem) => listItem !== color)
    )
    setChecked(false);
  }

  return(
    <Checkbox
    checked={checked}
    defaultChecked={true}
    onChange={checked ? removeTick : addTick}
    >
      {color === 'white' ? "White" : "Black"}
    </Checkbox>
  )

}