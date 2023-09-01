import React from "react";

export default function TestTemp({ apiData }) {
    if (!apiData || !apiData.main) {
        return null; // もしくはローディング表示などの適切なコンテンツを返す
      }
    
      console.log(apiData.main.temp);

  return (
    <div className="mt-20">
        {apiData.main.temp}
    </div>
  );
}