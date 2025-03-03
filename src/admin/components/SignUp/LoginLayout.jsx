import banner from '../../../assets/banner.jpg';

const LoginLayout = ({ children }) => {
  return (
    <section className="px-5 py-0 h-[100%] max-w-[85rem] mx-auto">
      <div className="md:grid md:gap-5 md:grid-cols-2 h-full pb-5 pt-1">
        <div className="w-full max-w-[23.75rem] mx-auto md:grid place-items-center">
          {children}
        </div>
        <div className="hidden md:flex max-w-[40rem] rounded-2xl overflow-hidden h-full">
          <img
            className="block w-full object-cover object-center h-full"
            src={banner}
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
};
export default LoginLayout;
