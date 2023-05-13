import React from 'react';

const Background = ({image}: {image: string}) => {
    const bgUrl = `bg-[url("${image}")]`
  return (
    <div className={`bgWithShadow ${bgUrl} bg-cover h-[66.6vh] left-0 opacity-[0.2] pointer-events-none absolute w-screen top-0 -z-1`}></div>
  );
};

export default Background;
