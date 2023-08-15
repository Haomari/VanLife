export default function HostTransaction() {
  // Array of transaction data with amount and date
  const transactionsData = [
    {
      amount: 720,
      date: "1 / 12 / 22",
    },
    {
      amount: 560,
      date: "10 / 11 / 22",
    },
    {
      amount: 980,
      date: "23 / 11 / 22",
    },
  ];

  return (
    <>
      {/* Title and time header */}
      <div className="transactions-host__title-body">
        <div className="transactions-host__title">
          <p>Your transactions ({transactionsData.length})</p>
        </div>
        <div className="transactions-host__time">
          <p>
            Last <span>30 days</span>
          </p>
        </div>
      </div>
      {/* List of transactions */}
      <div className="transactions-host__transactions">
        {transactionsData.map((transaction, i) => {
          return (
            <div key={i} className="transactions-host__transaction transaction-host">
              {/* Display transaction amount */}
              <div className="transaction-host__amount">
                <p>${transaction.amount}</p>
              </div>
              {/* Display transaction date */}
              <div className="transaction-host__date">
                <p>{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
