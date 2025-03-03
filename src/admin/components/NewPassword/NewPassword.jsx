import { Link } from 'react-router-dom';
import Input from '../Input';
import { useForm } from 'react-hook-form';

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const requirements = [
    {
      text: 'A minimum length, typically 8 to 12 characters.',
      type: 'minLength'
    },
    {
      text: 'A combination of uppercase and lowercase letters.',
      type: 'bothCases'
    },
    {
      text: 'Inclusion of numbers and special characters (e.g., !, @, #).',
      type: 'specialChars'
    }
  ];

  const checkType = (type) => {
    if (password) {
      if (type === 'minLength') {
        return password.length >= 8;
      } else if (type === 'bothCases') {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])/;
        return pattern.test(password);
      } else if (type === 'specialChars') {
        const pattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/;
        return pattern.test(password);
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch('password');
  const confirmedPassword = watch('confirmPassword');

  return (
    <div className="px-5 grid place-items-center">
      <div className="font-dm-sans w-full max-w-[25rem] relative">
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
        <h1 className="font-bold ~text-2xl/3xl text-center">
          Create new password
        </h1>

        <p className="text-base max-w-[23.5rem] text-center mx-auto my-6">
          Create a new password to your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              required={true}
              errors={errors}
              validations={{
                pattern: {
                  message:
                    'Password must include uppercase, lowercase, a number, and a special character'
                },
                minLength: {
                  value: 8,
                  message: 'Password should be 8 characters and above'
                }
              }}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              register={register}
              errors={errors}
              validations={{
                validate: (value) =>
                  value === password || `Passwords don't match`
              }}
            />
          </div>

          <div className="mt-6">
            <h6 className="mb-4">
              <strong>Password Requirement</strong>
            </h6>

            <div className="space-y-[1.13rem]">
              {requirements.map(({ text, type }) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    className="inline-block border border-[#E7E7E7] size-[1.125rem] rounded"
                    type="checkbox"
                    checked={checkType(type)}
                  />
                  {text}
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-orenda-purple text-white rounded-3xl px-4 py-3 font-semibold hover:opacity-80 transition-colors duration-500 mt-10">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewPassword;
