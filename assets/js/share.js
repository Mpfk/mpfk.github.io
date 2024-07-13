(async () => {
    if (navigator.share) {
      try {
        // Attempt to use the Web Share API
        await navigator.share({
          title: 'Matt Lydon',
          text: 'Matt Lydon\'s personal website',
          url: window.location.href
        });
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      // Function to load a script dynamically
      function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.body.appendChild(script);
      }
  
      // Add modal HTML to the page
    const modalHTML = `
        <div class="modal fade" id="unsupportedModal" tabindex="-1" role="dialog" aria-labelledby="unsupportedModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Share This Page</h2>
                        <span class="icon-nav">
                            <a href="" class="icon-link" data-dismiss="modal" aria-label="Close">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </a>
                        </span>
                    </div>
                    <div class="modal-body pt-5 pb-5">
                        <div class="row pb-5 justify-content-center">
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.facebook.com/sharer/sharer.php?u=https://www.mattlydon.me" target="_blank"><i class="fab fa-square-facebook fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="https://twitter.com/intent/tweet?url=https://www.mattlydon.me&text=View%20Matt%20Lydon's%20Resume" target="_blank"><i class="fab fa-square-twitter fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.linkedin.com/shareArticle?url=https://www.mattlydon.me&title=About%20Matt%20Lydon" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.reddit.com/submit?url=https://www.mattlydon.me&title=Matt%20Lydon" target="_blank"><i class="fab fa-square-reddit fa-3x"></i></a>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.pinterest.com/pin/create/button/?url=https://www.mattlydon.me&media=https://www.mattlydon.me/images/cover.jpg&description=View%20Matt%20Lydon's%20Resume" target="_blank"><i class="fab fa-square-pinterest fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.instagram.com/share/url?url=https://www.mattlydon.me&title=Matt%20Lydon" target="_blank"><i class="fab fa-square-instagram fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="https://www.whatsapp.com/send?text=View%20Matt%20Lydon's%20Resume%20https://www.mattlydon.me" target="_blank"><i class="fab fa-square-whatsapp fa-3x"></i></a>
                            </div>
                            <div class="col text-center">
                                <a class="icon-link" href="mailto:?subject=View%20Matt%20Lydon's%20Resume&body=https://www.mattlydon.me" target="_blank"><i class="fas fa-square-envelope fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
  
      // Load jQuery first
      loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js', () => {
        // Load Popper.js after jQuery
        loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js', () => {
          // Load Bootstrap JS after Popper.js
          loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', () => {
            // Show the Bootstrap modal
            $('#unsupportedModal').modal('show');
          });
        });
      });
    }
  })();