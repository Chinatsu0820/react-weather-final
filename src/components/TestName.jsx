import React from "react";

export default function TestName({ apiData }) {
    console.log(apiData.name);

  return (
    <div className="mt-20">
        {apiData.name}
    </div>
  );
}