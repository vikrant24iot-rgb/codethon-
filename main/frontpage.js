document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // Role selection logic for index.html
  if (path.includes("index.html") || path.endsWith("/")) {
    const buttons = {
      btnStudent: "student.html",
      btnHomemaker: "homemaker.html",
      btnProfessional: "professional.html",
      btnSenior: "senior.html"
    };

    //creates buttons for each choice
    Object.entries(buttons).forEach(([id, target]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = `main/${target}`;
        });
      }
    });
  }

  // array to store chosen options
  results = [];

  // Scenario data for each role
const scenarioData = {
    student: [
      {
        title: "Fake College Link",
        scenes: [
          {
            description: `You receive a message: "Upload your documents immediately. Link: www.xyz.com"`,
            choices: ["Open the link", "Ignore the message"]
          },
          {
            description: `The website asks for personal details and ID proof.`,
            choices: ["Upload your documents", "Report to college IT cell"]
          },
          {
            description: `It prompts: “Share with 5 classmates to verify faster.”`,
            choices: ["Share with friends", "Warn others instead"]
          }
        ]
      },
      {
        title: "Free WiFi Trap",
        scenes: [
          {
            description: `Your mobile data is over. You see a free WiFi: “Canteen_FreeNet”.`,
            choices: ["Connect to free WiFi", "Recharge your own data"]
          },
          {
            description: `A page asks to log in with email and password.`,
            choices: ["Enter college credentials", "Close it immediately"]
          },
          {
            description: `Pop-up: “Install booster app for faster WiFi.”`,
            choices: ["Install the app", "Refuse to install"]
          }
        ]
      },
      {
        title: "Exam Notes Shortcut",
        scenes: [
          {
            description: `WhatsApp forward: “Latest exam papers leaked. Download here.”`,
            choices: ["Click the link", "Ignore the link"]
          },
          {
            description: `Site asks for Google login to download.`,
            choices: ["Enter credentials", "Close the tab"]
          },
          {
            description: `Message: “Share with 3 classmates to unlock.”`,
            choices: ["Share with others", "Delete the forward"]
          }
        ]
      }
    ],



    professional: [
      {
        title: "Fake Job Offer",
        scenes: [
          {
            description: `You get an email: “Congratulations! You are shortlisted for a top MNC role. Click here to confirm.”`,
            choices: ["Click the link", "Verify sender/company before acting"]
          },
          {
            description: `The site asks for your Aadhar/PAN + bank details to proceed.`,
            choices: ["Enter details to “secure the job”", "Stop immediately and report as phishing"]
          },
          {
            description: `They ask you to pay ₹2000 processing fee.`,
            choices: ["Pay the money", "Refuse and block sender"]
          }
        ]
      },
      {
        title: "Office USB Trap",
        scenes: [
          {
            description: `You find a pen drive on your office desk labeled “Project Data”.`,
            choices: ["Insert into your office laptop", "Hand over to IT/security team"]
          },
          {
            description: `On opening, it asks to install “Driver.exe” to view files.`,
            choices: ["Install it", "Cancel immediately"]
          },
          {
            description: `The system slows down, and sensitive files are being uploaded.`,
            choices: ["Ignore and continue work", "Disconnect internet, call IT team"]
          }
        ]
      },
      {
        title: "Zoom Meeting Scam",
        scenes: [
          {
            description: `You receive a Zoom invite: “Mandatory HR session. Join Now: bit.ly/meeting123”.`,
            choices: ["Click the link", "Confirm with HR first"]
          },
          {
            description: `The page asks for your work email + password.`,
            choices: ["Enter credentials", "Exit and report phishing"]
          },
          {
            description: `It prompts: “Download MeetingSoftware.exe to join faster.”`,
            choices: ["Download it", "Cancel and alert IT"]
          }
        ]
      }
    ],
    homemaker: [
      {
        title: "Online Shopping Offer",
        scenes: [
          {
            description: `You see a WhatsApp ad: “50% off on branded sarees. Limited offer! Click here.”`,
            choices: ["Click the link", "Ignore unknown shopping links"]
          },
          {
            description: `The site asks for card number and CVV before checkout.`,
            choices: ["Enter details", "Close site immediately"]
          },
          {
            description: `They say: “Refer 3 friends to unlock free delivery.”`,
            choices: ["Forward to friends", "Delete message and warn family"]
          }
        ]
      },
      {
        title: "Electricity Bill Scam",
        scenes: [
          {
            description: `You receive SMS: “Your power will be cut today. Pay bill immediately at www.payfast.com”.`,
            choices: ["Click link and pay", "Call electricity office to verify"]
          },
          {
            description: `The page asks to download an app for quick payment.`,
            choices: ["Download the app", "Don’t download, close immediately"]
          },
          {
            description: `You see another message: “Share this app with 5 contacts to avoid late fee.”`,
            choices: ["Share with contacts", "Don’t share, delete message"]
          }
        ]
      },
      {
        title: "Social Media Friend Request",
        scenes: [
          {
            description: `You get a friend request from someone claiming to be your old schoolmate.`,
            choices: ["Accept without checking", "Verify identity first"]
          },
          {
            description: `They start chatting and ask for your personal photos.`,
            choices: ["Send photos", "Stop chatting immediately"]
          },
          {
            description: `They threaten: “Pay money or I’ll share your photos publicly.”`,
            choices: ["Pay them", "Report and block immediately"]
          }
        ]
      }
    ],
    senior: [
      {
        title: "Fake Bank Call",
        scenes: [
          {
            description: `You get a call: “Sir, your ATM card is blocked. Share your card details to unblock.”`,
            choices: ["Share details immediately", "Hang up and call bank official number"]
          },
          {
            description: `They also ask for your OTP to complete process.`,
            choices: ["Share OTP", "Refuse and report to bank"]
          },
          {
            description: `You receive SMS: “Transaction of ₹50,000 successful.”`,
            choices: ["Panic and call caller back", "Call bank helpline to block card immediately"]
          }
        ]
      },
      {
        title: "Lottery Trap",
        scenes: [
          {
            description: `You get an email: “You won ₹10 lakh in lucky draw! Claim now.”`,
            choices: ["Open and respond", "Delete email immediately"]
          },
          {
            description: `They ask you to pay ₹5000 tax to release money.`,
            choices: ["Pay immediately", "Refuse and ignore"]
          },
          {
            description: `They insist: “Share bank account details to transfer prize.”`,
            choices: ["Share details", "Stop replying and report as fraud"]
          }
        ]
      },
      {
        title: "Tech Support Scam",
        scenes: [
          {
            description: `You get a pop-up: “Your computer has virus! Call Microsoft helpline: 98765xxxx.”`,
            choices: ["Call number", "Ignore and run antivirus"]
          },
          {
            description: `The caller says: “Download AnyDesk so we can fix it remotely.”`,
            choices: ["Download and allow access", "Refuse and hang up"]
          },
          {
            description: `They demand ₹3000 for removing the “virus”.`,
            choices: ["Pay money", "Don’t pay, block number"]
          }
        ]
      }
    ]
  };

  //finds the role selected
  const roles = Object.keys(scenarioData);
  const matchedRole = roles.find(role => path.includes(`${role}.html`));

  // If a matching role is found, set up the scene
  if (matchedRole) {
    // setting up what data goes where on the screen
    const choice1Btn = document.querySelectorAll(".button")[0];
    const choice2Btn = document.querySelectorAll(".button")[1];
    const sceneNumber = document.querySelector(".scene-number");
    const contentBox = document.querySelector(".content");

    // Initialize scene counters
    let currentScenario = 0;
    let currentScene = 0;

    function renderScene() {
      // saving the current scenario and scene into a variable
      const scenario = scenarioData[matchedRole][currentScenario];
      const scene = scenario.scenes[currentScene];

      sceneNumber.innerHTML = `<b>Scene ${currentScene + 1}:</b><br>`;
      contentBox.innerHTML = `
        <h1>SCENARIO : ${scenario.title.toUpperCase()}</h1>
        <span class="scene-number"><b>Scene ${currentScene + 1}:</b><br></span>
        ${scene.description}
      `;

      // Randomize choice order
const shuffledChoices = [...scene.choices].sort(() => Math.random() - 0.5);

// Store which button is red (wrong)
choice1Btn.dataset.isWrong = shuffledChoices[0] === scene.choices[0] ? "true" : "false";
choice2Btn.dataset.isWrong = shuffledChoices[1] === scene.choices[0] ? "true" : "false";

// Render shuffled choices
choice1Btn.innerHTML = `Choice 1:<br>${shuffledChoices[0]}`;
choice2Btn.innerHTML = `Choice 2:<br>${shuffledChoices[1]}`;
    }

    function handleChoice(choice) {
      // initially both choices are true
      const isWrong1 = choice1Btn.dataset.isWrong === "true";
      const isWrong2 = choice2Btn.dataset.isWrong === "true";
//set which option is wrong 
choice1Btn.style.backgroundColor = choice === "choice1" ? (isWrong1 ? "red" : "green") : "";
choice2Btn.style.backgroundColor = choice === "choice2" ? (isWrong2 ? "red" : "green") : "";

      // Determine which button is the wrong choice 
      const chosenBtn = choice === "choice1" ? choice1Btn : choice2Btn;
      const wasWrong = chosenBtn.dataset.isWrong === "true";
      // pushing the results into the array
      results.push({
        scenario: matchedRole,
        scene: currentScene+1,
        choice: chosenBtn.textContent.replace("Choice 1:\n", "").replace("Choice 2:\n", ""),
        isWrong: wasWrong
      });
      // Log the results array to the console
      console.log(results);

      //reset colors after 1 second
      setTimeout(() => {
        choice1Btn.style.backgroundColor = "";
        choice2Btn.style.backgroundColor = "";
      }, 1000);

      // currently how many scenes and scenarios left
      const totalScenes = scenarioData[matchedRole][currentScenario].scenes.length;
      const totalScenarios = scenarioData[matchedRole].length;

      // Check if we can move to the next scene or scenario
      if (currentScene < totalScenes - 1) {
        currentScene++;
      } else if (currentScenario < totalScenarios - 1) {
        currentScenario++;
        currentScene = 0;
      } else {
        contentBox.innerHTML = `<h2>🎉 You've completed all scenarios!</h2>`;
        sceneNumber.innerHTML = "";
        choice1Btn.style.display = "none";
        choice2Btn.style.display = "none";
        return;
      }

      renderScene();
    }

    if (choice1Btn && choice2Btn && sceneNumber && contentBox) {
      renderScene();
      choice1Btn.addEventListener("click", () => handleChoice("choice1"));
      choice2Btn.addEventListener("click", () => handleChoice("choice2"));
    }
  }


});