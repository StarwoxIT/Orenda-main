import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BPStepOne from './BPStepOne';
import BPStepTwo from './BPStepTwo';
import BPApplied from './BPApplied';
import BPNav from './BPNav';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const BecomeProviderPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    resetField,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    if (formComplete) {
      console.log(data);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const now = new Date();
        const currentDateTime = now.toLocaleString('en-US', { timeZone: 'UTC' });

        const templateParams = {
          From: 'Orenda',
          Section: 'Become A Provider',
          FullName: data['Full Name'],
          FNPCertified: data['FNPCertifiedOrOthers'],
          CV: reader.result,
          Email: data['Email Address'],
          FNPinfo: data['FNPCertifiedOrOthers Info'] || 'None',
          PMHNPCertified: data['PMHNPCertified'],
          LicensedStated: data['States Licensed'],
          DeaStates: data['States with DEA'],
          AgesSeen: data['agesSeen'],
          ComfortableWithTalkTherapy: data['comfortableWithTalkTherapy'],
          HasExperienceInMentalHealth: data['hasExperienceInMentalHealth'],
          HasExperienceWithPrescriptionManagement:
            data['hasExperienceWithPrescriptionManagement'],
          DateTimeSubmitted: currentDateTime,
        };

        try {
          // Send email with EmailJS
          await emailjs.send(
            'service_a6ocvxc',
            'template_rg8wzrk',
            templateParams,
            'Wv61Pn9AOeH61J_Jm'
          );
          console.log('Email sent successfully');

          // Send data to Google Sheets
          const googleSheetResponse = await fetch(
            'https://script.google.com/macros/s/AKfycbyAnXd4VXoVypbAwZeV3tXehHSUtOUon4VhO6ZYvOrjMBaxg6grSEcLEbtO_CUbydlO/exec',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(templateParams),
              mode: "no-cors",
            }
          );

          if (googleSheetResponse.ok) {
            console.log('Data successfully sent to Google Sheets');
          } else {
            console.error('Failed to send data to Google Sheetss', googleSheetResponse.statusText);
          }

          setFormStep(3); // Proceed to the next step
        } catch (error) {
          toast.error('Error! Please try again');
          console.error(`Error occurred: ${JSON.stringify(error)}`);
        } finally {
          setFormComplete(false);
        }
      };
    }
  };


  const handlePrev = () => {
    window.scrollTo(0, 100);
    setFormStep(1);
  };

  const handleNext = () => {
    if (isValid && isDirty) {
      if (formStep === 2) {
        setFormComplete(true);
      } else {
        setFormStep(2);
        setTimeout(() => clearErrors(), 1);
        window.scrollTo(0, 100);
      }
    }
  };

  return (
    <main className="px-5 mb-40">
      <div className="max-w-7xl mx-auto ~mt-8/[7.5rem]">
        <h1 className="heading ~mb-2/4">Become an Orenda Provider</h1>
        <p className="text-center">
          Please fill out this form below correctly and we will get back to you.
        </p>

        <div className="~mt-6/8">
          {formStep < 3 && (
            <p className="~text-xs/xl text-center">
              <strong>Step {formStep} of 2</strong>
            </p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="~mt-6/8 max-w-[43.13rem] mx-auto"
          >
            {formStep === 1 && (
              <BPStepOne
                register={register}
                watch={watch}
                errors={errors}
                resetField={resetField}
              />
            )}

            {formStep === 2 && (
              <BPStepTwo
                register={register}
                errors={errors}
                setFile={setFile}
              />
            )}

            {formStep === 3 && <BPApplied />}

            <BPNav
              isSubmitting={isSubmitting}
              formComplete={formComplete}
              formStep={formStep}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </form>
        </div>
      </div>
    </main>
  );
};
export default BecomeProviderPage;
