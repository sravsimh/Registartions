var teamSize = 1;
var msg = document.querySelector(".msg");

// Dropdown Menu Team size
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function () {
        this.setAttribute('tabindex', 1);
        this.classList.toggle('active');
        var dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    dropdown.addEventListener('focusout', function () {
        this.classList.remove('active');
        this.querySelector('.dropdown-menu').style.display = 'none';
    });

    dropdown.querySelectorAll('.dropdown-menu li').forEach(function (item) {
        item.addEventListener('click', function () {
            var dropdown = this.closest('.dropdown');
            teamSize = this.textContent;
            createParticipantSections(teamSize);
            createSpanPoints(teamSize);
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
    //Dropdown for others
    document.querySelectorAll('.dropdown1').forEach(function (dropdown1) {
        dropdown1.addEventListener('click', function () {
            this.setAttribute('tabindex', 1);
            this.classList.toggle('active');
            var dropdownMenu1 = this.querySelector('.dropdown-menu1');
            dropdownMenu1.style.display = (dropdownMenu1.style.display === 'block') ? 'none' : 'block';
        });

        dropdown1.addEventListener('focusout', function () {
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
}

createParticipantSections(1);

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
const teams = db.collection("teams");
const mail = db.collection("mail");

document.querySelector(".submit").addEventListener("click", async (e) => {
    e.preventDefault();
    let emails = [];
    for (let m = 1; m <= teamSize; m++) {
        emails.push(document.querySelector(`#p${m}f1`).value.toLowerCase());
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
    let teamId = localStorage.getItem("teamId");
    teams.doc(teamId).set(data, { merge: true });
    await mail.doc(teamId).set({
        to: emails,
        message: {
            attachments: [
                {
                    filename: 'invitaion.pdf',
                    href: 'https://firebasestorage.googleapis.com/v0/b/codequest-7ac27.appspot.com/o/invitation.pdf?alt=media',

                }
            ],
            subject: "Hello from Sai!!!",
            html: `<p><a href="https://drive.google.com/file/d/18MKO7nuNDOZswFVoDsVRVrU4hADcWJUB/view?usp=sharing">Click here</a> to download Invitaion.</p>`
        }
    });
    msg.style.opacity = 1;
    localStorage.clear;
    window.location.href = "About.html";
});