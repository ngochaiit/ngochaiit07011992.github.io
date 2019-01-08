window.onload = () =>
{
        showData(dataCustomer);
        startTime();
}

const showData = (dataCustomer) =>
{
    console.log(dataCustomer.length);
    let table = document.getElementById('table');
    let i = 0;
    dataCustomer.forEach(customer => {
        i++;
        if(i<=10  && i!=6 && i != 9 && i !=8)
        {
            table.innerHTML +=
            `<tr><td item-width = "10%" class='col1'>${customer.stt}</td>
                <td item-width = "60%" class ='col2'>${customer.name}</td>
                <td item-width = "30%" class = 'col3'><i class="fas fa-arrow-down"></i>${customer.number}</td></tr>`
        } 
        else if(i==6 || i== 9)
        {
            table.innerHTML +=
            `<tr><td item-width = "10%" class ='col1'>${customer.stt}</td>
                <td item-width = "60%" class = 'col2'>${customer.name}</td>
                <td item-width = "30%" class = 'col3'><i class="fas fa-arrow-up"></i>${customer.number}</td></tr>`
        }
        else
        {
            table.innerHTML +=
            `<tr><td item-width = "10%" class ='col1'>${customer.stt}</td>
                <td item-width = "60%" class = 'col2'>${customer.name}</td>
                <td item-width = "30%" class = 'col3'><i class="minus">-</i>${customer.number}</td></tr>`
        }
    });


}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let mo = today.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var y = today.getFullYear();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = d + "." + monthNames[mo] + "." + y + '.  ' + h + ":" + m + ":" + s ;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  

