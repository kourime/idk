let coins = 0;
let clickValue = 1;
let autoCollect = 0;
let clickUpgradeCost = 10;
let autoCollectCost = 20;
let environmentCost = 100;
let environmentLevel = 0;

const coinDisplay = document.getElementById("coins");
const autoDisplay = document.getElementById("auto");
const gameContainer = document.getElementById("game-container");
const upgradeModal = document.getElementById("upgrade-modal");

function updateDisplay() {
    coinDisplay.textContent = `Монеты: ${coins}`;
    autoDisplay.textContent = `(+${autoCollect} сек)`;
}

function mine() {
    coins += clickValue;
    updateDisplay();
}

function upgradeClick() {
    if (coins >= clickUpgradeCost) {
        coins -= clickUpgradeCost;
        clickValue++;
        clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
        updateDisplay();
    }
}

function upgradeAuto() {
    if (coins >= autoCollectCost) {
        coins -= autoCollectCost;
        autoCollect += 2;
        autoCollectCost = Math.floor(autoCollectCost * 1.5);
        updateDisplay();
    }
}

function upgradeEnvironment() {
    if (coins >= environmentCost) {
        coins -= environmentCost;
        environmentLevel++;
        environmentCost = Math.floor(environmentCost * 1.5);
        addEnvironmentElement();
        updateDisplay();
    }
}

function addEnvironmentElement() {
    const elements = ["sun", "house", "city", "river", "mountain", "forest"];
    if (environmentLevel <= elements.length) {
        const div = document.createElement("div");
        div.className = `environment ${elements[environmentLevel - 1]}`;
        gameContainer.appendChild(div);
    }
}

setInterval(() => {
    coins += autoCollect;
    updateDisplay();
}, 1000);

document.getElementById("mine-btn").addEventListener("click", mine);
document.getElementById("upgrade-click").addEventListener("click", upgradeClick);
document.getElementById("upgrade-auto").addEventListener("click", upgradeAuto);
document.getElementById("upgrade-env").addEventListener("click", upgradeEnvironment);
document.getElementById("upgrade-btn").addEventListener("click", () => upgradeModal.style.display = "block");
document.getElementById("close-upgrades").addEventListener("click", () => upgradeModal.style.display = "none");

updateDisplay();
