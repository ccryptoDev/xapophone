

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


if (document.querySelector('[data-section-id="675ba0a1c4348e4af0853916"]')) {
  console.log('video gallery section!');
  const videoGallery = document.querySelector('[data-section-id="675ba0a1c4348e4af0853916"]');
  
  if (videoGallery) {
    const contentWrapper = videoGallery.querySelector('.content-wrapper');

    // Ensure the contentWrapper is available before setting up the observer
    if (contentWrapper) {
      const observer = new MutationObserver(() => {
        // Select all image links inside '.sqs-block-image' blocks
        const imageLinks = contentWrapper.querySelectorAll('.sqs-block-image a');
        
        if (imageLinks.length > 0) {
          imageLinks.forEach(link => {
            // Check if the event listener is already added to avoid duplication
            if (!link.dataset.eventAdded) {
              link.addEventListener('click', function (event) {
                // Prevent default link navigation
                event.preventDefault();
                console.log("Click event prevented for:", link);

                // Add your custom functionality here, e.g., open a modal
              });
              link.dataset.eventAdded = true; // Mark the link as handled
            }
          });
        }
      });

      // Observe the contentWrapper and any nested divs for child node changes
      observer.observe(contentWrapper, { childList: true, subtree: true });
    }
  }
}