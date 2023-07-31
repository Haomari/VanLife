export default function HostTransaction() {
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
      <div className="transactions-host__transactions">
        {transactionsData.map((transaction) => {
          return (
            <div className="transactions-host__transaction transaction-host">
              <div className="transaction-host__amount">
                <p>${transaction.amount}</p>
              </div>
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
