import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="max-w-sm h-full mx-auto  text-base bg-[#2A2E43] font-white">
      <button className="btn fixed z-10	right-4 bottom-4 bg-[#665EFF] text-white">
        <p>Post New</p>
      </button>
      <Navbar />
      <div className="pb-6 px-4">
        <h1 className="font-medium text-4xl text-white mb-4">City News</h1>
        <div className="card relative mb-6 pb-24">
          <figure className="image-full	static">
            <img
              className="h-40 w-96 "
              alt="Tailwind CSS Navbar component"
              src="https://images.unsplash.com/photo-1714165860646-b8de17af3bc8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </figure>
          <div className="card-body py-3 bg-base-100 shadow-xl absolute left-0 right-0 bottom-0 mx-4 rounded-lg">
            <div className="flex">
              <img
                width={50}
                className="rounded-full bg-primary object-fit"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
              />
              <div className="ml-4">
                <h2 className="font-semibold text-xl text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="card-actions justify-between items-center">
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </button>
              <div className="flex">
                <button className="flex items-center mr-6">
                  256
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                </button>
                <div className="flex items-center">
                  4k
                  <label className="swap ">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="swap-off fill-current w-6 h-6 mr-1.5">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="swap-on fill-current w-6 h-6 text-red-600 mr-1.5">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card Content */}

        <div className="card card-side bg-base-100 shadow-xl relative mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row-reverse">
              <img
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl relative flex-row-reverse mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body static">
            <div className="flex flex-row-reverse">
              <img
                width={50}
                height={50}
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl relative mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row-reverse">
              <img
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl relative flex-row-reverse mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body static">
            <div className="flex flex-row-reverse">
              <img
                width={50}
                height={50}
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl relative mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-row-reverse">
              <img
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl relative flex-row-reverse mx-6 mb-6">
          <figure className="w-2/4">
            <img
              className="h-3/4 w-32 absolute my-auto rounded-lg"
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body static">
            <div className="flex flex-row-reverse">
              <img
                width={50}
                height={50}
                className="w-12 h-12 rounded-full bg-primary object-fit"
                src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="content">
                <h5 className="text-[#454F63] opacity-55">18 Nov</h5>
                <h2 className="text-xl font-semibold text-[#454F63]">
                  Anree-Ann Labranche
                </h2>
              </div>
            </div>
            <p className="text-[#78849E]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
