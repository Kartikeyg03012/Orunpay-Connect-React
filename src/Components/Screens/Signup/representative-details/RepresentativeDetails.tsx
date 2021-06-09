import '../../../../Assets/css/form.css';
function RepresentativeDetails() {
    return (
        <div className="form">
            <form action="#" method="Post">
                <input className="form-field" type="text" placeholder="Enter First Name" name="firstName" required /> <br />
                <input className="form-field" type="text" placeholder="Enter Last Name" name="lastName" required /><br />
                <input className="form-field" type="email" placeholder="Enter Email" name="email" required /><br />
                <select className="form-field" name="select" required><br />
                    <option selected>Choose Relation</option>
                    <option value="Owner">Owner</option>
                    <option value="2">2</option>
                    <option value="3">3</option>

                </select><br />
                <input className="form-field" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default RepresentativeDetails;