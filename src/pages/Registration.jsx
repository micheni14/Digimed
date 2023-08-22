import React from 'react'

function Registration() {
  return (
    <div className='h-full w-full'>
      <div className='h-16 bg-blue-500 flex justify-center items-center'>
        <p className='text-white '> ARE YOU A MANUFACTURE OF MEDICAL PRODUCTS? IF SO, JOIN US.</p>  
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 bg-customColor h-100 '>
        <div>
          <div className='text-blue-800 font-bold flex justify-center items-center my-8 '>
          WHY CHOOSE 
          </div>

          <div className=' grid grid-cols-2'>
          <div className="bg-white  p-8 mx-4 ">
    <div className="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full mx-auto ">
        <img src="" alt="Icon" className="h-6 w-6" />
      </div>
      
      <p className="text-blue-800 font-bold flex justify-center">QUALITY LEADS </p>
<p  className="text-blue-800 ">Receive qualified and convertible leads directly in your inbox</p>

      <div className="flex items-center justify-center mt-2">              </div>
              <div className="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full mx-auto mb-4">
        <img src="" alt="Icon" className="h-6 w-6" />
      </div>
      <h2 className="text-xl font-semibold mb-2"></h2>
      <p className="text-blue-800 font-bold flex justify-center">REDUCED COST </p>
<p  className="text-blue-800 ">Reach international buyers without sending a sales team</p>

      <div className="flex items-center justify-center mt-4">
        
    </div>
            </div>
            <div className="bg-white  p-8 mx-2 ">
    <div className="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full mx-auto ">
        <img src="" alt="Icon" className="h-6 w-6" />
      </div>
      <p className="text-blue-800 font-bold flex justify-center">BRAND AWARENESS </p>
<p  className="text-blue-800 ">Position your brand on the international map alongside others</p>

      <div className="flex items-center justify-center mt-2">              </div>
              <div className="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full mx-auto mb-4">
        <img src="" alt="Icon" className="h-6 w-6" />
      </div>
      <h2 className="text-xl font-semibold mb-2"></h2>
      <p className="text-blue-800 font-bold flex justify-center">SALES NETWORK</p>
<p  className="text-blue-800 ">Add new distributors to your loop to revamp your existing sales network</p>

          </div>
            </div>
        </div>
        <div>
          <div className='px-12 py-16  container mx-auto'>
            <div className='bg-white mr-2'>
              <div className='flex justify-center'>
                <p className='bg-blue-800 h-16 flex items-center  text-white mt-8 '>REGISTER TO SHOWCASE YOUR PRODUCTS ON DIGIMEDEXPO.</p>
              </div>
                <p className='font-medium text-blue-800 px-8'>CONTACT INFORMATION</p>

              <div className=' px-8'>
                 <form method='post'>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='w-1/2 '>
                      <label className=" text-gray-700 text-sm font-bold mb-1"
                        for="FirstName">
              FirstName
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id="FirstName"
                        type="text"
                        placeholder="Kennedy" />
                  </div>
                  <div className=" ">
                  <label class="  text-gray-700 text-xs font-bold "
                  for="LastName">
        LastName
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id="LastName"
                      type="text"
                      placeholder="Muarice"/>
                    </div>

                  </div>
                  <div class="flex flex-col items-start">
  <label for="jobTitle" className=" font-bold text-gray-800 text-sm">Job Title:</label>
  <select id="jobTitle" className="border border-gray-400 py-1 px-2 bg-white w-full">
 
  
  </select>
</div>

                  
                  <div class="flex flex-col items-start">
                    <label for="jobTitle"
                      className=" font-bold text-gray-800 text-sm">Job Title:</label>
                    <input
                        className="border border-gray-400 py-1 px-2 bg-white w-full"
                      id="WorkEmail"
                    type="email"
                    placeholder="company@gmail.com"/>
                    
                  
                    
</div>
                  
                  <p className='text-blue-900 font-bold'>COMPANY INFOMATION</p>

                  <div className='grid grid-cols-2 gap-5'>
                  <div className='  '>
                      <label className=" text-gray-700 text-xs font-bold "
                        for="CompanyName">
        Company Name
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id="Company Name"
                        type="text"
                        placeholder="Company Name" />
                  </div>
                  <div className="w-full md:w-1/2">
                  <label class=" text-gray-700 text-xs font-bold "
                  for="Company Website">
        Company Website
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id="company website"
                      type="text"
                      placeholder="www.website.com"/>
                    </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                  <div className='  '>
                      <label className=" text-gray-700 text-xs font-bold "
                        for="Country of origin">
        Country of origin
      </label>
                    <select className=" border border-gray-400 py-1 px-2 bg-white w-full"
                      id="Company Name"
                        type="text"
                        placeholder="please select" />
                  </div>
                  <div className="">
                  <label class=" text-gray-700 text-xs font-bold "
                  for="Company Website">
        category
      </label>
                    <select className=" border border-gray-400 py-1 px-2     bg-white w-full"
                      id="Company Website"
                      type="text"
                      placeholder="category"/>
                    </div>
                    </div>
              

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
  <div className='mb-4 md:mb-0'>
    <label className="text-gray-700 text-sm font-bold mb-1" htmlFor="CertificateOfIncorporation">
      Certificate of Incorporation
    </label>
    <input className="border border-gray-400 py-1 px-2 bg-white w-full"
      id="CertificateOfIncorporation"
      type="file" />
  </div>
  <div>
    <label className="text-gray-700 text-xs font-bold" htmlFor="TradeLicense">
      Trade License
    </label>
    <input className="border border-gray-400 py-1 px-2 bg-white w-full"
      id="TradeLicense"
      type="file" />
  </div>
</div>

  
<div className='grid grid-cols-2 gap-5'>
                  <div className='w-1/2 '>
                      <label className=" text-gray-700 text-sm font-bold mb-1"
                        for="FirstName">
              password
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id="password"
                        type="password"
                        placeholder="Enter password" />
                  </div>
                  <div className=" ">
                  <label class="  text-gray-700 text-xs font-bold "
                  for="LastName">
        confirm password
      </label>
                    <input className=" border border-gray-400 py-1 px-2 bg-white"
                      id=" confirm password"
                      type="password"
                      placeholder="Re enter password"/>
                    </div>

                  </div>  
                  <input type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike" />
                  <label
                    className='text-black text-' 
                    for="vehicle1"> By submitting this form, I agree to Terms & Conditions and Privacy Policy. </label>
                  <br></br>
                  <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-16 rounded-full mb-4 ">
                Submit
            </button>
              </form> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Registration