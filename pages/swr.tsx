import { StudentDetail } from '@/components/swr';
import React, { useState } from 'react';

export default function SWRPage() {
  const [list, setList] = useState([1, 1, 1]);

  function handleAddDetail() {
    setList((prevValue) => [...prevValue, 1]);
  }

  return (
    <div>
      <h1>SWR playground</h1>
      <button onClick={handleAddDetail}>Add detail</button>
      <ul>
        {list.map((x, index) => {
          return (
            <li key={index}>
              <StudentDetail studentId="sktwi1cgkkuif36f3" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
