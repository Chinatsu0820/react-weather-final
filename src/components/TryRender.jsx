import React, { useState } from 'react';
import Search from './Search';
import TestName from './TestName'; 
import TestTemp from './TestTemp'; // 他のコンポーネントもインポート import other components as well

export default function App() {
  const [apiData, setApiData] = useState({});

  console.log("test in render");
  console.log(apiData, setApiData);
  return (
    <div className='flex flex-col'>
      <Search setApiData={setApiData} />
      
      <TestName apiData={apiData} />

      <TestTemp apiData={apiData} />
      {/* 他のコンポーネントも同様に追加  import other components as well*/}
    </div>
  );
}