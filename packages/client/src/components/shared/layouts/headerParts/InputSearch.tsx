import React from 'react';

const InputSearch = () => {
  return (
    <div className="p-[3px] rounded-2xl bg-stone-800">
      <div className="rounded-full">
        <input
          className="px-4 py-2 bg-transparent text-white rounded-2xl placeholder:text-white"
          placeholder="Input Search..."
        />
      </div>
    </div>
  );
};

export default InputSearch;