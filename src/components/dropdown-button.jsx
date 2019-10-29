import React from 'react';

const DropdownButton = (props) => {
  const options = [
    { label: 'Action & Adventure', value: '1365' },
    { label: 'Comedy', value: '6548' },
    { label: 'Crime', value: '5824' },
    { label: 'Drama', value: '5763' },
    { label: 'Kids', value: '783' },
  ];

  return (
    <div className="drop-down">
      <h2>What type of film do you want to watch?</h2>
      <select
        name="genre"
        onChange={props.onClick}
      >
        <option value="1365">Action & Adventure</option>
        <option value="6548">Comedy</option>
        <option value="5824">Crime</option>
        <option value="5763">Drama</option>
        <option value="783">Kids</option>

      </select>
    </div>
  );
};

export default DropdownButton;
