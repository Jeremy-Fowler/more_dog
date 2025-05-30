<script setup>

defineProps({
  modalId: { type: String, required: true },
  showFooter: { type: Boolean, default: false },
  modalSize: { type: String, default: '' }
})
</script>


<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog" :class="modalSize">
      <div class="modal-content border border-dark border-4">
        <div class="modal-header border-bottom border-dark border-1">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">
            <slot name="header"></slot>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div v-if="showFooter" class="modal-footer border-top border-dark border-1">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
