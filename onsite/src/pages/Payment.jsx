import "./Payment.css";
function Payment() {
  return (
    <>
      <div className="payment">
        <div className="payment-header">
            <div>Balance<hr/><br/>Amount</div><hr/>
            <div>Total In<hr/><br/>Amount</div><hr/>
            <div>Total Out<hr/><br/>Amount</div>
        </div>
        <div className="payment-body">body</div>
      </div>
    </>
  );
}
export default Payment;
