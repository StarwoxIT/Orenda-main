import Terms from './Terms';
import PracticePolicy from './PracticePolicy';

const PolicyTerms = () => {
  return (
    <div className='mx-auto max-w-6xl px-8 py-12 font-dm-sans'>
      {/* Header Section */}
      <div className='mb-12 text-center'>
        <h1 className='mb-4 font-serif text-2xl font-bold text-gray-900 md:text-3xl'>
          Terms of Use & Practice Policy
        </h1>
        <p className='mx-auto max-w-1xl text-md text-gray-600'>
          Welcome to Orenda Psychiatry. Your agreement to the following terms
          and conditions is required for you/your child to receive professional
          services from us.
        </p>
      </div>

      {/* Terms Component */}
      <Terms />

      {/* Practice Policy Component */}
      <PracticePolicy />
    </div>
  );
};

export default PolicyTerms;