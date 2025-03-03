import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProviderCardSmall from '../../OurTeam/ProviderCardSmall';
import Loading from '../../OurTeam/Loading';
import { useProviders } from '../../../services/queries';
import Error from '../../OurTeam/Error';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ModalProviders.css';

const ModalProviders = ({ assessmentAnswers }) => {
  const providers = useProviders();
  const [providersData, setProvidersData] = useState(providers.data);

  //filter function that returns filtered providers
  const filterProviders = () => {
    //create string normalizing function
    const normalize = (str, term) => {
      return str.replace(new RegExp(`\\s+|${term}`, 'g'), '').toLowerCase();
    };

    //initialize filteredProviders with providersData
    let filteredProviders = providersData;

    //loop through each answer in assessmentAnswers
    for (const question in assessmentAnswers) {
      //skip question 2 (focus_areas1)
      if (question !== 'focus_areas1') {
        //normalize the question's answer
        const normalizedAnswer = normalize(
          assessmentAnswers[question],
          question === 'age_group'
            ? 'yrs'
            : question === 'focus_areas2'
            ? 'Issues'
            : ''
        );

        //filter through current filteredProviders
        filteredProviders = filteredProviders?.filter((provider) => {
          //initialize the providerValues array that'll contain the
          //normalized version of the values in the current provider's
          //object
          let providerValues = [];

          //check what question we're dealing with and set the providerValues appropriately
          if (question === 'licensed_state') {
            providerValues =
              provider.licensed_states?.map((state) => normalize(state, '')) ||
              [];
          } else if (question === 'focus_areas2') {
            providerValues = [
              ...(provider.specialisation?.map((item) => normalize(item, '')) ||
                []),
              ...(provider.focus_areas?.map((item) => normalize(item, '')) ||
                [])
            ];
          } else if (question === 'age_group') {
            providerValues =
              provider.age_group?.map((age) => normalize(age, 'yrs')) || [];
          }

          //filter the providers if any item in the providerValues array includes
          //the answer given.
          return providerValues.some((providerProp) =>
            providerProp.includes(normalizedAnswer)
          );
        });
      }
    }

    //return the filteredProviders
    return filteredProviders;
  };

  const filteredProviders = filterProviders();
  console.log('filtered providers : ', filteredProviders);

  useEffect(() => {
    if (!providersData) {
      setProvidersData(providers.data);
    }
  }, [providers.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 773,
        mobileFirst: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 491,
        mobileFirst: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
      {providers.isLoading ? (
        <Loading data={'Providers'} />
      ) : providers.isError ? (
        <Error />
      ) : filteredProviders?.length === 0 ? (
        <div className="py-4 grid grid-flow-col justify-items-center w-full text-center">
          <p>No providers found matching the criteria.</p>
        </div>
      ) : (
        <div className="py-4 grid grid-flow-col justify-items-center scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-neutral-600 overflow-x-auto w-full">
          {filteredProviders?.map((provider, i) => (
            <div
              key={i}
              style={{
                width: '275px',
                height: '24rem'
              }}
              className="pop"
            >
              <ProviderCardSmall
                provider={provider}
                setProvidersData={setProvidersData}
                assessment={true}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ModalProviders;
