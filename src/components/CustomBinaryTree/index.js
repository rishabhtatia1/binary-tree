import React, { useRef, useState } from "react";
import ChildNode from "../ChildNode";
import styles from "./index.module.scss";

const CustomBinaryTree = () => {
  const inputRef = useRef();
  const [tree, setTree] = useState([]);
  const [origTree, setOrigTree] = useState([]);
  const onClickNode = root => {
    let curr_index = root.index;
    const updatedTree = [...origTree];
    while (curr_index > 0) {
      updatedTree[curr_index] = { ...updatedTree[curr_index], active: true };
      curr_index = curr_index % 2 === 0 ? curr_index - 1 : curr_index;
      curr_index = curr_index >> 1;
    }
    updatedTree[0] = { ...updatedTree[0], active: true };
    setTree(updatedTree);
  };
  const onSubmit = () => {
    const inputArr = inputRef?.current?.value.split(",");
    const treeInput = inputArr.map((item, i) => ({
      index: i,
      val: item,
      active: false
    }));
    setTree(treeInput);
    setOrigTree(treeInput);
  };
  const onClear = () => {
    setTree([...origTree]);
  };
  const onReset = () => {
    setTree([]);
  };
  return (
    <div className={styles.main}>
      <p className={styles.heading}>Tree</p>
      <input type="text" ref={inputRef} className={styles.input} />
      <button className={styles.button} onClick={onClear}>
        Clear
      </button>
      <button className={styles.button} onClick={onReset}>
        Reset
      </button>
      <button className={styles.button} onClick={onSubmit}>
        Submit
      </button>
      <div>
        {tree?.length !== 0 && (
          <div className={styles.tree}>
            <ul>
              <li>
                <ChildNode
                  root={tree[0]}
                  arr={tree}
                  onClickNode={onClickNode}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomBinaryTree;
