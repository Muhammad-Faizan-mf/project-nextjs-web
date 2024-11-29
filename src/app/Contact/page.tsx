export default function Contact() {
    return (

        <div className="m-10 lg:m-[100px] flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-full lg:w-6/12 px-2 mb-5">
            <div className="mb-2">
              <label className="font-semibold text-xl">First Name</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-[#828282] rounded-lg w-full h-[48px] p-4"
                placeholder="Ali"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-2 mb-5">
            <div className="mb-2">
              <label className="font-semibold text-xl">Last Name</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-[#828282] rounded-lg w-full h-[48px] p-4"
                placeholder="Shah"
              />
            </div>
          </div>
        </div>
      
        <div className="w-full px-2 mb-5">
          <div className="mb-2">
            <label className="font-semibold text-xl">Email</label>
          </div>
          <div>
            <input
              type="text"
              className="border border-[#828282] rounded-lg w-full h-[48px] p-4"
              placeholder="youremail@gmail.com"
            />
          </div>
        </div>
      
        <div className="w-full px-2 mb-5">
          <div className="mb-2">
            <label className="font-semibold text-xl">Your message</label>
          </div>
          <div>
            <textarea
              className="border border-[#828282] rounded-lg w-full h-[162px] p-4"
              placeholder="Type your message here."
            ></textarea>
          </div>
        </div>
      
        <div className="w-full px-2">
          <button className="bg-black text-white w-full h-[48px] font-semibold text-xl rounded-lg">
            Submit
          </button>
        </div>
      </div>
      
        
    )
}