// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        const plusMinus = question.querySelector('span');
        if (item.classList.contains('active')) {
          answer.style.display = 'block';
          plusMinus.textContent = '-';
        } else {
          answer.style.display = 'none';
          plusMinus.textContent = '+';
        }
      });
    });
  
    // Carousel Functionality for Reviews
    const reviewCardsContainer = document.querySelector('.review-cards-container');
    const reviewNavigationButtons = document.querySelectorAll('.review-navigation button');
    const reviewDotsContainer = document.querySelector('.review-dots');
    const reviewCards = document.querySelectorAll('.review-card');
    let currentIndex = 0;
  
    function updateReviewDisplay() {
      const cardWidth = reviewCards[0].offsetWidth + 20; // Card width + gap
      reviewCardsContainer.scrollLeft = currentIndex * cardWidth;
  
      // Update active dot
      document.querySelectorAll('.review-dots .dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
          dot.classList.add('active');
        }
      });
    }
  
    reviewNavigationButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.textContent === '<' && currentIndex > 0) {
          currentIndex--;
        } else if (button.textContent === '>' && currentIndex < reviewCards.length - 1) {
          currentIndex++;
        }
        updateReviewDisplay();
      });
    });
  
    reviewDotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateReviewDisplay();
      });
    });
  
    // Optional: Auto-scroll reviews every 5 seconds
    // setInterval(() => {
    //   currentIndex = (currentIndex + 1) % reviewCards.length;
    //   updateReviewDisplay();
    // }, 5000);
  });
  