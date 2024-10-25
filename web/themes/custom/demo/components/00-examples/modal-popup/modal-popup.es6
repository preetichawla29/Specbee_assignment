document.addEventListener('DOMContentLoaded', function onDomContentLoaded() {
  const modal = document.getElementById('speaker-modal');
  const closeModal = document.querySelector('.modal-popup__close');

  function handleCloseModal() {
    modal.style.display = 'none';
  }

  function handleOpenModal(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Destructure dataset properties from the clicked element
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
    document.getElementById('modal-speaker-title').textContent = speakerTitle;
    document.getElementById('modal-speaker-bio').textContent = speakerBio;
    document.getElementById('data-speaker-description').textContent =
      speakerDescription;

    // Show modal
    modal.style.display = 'block';
  }

  if (modal && closeModal) {
    // Add click event to each anchor tag with the class 'open-popup'
    document.querySelectorAll('.open-popup').forEach((anchor) => {
      anchor.addEventListener('click', handleOpenModal);
    });

    // Use the named function in the event listener for closing the modal
    closeModal.addEventListener('click', handleCloseModal);
  }
});
