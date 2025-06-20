<script setup>
import { emailsService } from '@/services/EmailsService.js';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
import Swal from 'sweetalert2';
import { reactive } from 'vue';

const emit = defineEmits(['submitted', 'responded'])

const sizes = [
  {
    name: 'X-Small',
    description: 'Up to 20 lbs'
  },
  {
    name: 'Small',
    description: '20-30 lbs'
  },
  {
    name: 'Medium',
    description: '30-50 lbs'
  },
  {
    name: 'Large',
    description: '50-90 lbs'
  },
  {
    name: 'X-Large',
    description: '90+ lbs'
  }
]

const editableContactData = reactive({
  email: '',
  firstName: '',
  lastName: '',
  dogName: '',
  dogBreed: '',
  dogSize: '',
  message: '',
  time: null
})

async function contactUs() {
  try {
    emit('submitted')
    editableContactData.time = new Date()
    await emailsService.sendEmail(editableContactData)
    clearForm()
    Modal.getInstance('#scheduleFormModal').hide()
    Swal.fire({
      title: "Thanks " + editableContactData.firstName,
      text: "We will be in touch with you shortly!",
      showCloseButton: true,
      showConfirmButton: false,
      timer: 3000,
      imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDgyY2Fna2dwMXo4cnllc3p4NGgwdm12NHRvNHRxb2hkdGhnYnN1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SwImQhtiNA7io/giphy.gif",
    });
  } catch {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong! Try re-submitting the form.",
      footer: '<a href="mailto:matt@moredog.ca" title="Send an email to matt@moredog.ca">You can also directly send us an email</a>'
    });
  }
  finally {
    emit('responded')
  }
}

function clearForm() {
  editableContactData.message = ''
  editableContactData.dogName = ''
  editableContactData.dogBreed = ''
  editableContactData.dogSize = ''
  editableContactData.time = null
}

</script>


<template>
  <form id="contact-form" @submit.prevent="contactUs()">
    <div class="form-floating mb-3">
      <input v-model="editableContactData.email" type="email" class="form-control" id="contact-email"
        placeholder="name@example.com" required maxlength="100">
      <label for="contact-email">Email address</label>
    </div>
    <div class="d-flex gap-2 mb-3">
      <div class="form-floating flex-grow-1">
        <input v-model="editableContactData.firstName" type="text" class="form-control" id="contact-first-name"
          placeholder="First name..." required maxlength="100">
        <label for="contact-first-name">First Name</label>
      </div>
      <div class="form-floating flex-grow-1">
        <input v-model="editableContactData.lastName" type="text" class="form-control" id="contact-last-name"
          placeholder="Last name..." required maxlength="100">
        <label for="contact-last-name">Last Name</label>
      </div>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableContactData.dogName" type="text" class="form-control" id="contact-dog-name"
        placeholder="Your dog's name..." required maxlength="100">
      <label for="contact-dog-name">Dog's Name</label>
    </div>
    <div class="d-lg-flex gap-2">
      <div class="form-floating flex-grow-1 mb-3">
        <input v-model="editableContactData.dogBreed" type="text" class="form-control" id="contact-dog-breed"
          placeholder="Your dog's breed..." required maxlength="100">
        <label for="contact-dog-breed">Dog's Breed (Approximate)</label>
      </div>
      <div class="form-floating w-lg-25 mb-3">
        <select v-model="editableContactData.dogSize" class="form-select" id="contact-dog-size"
          aria-label="Select your dog's size" required>
          <option value="" selected disabled>Select a size</option>
          <option v-for="size in sizes" :key="size.name" :value="size.name" :title="size.description">
            {{ size.name }}
          </option>
        </select>
        <label for="contact-dog-size">Size of dog</label>
      </div>
    </div>
    <div class="form-floating mb-3">
      <textarea v-model="editableContactData.message" class="form-control" placeholder="Leave a comment here"
        id="floatingTextarea" maxlength="500"></textarea>
      <label for="floatingTextarea">Comments</label>
    </div>
  </form>
</template>


<style scoped lang="scss">
textarea {
  min-height: 20dvh !important;
}
</style>
