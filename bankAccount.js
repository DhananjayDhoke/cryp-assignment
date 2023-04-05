class BankAccount {
    constructor(name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo) {
      this.accountDetails = {
        name,
        gender,
        dob,
        email,
        mobile,
        address,
        adharNo,
        panNo,
        balance: initialBalance,
        ledger: []
      };
    }
  
    updateKYC(name, dob, email, mobile, adharNo, panNo) {
      this.accountDetails = {
        ...this.accountDetails,
        name,
        dob,
        email,
        mobile,
        adharNo,
        panNo
      };
      console.log("KYC details updated successfully!");
    }
  
    depositMoney(amount) {
      this.accountDetails.balance += amount;
      this.accountDetails.ledger.push({
        type: "credit",
        amount,
        date: new Date()
      });
      console.log(`${amount} deposited successfully!`);
    }
  
    withdrawMoney(amount) {
      if (this.accountDetails.balance < amount) {
        console.log("Insufficient balance!");
        return;
      }
      this.accountDetails.balance -= amount;
      this.accountDetails.ledger.push({
        type: "debit",
        amount,
        date: new Date()
      });
      console.log(`${amount} withdrawn successfully!`);
    }
  
    transferMoney(toName, amount) {
      if (this.accountDetails.balance < amount) {
        console.log("Insufficient balance!");
        return;
      }
      this.accountDetails.balance -= amount;
      this.accountDetails.ledger.push({
        type: "debit",
        amount,
        date: new Date(),
        to: toName
      });
      console.log(`${amount} transferred successfully to ${toName}!`);
    }
  
    receiveMoney(fromName, amount) {
      this.accountDetails.balance += amount;
      this.accountDetails.ledger.push({
        type: "credit",
        amount,
        date: new Date(),
        from: fromName
      });
      console.log(`${amount} received successfully from ${fromName}!`);
    }
  
    printStatement() {
      console.log("Account Details:\n", this.accountDetails);
      console.log("Transaction History:\n");
      this.accountDetails.ledger.forEach(transaction => {
        console.log(
          `Date: ${transaction.date}, Type: ${transaction.type}, Amount: ${transaction.amount}, 
           From: ${transaction.from + "-"}, To: ${transaction.to + "-"}`
        );
      });
    }
  
    closeAccount() {
      this.accountDetails = null;
      console.log("Account closed successfully!");
    }
  }
  
  // Example
  const account = new BankAccount(
    "testUser",
    "Male",
    "12/12/2020",
    "test@example.com",
    "987654321",
    "kolkata",
    500,
    "0123 4567 8910",
    "ABCDE1234Z"
  );
  
  