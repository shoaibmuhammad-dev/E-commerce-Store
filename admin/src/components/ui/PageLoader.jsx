import "./Loader.css";

const PageLoader = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="page-spinner center relative">
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
        <div className="page-spinner-blade"></div>
      </div>
    </main>
  );
};

export default PageLoader;
