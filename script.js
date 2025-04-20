// script.js — Complete Survey Code

function renderThankYouPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="max-w-2xl mx-auto p-10 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl text-center">
      <h2 class="text-3xl font-bold text-green-800 mb-6">Thank You!</h2>
      <p class="text-lg text-green-900 leading-relaxed mb-6">
        Your time and insights are truly appreciated. Your contribution will help promote a safer, healthier, and more supportive work environment for seafarers around the world.
      </p>
      <p class="text-xl font-semibold text-green-900">Stay safe and sail well!<br/>Capt Jas</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderIntroPage();
});

const surveyData = {
  rank: "",
  nationality: "", 
  age: "",
  experience: "",
  company: "",
  osiResponses: [],
  fatigueResponses: [],
  support: {},
  communication: {},
  psychologicalSafety: {}
};

function renderIntroPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-10 rounded-2xl shadow-2xl space-y-6">
      <h1 class="text-3xl font-extrabold text-center text-blue-900">Dear Seafarer Colleagues,</h1>
      <p class="text-lg text-blue-900 leading-relaxed">
        I hope you're well. As a fellow mariner and a psychology student, I’m conducting a research study on occupational stress, fatigue, and psychological safety at sea.
      </p>
      <p class="text-lg text-blue-900 leading-relaxed">
        Life on board demands <b> resilience and high performance </b>, but long hours, isolation, and constant pressure can take a toll. This study explores how psychological safety—the freedom to speak up, seek help, and make mistakes without fear—impacts our stress and fatigue levels.
      </p>
      <p class="text-lg text-blue-900 leading-relaxed">
        The survey is <b> anonymous </b> and takes just a few minutes. Your insights will help us better understand crew welfare and support a healthier, more sustainable work environment.
      </p>
      <p class="text-lg font-semibold text-blue-950">Fair winds and following seas,</p>
      <p class="text-lg font-semibold text-blue-900"> <br/>Capt Jaspreet Singh Puri (JAS),<br> Master Mariner</br></p>
      <div class="text-center">
        <button onclick="renderInfoPage()" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">Start Survey</button>
      </div>
    </div>
  `;
}

function renderInfoPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-10 rounded-2xl shadow-2xl">
      <h2 class="text-2xl font-bold text-teal-800 mb-6">Basic Information</h2>
      <form id="infoForm" class="space-y-6">
        <div>
          <label class="block text-lg font-medium text-blue-900 mb-1">Rank</label>
          <input type="text" name="rank" required class="w-full border border-blue-300 px-4 py-3 rounded-lg bg-white" />
        </div>
        <div>
          <label class="block text-lg font-medium text-blue-900 mb-1">Nationality</label>
          <input type="text" name="nationality" required class="w-full border border-blue-300 px-4 py-3 rounded-lg bg-white" />
        </div>
        <div>
          <label class="block text-lg font-medium text-blue-900 mb-1">Age</label>
          <input type="number" name="age" required class="w-full border border-blue-300 px-4 py-3 rounded-lg bg-white" />
        </div>
        <div>
          <label class="block text-lg font-medium text-blue-900 mb-1">Years of Experience</label>
          <input type="number" name="experience" required class="w-full border border-blue-300 px-4 py-3 rounded-lg bg-white" />
        </div>
        <div>
          <label class="block text-lg font-medium text-blue-900 mb-1">Company (current or last sailed with)</label>
          <input type="text" name="company" required class="w-full border border-blue-300 px-4 py-3 rounded-lg bg-white" />
        </div>
        <div class="text-center">
          <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-semibold">Next</button>
        </div>
      </form>
    </div>
  `;

  document.getElementById("infoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    surveyData.rank = data.get("rank");
    surveyData.nationality = data.get("nationality");
    surveyData.age = data.get("age");
    surveyData.experience = data.get("experience");
    surveyData.company = data.get("company");
    renderOsiSurvey();
  });
}

function renderOsiSurvey() {
  const osiQuestions = [
    "I have to do a lot of work in this job.",
    "The available information relating to my job-role and its outcomes are vague and insufficient.",
    "My different Officers often give contradictory instructions regarding my works.",
    "Sometimes it becomes complicated to adjust between group pressures and formal instructions.",
    "The responsibility for the efficiency and productivity of many employees is thrust upon me.",
    "Most of my suggestions are heeded and implemented here.",
    "My decisions and instructions concerning distribution of assignments among employees are properly followed.",
    "I have to work with persons whom I like.",
    "My assignments are of monotonous nature.",
    "Higher authorities do care for my self-respect.",
    "I get less salary in comparison to my labour/work.",
    "I do my work under tense circumstances.",
    "Owing to excessive workload I have to manage with insufficient number of employees and resources.",
    "The objectives of my work-role are quite clear and adequately planned.",
    "Officials do not interfere with my jurisdiction and working methods.",
    "I have to do some work unwillingly owing to certain group or political pressures.",
    "I am responsible for the future of a number of employees.",
    "My co-operation is frequently sought in solving higher-level problems.",
    "My suggestions regarding training programmes are given significance.",
    "Some colleagues and subordinates try to defame me.",
    "I get ample opportunity to use my abilities independently.",
    "This job has enhanced my social status.",
    "I am seldom rewarded for my hard work.",
    "Some assignments are quite risky and complicated.",
    "I have to dispose of work hurriedly due to workload.",
    "Unclear scope of jurisdiction hinders my performance.",
    "I'm not given clear instructions or facilities for new tasks.",
    "To maintain group conformity, I must produce more than usual.",
    "I bear great responsibility for this organization’s success.",
    "My opinions are considered in policy framing.",
    "We are consulted in important appointments.",
    "My colleagues voluntarily cooperate with me.",
    "I get opportunities to develop my proficiency.",
    "Higher authorities do not value my post and work.",
    "I often feel this job has made my life cumbersome.",
    "Busy with official work, I can't manage personal matters.",
    "Expectations from me are unclear.",
    "Employees follow official procedures.",
    "I am compelled to bypass rules due to group pressures.",
    "My opinion is sought in system modifications.",
    "Sufficient mutual cooperation exists among employees.",
    "My suggestions are ignored in areas of my expertise.",
    "Working conditions are satisfactory for welfare.",
    "I have to do tasks meant for others.",
    "Sudden policy changes are hard to implement.",
    "Due to excessive workload and lack of time, I cannot complete tasks to satisfaction."

  ];

  const osiLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

  const osiSection = osiQuestions.map((q, i) => `
    <div class="mb-10 p-4 bg-white rounded-lg shadow-sm">
      <p class="text-lg text-blue-900 font-semibold mb-3">${i + 1}. ${q}</p>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 text-sm">
        ${osiLabels.map((label, val) => `
          <label class="flex flex-col items-center bg-blue-50 p-3 rounded-lg border border-blue-200 hover:bg-blue-100">
            <input type="radio" name="osi${i}" value="${val + 1}" required class="mb-2">
            <span class="text-sm font-bold text-gray-800">${label}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-10">
      <form id="osiForm">
        <section class="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">Section 1: Occupational Stress Index</h2>
          <p class="text-blue-800 mb-6">Please select the option that best reflects your experience.</p>
          ${osiSection}
        </section>
        <div class="text-center mt-10">
          <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold">Continue to Fatigue Assessment</button>
        </div>
      </form>
    </div>
  `;

  document.getElementById("osiForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    for (let i = 0; i < osiQuestions.length; i++) {
      surveyData.osiResponses.push(Number(form.get(`osi${i}`)));
    }
    renderFatigueSurvey();
  });
}

// Fatigue Survey
function renderFatigueSurvey() {
  const fatigueQuestions = [
    "I often feel physically tired.",
    "I often have difficulty concentrating.",
    "I often experience mood swings or irritability.",
    "I often find it challenging to stay focused on tasks.",
    "I often feel drowsy or sleepy during the day."
  ];

  const fatigueLabels = ["Not at all", "Slightly", "Moderately", "Very", "Extremely"];

  const fatigueSection = fatigueQuestions.map((q, i) => `
    <div class="mb-10 p-4 bg-white rounded-lg shadow-sm">
      <p class="text-lg text-teal-900 font-semibold mb-3">${q}</p>
      <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 text-sm">
        ${fatigueLabels.map((label, val) => `
          <label class="flex flex-col items-center bg-teal-50 p-3 rounded-lg border border-teal-200 hover:bg-teal-100">
            <input type="radio" name="fatigue${i}" value="${val + 1}" required class="mb-2">
            <span class="text-sm font-bold text-gray-800">${label}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-10">
      <form id="fatigueForm">
        <section class="p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow">
          <h2 class="text-2xl font-bold text-teal-900 mb-4">Section 2: Fatigue Assessment</h2>
          <p class="text-teal-800 mb-6">Please rate the following statements.</p>
          ${fatigueSection}
        </section>
        <div class="text-center mt-10">
          <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold">Continue to Final Section</button>
        </div>
      </form>
    </div>
  `;

  document.getElementById("fatigueForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    for (let i = 0; i < fatigueQuestions.length; i++) {
      surveyData.fatigueResponses.push(Number(form.get(`fatigue${i}`)));
    }
    renderFinalSection();
  });
}

function renderFinalSection() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-10">
      <form id="finalForm">
        <section class="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow">
          <h2 class="text-2xl font-bold text-cyan-900 mb-4">Section 3: General Wellbeing</h2>

          <div class="mb-8">
            <p class="text-lg font-semibold text-cyan-800 mb-2">Do you feel adequately supported by your company or management?</p>
            <div class="flex gap-6 mb-3">
              <label><input type="radio" name="support" value="Yes" required> Yes</label>
              <label><input type="radio" name="support" value="No"> No</label>
            </div>
            <div id="supportFollowup" class="hidden">
              <label class="block text-sm mb-1 font-medium text-gray-700" id="supportFollowupLabel"></label>
              <textarea name="supportReason" class="w-full p-3 border rounded-md" rows="3" required></textarea>
            </div>
          </div>

          <div class="mb-8">
            <p class="text-lg font-semibold text-cyan-800 mb-2">Do you have good communication with your management/company?</p>
            <div class="flex gap-6 mb-3">
              <label><input type="radio" name="communication" value="Yes" required> Yes</label>
              <label><input type="radio" name="communication" value="No"> No</label>
            </div>
            <div id="communicationFollowup" class="hidden">
              <label class="block text-sm mb-1 font-medium text-gray-700" id="communicationFollowupLabel"></label>
              <textarea name="communicationReason" class="w-full p-3 border rounded-md" rows="3" required></textarea>
            </div>
          </div>

          <div class="mb-8">
            <p class="text-lg font-semibold text-cyan-800 mb-2">Do you feel psychologically safe onboard? (Can you address your concerns, share your mistakes and talk freely without any consequences or fear)</p>
            <div class="flex gap-6 mb-3">
              <label><input type="radio" name="psychologicalSafety" value="Yes" required> Yes</label>
              <label><input type="radio" name="psychologicalSafety" value="No"> No</label>
            </div>
            <div id="psychSafetyFollowup" class="hidden">
              <label class="block text-sm mb-1 font-medium text-gray-700" id="psychSafetyFollowupLabel"></label>
              <textarea name="psychologicalSafetyReason" class="w-full p-3 border rounded-md" rows="3" required></textarea>
            </div>
          </div>

          <div class="text-center mt-10">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">Submit Survey</button>
          </div>
        </section>
      </form>
    </div>
  `;

  const form = document.getElementById("finalForm");

  function handleFollowUp(name, labelTextYes, labelTextNo, followupId, labelId) {
    const radios = form.querySelectorAll(`input[name='${name}']`);
    radios.forEach(r => r.addEventListener("change", () => {
      const followup = document.getElementById(followupId);
      const label = document.getElementById(labelId);
      followup.classList.remove("hidden");
      if (r.value === "Yes") {
        label.textContent = labelTextYes;
      } else {
        label.textContent = labelTextNo;
      }
    }));
  }

  handleFollowUp("support",
    "List what kind of support do you get? (e.g. My opinions and concerns are heard and acted upon, The Management are interested in my well-being)",
    "List the main reason as per you for not getting support (e.g. Hierarchy, My Management does not care)",
    "supportFollowup", "supportFollowupLabel");

  handleFollowUp("communication",
    "What do you think makes the communication good? (e.g. My Company cares for me, My Management is open to discussion)",
    "What can be done better to increase your interactions with the company/management? (e.g. Management should listen more, officials should have an open mind)",
    "communicationFollowup", "communicationFollowupLabel");

  handleFollowUp("psychologicalSafety",
    "What makes you feel psychologically safe? (e.g. Friendly environment, Open to feedback)",
    "What can be done better to increase your psychological safety? (e.g. Stop blame culture, Stop shouting at people)",
    "psychSafetyFollowup", "psychSafetyFollowupLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  // Save the responses safely
  surveyData.support = {
    answer: data.get("support") || "",
    reason: data.get("supportReason") || ""
  };
  surveyData.communication = {
    answer: data.get("communication") || "",
    reason: data.get("communicationReason") || ""
  };
  surveyData.psychologicalSafety = {
    answer: data.get("psychologicalSafety") || "",
    reason: data.get("psychologicalSafetyReason") || ""
  };

  // ✅ Create a clean version of the data for Firestore
  const cleanedData = {
    rank: surveyData.rank || "",
    nationality: surveyData.nationality || "",
    age: surveyData.age || "",
    experience: surveyData.experience || "",
    company: surveyData.company || "",
    osiResponses: Array.isArray(surveyData.osiResponses) ? surveyData.osiResponses.map(Number) : [],
    fatigueResponses: Array.isArray(surveyData.fatigueResponses) ? surveyData.fatigueResponses.map(Number) : [],
    supportAnswer: surveyData.support.answer || "",
    supportReason: surveyData.support.reason || "",
    communicationAnswer: surveyData.communication.answer || "",
    communicationReason: surveyData.communication.reason || "",
    psychologicalSafetyAnswer: surveyData.psychologicalSafety.answer || "",
    psychologicalSafetyReason: surveyData.psychologicalSafety.reason || ""
  };

  // ✅ Send sanitized data to Firestore
  db.collection("seafarer-survey").add(cleanedData)
    .then(() => {
      console.log("✅ Survey data saved to Firestore!");
      renderThankYouPage();
    })
    .catch((error) => {
      console.error("❌ Error saving to Firestore:", error);
      alert("There was a problem submitting your survey. Please try again later.");
    });
});
}
