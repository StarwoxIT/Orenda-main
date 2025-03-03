import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Assessment1/Assessment1.css';
import '../Assessment2/Assessment2.css';
import '../Assessment3/Assessment3.css';
import './Assessment4.css';
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

const Assessment4 = ({ prevQuestion, handleSubmit }) => {
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const condition = watch('question4');

  const radioOptions = [
    'Depression',
    'Anxiety',
    'Obsessive Compulsive Disorder (OCD)',
    'Eating Disorder(s)',
    'Attention Deficit/Hyperactivity Disorders (ADHD/ADD)',
  ];

  const selectOptions = [
    { label: 'Sleep Disorders', value: 'Sleep Disorders' },
    { label: 'Bipolar Disorder', value: 'Bipolar Disorder' },
    { label: 'Post-traumatic Stress Disorder (PTSD)', value: 'Post-traumatic Stress Disorder (PTSD)' },
    { label: 'Maternity/Postpartum', value: 'Maternity/Postpartum' },
    { label: 'Academic Stress', value: 'Academic Stress' },
    { label: 'Addiction/Substance Abuse', value: 'Addiction/Substance Abuse' },
    { label: 'Adolescent/Teen Issues', value: 'Adolescent/Teen Issues' },
    { label: 'Alcoholism', value: 'Alcoholism' },
    { label: 'Anger Management', value: 'Anger Management' },
    { label: 'Anorexia', value: 'Anorexia' },
    { label: 'Anxiety Disorders', value: 'Anxiety Disorders' },
    { label: 'Autism Spectrum Disorder (ASD)', value: 'Autism Spectrum Disorder (ASD)' },
    { label: 'Body Dysmorphic Disorder', value: 'Body Dysmorphic Disorder' },
    { label: 'Burnout', value: 'Burnout' },
    { label: 'Chronic Pain', value: 'Chronic Pain' },
    { label: 'Cognitive Behavioural Therapy (CBT)', value: 'Cognitive Behavioural Therapy (CBT)' },
    { label: 'Couples Therapy', value: 'Couples Therapy' },
    { label: 'Development Disorders', value: 'Development Disorders' },
    { label: 'Disruptive Mood Dysregulation Disorder', value: 'Disruptive Mood Dysregulation Disorder' },
    { label: 'Domestic Violence', value: 'Domestic Violence' },
    { label: 'Family Trauma', value: 'Family Trauma' },
    { label: 'Gender Affirming Care', value: 'Gender Affirming Care' },
    { label: 'Generalized Anxiety Disorders', value: 'Generalized Anxiety Disorders' },
    { label: 'Genomic Testing', value: 'Genomic Testing' },
    { label: 'Geripsych', value: 'Geripsych' },
    { label: 'Grief/Grief Counseling', value: 'Grief/Grief Counseling' },
    { label: 'Group therapy', value: 'Group therapy' },
    { label: 'Insomnia', value: 'Insomnia' },
    { label: 'Intermittent Explosive Disorder', value: 'Intermittent Explosive Disorder' },
    { label: 'LGBTQ+ Counseling', value: 'LGBTQ+ Counseling' },
    { label: 'Life transitions', value: 'Life transitions' },
    { label: 'Major Depressive Disorder (MDD)', value: 'Major Depressive Disorder (MDD)' },
    { label: 'Medication-Assisted Treatment (MAT)', value: 'Medication-Assisted Treatment (MAT)' },
    { label: 'Medication Management', value: 'Medication Management' },
    { label: 'Men\'s Mental Health', value: 'Men\'s Mental Health' },
    { label: 'Mood Disorders', value: 'Mood Disorders' },
    { label: 'Oppositional Defiant Disorder', value: 'Oppositional Defiant Disorder' },
    { label: 'Pain Management Consultation', value: 'Pain Management Consultation' },
    { label: 'Panic Attacks', value: 'Panic Attacks' },
    { label: 'Panic Disorders', value: 'Panic Disorders' },
    { label: 'Performance Anxiety', value: 'Performance Anxiety' },
    { label: 'Personality Disorder(s)', value: 'Personality Disorder(s)' },
    { label: 'Postpartum Anxiety', value: 'Postpartum Anxiety' },
    { label: 'Postpartum Depression', value: 'Postpartum Depression' },
    { label: 'Premenstrual Dysphoric Disorder', value: 'Premenstrual Dysphoric Disorder' },
    { label: 'Prescription/Refill', value: 'Prescription/Refill' },
    { label: 'Psychiatry Consultations', value: 'Psychiatry Consultations' },
    { label: 'Self-Harm/Injury', value: 'Self-Harm/Injury' },
    { label: 'Sexual Dysfunction', value: 'Sexual Dysfunction' },
    { label: 'Social Anxiety Disorder', value: 'Social Anxiety Disorder' },
    { label: 'Stress Management', value: 'Stress Management' },
    { label: 'Suboxone Management (X Waiver)', value: 'Suboxone Management (X Waiver)' },
    { label: 'Substance Use Disorder (SUD)', value: 'Substance Use Disorder (SUD)' },
    { label: 'Tics/Tourette Syndrome', value: 'Tics/Tourette Syndrome' },
    { label: 'Trauma', value: 'Trauma' },
    { label: 'Women\'s Mental Health Issues', value: 'Women\'s Mental Health Issues' },
    { label: 'Weight Management', value: 'Weight Management' },
  ];

  const handlePrevClick = () => {
    prevQuestion();
  };

  const isRadioOptionSelected = radioOptions.includes(condition);

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
        <div className="assessment1-left assessment4-left">
          <NavLink to="/">
            <div className="homepage">
              <ArrowBackIosIcon style={{ color: 'white' }} />
              <p style={{ color: 'white' }}>Homepage</p>
            </div>
          </NavLink>

          <div className="question">
            <p className="q-no">Question 4 of 4</p>
            <p className="main-q">Are you looking to address any of these conditions?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right assessment4-right">
          <FormControl className="a2r">
            <Controller
              name="question4"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select a condition before proceeding.' }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question4', e.target.value);
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
              name="question4"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  {...field}
                  value={isRadioOptionSelected ? '' : field.value}
                  label="Other (select)"
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question4', e.target.value);
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
            {errors.question4 && <p className="error-message">{errors.question4.message}</p>}
          </FormControl>
          <div className="next-prev">
            <button className="prev" onClick={handlePrevClick}>Previous</button>
            <button className="next" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Assessment4;
