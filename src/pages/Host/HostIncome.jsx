import HostDashboard from "../../app-components/host/HostDashboard";
import HostTransaction from "../../app-components/host/HostTransaction";

export default function HostIncome() {
  return (
    <section className="host__income income-host">
      <div className="income-host__container">
        <div className="income-host__income-body">
          <h2 className="income-host__title">Income</h2>
          <div className="income-host__time">
            <p>
              Last <span>30 days</span>
            </p>
          </div>
          <div className="income-host__amount">
            <p>$2,260</p>
          </div>
          <div className="income-host__dashboard dashboard-host">
            <HostDashboard />
          </div>
        </div>
				<div className="income-host__transactions transactions-host">
					<HostTransaction />
				</div>
      </div>
    </section>
  );
}
