import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Assessment1/Assessment1.css';
import '../Assessment2/Assessment2.css';
import './Assessment3.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Header from '../../Header';
import Footer from '../../Footer/Footer';
import { NavLink } from 'react-router-dom';

const Assessment3 = ({ nextQuestion, prevQuestion }) => {
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const location = watch('question3');

  const radioOptions = [
    'New York',
    'New Jersey',
    'Connecticut',
    'Massachusetts',
  ];

  const selectOptions = [
    { label: 'Alabama', value: 'Alabama' },
    { label: 'Alaska', value: 'Alaska' },
    { label: 'Arizona', value: 'Arizona' },
    { label: 'Arkansas', value: 'Arkansas' },
    { label: 'California', value: 'California' },
    { label: 'Colorado', value: 'Colorado' },
    { label: 'Connecticut', value: 'Connecticut' },
    { label: 'Delaware', value: 'Delaware' },
    { label: 'Florida', value: 'Florida' },
    { label: 'Georgia', value: 'Georgia' },
    { label: 'Hawaii', value: 'Hawaii' },
    { label: 'Idaho', value: 'Idaho' },
    { label: 'Illinois', value: 'Illinois' },
    { label: 'Indiana', value: 'Indiana' },
    { label: 'Iowa', value: 'Iowa' },
    { label: 'Kansas', value: 'Kansas' },
    { label: 'Kentucky', value: 'Kentucky' },
    { label: 'Louisiana', value: 'Louisiana' },
    { label: 'Maine', value: 'Maine' },
    { label: 'Maryland', value: 'Maryland' },
    { label: 'Massachusetts', value: 'Massachusetts' },
    { label: 'Michigan', value: 'Michigan' },
    { label: 'Minnesota', value: 'Minnesota' },
    { label: 'Mississippi', value: 'Mississippi' },
    { label: 'Missouri', value: 'Missouri' },
    { label: 'Montana', value: 'Montana' },
    { label: 'Nebraska', value: 'Nebraska' },
    { label: 'Nevada', value: 'Nevada' },
    { label: 'New Hampshire', value: 'New Hampshire' },
    { label: 'New Jersey', value: 'New Jersey' },
    { label: 'New Mexico', value: 'New Mexico' },
    { label: 'New York', value: 'New York' },
    { label: 'North Carolina', value: 'North Carolina' },
    { label: 'North Dakota', value: 'North Dakota' },
    { label: 'Ohio', value: 'Ohio' },
    { label: 'Oklahoma', value: 'Oklahoma' },
    { label: 'Oregon', value: 'Oregon' },
    { label: 'Pennsylvania', value: 'Pennsylvania' },
    { label: 'Rhode Island', value: 'Rhode Island' },
    { label: 'South Carolina', value: 'South Carolina' },
    { label: 'South Dakota', value: 'South Dakota' },
    { label: 'Tennessee', value: 'Tennessee' },
    { label: 'Texas', value: 'Texas' },
    { label: 'Utah', value: 'Utah' },
    { label: 'Vermont', value: 'Vermont' },
    { label: 'Virginia', value: 'Virginia' },
    { label: 'Washington', value: 'Washington' },
    { label: 'West Virginia', value: 'West Virginia' },
    { label: 'Wisconsin', value: 'Wisconsin' },
    { label: 'Wyoming', value: 'Wyoming' }
  ];

  const handleNextClick = () => {
    if (location) {
      nextQuestion();
    } else {
      setValue('question3', '', { shouldValidate: true }); // Trigger validation
    }
  };

  const handlePrevClick = () => {
    prevQuestion();
  };

  const isRadioOptionSelected = radioOptions.includes(location);

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
            <p className="q-no">Question 3 of 4</p>
            <p className="main-q">Where will you be located at the time of your appointment?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right">
          <FormControl className="a2r">
            <Controller
              name="question3"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select a location before proceeding.' }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question3', e.target.value);
                  }}
                >
                  {radioOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      className="assessment2-right-checkbox"
                      control={<Radio />}
                      label={option}
                      value={option}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </FormControl>
          <FormControl className="sel3">
            <InputLabel id="demo-simple-select-helper-label">Other (select)</InputLabel>
            <Controller
              name="question3"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select a location before proceeding.' }}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  {...field}
                  value={isRadioOptionSelected ? '' : field.value}
                  label="Other (select)"
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question3', e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {selectOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          {errors.question3 && <p className="error-message">{errors.question3.message}</p>}
          <div className="next-prev">
            <button className="prev" onClick={handlePrevClick}>Previous</button>
            <button className="next" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Assessment3;