import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Assessment1.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from '../../Footer/Footer';
import Header from '../../Header';
import { NavLink } from 'react-router-dom';

const Assessment1 = ({ nextQuestion }) => {
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const age = watch('question1');

  const handleNextClick = () => {
    if (age) {
      nextQuestion();
    } else {
      setValue('question1', '', { shouldValidate: true }); // Trigger validation
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 693) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="assessment1-container">
      {showFooter && <Header />}
      <div className="assessment1-wrapper">
        <div className="assessment1-left">
          <NavLink to="/">
            <div className="homepage">
              <ArrowBackIosIcon style={{ color: 'white' }} />
              <p style={{ color: 'white' }}>Homepage</p>
            </div>
          </NavLink>
          
          <div className="question">
            <p className="q-no">Question 1 of 4</p>
            <h1>What is your age?</h1>
            <p className="main-q">(This is intended for the person receiving care, please do not use your own age if you’re doing this on behalf of someone else)</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment1-right">
          <FormControl className='tts'>
            <InputLabel id="age-range-label">Select age range</InputLabel>
            <Controller
              name="question1"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select an age range before proceeding.' }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="age-range-label"
                  id="age-range-select"
                  label="Select age range"
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question1', e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="5 - 12 yrs">5 - 12 yrs</MenuItem>
                  <MenuItem value="13 - 17 yrs">13 - 17 yrs</MenuItem>
                  <MenuItem value="18 - 64 yrs">18 - 64 yrs</MenuItem>
                  <MenuItem value="25 - 64 yrs">25 - 64 yrs</MenuItem>
                  <MenuItem value="65 + yrs">65 + yrs</MenuItem>
                </Select>
              )}
            />
            {errors.question1 && <p className="error-message">{errors.question1.message}</p>}
          </FormControl>
          <div className="next-prev">
            <button className="next" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Assessment1;
