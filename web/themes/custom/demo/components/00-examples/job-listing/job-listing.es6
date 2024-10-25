// Define all functions first
function handleFetchResponse(response) {
  return response.json();
}

function handleFetchError() {
  // Display an error message without console logging
  const messageDiv = document.querySelector('.job-message');
  if (messageDiv) {
    messageDiv.textContent = 'Error fetching jobs. Please try again later.';
    messageDiv.style.display = 'flex';
    messageDiv.style.opacity = '1';
  }
}

function removeJobCard(jobCard, messageDiv) {
  // Remove job card
  jobCard.remove();
  if (messageDiv) {
    messageDiv.style.display = 'flex';
    messageDiv.style.opacity = '1';
  }

  // Fade out message after 3 seconds
  setTimeout(() => {
    messageDiv.style.transition = 'opacity 0.5s';
    messageDiv.style.opacity = '0';
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 500);
  }, 3000);
}

function createJobCard(jobContainer, messageDiv, job) {
  const jobCard = document.createElement('div');
  jobCard.className = 'job-card';
  jobCard.dataset.id = job.id;

  jobCard.innerHTML = `
    <div class="job-details">
      <h3>${job.title}</h3>
      <div class='job-location'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM8 1a5 5 0 0 1 5 5c0 3.25-4 8.3-4.33 8.68a.533.533 0 0 1-.67 0C7 14.3 3 9.25 3 6a5 5 0 0 1 5-5z"/>
          <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </svg>                      
        ${job.location}
      </div>
      <div class='job-remote'>
        ${job.is_remote}
      </div>
      <div class="job-tags">
        ${job.tags}
      </div>
    </div>
    <span class="job-remove">&times;</span>
  `;

  // Append the job card to the container
  jobContainer.appendChild(jobCard);

  // Add event listener to remove button
  jobCard
    .querySelector('.job-remove')
    .addEventListener('click', function onJobRemoveClick() {
      removeJobCard(jobCard, messageDiv);
    });
}

function renderJobListings(data) {
  const jobContainer = document.querySelector('.job-listings');
  const messageDiv = document.querySelector('.job-message');

  // Clear existing job listings
  jobContainer.innerHTML = ''; // Clear the container

  // Loop through the data and create job cards
  data.forEach(createJobCard.bind(null, jobContainer, messageDiv));
}

function onDomContentLoaded() {
  // Fetch jobs from API
  fetch('https://dummy-rest-api.specbee.site/api/v1/jobs')
    .then(handleFetchResponse)
    .then(renderJobListings)
    .catch(handleFetchError);
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', onDomContentLoaded);
