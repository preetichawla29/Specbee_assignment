document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('speaker-modal');
  const closeModal = document.querySelector('.modal-popup__close');

  function handleCloseModal() {
    modal.style.display = 'none';
  }

  if (modal && closeModal) {
    // Open modal and populate data when the anchor tag is clicked
    document.querySelectorAll('.open-popup').forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // const speakerCard = this.closest('.speaker-card');
        const {
          speakerImage,
          speakerName,
          speakerTitle,
          speakerBio,
          speakerDescription,
        } = this.dataset;

        // Populate modal content
        document.getElementById('modal-speaker-image').src = speakerImage;
        document.getElementById('modal-speaker-name').textContent = speakerName;
        document.getElementById('modal-speaker-title').textContent =
          speakerTitle;
        document.getElementById('modal-speaker-bio').textContent = speakerBio;
        // Add description to the modal (Only displayed in the popup)
        document.getElementById('data-speaker-description').textContent =
          speakerDescription;

        // Show modal
        modal.style.display = 'block';
      });
    });

    // Use the named function in the event listener
    closeModal.addEventListener('click', handleCloseModal);
  }
});
