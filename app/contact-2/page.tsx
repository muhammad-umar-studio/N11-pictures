export default function Contact3Page() {
  return (
    <>
      {/* Main Contact Form Section */}
      <section data-w-id="8d1538cf-5b1c-7145-c1d0-ff8522a17fbc" className="section-top center">
        <div className="content">
          <h1 className="heading-page">Let&#x27;s Talk<br /></h1>
          <div className="description">
            Fill out the form or just email US at <a href="mailto:n11pictures@picturesof.org" className="link">n11pictures@picturesof.org</a>
          </div>
          <div className="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="67448431fea0f748c29a1db3" data-wf-element-id="9e9905ff-3899-621d-611e-54daa01ac9bd">
              <div className="block-field">
                <input className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Name" type="text" id="name" />
                <input className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" type="email" id="email" required />
              </div>
              <div className="block-field">
                <textarea placeholder="Message" maxLength={5000} id="Message" name="Message" data-name="Message" className="textarea w-input"></textarea>
              </div>
              <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit" />
            </form>
            
            {/* Webflow Form Success/Error States */}
            <div className="success-message w-form-done">
              <div className="text-success">Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div className="text-error">Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <div>© 2025 N11 PICTURES. All Rights Reserved.</div>
      </section>
    </>
  );
}
