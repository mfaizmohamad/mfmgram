import loaderLogo from '../../../public/assets/icons/loader.svg';

const Loader = () => (
  <div className="flex-center w-full">
    <img
      src={loaderLogo}
      alt="loader"
      width={24}
      height={24}
      className="animate-spin"
    />
  </div>
);

export default Loader;
