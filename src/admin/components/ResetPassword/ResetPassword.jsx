import { Link } from 'react-router-dom';
import Input from '../Input';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-5 max-h-[35rem] grid place-items-center">
      <div className="font-dm-sans  w-full max-w-[23.75rem]  relative">
        <div className="absolute ~left-[-1.5rem]/[-8.2rem] top-2 font-medium">
          <Link
            className="flex items-center ~gap-[0rem]/[0.38rem] text-sm"
            to="/admin/login"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                  stroke="#0F0F0F"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            BACK
          </Link>
        </div>
        <h1 className="font-bold ~text-2xl/3xl text-center">Reset password</h1>

        <p className="text-base max-w-[23.5rem] text-center mx-auto my-6">
          Provide the email address linked to your account to receive a reset
          password link.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register}
            required={true}
            errors={errors}
            validations={{
              pattern: {
                message: 'Please enter a valid email'
              }
            }}
          />

          <button className="w-full bg-orenda-purple text-white rounded-3xl px-4 py-3 font-semibold hover:opacity-80 transition-colors duration-500 mt-10">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
