function ContactUsForm() {
  return (
    <div className="bg-white p-10 pb-16">
      <h3 className="text-3xl font-semibold">Contact Us</h3>

      <form className="flex flex-col items-center lg:items-start gap-4 mt-7">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="form-input-wrapper lg:w-1/2">
            <label className="form-label" htmlFor="first-name">
              First name
            </label>
            <input id="first-name" type="text" className="form-input" />
          </div>

          <div className="form-input-wrapper lg:w-1/2">
            <label className="form-label" htmlFor="last-name">
              Last name
            </label>
            <input id="last-name" type="text" className="form-input" />
          </div>
        </div>

        <div className="form-input-wrapper">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" type="email" className="form-input" />
        </div>

        <div className="form-input-wrapper">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input id="phone" type="tel" className="form-input" />
        </div>

        <div className="form-input-wrapper">
          <label htmlFor="message">Write a message</label>
          <textarea name="" id="message"  className="form-input resize-none"></textarea>
        </div>

        <button className="w-fit text-white bg-black px-12 py-3 rounded-full hover:bg-white hover:text-black border-2 border-black border-solid duration-500">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
