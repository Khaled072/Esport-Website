import { useState } from 'react';
import "./Checkin.css";

const Checkin = () => {
    const [affiliation, setAffiliation] = useState('');
    const [showRedIdInput, setShowRedIdInput] = useState(false);
    const [showEmailInput, setShowEmailInput] = useState(false);
  
    const handleAffiliationChange = (event) => {
        const selectedOption = event.target.value;
        setAffiliation(selectedOption);
    
        if (selectedOption === '1' || selectedOption === '2') {
            setShowRedIdInput(true);
            setShowEmailInput(false);
        } else {
            setShowRedIdInput(false);
            setShowEmailInput(true);
        }
    };
    return (
        <div className="container check-in-custom content">
            <div className="mx-auto border p-3 check-in">
                <div className="p-1 Greetings">
                    <label htmlFor="Greetings">Esports Engagement Center Check-in</label>
                </div>
                <form action="/action_page.php">
                    <div className="ms-3 me-3 mb-3 mt-3">
                        <label htmlFor="name-checkin" className="form-label">First Name *</label>
                        <input type="text" className="form-control" id="name-checkin" placeholder="Fisrt Name" name="name-checkin" required />
                    </div>
                    <div className="ms-3 me-3 mb-3 mt-3">
                        <label htmlFor="name-checkin" className="form-label">Last Name *</label>
                        <input type="text" className="form-control" id="name-checkin" placeholder="Last Name" name="name-checkin" required />
                    </div>
                    <div className="form-group ms-3 me-3 mb-3 mt-3">
                        <label htmlFor="majors" className="mb-2">What&apos;s Your Major?</label>
                        <select className="form-select" id="majors" aria-label="Default select example">
                            <option value="" disabled selected>Major</option>
                            <option value="1">Accountancy</option>
                            <option value="2">Aerospace Engineering</option>
                            <option value="3">Africana Studies</option>
                            <option value="4">American Indian Studies</option>
                            <option value="5">Anthropology</option>
                            <option value="6">Art</option>
                            <option value="7">Asian Studies</option>
                            <option value="8">Astronomy</option>
                            <option value="9">Biology</option>
                            <option value="10">Brazilian Studies</option>
                            <option value="11">Business Administration</option>
                            <option value="12">Chemistry</option>
                            <option value="13">Chicana and Chicano Studies</option>
                            <option value="14">Child and Family Development</option>
                            <option value="15">Civil Engineering</option>
                            <option value="16">classNameics</option>
                            <option value="17">Communication</option>
                            <option value="18">Comparative International Studies</option>
                            <option value="19">Comparative Literature</option>
                            <option value="20">Computer Engineering</option>
                            <option value="21">Computer Science</option>
                            <option value="22">Construction Engineering</option>
                            <option value="23">Construction Management</option>
                            <option value="24">Criminal Justice and Criminology</option>
                            <option value="25">Dance</option>
                            <option value="26">Earth and Environmental Sciences</option>
                            <option value="27">Economics</option>
                            <option value="28">Electrical Engineering</option>
                            <option value="29">English</option>
                            <option value="30">Environmental Engineering</option>
                            <option value="31">Environmental Studies</option>
                            <option value="32">European Studies</option>
                            <option value="33">Exercise and Nutritional Sciences</option>
                            <option value="34">Finance</option>
                            <option value="35">French</option>
                            <option value="36">Geography</option>
                            <option value="37">German</option>
                            <option value="38">Gerontology</option>
                            <option value="39">History</option>
                            <option value="40">Hospitality and Tourism Management</option>
                            <option value="41">Humanities</option>
                            <option value="42">Interdisciplinary Studies in Three Departments</option>
                            <option value="43">International Business</option>
                            <option value="44">International Security and Conflict Resolution</option>
                            <option value="45">Jewish Studies</option>
                            <option value="46">Journalism and Media Studies</option>
                            <option value="47">Language, Culture, and Society</option>
                            <option value="48">Latin American Studies</option>
                            <option value="49">Lesbian, Gay, Bisexual, Transgender, Queer and Plus Studies</option>
                            <option value="50">Liberal Studies</option>
                            <option value="51">Linguistics and Asian/Middle Eastern Languages</option>
                            <option value="52">Management</option>
                            <option value="53">Management Information Systems</option>
                            <option value="54">Marketing</option>
                            <option value="55">Mathematics</option>
                            <option value="56">Mechanical Engineering</option>
                            <option value="57">Music</option>
                            <option value="58">Nursing</option>
                            <option value="59">Nutrition</option>
                            <option value="60">Philosophy</option>
                            <option value="61">Physics</option>
                            <option value="62">Political Science</option>
                            <option value="63">Psychology</option>
                            <option value="64">Public Administration</option>
                            <option value="65">Public Health</option>
                            <option value="66">Rhetoric and Writing Studies</option>
                            <option value="67">Russian</option>
                            <option value="68">Social Science</option>
                            <option value="69">Social Work</option>
                            <option value="70">Sociology</option>
                            <option value="71">Spanish and Portuguese Languages and Literatures</option>
                            <option value="72">Speech, Language, and Hearing Sciences</option>
                            <option value="73">Statistics</option>
                            <option value="74">Study of Religion</option>
                            <option value="75">Sustainability</option>
                            <option value="76">Television, Film, and New Media</option>
                            <option value="77">Theatre Arts</option>
                            <option value="78">Urban Studies</option>
                            <option value="79">Women&apos;s Studies</option>
                        </select>
                    </div>
                    <div className="form-group ms-3 me-3 mb-3 mt-3">
                        <label htmlFor="affiliation" className="mb-2">What is your affiliation to SDSU? *</label>
                        <select className="form-select" id="affiliation" aria-label="Default select example" value={affiliation} onChange={handleAffiliationChange} required>
                            <option value="" disabled>What is your affiliation to SDSU? *</option>
                            <option value="1">Student</option>
                            <option value="2">Faculty/Staff/Administrator</option>
                            <option value="3">Community Guest</option>
                        </select>
                    </div>
                    {/* Conditional RedID Input */}
                    {showRedIdInput && (
                        <div className="ms-3 me-3 mb-3 mt-3" id="SDSURedID">
                        <label htmlFor="redid-checkin" className="form-label"> SDSU RedID:</label>
                        <input type="number" className="form-control" id="redid-checkin" placeholder="Enter Your SDSU RedID *" name="redid-checkin" required />
                        </div>
                    )}
                    {/* Conditional Email Input */}
                    {showEmailInput && (
                        <div className="ms-3 me-3 mb-3 mt-3" id="InputEmail">
                        <label htmlFor="Input-Email" className="form-label">Email Address *</label>
                        <input type="email" className="form-control" id="Input-Email" placeholder="Email Address" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We prioritize your privacy and will never disclose your email address to any third party.</div>
                        </div>
                    )}
                    <div className="form-group ms-3 me-3 mb-3 mt-3">
                        <label htmlFor="reasons" className="mb-2">What is the purpose of your visit? *</label>
                        <select className="form-select" id="reasons" aria-label="Default select example" required>
                            <option value="" disabled selected>Reason for Visit *</option>
                            <option value="1">Recreational Gaming</option>
                            <option value="2">Studying</option>
                            <option value="3">Socialization/Leisure</option>
                            <option value="4">Student Organization Meeting</option>
                            <option value="5">Special Event/Competition/Tournament</option>
                            <option value="6">Coordinated Care Advising</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
    
export default Checkin;
  