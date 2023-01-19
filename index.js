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
    // const the_goods = the_evidence

    // let sortTickets = the_goods.sort((a, b) => (a.to = b.from) ? -1 : 0)

    // const finalCity = sortTickets[sortTickets.length - 1].to

    // console.log("Final City: " + finalCity)

    // return sortTickets

    // optimized solution; checking with hash map
    // remember to practice debugging your solution
    //const original_tickets = JSON.stringify(the_evidence)
    const to_destination = {}
    const from_destination = {}
    for (const ticket of the_evidence) {
      to_destination[ticket.to] = ticket
      to_destination[ticket.from] = ticket
    }

    const from = Object.keys(from_destinations);
    let starting_ticket = {}
    for (const from of froms) {
      if (!to_destinations[from]) {
        starting_ticket = from_destinations[from];
      }
    }

    const the_goods = [];
    the_goods.push(starting_ticket);
    let current_ticket = starting_ticket;
    while (current_ticket && current_ticket.to) {
      if (from_destination[current_ticket.to]) {
        the_goods.push(from_destinations[current_ticket.to]);
        current_ticket = from_destination[current_ticket.to];
      }
    }

    console.log(the_goods);
    
    return sortedTickets;
    
  
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
