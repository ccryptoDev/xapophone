
<div id="video-modal" class="modal">
  <div class="modal-content">
    <div class="text-center">
      <iframe id="video-frame" width="560" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="text-center">
      <button id="close-modal" class="btn modal-close">Close</button>
    </div>
  </div>
</div>

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".sqs-block-image img");
  const modal = document.getElementById("video-modal");
  const videoFrame = document.getElementById("video-frame");
  const closeModal = document.getElementById("close-modal");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoUrl = thumbnail.getAttribute("data-video-url");
      if (videoUrl) {
        videoFrame.src = `${videoUrl}?autoplay=1&rel=0`;
        modal.style.display = "flex"; 
      }
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    videoFrame.src = ""; 
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      videoFrame.src = ""; 
    }
  });
});


if (document.querySelector('[data-section-id="6724372ebe9e195b54478118"]')) {
  const blogSection = document.querySelector('[data-section-id="6724372ebe9e195b54478118"]');
  if (blogSection) {
    blogSection.classList.add("blog-section");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('[data-section-id="675ba0a1c4348e4af0853916"]')) {
    console.log('video gallery section!');
    const videoGallery = document.querySelector('[data-section-id="675ba0a1c4348e4af0853916"]');
  
    if (videoGallery) {
      const contentWrapper = videoGallery.querySelector('.content-wrapper');

      if (contentWrapper) {
        const observer = new MutationObserver(() => {
          const imageLinks = contentWrapper.querySelectorAll('.sqs-block-image a');

          if (imageLinks.length > 0) {
            imageLinks.forEach(link => {
              if (!link.dataset.eventAdded) {
                link.addEventListener('click', function (event) {
                  event.preventDefault();
                  console.log("Click event in Observer prevented for:", link);

                });
                link.dataset.eventAdded = true; 
              }
            });
          }
        });

        observer.observe(contentWrapper, { childList: true, subtree: true });

        const interval = setInterval(() => {
          const imageLinks = contentWrapper.querySelectorAll('.sqs-block-image a');

          if (imageLinks.length > 0) {
            imageLinks.forEach(link => {
              if (!link.dataset.eventAdded) {

                link.addEventListener('click', function (event) {
                  // Prevent the default click event of image block
                  event.preventDefault();

                  console.log("Click event prevented for:", link);

                  const videoUrl = link.getAttribute('href');

                  // Open the modal
                  const modal = document.getElementById('video-modal');
                  const iframe = document.getElementById('video-frame');
                  
                  iframe.src = videoUrl + "?autoplay=1";

                  // Show the modal
                  modal.style.display = "block";

                  // Add event to close the modal
                  const closeModal = document.getElementById('close-modal');
                  closeModal.addEventListener('click', function () {
                    modal.style.display = "none";
                    iframe.src = ""; 
                  });

                });

                link.dataset.eventAdded = true; 
              }
            });
            
            clearInterval(interval);
          }
        }, 500); 
      }
    }
  }
});