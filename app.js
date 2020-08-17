const account_info_api_url = 'http://localhost:8080/api/getbalance';

async function getAccountInfo() {
    // TODO: Add check for when the API does not return data
    const response = await fetch(account_info_api_url);
    if (response.ok !== true) {
        console.log('Service unavailable');
    }
    const data = await response.json();
    
    document.getElementById('name').textContent = data.account.name;
    document.getElementById('iban').textContent = data.account.iban;
    document.getElementById('balance').textContent = data.account.balance;
    document.getElementById('currency').textContent = data.currency;

    // TODO There are 8 money transfers, so for each of those 8 we need to:
        // TODO display either to or from
            // TODO --> if to, perhaps add a minus symbol to the amount, to indicate that it was money spent, not earned
        // TODO display description
        // TODO display amount
            // TODO add EURO to this using currency as above
        // TODO display date
            // TODO --> date needs to be human readable
            // TODO --> probably sort by date as well --> nope, JSON data is already most recently first

    // for each item in the object containing the debits and credits: 
    // document.body.appendChild --> https://www.w3schools.com/jsref/met_node_appendchild.asp

/*     <p>The value of "firstName" is:</p>

<p id="demo"></p>

<script>
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

document.getElementById("demo").innerHTML = obj.firstName;
 */

    for (const item of data.debitsAndCredits) {
        var itemEntries = Object.entries(item); // this object has a length, so can be iterated
        var tablerow = document.createElement("TR");
        
        // each item has 4 entries, consisting of key value pairs. So we create a counter, and once that counter hits certain numbers, we do something: 
        // the order of key value pairs is always the same
        var entrypaircounter = 0;
        for (const entry of itemEntries) {
            var entryDescription = entry[0]; //we will use this to check if we need to do anything to entryValue
            // we assume the third entry is always the currency amount, regardless of its key (amount or debit)
            if (entrypaircounter === 2) {
                var entryValue = entry[1] + " " + data.currency;
                console.log(entryValue);
            }
            else {
                var entryValue = entry[1];
            }
            var tablecell = document.createElement("TD");
            var text = document.createTextNode(entryValue);
            tablecell.appendChild(text);
            tablerow.appendChild(tablecell);
            entrypaircounter ++;
            console.log(entrypaircounter);     
        }
        document.getElementById("debitsAndCredits").appendChild(tablerow);

        //var para = document.createElement("P");
        //var elementToString = JSON.stringify(element); // this turns the element into a string (in JSON format)
        //console.log(elementToString);
        //var elementStringParsed = JSON.parse(elementToString); // this turns the string (back?) into a JSON object
        //console.log(elementStringParsed);
        //console.log(elementStringParsed.length);                       
        //var text = document.createTextNode(JSON.stringify(element));     
        //para.appendChild(text);                                          
        //document.getElementById("debitsAndCredits").appendChild(para);

    }

}

getAccountInfo();