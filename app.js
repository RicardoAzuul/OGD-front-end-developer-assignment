const account_info_api_url = 'http://localhost:8080/api/getbalance';

async function getAccountInfo() {
    // TODO: Add check for when the API does not return data
    const response = await fetch(account_info_api_url);
    const data = await response.json();
    // const { name } = data;
    
    document.getElementById('name').textContent = data.account.name;
    document.getElementById('iban').textContent = data.account.iban;
    document.getElementById('balance').textContent = data.account.balance;
    document.getElementById('currency').textContent = data.currency;

    console.log(data.debitsAndCredits.length);
}

getAccountInfo();