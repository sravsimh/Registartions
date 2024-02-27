var teamSize = 2;
var msg = document.querySelector(".msg");

function createSpanPoints(numParticipants) {
    const spanPoints = document.querySelector(".span-slider");
    spanPoints.innerHTML = "";
    if (numParticipants > 1) {
        for (var i = 1; i <= numParticipants; i++) {
            const span = `<a href="#participant-${i}" ><div class="span"></div></a>`;
            spanPoints.innerHTML = spanPoints.innerHTML + span;
        }
    }
}

// Dropdown Menu Team size
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function () {
        this.setAttribute('tabindex', 1);
        this.classList.toggle('active');
        var dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    dropdown.addEventListener('focusout', function () {
        console.log("focusout")
        this.classList.remove('active');
        this.querySelector('.dropdown-menu').style.display = 'none';
    });

    dropdown.querySelectorAll('.dropdown-menu li').forEach(function (item) {
        item.addEventListener('click', function () {
            var dropdown = this.closest('.dropdown');
            teamSize = this.textContent;
            // createParticipantSections(teamSize);
            dropdown.querySelector('span').textContent = "Team size : " + this.textContent;
            dropdown.style.color = 'black';
            dropdown.querySelector('input').setAttribute('value', this.getAttribute('id'));
        });
    });
});


async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to generate the virtual DOM for participants
function createParticipantSections(numParticipants) {

    const participantsContainer = document.querySelector('.participants');

    participantsContainer.innerHTML = '';

    for (let i = 1; i <= numParticipants; i++) {
        const participantSection = document.createElement('div');
        participantSection.classList.add(`participant-${i}`, `participant`);
        participantSection.id = `participant-${i}`;

        participantSection.innerHTML = `
        <label class="participant-label">Participant ${i}:</label>
        <div class="fields">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Name"
                            name="participant-${i}-name" id="p${i}f0" required="">
                        <label for="p${i}f0" class="form__label">Name</label>
                    </div>
                    <p id="p${i}w0" class="war">Enter valid Name</p>
                </div>
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="email" class="form__field" placeholder="Email"
                             name="participant-${i}-email"
                            id="p${i}f1" required="">
                        <label for="p${i}f1" class="form__label">Email</label>
                    </div>
                    <p id="p${i}w1" class="war">Enter valid Email</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Year" class="choice">Year </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f2" value="" type="hidden" name="Year">
                            <ul class="dropdown-menu1">
                                <li id="1">1</li>
                                <li id="2">2</li>
                                <li id="3">3</li>
                                <li id="4">4</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w2" class="war">Select valid Year</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Branch" class="choice">Branch </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f4" value="" type="hidden" name="Branch">
                            <ul class="dropdown-menu1">
                                <li id="CIVIL">CIVIL</li>
                                <li id="CSB">CSB</li>
                                <li id="CSC">CSC</li>
                                <li id="CSD">CSD</li>
                                <li id="CSE">CSE</li>
                                <li id="CSM">CSM</li>
                                <li id="ECE">ECE</li>
                                <li id="EEE">EEE</li>
                                <li id="IT">IT</li>
                                <li id="MECH">MECH</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w4" class="war">Select valid Branch</p>
                </div>
                <div class="col-sm-4">
                    <div class="form__group field">
                        <div class="dropdown1 form__field">
                            <div class="select">
                                <span name="Section" class="choice">Section </span>
                                <i class="fa fa-chevron-down"></i>
                            </div>
                            <input id="p${i}f5" value="" type="hidden" name="Section">
                            <ul class="dropdown-menu1">
                                <li id="A">A</li>
                                <li id="B">B</li>
                                <li id="c">C</li>
                                <li id="D">D</li>
                            </ul>
                        </div>
                    </div>
                    <p id="p${i}w5" class="war">Select valid Section</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Roll No"
                            name="participant-${i}-roll-no" id="p${i}f3" required="">
                        <label for="p${i}f3" class="form__label">Roll No</label>
                    </div>
                    <p id="p${i}w3" class="war">Enter valid Roll No</p>
                </div>
                <div class="col-sm-6">
                    <div class="form__group field">
                        <input type="text" class="form__field" placeholder="Phone No"
                         name="participant-${i}-phone-no"
                            id="p${i}f6" required="">
                        <label for="p${i}f6" class="form__label">Phone No</label>
                    </div>
                    <p id="p${i}w6" class="war">Enter valid Phone No</p>
                </div>
            </div>
        </div>
      `;

        participantsContainer.appendChild(participantSection);
    }
    // createSpanPoints(numParticipants);
}
//Dropdown for others
document.querySelectorAll('.dropdown1').forEach(function (dropdown1) {
    dropdown1.addEventListener('click', function () {
        this.setAttribute('tabindex', 1);
        this.classList.toggle('active');
        var dropdownMenu1 = this.querySelector('.dropdown-menu1');
        dropdownMenu1.style.display = (dropdownMenu1.style.display === 'block') ? 'none' : 'block';
    });

    dropdown1.addEventListener('focusout', function (e) {
        console.log(e, this)
        this.classList.remove('active');
        this.querySelector('.dropdown-menu1').style.display = 'none';
    });

    dropdown1.querySelectorAll('.dropdown-menu1 li').forEach(function (item) {
        item.addEventListener('click', function () {
            var dropdown1 = this.closest('.dropdown1');
            var choice = dropdown1.querySelector(".choice").getAttribute("name");
            dropdown1.querySelector('span').innerHTML = `${choice} : ` + `<span class="selection">${this.textContent}</span>`;
            dropdown1.querySelector('input').setAttribute('value', this.getAttribute('id'));
        });
    });
});

// createParticipantSections(2);

const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: config.AUTH_DOMAIN,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
    messagingSenderId: config.MESSAGE_SENDER_ID,
    appId: config.APP_ID,
    measurementId: config.MESSUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
const teams = db.collection("ComSocTeams");
const mail = db.collection("ComSocMails");

document.querySelector(".submit").addEventListener("click", async (e) => {
    e.preventDefault();
    let emails = [];
    let users = [];
    for (let m = 1; m <= teamSize; m++) {
        emails.push(document.querySelector(`#p${m}f1`).value.toLowerCase());
        users.push(document.querySelector(`#p${m}f0`).value);
    }

    let dict = {
        0: "name",
        1: "email",
        2: "year",
        3: "rollno",
        4: "branch",
        5: "sec",
        6: "phno",
    };
    var data = {};
    for (let i = 1; i <= teamSize; i++) {
        for (let j = 0; j <= 6; j++) {
            let values;
            document.querySelector(`#p${i}w${j}`).classList.remove("war-active");
            if (document.querySelector(`#p${i}f${j}`).value == "") {
                document.querySelector(`#p${i}w${j}`).classList.add("war-active");
                var flag = 1;
            }
            if (j == 3 || j == 4 || j == 5) {
                values = document.querySelector(`#p${i}f${j}`).value.toUpperCase();
            }
            else {
                values = document.querySelector(`#p${i}f${j}`).value.toLowerCase();
            }
            if (j == 3) {
                if (values.length != 10 || (values[2] != 'P' || values[3] != '6')) {
                    document.querySelector(`#p${i}w${j}`).classList.add("war-active");
                    var flag = 1;
                }
            }
            if (j == 1) {
                if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values))) {
                    document.querySelector(`#p${i}w${j}`).classList.add("war-active");
                    var flag = 1;
                }
            }
            else if (j == 6) {
                if (!(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(values))) {
                    document.querySelector(`#p${i}w${j}`).classList.add("war-active");
                    var flag = 1;
                }
            }
            data[`p${i}${dict[j]}`] = values;
        }
    }

    if (flag) {
        return;
    }
    await teams
        .add({
            teamSize: teamSize,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {
            localStorage.setItem("teamId", doc.id);
        });
    for (let x = 1; x <= 3; x++) {
        data[`a${x}`] = document.querySelector(`#q${x}`).value;
    }
    let teamId = localStorage.getItem("teamId");
    data["docId"] = teamId;
    teams.doc(teamId).set(data, { merge: true });
    await mail.doc(teamId).set({
        to: emails,
        message: {
            // attachments: [
            //     {
            //         filename: 'invitaion.pdf',
            //         href: 'https://firebasestorage.googleapis.com/v0/b/codequest-7ac27.appspot.com/o/invitation.pdf?alt=media',

            //     }
            // ],
            subject: "CONFIRMATION MAIL FOR WORKSHOP ON IMAGE PROCESSING USING MATLAB | IEEE - VBIT SB",
            html: `<style>
            p {
                margin: 6px auto
            }
        
            .space {
                margin: 10px;
            }
        </style>
        <p>Dear ${users[0]} & ${users[1]},</p>
        <p>Greetings from Communications Society | IEEE - VBIT SB. </p>
        <p>Congratulations! </p>
        <p><b>“Diligence illuminates the path of exceptional proficiency.”</b></p>
        <p>We are delighted to inform that you have successfully registered for the two-day event, “Workshop on Image Processing
            using MATLAB”. </p>
        <p>Kindly refer to the following details of the workshop. </p>
        <p class="space"></p>
        <p><strong>Day-1:</strong> </p>
        <p><strong>Date</strong>: 28th February, 2024. </p>
        <p><strong>Time</strong>: 9:50 AM. </p>
        <p><strong>Venue</strong>: Nalanda Auditorium, Vignana Bharathi Institute of Technology. </p>
        <p>You will be introduced to basic techniques of image processing such as representing digital images, spatial and gray
            level resolution. </p>
        <p class="space"></p>
        <p><strong>Day-2:</strong></p>
        <p><strong>Date</strong>: 29th February, 2024. </p>
        <p><strong>Time</strong>: 9:50 AM. </p>
        <p><strong>Venue</strong>: Nalanda Auditorium, Vignana Bharathi Institute of Technology. </p>
        <p>You will be acquainted with advanced techniques of image processing such as image filtering, image thresholding and
            edge detection. </p>
        <p>This workshop bestows a platform to enhance your skills in image processing and attain an advanced level of expertise
            in MATLAB programming. </p>
        <p>Download MATLAB from: </p>
        <p>Mac: <em style="background-color: yellow;">bit.ly/MATLAB_Mac</em> </p>
        <p>Windows: <em style="background-color: yellow;">bit.ly/MATLAB_Windows</em></p>
        <p class="space"></p>
        <p><strong>Note</strong>: One laptop per team is required. </p>
        <p>In case of any queries, contact us at: </p>
        <p>Nihanth: +91 9346100873 </p>
        <p>Nithish: +91 9989928002 </p>
        <p class="space"></p>
        <p>For further information, kindly visit our website: </p>
        <p>https://ieeevbitsb.in/ </p>
        <p class="space"></p>
        <p>Follow us on social media for the latest updates. </p>
        <p><strong>Instagram</strong>: <em>https://instagram.com/ieee_vbitsb</em> </p>
        <p><strong>Facebook</strong>: <em>https://www.facebook.com/ieeevbitsb/</em> </p>
        <p><strong>LinkedIn</strong>: <em>https://www.linkedin.com/company/ieee-vbit-sb/</em> </p>
        <p class="space"></p>
        <p>Thank you. </p>
        <p class="space"></p>
        <p><strong>Regards, </strong></p>
        <p><strong>ComSoc | IEEE - VBIT SB.</strong></p>`
        }
    });
    msg.style.opacity = 1;
    localStorage.clear;
    window.location.href = "About.html";
});