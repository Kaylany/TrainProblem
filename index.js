const { discover_the_train_tickets } = require('./helpers')

// [
//   {from: 'Los Angeles', to: 'San Francisco'},
//   {from: 'San Francisco', to: 'Las Vegas'},
//   {from: 'Las Vegas', to: 'Austin'}
// ]

function sort_tickets(the_evidence) {
    /* 
      Code your sorting function here and return the sorted tickets.
      By default it returns the unsorted stack.
    */
    const the_goods = the_evidence

    let sortTickets = the_goods.sort((a, b) => (a.to = b.from) ? -1 : 0)

    const finalCity = sortTickets[sortTickets.length - 1].to

    console.log("Final City: " + finalCity)

    return sortTickets
    
    // let array = [the_goods.shift()];
    // console.log(array)

    // while (the_goods.length) {
    //   for (let i = 0; i < the_goods.length; i++) {
    //     if (array[array.length - 1][1] === the_goods[i][0]) {
    //       array.push(the_goods[i]);
    //     } else if (array[0][0] === the_goods[i][1]) {
    //       array.unshift(the_goods[i]);
    //     }
    //   }
    //   return array
    // }
    
  
  }



/* 
  This variable determines the number of hops in the trip, 
  or tickets in the stack.
*/
const ticket_count = 50

/* 
  This is the controling function that calls the sort function.
  By default it logs the stack return from sort function to the console.
  Make any changes you feel necessary.
*/
function crack_the_case() {
    const the_evidence = discover_the_train_tickets(ticket_count)
    const the_goods = sort_tickets(the_evidence)
    console.log(the_goods)
}

crack_the_case()
