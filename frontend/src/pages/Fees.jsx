import React from "react";
import jsPDF from "jspdf";
import "./Fees.css";

const Fees = () => {
  const transactions = [
    { id: 1, date: "2025-01-10", desc: "Tuition Fee - January", amount: "₹5,000", status: "Paid" },
    { id: 2, date: "2025-02-10", desc: "Tuition Fee - February", amount: "₹5,000", status: "Paid" },
    { id: 3, date: "2025-03-10", desc: "Tuition Fee - March", amount: "₹5,000", status: "Pending" },
  ];

  const upcomingPayments = [
    { id: 1, dueDate: "2025-04-10", desc: "Tuition Fee - April", amount: "₹5,000" },
    { id: 2, dueDate: "2025-05-10", desc: "Tuition Fee - May", amount: "₹5,000" },
  ];

  // Generate PDF receipt
  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Fee Receipt", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.text("Receipt No: RCPT-2025010", 20, 40);
    doc.text("Student Name: Rahul Sharma", 20, 50);
    doc.text("Class: 10th A", 20, 60);
    doc.text("Date: 10 Jan 2025", 20, 70);
    doc.text("Amount Paid: ₹5,000", 20, 80);

    doc.line(20, 90, 190, 90);
    doc.text("Thank you for your payment!", 105, 110, null, null, "center");

    doc.save("Fee_Receipt.pdf");
  };

  return (
    <div className="fees-page">
      <h1>View Fees Details</h1>
      {/* Billing Summary */}
      <section className="billing-summary">
        <h2>Billing Summary</h2>
        <div className="summary-cards">
          <div className="card"><h3>Total Fees</h3><p>₹15,000</p></div>
          <div className="card paid"><h3>Paid</h3><p>₹10,000</p></div>
          <div className="card due"><h3>Due</h3><p>₹5,000</p></div>
        </div>
      </section>

      {/* Fee Receipt */}
      <section className="fee-receipt">
        <h2>Latest Fee Receipt</h2>
        <div className="receipt-box">
          <p><strong>Receipt No:</strong> RCPT-2025010</p>
          <p><strong>Student Name:</strong> Rahul Sharma</p>
          <p><strong>Class:</strong> 10th A</p>
          <p><strong>Date:</strong> 10 Jan 2025</p>
          <p><strong>Amount Paid:</strong> ₹5,000</p>
          <button className="download-btn" onClick={downloadReceipt}>Download Receipt</button>
        </div>
      </section>

      {/* Transaction History */}
      <section className="transaction-history">
        <h2>Transaction History</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.desc}</td>
                  <td>{t.amount}</td>
                  <td className={t.status.toLowerCase()}>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-methods">
        <h2>Saved Payment Methods</h2>
        <div className="methods">
          <div className="method-card">
            <h3>Visa **** 1234</h3>
            <p>Expires 08/27</p>
            <button>Use Card</button>
          </div>
          <div className="method-card">
            <h3>UPI: rahul@upi</h3>
            <p>Preferred</p>
            <button>Use UPI</button>
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="download-center">
        <h2>Download Center</h2>
        <p>You can download your past fee receipts here:</p>
        <button className="download-btn">Download All Receipts (ZIP)</button>
      </section>

      {/* Help & Support */}
      <section className="support-section">
        <h2>Help & Support</h2>
        <p>If you face any issue with your payments, please contact:</p>
        <p><strong>Email:</strong> support@schoolfees.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
      </section>
    </div>
  );
};

export default Fees;
