// This script will read contact/payment/order info from localStorage and display it
window.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('orderName') || '-';
    const email = localStorage.getItem('orderEmail') || '-';
    const phone = localStorage.getItem('orderPhone') || '-';
    const address = localStorage.getItem('orderAddress') || '-';
    let items = localStorage.getItem('orderItems') || '-';
    const payment = localStorage.getItem('orderPayment') || '-';

    // Try to pretty print items if it's a JSON array
    try {
        const arr = JSON.parse(items);
        if (Array.isArray(arr)) {
            items = arr.map(item => {
                let color = (item.color && item.color !== 'undefined' && item.color !== '') ? item.color : '-';
                let size = (item.size && item.size !== 'undefined' && item.size !== '') ? item.size : '-';
                return `${item.name} | Color: ${color} | Size: ${size} | Qty: ${item.quantity}`;
            }).join('\n');
        }
    } catch (e) {}

    document.getElementById('contactName').textContent = name;
    document.getElementById('contactEmail').textContent = email;
    document.getElementById('contactPhone').textContent = phone;
    document.getElementById('contactAddress').textContent = address;
    document.getElementById('contactItems').value = items;
    document.getElementById('contactPayment').textContent = payment;
});
