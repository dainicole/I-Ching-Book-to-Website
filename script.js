// 64 Hexagrams Data
const hexagrams = [
{ number: 1, name: "Qián (乾)", title: "Heaven above Heaven below. Yielding.", description: "The universe is united in power. So too the wise person execute his actions with power and creativity. Exceptional progress comes by correct persistence." },
{ number: 2, name: "Kūn (坤)", title: "Earth above, Earth below. Yielding.", description: "The receptive earth is in power. The wise person follows the natural path of calmness and correct persistence. Others may lead while you support their goals."  },
{ number: 3, name: "Zhūn (屯)", title: "Water above, Thunder below. Confusion.", description: "Thunderclouds indicate profound disquiet. Undertake no distant goal, but organize support. Concern yourself with the problems of the moment."   },
{ number: 4, name: "Méng (蒙)", title: "Mountain above, Water below. Inexperience.", description: "As spring water collects at the base of the quiet mountain, the enlightened person finds his level through learning, decisiveness, and correct persistence."},
{ number: 5, name: "Xū (需)", title: "Water above, Heaven below. Waiting.", description: "Clouds of anxiety rise. Do not be anxious, but wait with confidence. The moment will arrive when correct persistence brings progress."   },
{ number: 6, name: "Sòng (訟)", title: "Heaven above, Water below. Conflict.", description: "Heaven and water, strength and profundity, conflict. Avoid confrontation. Yield with caution. Persist not against obstacles."   },
{ number: 7, name: "Shī (師)", title: "Earth above, Water below. Cooperation.", description: "The receptive earth holds the water. The wise person will find strength in the company of many fellows. With leadership there will be correct persistence and good fortune."   },
{ number: 8, name: "Bǐ (比)", title: "Water above, Earth below. Unity.", description: "The receptive earth beneath, with profundity above, indicates the need for unity and collective awareness of the goal. Do not procrastinate. Join with others and return to the plan."   },
{ number: 9, name: "Xiǎo Chù (小畜)", title: "Wind above, Heaven below. Restraint.", description: "The winds of gradual change, supported by the strength of Heaven, shows that restraint brings progress and satisfaction. Make minor changes and conceal all actions."   },
{ number: 10, name: "Lǚ (履)", title: "Heaven above, Lake below. Correct conduct.", description: "The excessive beneath the strong above. Discriminate between the inferior achieve and superior progress. Change gives way to stability."   },
{ number: 11, name: "Tài (泰)", title: "Earth above, Heaven below. Prosperity.", description: "The strength of Heaven mingles with the receptive earth. The wise leader benefits from this harmony. Good fortune approaches."   },
{ number: 12, name: "Pǐ (否)", title: "Heaven above, Earth below. Stagnation.", description: "The strong and the receptive do not meet. Strong persons give way to the inferior. The enlightened person remains reserved to avoid misfortune. No advantage in persistence."   },
{ number: 13, name: "Tóng Rén (同人)", title: "Heaven above, Fire below. Community.", description: "Strength of heaven, dependence of fire. Recognize the dependence of all upon their fellows. The wise person seeks the collective flow to gain advantage."   },
{ number: 14, name: "Dà Yǒu (大有)", title: "Fire above, Heaven below. Sovereignty.", description: "The strength of heaven holds a fiery intelligence, the maker of an enlightened ruler. Resist evil; exalt good. Proper leadership brings great progress."   },
{ number: 15, name: "Qiān (謙)", title: "Earth above, Mountain below. Moderation.", description: "The tranquil mountain amid the receptive earth indicates great progress through the reduction of excess. Progress comes by equality of extremes."   },
{ number: 16, name: "Yù (豫)", title: "Thunder above, Earth below. Harmony.", description: "From the receptive earth comes the loud thunder. So from harmony with supporters does the wise person gain advantage."   },
{ number: 17, name: "Suí (隨)", title: "Lake above, Thunder below. Flexibility.", description: "In the midst of excess, growth and persistence produces progress. The enlightened person adapts and leads the way from darkness to comfort."   },
{ number: 18, name: "Gǔ (蠱)", title: "Mountain above, Wind below. Repair.", description: "Winds of gradual change wear away the mountain. Cultivate action in others to bring about repair and great progress. If starting, meditate on the future."   },
{ number: 19, name: "Lín (臨)", title: "Earth above, Lake below. Promotion.", description: "The earth above reflects in the lake beneath. So is the enlightened person willing to teach and learn from others. Progress comes through persistence."   },
{ number: 20, name: "Guān (觀)", title: "Wind above, Earth below. Contemplation.", description: "As the wind moves over the earth, so too the rulers of old travelled the world. They visited its regions and contemplated its many cultures. Explore new ideas." },
{ number: 21, name: "Shì Kè (噬嗑)", title: "Fire above, Thunder below. Reform.", description: "The turbulence of thunder and lightning indicates the need for change. Achieve progress through reform. Administer justice." },
{ number: 22, name: "Bì (賁)", title: "Mountain above, Fire below. Serenity.", description: "Illumination reveals the foot of the immovable mountain. So the wise person perceives and avoids disputes. No progress except in small matters." },
{ number: 23, name: "Bō (剝)", title: "Mountain above, Earth below. Deterioration.", description: "The weak earth cannot support the mountain. The realm deteriorates. Enlightened people stabilize their lives through generosity toward the needy." },
{ number: 24, name: "Fù (復)", title: "Earth above, Thunder below. Repetition.", description: "The beginning of a new cycle shows that repetition brings new progress toward a goal. Friends return. The repeating cycle is part of the Way." },
{ number: 25, name: "Wú Wàng (无妄)", title: "Heaven above, Thunder below. Spontaneity.", description: "Strength above and activity below indicates an alignment with a natural state. Act with persistence and inspiration, but without a true goal." },
{ number: 26, name: "Dà Chù (大畜)", title: "Mountain above, Heaven below. Potential.", description: "The strength of the Heavens comes from within the mountain. The enlightened person studies the past's wisdom to develop his own character." },
{ number: 27, name: "Yí (頤)", title: "Mountain above, Thunder below. Nurturing.", description: "Energy stirs beneath immobility. Support goals that are above question, but be cautious in expression and avoid the negative. Correct persistence brings one good fortune." },
{ number: 28, name: "Dà Guò (大過)", title: "Lake above, Wind below. Imminent change.", description: "The enlightened person withdraws from the world to progress toward an independent goal. Stress is imminent." },
{ number: 29, name: "Kǎn (坎)", title: "Water above, Water below. Danger.", description: "Profundity produces difficulty. The wise person learns confidence through danger. Remain calm in mind, keep all actions virtuous." },
{ number: 30, name: "Lí (離)", title: "Fire above, Fire below. Enlightened intelligence.", description: "Intelligence shines above and below. The enlightened person cultivates intelligence and gains progress through correct persistence. Align yourself with goals that bring enlightenment." },
{ number: 31, name: "Xián (咸)", title: "Lake above, Mountain below. Attraction.", description: "Tranquility combined with excess produces pleasure. Marriage brings good fortune. Accept others and act openly. All change is imminent." },
{ number: 32, name: "Héng (恆)", title: "Thunder above, Wind below. Continuity.", description: "Activity and change teach well the value of endurance. Stand firm and move with persistence toward a goal. Freedom from error." },
{ number: 33, name: "Dùn (遯)", title: "Heaven above, Mountain below. Retreat.", description: "The tranquil mountain remains quiet under Heaven's gaze. So does the enlightened person maintain dignity in retreat. Persist only in small matters and avoid mean conflict." },
{ number: 34, name: "Dà Zhuàng (大壯)", title: "Thunder above, Heaven below. Power.", description: "Activity in the light of day. The wise person acts within convention and with persistence. Use influence wisely." },
{ number: 35, name: "Jìn (晉)", title: "Fire above, Earth below. Progress.", description: "The sun rises above the earth. So does the enlightened person reveal virtue. Conditions favorable for progress. Help others through cleverness and virtue." },
{ number: 36, name: "Míng Yí (明夷)", title: "Earth above, Fire below. Subtlety.", description: "Intelligence is hidden within the earth. Conceal goals, but do not abandon them. Trying conditions, but correct persistence brings one advantage." },
{ number: 37, name: "Jiā Rén (家人)", title: "Wind above, Fire below. Family.", description: "Winds of change issue from intelligent action. The enlightened person acts in an orderly and substantial way. Faith and loyalty must be nurtured." },
{ number: 38, name: "Kuí (睽)", title: "Fire above, Lake below. Contradiction.", description: "Intelligence contradicts excess. The enlightened person acts only in small matters. Maintain individuality." },
{ number: 39, name: "Jiǎn (蹇)", title: "Water above, Mountain below. Obstacles.", description: "Profound movement meets immobility. The enlightened person examines and perfects his own behavior to gain strength." },
{ number: 40, name: "Xiè (解)", title: "Thunder above, Water below. Liberation.", description: "Rain and thunder indicate profound activity. The enlightened person finds good fortune in quick action to restore normal conditions. Forgive others' faults." },
{ number: 41, name: "Sǔn (損)", title: "Mountain above, Lake below. Decline.", description: "Excess is held by immobility. The enlightened person acts with moderation. Avoid anger, develop confidence. Sacrifice brings good fortune, freedom from error." },
{ number: 42, name: "Yì (益)", title: "Wind above, Thunder below. Benefit.", description: "Growth brings benefit. An enlightened person sees the good actions of his fellows. Imitate them and correct their mistakes to make progress toward a goal." },
{ number: 43, name: "Guài (夬)", title: "Lake above, Heaven below. Resolve.", description: "Excess drawn into Heaven's gaze produces honesty. Do not use force, but rely on fair judges. Know your goal, tell your supporters." },
{ number: 44, name: "Gòu (姤)", title: "Heaven above, Wind below. Temptation.", description: "Heaven's power makes stronger the wind of change. So too a ruler issues commands that become well known. Do not create a relationship with powerful persons or ideas. Exert discipline." },
{ number: 45, name: "Cuì (萃)", title: "Lake above, Earth below. Assembly.", description: "The earth receives excess. Unite with others, make sacrifices, and act with correct persistence to achieve a goal. Act with sincerity, avoid suspicion, and join with a wise leader." },
{ number: 46, name: "Shēng (升)", title: "Earth above, Wind below. Advancement.", description: "Gradual change nourished by the receptive earth produces a path to virtue. The enlightened person persists in small matters to gain fortune. Approach leaders without fear." },
{ number: 47, name: "Kùn (困)", title: "Lake above, Water below. Adversity.", description: "Excess lacks profundity. The enlightened person gains progress through courage. Adversity needs risks to achieve fortune. Speaking alone is ineffective." },
{ number: 48, name: "Jǐng (井)", title: "Water above, Wind below. Insight.", description: "Profound penetration and change. Truth is never exhausted, yet never the same. The enlightened person gains insight into truth and assists others to achieve it. If the truth is not heeded, bad fortune follows." },
{ number: 49, name: "Gé (革)", title: "Lake above, Fire below. Change.", description: "Intelligent consciousness amid excess produces change. The enlightened person appreciates past experience and present opportunity. Confidence and progress only after change is past." },
{ number: 50, name: "Dǐng (鼎)", title: "Fire above, Wind below. Order.", description: "Intelligence combined with penetration makes progress and good fortune. The wise person aligns himself with the established order." },
{ number: 51, name: "Zhèn (震)", title: "Thunder above, Thunder below. Shock.", description: "Repeated activity produces sudden surprise and fear. The enlightened person seeks to improve himself and take advantage of the unpredictable." },
{ number: 52, name: "Gèn (艮)", title: "Mountain above, Mountain below. Meditation.", description: "Tranquility upon tranquility. The enlightened person turns his back upon the larger situation and loses self awareness. Should he not notice anyone else, there is no error." },
{ number: 53, name: "Jiàn (漸)", title: "Wind above, Mountain below. Development.", description: "Penetrating change moves the immobile mountain. The enlightened person improves life through good conduct and correct persistence. Marriage brings good fortune." },
{ number: 54, name: "Guī Mèi (歸妹)", title: "Thunder above, Lake below. Passivity.", description: "Action above, excess below. The enlightened person in current difficulty takes no action but considers the near future. Seek no goal." },
{ number: 55, name: "Fēng (豐)", title: "Thunder above, Fire below. Peaking intelligence.", description: "Intelligence combined with activity. This is the zenith of achievement. The enlightened person trusts his own judgment and makes progress. Do not fear decline, but shine like the sun." },
{ number: 56, name: "Lǚ (旅)", title: "Fire above, Mountain below. Travel.", description: "Illumination upon the quiet mountain makes conditions favorable for travel. The wise person is clear-minded and not detained by disputes." },
{ number: 57, name: "Xùn (巽)", title: "Wind above, Wind below. Influence.", description: "Penetrating change above and below. The enlightened person acts gradually and only toward small goals. Wait and consider larger perspectives." },
{ number: 58, name: "Duì (兌)", title: "Lake above, Lake below. Encouragement.", description: "Openness and excess above and below. The wise person exchanges ideas with others to find cooperation. Progress and advantage in correct persistence." },
{ number: 59, name: "Huàn (渙)", title: "Wind above, Water below. Reunion.", description: "Gradual change above the profound water. Rulers meet with their subordinates. Advantage in cooperation, correct persistence, and the company of fellows." },
{ number: 60, name: "Jié (節)", title: "Water above, Lake below. Limitation.", description: "Profundity is held in check by excess. The wise person develops sound restraints and decides proper conduct. Extreme limitation, though, is no virtue." },
{ number: 61, name: "Zhōng Fú (中孚)", title: "Wind above, Lake below. Understanding.", description: "Penetrating change above the open lake. From a distance the wise person gains understanding. Moderate disputes and must avoid rigidity." },
{ number: 62, name: "Xiǎo Guò (小過)", title: "Thunder above, Mountain below. Attention to detail.", description: "As the mountain remains tranquil in activity, so the wise person conducts himself with dignity and control. Be remorseful in losses and frugal in expenses. When birds fly too high, none hear their song." },
{ number: 63, name: "Jì Jì (既濟)", title: "Water above, Fire below. Precaution.", description: "In consciousness is bred profound difficulty. The enlightened person defends against forthcoming adversity. Progress only in small matters. Confusion is imminent." },
{ number: 64, name: "Wèi Jì (未濟)", title: "Fire above, Water below. Vigilance.", description: "Consciousness above the difficult water. The wise person attends his position and progress carefully. Progress with great vigilance." }
];

document.addEventListener("DOMContentLoaded", () => {
// --- Smooth scroll on homepage ---
const exploreBtn = document.getElementById("explore-btn");
const historySection = document.getElementById("question");
if (exploreBtn && historySection) {
  exploreBtn.addEventListener("click", () => {
    historySection.scrollIntoView({ behavior: "smooth" });
  });
}

// Populate Hexagram Grid
const hexGrid = document.getElementById("hexagram-grid");
if (hexGrid) {
  hexagrams.forEach((h, i) => {
    const card = document.createElement("div");
    card.classList.add("hexagram-card");
    card.innerHTML = `
      <h3>${h.number}. ${h.name}</h3>
      <p>${h.title}</p>
    `;
    hexGrid.appendChild(card);

    card.addEventListener("click", () => openModal(i));
  });
}

// Image Gallery
const modal = document.getElementById("hexagramModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeaning = document.getElementById("modalMeaning");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function openModal(index) {
  const h = hexagrams[index];
  if (!modal || !modalTitle || !modalMeaning) return;

  modalTitle.textContent = `${h.number}. ${h.name}`;
  modalMeaning.textContent = h.title;
  
  if (modalDescription) {
    modalDescription.textContent = h.description || "No description available.";
  }
  
  // Add image
  if (modalImage) {
    modalImage.src = `pictures/hexagram${h.number}.png`;
    modalImage.alt = h.name;
    // Error when image doesn't exist
    modalImage.onerror = function() {
      this.style.display = 'none';
    };
    modalImage.onload = function() {
      this.style.display = 'block';
    };
  }
  
  modal.style.display = "flex";
  currentIndex = index;
}

function closeModal() {
  if (modal) modal.style.display = "none";
}

function nextHex() {
  currentIndex = (currentIndex + 1) % hexagrams.length;
  openModal(currentIndex);
}

function prevHex() {
  currentIndex = (currentIndex - 1 + hexagrams.length) % hexagrams.length;
  openModal(currentIndex);
}

if (closeBtn) closeBtn.addEventListener("click", closeModal);
if (nextBtn) nextBtn.addEventListener("click", nextHex);
if (prevBtn) prevBtn.addEventListener("click", prevHex);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Hexagram Generator
const generateBtn = document.getElementById("generate-btn");
const display = document.getElementById("generated-hexagram");
const nameEl = document.getElementById("hexagram-name");
const titleEl = document.getElementById("hexagram-title");
const descEl = document.getElementById("hexagram-description");

if (generateBtn && display && nameEl && titleEl && descEl) {
let lines = [];
let currentLine = 0;
let isGenerating = false;

// Handles Clicks
generateBtn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  if (!isGenerating) {
    // Start new hexagram
    startGeneration();
  } else if (currentLine < 6) {
    // Continue tossing for next line
    tossCoins();
  } else {
    // Reset for new hexagram
    startGeneration();
  }
}

  function startGeneration() {
  // Reset everything
  lines = [];
  currentLine = 0;
  isGenerating = true;
  display.innerHTML = "";

  // Clear previous hexagram info
  nameEl.textContent = "";
  nameEl.style.opacity = "1";
  titleEl.textContent = "";
  titleEl.style.opacity = "1";
  descEl.textContent = "";
  descEl.style.opacity = "1";

  // Start first toss
  generateBtn.textContent = "Toss Coins for Line 1";
}

function tossCoins() {
  if (currentLine >= 6) return;

  generateBtn.disabled = true;
  generateBtn.textContent = `Tossing coins for Line ${currentLine + 1}...`;
  
  // Animate coin toss with 3 coins
  animateCoinToss(() => {
    // Generate 3 coin results (heads=3, tails=2)
    const coin1 = Math.random() < 0.5 ? 2 : 3;
    const coin2 = Math.random() < 0.5 ? 2 : 3;
    const coin3 = Math.random() < 0.5 ? 2 : 3;
    const total = coin1 + coin2 + coin3;
    
    // Determine line type based on total
    const lineValue = determineLine(total);
    lines.push(lineValue);
    currentLine++;
    
    // Add the line to display
    addLineToDisplay(lineValue, total);
    
    // Check if hexagram is complete
    if (currentLine === 6) {
      completeHexagram();
    } else {
      generateBtn.disabled = false;
      generateBtn.textContent = `Toss Coins for Line ${currentLine + 1}`;
    }
  });
}

function determineLine(total) {
  // 6 = old yin (broken, changing)
  // 7 = young yang (solid)
  // 8 = young yin (broken)
  // 9 = old yang (solid, changing)
  if (total === 6) return { type: 'yin', changing: true };
  if (total === 7) return { type: 'yang', changing: false };
  if (total === 8) return { type: 'yin', changing: false };
  if (total === 9) return { type: 'yang', changing: true };
}

function animateCoinToss(callback) {
  // Create 3 coin animation elements
  const coinAnim1 = document.createElement("img");
  coinAnim1.className = "coin-toss-animation coin-1";
  coinAnim1.src = "pictures/coin.png";
  coinAnim1.alt = "Coin";
  
  const coinAnim2 = document.createElement("img");
  coinAnim2.className = "coin-toss-animation coin-2";
  coinAnim2.src = "pictures/coin.png";
  coinAnim2.alt = "Coin";
  
  const coinAnim3 = document.createElement("img");
  coinAnim3.className = "coin-toss-animation coin-3";
  coinAnim3.src = "pictures/coin.png";
  coinAnim3.alt = "Coin";
  
  const generatorPage = document.querySelector(".generator-page");
  generatorPage.appendChild(coinAnim1);
  generatorPage.appendChild(coinAnim2);
  generatorPage.appendChild(coinAnim3);
  
  // Remove after animation
  setTimeout(() => {
    coinAnim1.remove();
    coinAnim2.remove();
    coinAnim3.remove();
    callback();
  }, 1000);
}

function addLineToDisplay(lineValue, total) {
  const lineDiv = document.createElement("div");
  lineDiv.classList.add("line", lineValue.type);
  lineDiv.dataset.lineNumber = currentLine; // Track which line this is
  
  // Add changing indicator if applicable
  if (lineValue.changing) {
    lineDiv.classList.add('changing');
    const indicator = document.createElement("span");
    indicator.className = "changing-indicator";
    indicator.textContent = lineValue.type === 'yin' ? 'x' : '○';
    lineDiv.appendChild(indicator);
  }
  
  // Add total value as data attribute for reference
  lineDiv.dataset.total = total;
  
  lineDiv.style.opacity = "0";
  lineDiv.style.transform = "translateY(-20px)";
  
  // Insert at the beginning so line 1 is at bottom, line 6 at top
  display.insertBefore(lineDiv, display.firstChild);
  
  // Animate in
  setTimeout(() => {
    lineDiv.style.transition = "all 0.5s ease";
    lineDiv.style.opacity = "1";
    lineDiv.style.transform = "translateY(0)";
  }, 50);
}

function matchHexagram(lines) {
  // Hexagram lookup table - maps binary patterns to hexagram numbers
  // Pattern reads from bottom to top: [line1, line2, line3, line4, line5, line6]
  // 1 = yang (solid), 0 = yin (broken)
  const hexagramTable = {
    '111111': 1,  // Qián - all yang
    '000000': 2,  // Kūn - all yin
    '010001': 3,  // Zhūn
    '100010': 4,  // Méng
    '010111': 5,  // Xū
    '111010': 6,  // Sòng
    '000010': 7,  // Shī
    '010000': 8,  // Bǐ
    '110111': 9,  // Xiǎo Chù
    '111011': 10, // Lǚ
    '000111': 11, // Tài
    '111000': 12, // Pǐ
    '111101': 13, // Tóng Rén
    '101111': 14, // Dà Yǒu
    '000100': 15, // Qiān
    '001000': 16, // Yù
    '011001': 17, // Suí
    '100110': 18, // Gǔ
    '000011': 19, // Lín
    '110000': 20, // Guān
    '101001': 21, // Shì Kè
    '100101': 22, // Bì
    '100000': 23, // Bō
    '000001': 24, // Fù
    '111001': 25, // Wú Wàng
    '100111': 26, // Dà Chù
    '100001': 27, // Yí
    '011110': 28, // Dà Guò
    '010010': 29, // Kǎn
    '101101': 30, // Lí
    '011100': 31, // Xián
    '001110': 32, // Héng
    '111100': 33, // Dùn
    '001111': 34, // Dà Zhuàng
    '101000': 35, // Jìn
    '000101': 36, // Míng Yí
    '110101': 37, // Jiā Rén
    '101011': 38, // Kuí
    '010100': 39, // Jiǎn
    '001010': 40, // Xiè
    '100011': 41, // Sǔn
    '110001': 42, // Yì
    '011111': 43, // Guài
    '111110': 44, // Gòu
    '011000': 45, // Cuì
    '000110': 46, // Shēng
    '011010': 47, // Kùn
    '010110': 48, // Jǐng
    '011101': 49, // Gé
    '101110': 50, // Dǐng
    '001001': 51, // Zhèn
    '100100': 52, // Gèn
    '110100': 53, // Jiàn
    '001011': 54, // Guī Mèi
    '001101': 55, // Fēng
    '101100': 56, // Lǚ
    '110110': 57, // Xùn
    '011011': 58, // Duì
    '110010': 59, // Huàn
    '010011': 60, // Jié
    '110011': 61, // Zhōng Fú
    '001100': 62, // Xiǎo Guò
    '010101': 63, // Jì Jì
    '101010': 64  // Wèi Jì
  };
  
  // Convert lines to binary pattern
  const pattern = lines.map(l => l.type === 'yang' ? '1' : '0').join('');
  
  // For debugging
  console.log('Generated pattern:', pattern);
  
  // Look up hexagram number
  const hexagramNumber = hexagramTable[pattern];
  
  // Return the matching hexagram, or default to first one
  return hexagrams.find(h => h.number === hexagramNumber) || hexagrams[0];
}

function completeHexagram() {
  isGenerating = false;
  generateBtn.textContent = "Generate New Hexagram";
  generateBtn.disabled = false;
  
  // Match the actual hexagram based on line pattern
  const matchedHex = matchHexagram(lines);
  
  // Check if there are changing lines
  const hasChanging = lines.some(l => l.changing);
  
  // Animate text appearance
  setTimeout(() => {
    nameEl.textContent = `${matchedHex.number}. ${matchedHex.name}`;
    nameEl.style.opacity = "0";
    nameEl.style.transition = "opacity 0.5s ease";
    setTimeout(() => nameEl.style.opacity = "1", 50);
  }, 300);
  
  setTimeout(() => {
    titleEl.textContent = matchedHex.title;
    titleEl.style.opacity = "0";
    titleEl.style.transition = "opacity 0.5s ease";
    setTimeout(() => titleEl.style.opacity = "1", 50);
  }, 600);
  
  setTimeout(() => {
    let description = matchedHex.description || "No description available.";
    
    if (hasChanging) {
      const changingLines = lines
        .map((l, i) => l.changing ? i + 1 : null)
        .filter(n => n !== null);
      description += `\n\n This hexagram contains changing lines (${changingLines.join(', ')}), indicating the situation is in flux and transformation is imminent.`;
    }
    
    descEl.textContent = description;
    descEl.style.opacity = "0";
    descEl.style.transition = "opacity 0.5s ease";
    setTimeout(() => descEl.style.opacity = "1", 50);
  }, 900);
}
}
});