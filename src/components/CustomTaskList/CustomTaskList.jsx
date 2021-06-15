import React from 'react';

import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';

// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <CustomTaskListComponentStyles>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at autem beatae blanditiis dolore esse eveniet facilis harum illo laboriosam magni maiores, omnis quae quo, reprehenderit rerum sapiente tempora voluptatem.
      <i className="accented" onClick={props.dismissBar}>
        close
      </i>
    </CustomTaskListComponentStyles>
  );
};

export default CustomTaskList;
