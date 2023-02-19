import styles from "./index.module.scss";
import React from "react";

const ChildNode = ({ root, arr, onClickNode }) => {
  const N = arr.length;
  if (root?.index >= N) {
    return null;
  }
  const leftIndex = 2 * root?.index + 1;
  const rightIndex = 2 * root?.index + 2;
  return (
    <>
      <p
        onClick={() => {
          onClickNode(root);
        }}
        className={root?.active ? styles.selected : ""}
      >
        {root?.val}
      </p>
      {(leftIndex < N || rightIndex < N) && (
        <ul>
          {leftIndex < N && (
            <li>
              <ChildNode
                root={arr[leftIndex]}
                arr={arr}
                onClickNode={onClickNode}
              />
            </li>
          )}
          {rightIndex < N && (
            <li>
              <ChildNode
                root={arr[rightIndex]}
                arr={arr}
                onClickNode={onClickNode}
              />
            </li>
          )}
        </ul>
      )}
    </>
  );
};
export default ChildNode;
