import Header from "../components/Header";

function Project1() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[100vh] bg-[url('../src/assets/bg-header-mobile.png')] sm:bg-[url('../src/assets/bg-header-desktop.png')]  bg-contain bg-no-repeat"
      >
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <svg
            className="mx-auto my-16"
            width="125"
            height="125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#26BBA4" strokeWidth="10" fill="none" fillRule="evenodd">
              <circle cx="62.5" cy="62.5" r="57.5" />
              <path
                d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
                strokeLinecap="round"
              />
            </g>
          </svg>

          <h3 className="text-primary">A history of everything you copy</h3>

          <p className="text-secondary">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          <div className="buttons max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
            <button className="btn btn-cyan w-[100%] max-w-md">
              Download for Windows
            </button>
            <button className="btn btn-blue w-[100%] max-w-md">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section id="section2" className="mt-24">
        <div className="text-center">
          <h3 className="text-primary">Keep track of your snippets</h3>
          <p className="text-secondary text-lg">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  my-24">
          <img
            className="ml:0 md:-ml-24  w-[50%] "
            src="../src/assets/image-computer.png"
            alt=""
          />
          <div className="content p-12 md:w-[50%]">
            <ul className="max-w-lg">
              <li className="mb-8">
                <h4 className="mb-4 text-2xl">Quick Search</h4>
                <p className="text-sm">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="mb-4 text-2xl">Quick Search</h4>
                <p className="text-sm">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </li>
              <li className="mb-8">
                <h4 className="mb-4 text-2xl">Quick Search</h4>
                <p className="text-sm">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section Featuers */}
      <section className="features text-center py-24 flex flex-col justify-center items-center">
        <h3 className="text-primary">Keep track of your snippets</h3>
        <p className="text-secondary text-lg">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <img src="../src/assets/image-devices.png" alt="" />
      </section>
      {/* Super Section */}
      <section
        id="super"
        className="text-center py-24 flex flex-col justify-center items-center"
      >
        <h3 className="text-primary">Keep track of your snippets</h3>
        <p className="text-secondary text-lg">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div className="content flex flex-col md:flex-row">
          <div className="box text-center">
            <svg
              className="mx-auto"
              width="36"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                fill="#9EABB2"
                fillRule="nonzero"
              />
            </svg>
            <h4>Create Blacklists</h4>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="box">
            <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                fill="#9EABB2"
                fillRule="nonzero"
              />
            </svg>
            <h4>Create Blacklists</h4>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="box">
            <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                fill="#9EABB2"
                fillRule="nonzero"
              />
            </svg>
            <h4>Create Blacklists</h4>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
        </div>
      </section>
      {/* Start Footer */}
      <footer id="footer " className="flex items-center gap-12">
        <div className="img">
          <svg
            className="scale-50"
            width="125"
            height="125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#26BBA4" strokeWidth="10" fill="none" fillRule="evenodd">
              <circle cx="62.5" cy="62.5" r="57.5" />
              <path
                d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
        <div className="content flex flex-col md:flex-row gap-12">
          <div className="box ">
            <ul className="flex flex-col">
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="box">
            <ul className="flex flex-col">
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="box">
            <ul className="flex flex-col">
              <li>Install Guide</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  );
}

export default Project1;
