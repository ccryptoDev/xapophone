
<script>
document.addEventListener("DOMContentLoaded", function () {
  /* Removing some blocks in the banner on mobile home */
  if (document.querySelector('[data-section-id="67588da77c1cc114d9cbff7f"]')) {
    if (window.innerWidth <= 767) {
      // video
      const bannerVideo = document.querySelector(".fe-block-yui_3_17_2_1_1734020931431_21876"); 
      if (bannerVideo) {
        bannerVideo.remove(); 
      }
      
      // wave
      const waveBlock = document.querySelector(".fe-block-yui_3_17_2_1_1734020931431_41783"); 
      if (waveBlock) {
        waveBlock.remove(); 
      }
      
      // banner desc#1
      const desc_1 = document.querySelector(".fe-block-yui_3_17_2_1_1734120902651_43325"); 
      if (desc_1) {
        desc_1.remove(); 
      }
      
      // banner desc#2
      const desc_2 = document.querySelector(".fe-block-ff1517879f105910ea13"); 
      if (desc_2) {
        desc_2.remove(); 
      }
      
      // banner desc#3
      const desc_3 = document.querySelector(".fe-block-b3b55d31ff694658773e"); 
      if (desc_3) {
        desc_3.remove(); 
      }
    }
  }
  
  /* video gallery section on Homepage */
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
            // Insert play icons by each block first
            const imageBlocks = contentWrapper.querySelectorAll('.sqs-block-image');
            
            imageBlocks.forEach(imageBlock => {
              const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              svgElement.setAttribute("aria-hidden", "true");
              svgElement.setAttribute("focusable", "false");
              // svgElement.setAttribute("data-prefix", "fas");
              svgElement.setAttribute("data-icon", "play");
              // svgElement.setAttribute("role", "img");
              svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              svgElement.setAttribute("viewBox", "0 0 448 512");
              svgElement.classList.add("play-icon"); 

              const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
              pathElement.setAttribute("fill", "currentColor");
              pathElement.setAttribute(
                "d",
                "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              );

              svgElement.appendChild(pathElement);

              imageBlock.appendChild(svgElement);
            });
            
            imageLinks.forEach(link => {
              if (!link.dataset.eventAdded) {

                link.addEventListener('click', function (event) {
                  // Prevent the default click event of image block
                  event.preventDefault();

                  console.log("Click event prevented for:", link);

                  const videoUrl = link.getAttribute('href');
                  const modal = document.getElementById('video-modal');
                  const iframe = document.getElementById('video-frame');
                  iframe.src = videoUrl + "?autoplay=1";
                  modal.style.display = "block";

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
  
  /* PDF section */
  if (document.querySelector('[data-section-id="675f17eeca0a393be1b30277"]')) {
    const pdfButtons = document.querySelectorAll("button[data-pdf-link]");

    pdfButtons.forEach(button => {
      button.addEventListener("click", function () {
        const pdfLink = button.getAttribute("data-pdf-link");
        if (pdfLink) {
          window.open(pdfLink, "_blank", "noopener,noreferrer");
        } else {
          console.error("PDF link is missing!");
        }
      });
    });
  }
});
</script>