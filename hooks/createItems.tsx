import React from 'react';
export function createItems(listItems: Array<any>): React.ReactNode[] {
  return listItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));
}