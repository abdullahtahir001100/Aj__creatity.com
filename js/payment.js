document.addEventListener('DOMContentLoaded', function() {
    const paymentMethod = document.getElementById('paymentMethod');
    const cardDetails = document.getElementById('cardDetails');
    const paypalDetails = document.getElementById('paypalDetails');
    const paymentForm = document.getElementById('paymentForm');
    const paymentSuccess = document.getElementById('paymentSuccess');

    paymentMethod.addEventListener('change', function() {
        cardDetails.style.display = (this.value === 'credit' || this.value === 'debit') ? 'block' : 'none';
        paypalDetails.style.display = (this.value === 'paypal') ? 'block' : 'none';
    });

    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulate payment success
        paymentForm.style.display = 'none';
        paymentSuccess.style.display = 'block';
        // Optionally clear cart or redirect after a delay
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2500);
    });
});
