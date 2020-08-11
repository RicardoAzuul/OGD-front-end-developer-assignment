const account_info_api_url = 'http://localhost:8080/api/getbalance';

async function getAccountInfo() {
    // TODO: Add check for when the API does not return data
    const response = await fetch(account_info_api_url);
    if (response.ok !== true) {
        console.log('Service unavailable');
    }
    const data = await response.json();
    // We need to check for unavailability of the service
    const status = await response.status;
    // const { name } = data;
    
    document.getElementById('name').textContent = data.account.name;
    document.getElementById('iban').textContent = data.account.iban;
    document.getElementById('balance').textContent = data.account.balance;
    document.getElementById('currency').textContent = data.currency;

    // There are 8 money transfers, so for each of those 8 we need to:
        // display either to or from
            // --> if to, perhaps add a minus symbol to the amount, to indicate that it was money spent, not earned
        // display description
        // display amount
            // add EURO to this using currency as above
        // display date
            // --> date needs to be human readable
            // --> probably sort by date as well --> nope, JSON data is already most recently first

    


    console.log(data.debitsAndCredits.length);
    console.log(status);
    console.log(response);
}

getAccountInfo();