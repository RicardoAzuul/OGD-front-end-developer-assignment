const account_info_api_url = 'http://localhost:8080/api/getbalance';

async function getAccountInfo() {
    const response = await fetch(account_info_api_url);
    if (!response.ok) {
        const responseStatus = response.status;
        const responseStatusText = response.statusText;
        const responseURL = response.url;

        function addLineBreak() {
            var linebreak = document.createElement("BR");
            document.getElementById("accountInformation").appendChild(linebreak);
        }

        // loading another html page meant losing the response data, so we're clearing the page instead
        document.getElementById('accountInformation').innerHTML = "";
        var element = document.getElementById('transactions');
        element.parentNode.removeChild(element);
        
        addLineBreak();

        // here we add all the error info together in order to append it to the html
        var header1 = document.createElement("H1");
        var text = document.createTextNode("Apologies!");
        header1.appendChild(text);
        document.getElementById("accountInformation").appendChild(header1);

        addLineBreak();

        var paragraph = document.createElement("P");
        var text = document.createTextNode("We are unable to show your account balance at this time.");
        paragraph.appendChild(text);
        document.getElementById("accountInformation").appendChild(paragraph);

        addLineBreak();

        var text = document.createTextNode("HTTP status code: " + responseStatus);
        document.getElementById("accountInformation").appendChild(text);

        addLineBreak();

        var text = document.createTextNode("HTTP status text: " + responseStatusText);
        document.getElementById("accountInformation").appendChild(text);

        addLineBreak();

        var text = document.createTextNode("URL: " + responseURL);
        document.getElementById("accountInformation").appendChild(text);

        addLineBreak();
        addLineBreak();

        var anchor = document.createElement('a');
        var text = document.createTextNode("Try again");
        anchor.appendChild(text);
        anchor.href = "index.html";
        document.getElementById("accountInformation").appendChild(anchor);

        addLineBreak();
        addLineBreak();
  
    }

    const data = await response.json();
    
    document.getElementById('name').textContent = data.account.name;
    document.getElementById('iban').textContent = data.account.iban;
    document.getElementById('balance').textContent = data.account.balance;
    document.getElementById('currency').textContent = data.currency;

    for (const item of data.debitsAndCredits) {
        var itemEntries = Object.entries(item); // this object has a length, so can be iterated
        var tablerow = document.createElement("TR");
        
        // each item has 4 entries, consisting of key value pairs. So we create a counter, and once that counter hits certain numbers, we do something: 
        // the order of key value pairs is always the same
        var entrypaircounter = 0;
        var deduction = false;
        for (const entry of itemEntries) {
            var entryDescription = entry[0]; //we will use this to check if we need to do anything to entryValue
            if (entryDescription === "to") {
                var deduction = true;
            }
            // we assume the third entry is always the currency amount, regardless of its key (amount or debit)
            if (entrypaircounter === 2) {
                // some of the entries have just 1 digit after the decimal: we need to add a 0
                var entryValueString = entry[1] + "";
                var decimalIndex = entryValueString.indexOf('.') + 1;

                if (decimalIndex === 0) {
                    var entryValue = entry[1] + ".00";
                }
                else {
                    var digitsAfterDecimal = entryValueString.slice(decimalIndex);

                    if (digitsAfterDecimal.length < 2) {
                        var entryValue = entry[1] + "0";
                    }
                    else {
                        var entryValue = entry[1]; 
                    }
                }
        
                if (deduction === true) {
                    var entryValue = "-" + entryValue + " " + data.currency;
                    var deduction = false;
                }
                else {
                    var entryValue = entryValue + " " + data.currency;
                }
                                
            }

            else if (entrypaircounter === 3) {
                var entryToDateString = entry[1];
                // the fourth entry is the datetime of the entry. We want the date, the month, the year and the time
                var entryToDateString = entryToDateString.replace("T", " ");
                var entryToDateString = entryToDateString.replace(":00.000Z", "");
                var entryValue = entryToDateString;
            }

            else {
                var entryValue = entry[1];
            }

            var tablecell = document.createElement("TD");
            var text = document.createTextNode(entryValue);
            tablecell.appendChild(text);
            tablerow.appendChild(tablecell);
            entrypaircounter ++;

        }
        document.getElementById("debitsAndCredits").appendChild(tablerow);

    }

}

getAccountInfo();
