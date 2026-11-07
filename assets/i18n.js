(() => {
  const STORAGE_KEY = "ray_in_gear_language";
  const dictionary = {
    "Age verification":"Altersbestätigung",
    "Preparing your download…":"Dein Download wird vorbereitet …",
    "The protected file is not available yet. Please try again later.":"Die geschützte Datei ist noch nicht verfügbar. Bitte versuche es später erneut.",
    "The protected file could not be read. Please contact the site owner.":"Die geschützte Datei konnte nicht gelesen werden. Bitte kontaktiere den Betreiber der Website.",
    "The password is incorrect, or the file could not be decrypted.":"Das Passwort ist falsch oder die Datei konnte nicht entschlüsselt werden.",
    "Your questionnaire has been unlocked and downloaded.":"Dein Fragebogen wurde freigeschaltet und heruntergeladen.",
    "18+ only":"Nur ab 18",
    "This website contains adult-oriented themes and is intended only for visitors aged 18 or over. Please confirm that you are at least 18 before continuing.":"Diese Website enthält Themen für Erwachsene und ist ausschließlich für Personen ab 18 Jahren bestimmt. Bitte bestätige, dass du mindestens 18 Jahre alt bist, bevor du fortfährst.",
    "I am 18 or older":"Ich bin 18 oder älter",
    "I am under 18":"Ich bin unter 18",
    "Access denied. You must be 18 or older to view this website.":"Zugang verweigert. Du musst mindestens 18 Jahre alt sein, um diese Website anzusehen.",
    "JavaScript must be enabled to confirm your age and continue.":"JavaScript muss aktiviert sein, um dein Alter zu bestätigen und fortzufahren.",
    "Preferences":"Vorlieben",
    "What do you like?":"Vorlieben",
    "What do we like?":"Vorlieben",
    "Kinky Test Lab":"Kinky Test Lab",
    "Socials":"Social Media",
    "Ray_in_Gear / Preferences":"Ray_in_Gear / Vorlieben",
    "Ray_in_Gear / Experiments":"Ray_in_Gear / Experimente",
    "Ray_in_Gear / Socials":"Ray_in_Gear / Social Media",
    "My preferences and yours.":"Meine Vorlieben und deine.",
    "Is it a match?":"Passt es zwischen uns?",
    "What I like":"Was mir gefällt",
    "These are the interests and scenarios I like or am curious about. Select a category to see the details.":"Das sind Interessen und Szenarien, die mir gefallen oder die mich neugierig machen. Wähle eine Kategorie aus, um mehr zu erfahren.",
    "1. Power & control dynamics":"1. Macht- und Kontrolldynamiken",
    "Dom/sub dynamics":"Dom-/Sub-Dynamiken",
    "TPE (Total Power Exchange)":"TPE (Total Power Exchange)",
    "Rules, protocols and routines":"Regeln, Protokolle und Routinen",
    "Discipline":"Disziplin",
    "Punishment / corporal punishment":"Bestrafung / körperliche Bestrafung",
    "Obedience training / drills":"Gehorsamstraining / Übungen",
    "No-escape scenarios":"Szenarien ohne Fluchtmöglichkeit",
    "Captivity / prison play":"Gefangenschafts- / Gefängnis-Rollenspiele",
    "Cage and cell confinement":"Einschluss in Käfig oder Zelle",
    "Chastity / keyholding":"Keuschheit / Schlüsselverwaltung",
    "GPS monitoring within TPE":"GPS-Überwachung im Rahmen von TPE",
    "Phone monitoring within TPE":"Telefonüberwachung im Rahmen von TPE",
    "Military hierarchies":"Militärische Hierarchien",
    "Police / arrest roleplay":"Polizei- / Festnahme-Rollenspiel",
    "Sensory deprivation (including liquid-only nutrition)":"Sensorische Deprivation (einschließlich ausschließlich flüssiger Ernährung)",
    "Being kept nude":"Nackt gehalten werden",
    "2. Bondage & physical restraint":"2. Bondage und körperliche Fixierung",
    "Bondage in general":"Bondage allgemein",
    "Restraints":"Fesseln",
    "Handcuffs":"Handschellen",
    "Chains":"Ketten",
    "Gags":"Knebel",
    "Mummification (tape / plastic wrap)":"Mumifizierung (Klebeband / Frischhaltefolie)",
    "Bondage sleeping bag":"Bondage-Schlafsack",
    "Straitjacket":"Zwangsjacke",
    "Suspension":"Suspension / Aufhängung",
    "Sensory restriction":"Einschränkung der Sinneswahrnehmung",
    "Human furniture":"Menschliches Mobiliar",
    "3. Impact play & physical stimulation":"3. Impact Play und körperliche Stimulation",
    "Spanking":"Spanking / Schläge auf das Gesäß",
    "Slapping":"Ohrfeigen",
    "Caning":"Stockschläge",
    "Wax play":"Wachs-Play",
    "Light biting":"Leichtes Beißen",
    "Hair pulling":"Haareziehen",
    "Nipple stimulation":"Brustwarzen-Stimulation",
    "Tickling":"Kitzeln",
    "Play fighting":"Spielerisches Kämpfen",
    "Ball busting":"Hoden-Play",
    "Electrical stimulation":"Elektrostimulation",
    "Post-orgasm torture":"Post-Orgasm-Torture",
    "Clothespins":"Wäscheklammern",
    "Ice play":"Eis-Play",
    "Edging":"Edging / Orgasmuskontrolle",
    "4. Breath, stress & endurance play":"4. Atem-, Stress- und Ausdauer-Play",
    "Breath control":"Atemkontrolle",
    "Rebreathing":"Rückatmung",
    "Stress positions":"Stresspositionen",
    "Waterboarding scenarios":"Waterboarding-Szenarien",
    "5. Humiliation, degradation & status play":"5. Demütigung, Erniedrigung und Status-Play",
    "Humiliation":"Demütigung",
    "Degradation":"Erniedrigung",
    "Being displayed / exhibition":"Zur Schau gestellt werden / Exhibitionismus",
    "Writing or marking on skin with a marker":"Mit einem Stift auf die Haut schreiben oder sie markieren",
    "Pet play":"Pet Play",
    "Feeding from bowls":"Aus Näpfen gefüttert werden",
    "Bootlicking / licking boots":"Stiefel lecken",
    "Spitting":"Anspucken",
    "Diapers":"Windeln",
    "6. Physical contact & affection":"6. Körperkontakt und Zuneigung",
    "Kissing":"Küssen",
    "Being required to give massages":"Massagen geben müssen",
    "Face sitting":"Facesitting",
    "Face sitting with licking":"Facesitting mit Lecken",
    "Foot, sock and sneaker worship":"Verehrung von Füßen, Socken und Sneakern",
    "7. Roleplay & identity play":"7. Rollenspiele und Identitätsspiel",
    "Roleplay in general":"Rollenspiele allgemein",
    "Police roleplay":"Polizei-Rollenspiel",
    "Soldier / military roleplay":"Soldaten- / Militär-Rollenspiel",
    "Long-term prisoner roleplay":"Langzeit-Gefangenen-Rollenspiel",
    "Age play / ABDL":"Age Play / ABDL",
    "8. Clothing & material fetishes":"8. Kleidung und Material-Fetische",
    "Leather":"Leder",
    "Rubber / latex":"Gummi / Latex",
    "Neoprene":"Neopren",
    "Steel / metal (collars, chastity cages)":"Stahl / Metall (Halsreifen, Keuschheitskäfige)",
    "Uniforms":"Uniformen",
    "Camouflage":"Tarnkleidung",
    "Sportswear":"Sportbekleidung",
    "Sneakers":"Sneaker",
    "Socks":"Socken",
    "9. Sexual practices & sexual control":"9. Sexuelle Praktiken und sexuelle Kontrolle",
    "Anal plugs":"Anal-Plugs",
    "Oral sex":"Oralverkehr",
    "Deep throat":"Deepthroat",
    "Cum control":"Ejakulationskontrolle",
    "Milking":"Melken",
    "Milking machine":"Melkmaschine",
    "Dildos / toys":"Dildos / Toys",
    "Fisting":"Fisting",
    "Fuck machine":"Fuck Machine",
    "Sounding":"Sounding",
    "Chastity":"Keuschheit",
    "Cum kiss":"Cum Kiss",
    "10. Body fluids":"10. Körperflüssigkeiten",
    "Saliva / spit":"Speichel / Spucke",
    "Watersports / urine":"Watersports / Urin",
    "11. Locations & situational scenarios":"11. Orte und situative Szenarien",
    "Public play":"Play in der Öffentlichkeit",
    "Outdoor scenarios":"Outdoor-Szenarien",
    "Car scenarios":"Auto-Szenarien",
    "Tell me what you like":"Erzähl mir, was dir gefällt",
    "Is it a match? Tell me about your preferences and boundaries using the questionnaire below.":"Passt es zwischen uns? Erzähle mir mithilfe des folgenden Fragebogens von deinen Vorlieben und Grenzen.",
    "The questionnaire is password-protected. I’ll share the password with you privately once we’ve both expressed an interest in getting to know each other a little further and seeing whether meeting might be a good fit. It’s simply a mutual next step, not a commitment or an expectation. If either of us feels it isn’t quite right, that’s absolutely okay.":"Der Fragebogen ist passwortgeschützt. Ich teile das Passwort privat mit dir, sobald wir beide Interesse daran gezeigt haben, uns etwas näher kennenzulernen und herauszufinden, ob ein Treffen passen könnte. Das ist lediglich ein gemeinsamer nächster Schritt – keine Verpflichtung und keine Erwartung. Wenn einer von uns merkt, dass es doch nicht passt, ist das vollkommen in Ordnung.",
    "Once you have the password, download the questionnaire, fill it out in English, and send the completed PDF back to me through one of the channels we're already chatting on.":"Sobald du das Passwort hast, kannst du den Fragebogen herunterladen, auf Englisch ausfüllen und mir das fertige PDF über einen der Kanäle zurückschicken, über die wir bereits schreiben.",
    "Only share what you feel comfortable sharing. Your answers are not consent, and consent can be withdrawn at any time.":"Teile nur das, womit du dich wohlfühlst. Deine Antworten sind keine Zustimmung zu Handlungen. Einverständnis kann jederzeit zurückgezogen werden.",
    "For data protection reasons, please do not enter personal information such as your real name or address in the form.":"Aus Datenschutzgründen gib bitte keine persönlichen Daten wie deinen echten Namen oder deine Adresse in das Formular ein.",
    "Password to unlock the questionnaire":"Passwort zum Freischalten des Fragebogens",
    "Unlock & download PDF":"Freischalten & PDF herunterladen",
    "JavaScript must be enabled to unlock the protected questionnaire.":"JavaScript muss aktiviert sein, um den geschützten Fragebogen freizuschalten.",
    "Find me on Socials":"Finde mich auf Social Media",
    "← Back to home":"← Zurück zur Startseite",
    "Just being myself":"Einfach ich selbst",
    "Alpha, Master, Sir… call me whatever you want. The main thing is that you do what I say—or I’ll take it.":"Alpha, Master, Sir … nenn mich, wie du möchtest. Hauptsache, du tust, was ich sage – sonst übernehme ich das.",
    "Creating a space to explore, connect & be free together. For curious minds, open hearts, and the community we create.":"Einen Raum schaffen, um gemeinsam Neues zu entdecken, Kontakte zu knüpfen und frei zu sein. Für neugierige Köpfe, offene Herzen und die Gemeinschaft, die wir gemeinsam gestalten.",
    "The essence of the event":"Das Wesentliche des Events",
    "The":"Das",
    "The event is":"Das Event ist",
    " is a privately organized BDSM weekend. Its focus is on exploring together, discovering different forms of play, sharing personal experiences, and creating a safe and welcoming atmosphere.":" ist ein privat organisiertes BDSM-Wochenende. Im Mittelpunkt stehen das gemeinsame Entdecken, verschiedene Formen des Spiels, der Austausch persönlicher Erfahrungen und eine sichere, einladende Atmosphäre.",
    "Personal invitations:":"Persönliche Einladungen:",
    "Participants are carefully selected based on their preferences, experience, and personalities to create the best possible group dynamic.":"Die Teilnehmenden werden sorgfältig nach ihren Vorlieben, Erfahrungen und Persönlichkeiten ausgewählt, damit eine möglichst stimmige Gruppendynamik entsteht.",
    "Balanced group:":"Ausgewogene Gruppe:",
    "We aim for a ratio of approximately 1 Dom to 1.5 Subs.":"Wir streben ein Verhältnis von ungefähr 1 Dom zu 1,5 Subs an.",
    "Safety and trust:":"Sicherheit und Vertrauen:",
    "The event is ":"Das Event ist ",
    ". Everyone's boundaries, limits, likes, dislikes, and hard limits must be respected at all times.":". Die Grenzen, Limits, Vorlieben, Abneigungen und absoluten Tabus aller müssen jederzeit respektiert werden.",
    "Community and togetherness:":"Gemeinschaft und Miteinander:",
    "Shared meals, accommodation for everyone, and above all, an open, accepting, and respectful atmosphere. We want to create a space where everyone feels comfortable, can connect freely with others, exchange experiences, and explore new things together.":"Gemeinsame Mahlzeiten, Übernachtungsmöglichkeiten für alle und vor allem eine offene, wertschätzende und respektvolle Atmosphäre. Wir möchten einen Raum schaffen, in dem sich alle wohlfühlen, ungezwungen Kontakte knüpfen, Erfahrungen austauschen und gemeinsam Neues entdecken können.",
    "← Back to home":"← Zurück zur Startseite",
    "Community / Events":"Gemeinschaft / Events",
    "Next Upcoming Meetups":"Die nächsten Meetups",
    "Find the next community meetups here. Dates and details will be added as soon as they are confirmed.":"Hier findest du die nächsten Community-Meetups. Termine und Details ergänzen wir, sobald sie feststehen.",
    "No upcoming meetups announced yet.":"Aktuell sind noch keine Meetups angekündigt.",
    "Let’s connect":"Lass uns vernetzen",
    "Find me on social media and other apps.":"Du findest mich auf Social Media und anderen Apps.",
    "Social media":"Soziale Medien",
    "Main account":"Hauptaccount",
    "Event series":"Eventreihe",
    "Apps":"Apps",
    "Close-up photo of a tattooed arm wearing a black leather cuff":"Nahaufnahme eines tätowierten Arms mit schwarzer Leder-Manschette"
  };

  const pageTitles = {
    "index.html": { en: "Ray_in_Gear", de: "Ray_in_Gear" },
    "books.html": { en: "Preferences — Ray_in_Gear", de: "Vorlieben — Ray_in_Gear" },
    "kinky-test-lab.html": { en: "Kinky Test Lab — Ray_in_Gear", de: "Kinky Test Lab — Ray_in_Gear" },
    "socials.html": { en: "Socials — Ray_in_Gear", de: "Social Media — Ray_in_Gear" }
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  function getLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "de" ? "de" : "en";
    } catch (_) {
      return "en";
    }
  }

  function translateTextNode(node, language) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node);
    const trimmed = original.trim();
    if (!trimmed) return;
    const normalized = trimmed.replace(/\\s+/g, " ");
    const translated = language === "de" ? (dictionary[normalized] || normalized) : normalized;
    const leading = original.match(/^\\s*/)?.[0] || "";
    const trailing = original.match(/\\s*$/)?.[0] || "";
    node.nodeValue = leading + translated + trailing;
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node, language);

    document.querySelectorAll("[alt], [aria-label], [title], [placeholder]").forEach((element) => {
      let saved = originalAttributes.get(element);
      if (!saved) {
        saved = {};
        ["alt", "aria-label", "title", "placeholder"].forEach((name) => {
          if (element.hasAttribute(name)) saved[name] = element.getAttribute(name);
        });
        originalAttributes.set(element, saved);
      }
      Object.entries(saved).forEach(([name, original]) => {
        const key = original.trim().replace(/\\s+/g, " ");
        element.setAttribute(name, language === "de" ? (dictionary[key] || original) : original);
      });
    });

    const currentPage = location.pathname.split("/").pop() || "index.html";
    if (pageTitles[currentPage]) document.title = pageTitles[currentPage][language];

    document.querySelectorAll("[data-language-switch]").forEach((button) => {
      const active = button.dataset.languageSwitch === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {
      // Language remains active for this page if storage is unavailable.
    }
    window.dispatchEvent(new CustomEvent("raygear-language-change", { detail: { language } }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-language-switch]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.languageSwitch));
    });
    applyLanguage(getLanguage());
  });

  window.RayGearI18n = {
    getLanguage,
    translateText: (englishText) => getLanguage() === "de" ? (dictionary[englishText] || englishText) : englishText
  };
})();