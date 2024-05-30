async function convertCurrency() {
    const apiKey = '66d21770bf90a1e9126cf3a4'; // Buraya kendi API anahtarınızı girin
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (!fromCurrency || !toCurrency || !amount) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('API isteği başarısız oldu');
        }

        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const result = (amount * rate).toFixed(2);

        document.getElementById('resultAmount').innerText = result;
        document.getElementById('resultCurrency').innerText = toCurrency;
    } catch (error) {
        console.error('Hata:', error);
        alert('Dönüşüm sırasında bir hata oluştu.');
    }
}
