import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Assessment1 from './Assessment1/Assessment1';
import Assessment2 from './Assessment2/Assessment2';
import Assessment3 from './Assessment3/Assessment3';
import Assessment4 from './Assessment4/Assessment4';
import './Assessment.css';
import ProviderModal from './ProviderModal/ProviderModal';

const Assessment = () => {
  const [question, setQuestion] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [assessmentData, setAssessmentData] = useState(null);

  const methods = useForm({
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: ''
    }
  });

  const { handleSubmit } = methods;

  const nextQuestion = () => setQuestion((prev) => Math.min(prev + 1, 3));
  const prevQuestion = () => setQuestion((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data) => {
    console.log(data);
    // Save the form data to state
    setAssessmentData({
      age_group: data.question1,
      focus_areas1: data.question2,
      licensed_state: data.question3,
      focus_areas2: data.question4,
    });
    setModalVisible(true);
  };

  return (
    <div className="assessment-container">
      <div className="assessment-wrapper">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {question === 0 && <Assessment1 nextQuestion={nextQuestion} />}
            {question === 1 && (
              <Assessment2 nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
            )}
            {question === 2 && (
              <Assessment3 nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
            )}
            {question === 3 && (
              <Assessment4 prevQuestion={prevQuestion} handleSubmit={handleSubmit(onSubmit)} />
            )}
          </form>
        </FormProvider>
        {modalVisible && (
          <ProviderModal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            assessmentAnswers={assessmentData} // Pass the assessment data to ProviderModal
          />
        )}
      </div>
    </div>
  );
};

export default Assessment;
