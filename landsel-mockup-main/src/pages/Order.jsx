import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, index) => index + 1);
const years = Array.from(
  { length: 3 },
  (_, index) => new Date().getFullYear() + index,
);

function Order() {
  const [sellerType, setSellerType] = useState("individual");
  const [buyerType, setBuyerType] = useState("individual");

  return (
    <main>
      <section className="section order-section">
        <div className="container">
          <form
            className="order-form-card"
            onSubmit={(event) => event.preventDefault()}
          >
            <fieldset className="order-form-section">
              <h3>Transaction Details</h3>

              <RadioGroup
                name="transactionType"
                label="Transaction Type"
                options={["Purchase with Financing", "Cash", "Refinancing"]}
              />
              <RadioGroup
                name="forSaleByOwner"
                label="For Sale By Owner"
                options={["Yes", "No"]}
              />
              <RadioGroup
                name="shortSale"
                label="Short Sale"
                options={["Yes", "No"]}
              />
            </fieldset>

            <fieldset className="order-form-section">
              <h3>Your Information</h3>

              <div className="form-row">
                <label className="form-field">
                  <span>First Name</span>
                  <input type="text" name="firstName" />
                </label>
                <label className="form-field">
                  <span>Last Name</span>
                  <input type="text" name="lastName" />
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Email Address</span>
                  <input type="email" name="email" />
                </label>
                <label className="form-field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" />
                </label>
              </div>
            </fieldset>

            <fieldset className="order-form-section">
              <h3>Property Information</h3>

              <div className="form-row">
                <label className="form-field">
                  <span>Sales Price</span>
                  <input type="text" name="salesPrice" placeholder="$0.00" />
                </label>

                <label className="form-field">
                  <span>Closing Date</span>
                  <div className="date-select-row">
                    <select name="closingMonth" defaultValue="">
                      <option value="" disabled>
                        Month
                      </option>
                      {months.map((month) => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                    <select name="closingDay" defaultValue="">
                      <option value="" disabled>
                        Day
                      </option>
                      {days.map((day) => (
                        <option key={day}>{day}</option>
                      ))}
                    </select>
                    <select name="closingYear" defaultValue="">
                      <option value="" disabled>
                        Year
                      </option>
                      {years.map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>

              <label className="form-field">
                <span>Property Address</span>
                <input type="text" name="address" />
              </label>

              <div className="form-row">
                <label className="form-field">
                  <span>City</span>
                  <input type="text" name="city" />
                </label>
                <label className="form-field">
                  <span>Zip Code</span>
                  <input type="text" name="zip" />
                </label>
              </div>

              <label className="form-field">
                <span>HOA Information</span>
                <input
                  type="text"
                  name="hoa"
                  placeholder="HOA name, contact, or N/A"
                />
              </label>
            </fieldset>

            <PartyFields
              title="Seller Information"
              prefix="seller"
              type={sellerType}
              onTypeChange={setSellerType}
            />

            <PartyFields
              title="Buyer Information"
              prefix="buyer"
              type={buyerType}
              onTypeChange={setBuyerType}
            />

            <fieldset className="order-form-section">
              <h3>Other Details</h3>

              <div className="form-row">
                <label className="form-field">
                  <span>Escrow Amount</span>
                  <input
                    type="text"
                    name="escrowAmount"
                    placeholder="$0.00"
                  />
                </label>
                <label className="form-field">
                  <span>Escrow Holder</span>
                  <input type="text" name="escrowHolder" />
                </label>
              </div>

              <label className="form-field">
                <span>Special Requirements</span>
                <textarea
                  name="specialRequirements"
                  rows={4}
                  placeholder="POA, requires Survey, mail-away closing, etc."
                />
              </label>
            </fieldset>

            <button type="submit" className="button secondary order-submit">
              Send Order
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function RadioGroup({ name, label, options }) {
  return (
    <div className="form-field">
      <span>{label}</span>
      <div className="radio-group">
        {options.map((option) => (
          <label className="radio-option" key={option}>
            <input type="radio" name={name} value={option} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function PartyFields({ title, prefix, type, onTypeChange }) {
  const role = title.split(" ")[0];

  return (
    <fieldset className="order-form-section">
      <h3>{title}</h3>

      <div className="form-field">
        <span>{role} Type</span>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name={`${prefix}Type`}
              checked={type === "individual"}
              onChange={() => onTypeChange("individual")}
            />
            <span>Individual</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name={`${prefix}Type`}
              checked={type === "company"}
              onChange={() => onTypeChange("company")}
            />
            <span>Company</span>
          </label>
        </div>
      </div>

      {type === "individual" ? (
        <div className="form-row">
          <label className="form-field">
            <span>First Name</span>
            <input type="text" name={`${prefix}FirstName`} />
          </label>
          <label className="form-field">
            <span>Last Name</span>
            <input type="text" name={`${prefix}LastName`} />
          </label>
        </div>
      ) : (
        <label className="form-field">
          <span>Company Name</span>
          <input type="text" name={`${prefix}CompanyName`} />
        </label>
      )}

      <div className="form-row">
        <label className="form-field">
          <span>Marital Status</span>
          <select name={`${prefix}MaritalStatus`} defaultValue="">
            <option value="" disabled>
              Select status
            </option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </label>
        <label className="form-field">
          <span>Loan Lender</span>
          <input
            type="text"
            name={`${prefix}Lender`}
            placeholder="If financing, lender name"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Email Address</span>
          <input type="email" name={`${prefix}Email`} />
        </label>
        <label className="form-field">
          <span>Phone Number</span>
          <input type="tel" name={`${prefix}Phone`} />
        </label>
      </div>

      <p className="order-form-subheading">{role}&rsquo;s Agent</p>

      <div className="form-row">
        <label className="form-field">
          <span>Agent Name</span>
          <input type="text" name={`${prefix}AgentName`} />
        </label>
        <label className="form-field">
          <span>Agent Company</span>
          <input type="text" name={`${prefix}AgentCompany`} />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Agent Phone</span>
          <input type="tel" name={`${prefix}AgentPhone`} />
        </label>
        <label className="form-field">
          <span>Agent Email</span>
          <input type="email" name={`${prefix}AgentEmail`} />
        </label>
      </div>

      <label className="form-field">
        <span>Compensation</span>
        <input
          type="text"
          name={`${prefix}Compensation`}
          placeholder="e.g. 2.5% or flat fee"
        />
      </label>
    </fieldset>
  );
}

export default Order;
