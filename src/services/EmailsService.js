import emailjs from '@emailjs/browser';

class EmailsService {
  constructor() {
    emailjs.init({
      publicKey: 'Rp46TWsROuqyLj5mh',
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }

  #serviceId = 'service_hubfmrb'
  #templateId = 'template_rtuugvj'

  async sendEmail(formData) {
    const response = await emailjs.send(this.#serviceId, this.#templateId, formData)
    console.log(response);
  }

}

export const emailsService = Object.freeze(new EmailsService())
