import React, { useState } from 'react';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return <div></div>;
};

export default Dropdown;
