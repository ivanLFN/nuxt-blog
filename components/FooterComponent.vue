<template>
  <div class="general-footer">
    <div class="container">
      <div class="row footer">
        <div class="d-flex flex-column flex-md-row">
          <div class="col-12 col-md-3">
            <div class="footer-header">
              About
            </div>
            <div class="footer-slogan mt-3">
              Innovation for your success. Together in the future. We will implement your ideas. Technologies for growing your business. Trust us with your future and we will make it better.
            </div>
            <div class="general-info mt-3">
              <span class="general-info-header">Email:</span> info@jstemplate.net <br>
              <span class="general-info-header">Phone:</span> 880 123 456 789
            </div>
          </div>
          <div class="col-12 col-md-5 mt-md-0 mt-4">
            <div class="d-flex justify-content-center text-center">
              <div class="offset-md-2 col-4">
                <div class="d-flex flex-column align-items-start">
                  <div class="footer-header">
                    Quick Link
                  </div>
                  <ul class="pl-0 mt-3 text-start">
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Home</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >About</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Blog</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Archived</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex flex-column align-items-start">
                  <div class="footer-header">
                    Category
                  </div>
                  <ul class="pl-0 mt-3 text-start">
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >For customer</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Business</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >For manager</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Web</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Mobile</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >UI/UX</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="footer-link"
                      >Checklists</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mt-md-0 mt-4">
            <div class="news-form px-5">
              <div class="text-center">
                <div
                  class="pt-4"
                  style="font-size: 1.5rem; font-weight: 450;"
                >
                  Weekly Newsletter
                </div>
                <div class="form-header mt-2">
                  Get blog articles and offers via email
                </div>
              </div>
              <div>
                <form
                  action="/subscribe"
                  method="post"
                >
                  <div class="row mt-4">
                    <div class="form-input d-flex">
                      <input
                        id="email"
                        class="input"
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        required
                      >
                      <img
                        class="form-img"
                        src="/images/letter-50.png"
                        alt="letter"
                      >
                    </div>
                    <a
                      class="submit-btn text-center mt-2 mb-4"
                      type="submit"
                    >Subscribe</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-part pb-5">
        <div class="row mt-md-5 mt-3">
          <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="col-12 col-md-4">
              <div class="">
                <img
                  src="https://img.icons8.com/color/96/bootstrap--v2.png"
                  alt="logo"
                >
                <div style="font-weight: 500; font-size: 1.5rem;">
                  Bootstrap
                </div>
                <div>© JS Template 2024. All Rights Reserved.</div>
              </div>
            </div>
            <div class="col-12 col-md-8 text-md-end mt-md-0 mt-4">
              <a
                class="footer-link px-md-3 px-1  bottom-link"
                href="#"
              >Terms of Use</a>
              <a
                class="footer-link px-md-3 px-1 bottom-link"
                href="#"
              >Privacy Policy</a>
              <a
                class="footer-link px-md-3 px-1"
                href="#"
              >Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.bottom-link {
  border-right: 1px solid #DCDDDF;
}

.bottom-part {
  border-top: 1px solid #DCDDDF;
  margin-top: 5rem;
}

.footer-link {
  text-decoration: none;
  color: #3B3C4A;
}
.general-footer {
  background-color: #F6F6F7;
  font-size: 1.2rem;
  font-weight: 300;
  padding-top: 5rem;
}

@media only screen and (max-width: 600px) {
  .general-footer {
    padding-top: 2rem;
  }
  .bottom-part {
    margin-top: 2rem;
  }
}

.general-info-header {
  color: #181A2A;
  font-weight: bolder;
}

.general-info {
  color: #3B3C4A;
}

.footer-slogan {
  color: #696A75;
  font-weight: 250;
}

.footer-header {
  font-size: 1.4rem;
  color: #181A2A;
  font-weight: 450;
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #3B3C4A;
  font-weight: 250;
}

.form-header {
  color: #696A75;
}

.form-input {
  padding: 10px;
  border: 1px solid #97989F;
  border-radius: 5px;
}

.input {
  width: 100%;
  border: none;
}

.form-img {
  width: 30px;
  height: auto;
  margin-left: 10px;
}

.news-form {
  background-color: white;
  border-radius: 15px;
}

.submit-btn {
  background-color: #7B4DFF;
  padding: 10px 0;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: 350;
}

</style>
