import React, { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Assessment1/Assessment1.css';
import './Assessment2.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Header from '../../Header';
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom';

const Assessment2 = ({ nextQuestion, prevQuestion }) => {
  const { control, formState: { errors }, setValue, watch } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const session = watch('question2');

  const handleChange = (event) => {
    setValue('question2', event.target.value);
  };

  const handleNextClick = () => {
    if (session) {
      nextQuestion();
    } else {
      setValue('question2', '', { shouldValidate: true }); // Trigger validation
    }
  };

  const handlePrevClick = () => {
    prevQuestion();
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
            <p className='q-no'>Question 2 of 4</p>
            <p className='main-q'>What would you like your sessions to focus on?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right">
          <FormControl className='a2r'>
            <Controller
              name="question2"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select a session focus before proceeding.' }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange(e);
                  }}
                >
                  <FormControlLabel
                    className='assessment2-right-checkbox'
                    control={<Radio />}
                    label="Medication Management (with brief talk therapy)"
                    value="Medication Management (with brief talk therapy)"
                  />
                  <FormControlLabel
                    className='assessment2-right-checkbox'
                    control={<Radio />}
                    label="Weekly/Bi-weekly Talk Therapy only"
                    value="Weekly/Bi-weekly Talk Therapy only"
                  />
                  <FormControlLabel
                    className='assessment2-right-checkbox'
                    control={<Radio />}
                    label="Combined (A mix of both)"
                    value="Combined (A mix of both)"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          {errors.question2 && <p className='error-message'>{errors.question2.message}</p>}
          <div className="next-prev">
            <button className="prev" type="button" onClick={handlePrevClick}>Previous</button>
            <button className="next" type="button" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Assessment2;
