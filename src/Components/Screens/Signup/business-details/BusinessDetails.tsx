import '../../../../Assets/css/form.css';
function BusinessDetails() {
    return (
        <div className="form">
            <form action="#" method="Post">
                <input className="form-field" type="text" placeholder="Enter Business Name" name="BName" required /> <br />
                <input className="form-field" type="text" placeholder="Country" name="country" required /><br />
                <input className="form-field" type="date" placeholder="Date Of Incorperatiom" name="dateOfIn" required /><br />
                {/* <select className="form-field" name="select" required><br />
                    <option selected>Choose Relation</option>
                    <option value="Owner">Owner</option>
                    <option value="2">2</option>
                    <option value="3">3</option>

                </select> */}
                <br />
                <input className="form-field" type="text" placeholder="Legal Form" name="legalForm" required /><br />
                <input className="form-field" type="text" placeholder="Registration Number" name="registrationNumber" required /><br />
                <input className="form-field" type="text" placeholder="State Of Province" name="stateOfProvince" required /><br />
                <input className="form-field" type="text" placeholder="City" name="city" required /><br />
                <input className="form-field" type="text" placeholder="Street" name="street" required /><br />
                <input className="form-field" type="text" placeholder="House Number" name="houseNo" required /><br />
                <input className="form-field" type="text" placeholder="Postal Code" name="postalCode" required /><br /><br />
                <input className="form-field" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default BusinessDetails;