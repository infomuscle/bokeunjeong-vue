<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact</h2>
      </div>

      <div class="row mt-1">

        <div class="col-lg-4">
          <div class="info">
            <div v-bind:class="contact.type" v-for="contact in contacts">
              <i v-bind:class="contact.icon" class="bi"></i>
              <h4>{{ contact.type }}</h4>
              <p>{{ contact.detail }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">
          <form v-on:submit.prevent="send" role="form" class="email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Name *" v-model="senderName">
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Email * " v-model="senderEmail">
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject *" v-model="emailSubject">
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message *" v-model="emailMessage"></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="fail-message">Failed to Send message. Please contact via email address left.</div>
              <div class="success-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  props: {
    contacts: Object,
  },
  data: function () {
    return {
      senderName: "",
      senderEmail: "",
      emailSubject: "",
      emailMessage: "",
    }
  },
  methods: {
    send() {

      if (this.senderName == null || this.senderName.length == 0) {
        return alert("Name is required");
      }
      if (this.senderEmail == null || this.senderEmail.length == 0) {
        return alert("Email is required");
      }
      if (this.emailSubject == null || this.emailSubject.length == 0) {
        return alert("Subject is required");
      }
      if (this.emailMessage == null || this.emailMessage.length == 0) {
        return alert("Message is required");
      }

      var request = {
        "name": this.senderName,
        "email": this.senderEmail,
        "subject": this.emailSubject,
        "message": this.emailMessage,
      };

      console.log(request);
      const response = axios.post('/api/v1/portfolio/email', request)
          .then(response => {
            console.log(response.data);

            this.disableResultMessage('.fail-message')
            this.enableResultMessage('.success-message')

            this.clear();
          })
          .catch(response => {
            console.log(response.data);

            this.disableResultMessage('.success-message')
            this.enableResultMessage('.fail-message')
          });
    },
    clear() {
      this.senderName = "";
      this.senderEmail = "";
      this.emailSubject = "";
      this.emailMessage = "";
    },
    enableResultMessage(selector) {
      let resultMessage = document.querySelector(selector);
      if (!resultMessage.classList.contains('d-block')) {
        resultMessage.classList.add('d-block');
      }
    },
    disableResultMessage(selector) {
      let resultMessage = document.querySelector(selector);
      if (resultMessage.classList.contains('d-block')) {
        resultMessage.classList.remove('d-block');
      }
    },
  }
}
</script>

<style scoped>

</style>