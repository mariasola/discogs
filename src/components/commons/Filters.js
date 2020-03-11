import React from "react";
import TextField from '@material-ui/core/TextField';
import {
  withStyles
} from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& .MuiInputLabel-animated':{
      color: '#FDAB51',
    },
    '& .MuiInputBase-input':{
      color: '#FDAB51',
    },
    '& label.Mui-focused': {
      color: '#FDAB51',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#F36C4C',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F36C4C',
        color:'#F36C4C'
      },
      '&:hover fieldset': {
        borderColor: '#F36C4C',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F36C4C',
      },
      
    },
   
  }
})(TextField);

const Filters = props => {
  
  const { handleFilter } = props;
  return (
    <form className="filter">
      <CssTextField
        className={CssTextField.root}
        label="Search album or artist"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleFilter}
        
      />
    </form>
  );
};

export default Filters;