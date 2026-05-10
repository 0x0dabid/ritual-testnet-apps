const apps = [
  {
    name: "Ritual Pump",
    url: "https://ritual-token-launch--rizkyalvonzo8.replit.app/",
    tag: "Launch",
    function: "Token launch experiment for Ritual Testnet projects.",
  },
  {
    name: "Ritual Testnet Card",
    url: "https://ritual-onchain-id.vercel.app/",
    tag: "Identity",
    function: "Create a visual testnet identity card.",
  },
  {
    name: "Mint Your X Profile",
    url: "https://web-3-profile-mint--rolex9723060.replit.app/",
    tag: "Profile",
    function: "Profile-themed testnet identity experience.",
  },
  {
    name: "Ritual Address Analyzer",
    url: "https://ritual-stats-check.vercel.app/",
    tag: "Analytics",
    function: "Inspect and summarize Ritual testnet address activity.",
  },
  {
    name: "On-chain identity",
    url: "https://ritual-names.vercel.app/",
    tag: "Identity",
    function: "Name and identity utility for testnet users.",
  },
  {
    name: "Autonomous trading agent",
    url: "https://haezl-trading.info/#dashboard",
    tag: "Agent",
    function: "Agent dashboard focused on autonomous trading experiments.",
  },
  {
    name: "GM Strike every 24 Hours",
    url: "https://gritual-striker.vercel.app/",
    tag: "Social",
    function: "Daily GM streak app for Ritual community activity.",
  },
  {
    name: "NFT MarketPlace",
    url: "https://ritual-searcher--tanjir9721.replit.app/",
    tag: "NFT",
    function: "NFT marketplace experiment built for the testnet.",
  },
  {
    name: "RitualDex",
    url: "https://ritual-perp-dex.replit.app/",
    tag: "DeFi",
    function: "Decentralized exchange and perpetuals-style testnet app.",
  },
  {
    name: "Ritual Casino",
    url: "https://ritualcasino.lovable.app/",
    tag: "Game",
    function: "Casino-style game experience for testnet exploration.",
  },
  {
    name: "Prediction Market",
    url: "https://oracle-predict-market--cahyaeth.replit.app/",
    tag: "Market",
    function: "Oracle-powered prediction market experiment.",
  },
  {
    name: "Ritual Hub",
    url: "https://ritual-testnet-hub.vercel.app/",
    tag: "Directory",
    function: "Hub for discovering Ritual Testnet resources.",
  },
  {
    name: "Generate your Ritual Bounty Card",
    url: "https://wanted-on-ritual.replit.app/",
    tag: "Community",
    function: "Community bounty card generator.",
  },
  {
    name: "Ritual Recogniser",
    url: "https://ritual-recognition.lovable.app/",
    tag: "Recognition",
    function: "Recognition-focused community app.",
  },
  {
    name: "Ritual Builder Proof",
    url: "https://ritual-builder-proof.pages.dev/",
    tag: "Builder",
    function: "Builder proof and participation showcase.",
  },
  {
    name: "Ritual Tamagotchi",
    url: "https://ritual-tamagotchi.vercel.app/",
    tag: "Game",
    function: "Playful testnet companion game.",
  },
  {
    name: "Ritual Contract Create",
    url: "https://ritual-create-contract.vercel.app/",
    tag: "Developer",
    function: "Developer utility for contract creation flows.",
  },
  {
    name: "Ritual Mission Console",
    url: "https://ritual-console.netlify.app/",
    tag: "Missions",
    function: "Mission console for testnet tasks and progress.",
  },
  {
    name: "Jumping Siggy",
    url: "https://jumping-siggy-the-pussy.vercel.app/",
    tag: "Game",
    function: "Arcade-style Ritual community game.",
  },
  {
    name: "Ritual Community Map",
    url: "https://ritual-foundation--tanjiro97211.replit.app/",
    tag: "Community",
    function: "Community map and ecosystem explorer.",
  },
  {
    name: "Prediction Market",
    url: "https://ramavenom.github.io/rekt-or-rich/",
    tag: "Market",
    function: "Prediction market game for testnet learning.",
  },
  {
    name: "Ritual Memory Vault",
    url: "https://ritual-memory-vault.replit.app/",
    tag: "Storage",
    function: "Memory vault for storing and retrieving testnet data.",
  },
  {
    name: "Ritual Testnet Explorer",
    url: "https://ritual-testnet-apps.vercel.app/",
    tag: "Directory",
    function: "Explorer and directory for Ritual Testnet apps.",
  },
  {
    name: "Ritual Micro Tap",
    url: "https://ritual-micro-tap.vercel.app/",
    tag: "Game",
    function: "Micro tap game built on the Ritual Testnet.",
  },
  {
    name: "Wallet Analytics",
    url: "https://ritual-score-checker--0xrumora.replit.app/",
    tag: "Analytics",
    function: "Score checker and wallet analytics for testnet addresses.",
  },
  {
    name: "Community Faucet",
    url: "https://ritual-faucet-blueprint--ritualcommunity.replit.app/",
    tag: "Community",
    function: "Community-built faucet blueprint for Ritual Testnet tokens.",
  },
  {
    name: "Siggy Power Card",
    url: "https://siggy-power-cards.vercel.app/",
    tag: "Community",
    function: "Generate and collect power cards featuring Siggy.",
  },
  {
    name: "Lucky Arcade Ritual",
    url: "https://ritual-casino-quest.lovable.app/",
    tag: "Game",
    function: "Lucky arcade and casino quest game for the testnet.",
  },
  {
    name: "Ritual Oracle",
    url: "https://ritual-oracle-two.vercel.app/",
    tag: "Market",
    function: "Oracle utility for testnet data and prediction experiments.",
  },
  {
    name: "Ritual Bubble Shooter",
    url: "https://ritual-bubble-shooter-jt.lovable.app/",
    tag: "Game",
    function: "Bubble shooter arcade game on the Ritual Testnet.",
  },
  {
    name: "Siggy Pixelverse",
    url: "https://siggy-pixelverse.lovable.app/",
    tag: "Game",
    function: "Pixel-art universe featuring Siggy and the Ritual ecosystem.",
  },
  {
    name: "Ritual Arena",
    url: "https://ritualarena1.vercel.app/",
    tag: "Game",
    function: "Arena-style competitive game on the Ritual Testnet.",
  },
  {
    name: "Diabetes Diary TG Bot",
    url: "https://t.me/DiaRoutine_Bot",
    tag: "Community",
    function: "Telegram bot for health tracking integrated with Ritual Testnet.",
  },
  {
    name: "Ritual Discord Tracker NFT Mint",
    url: "https://www.ritcord.xyz/",
    tag: "NFT",
    function: "Track Discord activity and mint NFTs on Ritual Testnet.",
  },
  {
    name: "Siggy Ritualizer",
    url: "https://siggy-ritualizer.vercel.app/",
    tag: "Community",
    function: "Transform your content into Ritual-themed creations featuring Siggy.",
  },
  {
    name: "Ritual Coin Flip",
    url: "https://ritual-flip.vercel.app/",
    tag: "Game",
    function: "Coin flip prediction game on the Ritual Testnet.",
  },
  {
    name: "Siggys Virtual Arcade",
    url: "https://siggy-arcade.vercel.app/",
    tag: "Game",
    function: "Virtual arcade featuring Siggy on the Ritual Testnet.",
  },
  {
    name: "Ritual Genesis NFT Mint",
    url: "https://metrix-genesis-mint.lovable.app/",
    tag: "NFT",
    function: "Mint genesis NFTs on the Ritual Testnet.",
  },
  {
    name: "Ritual Identity Generator",
    url: "https://ritual-card-pfp-generator.vercel.app/",
    tag: "Identity",
    function: "Generate a custom Ritual identity card and profile picture.",
  },
  {
    name: "Ritual Staking",
    url: "https://ritual-lst.vercel.app/",
    tag: "DeFi",
    function: "Liquid staking experiment on the Ritual Testnet.",
  },
  {
    name: "Siggy Streaks",
    url: "https://siggystreaks.vercel.app/en",
    tag: "Social",
    function: "Track and maintain daily Siggy activity streaks.",
  },
  {
    name: "Guess The Ritualists",
    url: "https://guess-the-ritualist.vercel.app/",
    tag: "Game",
    function: "Guessing game to identify members of the Ritual community.",
  },
  {
    name: "Ritual Paws",
    url: "https://ritual-paws.vercel.app/",
    tag: "Game",
    function: "Pet-themed companion game on the Ritual Testnet.",
  },
  {
    name: "Ritual Teacher Hub",
    url: "https://ritual-teacher-hjb3.vercel.app/academy",
    tag: "Education",
    function: "Educational academy hub for learning about Ritual Testnet.",
  },
  {
    name: "RitualPad",
    url: "https://ritual-rocketpad.vercel.app/",
    tag: "Launch",
    function: "Launchpad for new projects on the Ritual Testnet.",
  },
  {
    name: "3D Case Sealer",
    url: "https://ritual-mystery-box.vercel.app/",
    tag: "Game",
    function: "3D mystery box opening experience on the Ritual Testnet.",
  },
  {
    name: "Sky Predict",
    url: "https://skypredict.app/",
    tag: "Market",
    function: "Sky-themed prediction market on the Ritual Testnet.",
  },
  {
    name: "Ritual Play Spin",
    url: "https://ritualplayyy.netlify.app/",
    tag: "Game",
    function: "Spin-to-win style game on the Ritual Testnet.",
  },
  {
    name: "Siggy Miner",
    url: "https://siggy-miner-ritual.vercel.app/",
    tag: "Game",
    function: "Mining-themed game featuring Siggy on the Ritual Testnet.",
  },
  {
    name: "Ritual Multi Sender",
    url: "https://ritual-batch-bloom.lovable.app/",
    tag: "DeFi",
    function: "Batch token multi-sender utility for the Ritual Testnet.",
  },
  {
    name: "Ritual Fate Engine",
    url: "https://ritual-fate-engine.netlify.app/",
    tag: "Game",
    function: "Fate and randomness engine game on the Ritual Testnet.",
  },
  {
    name: "Risa Finance",
    url: "https://risa-finance.netlify.app/",
    tag: "DeFi",
    function: "DeFi finance experiment built on the Ritual Testnet.",
  },
  {
    name: "Ritual Learn",
    url: "https://ritual-learn.vercel.app/",
    tag: "Education",
    function: "Learning platform for Ritual Testnet users and builders.",
  },
];

const filters = [
  "All",
  "Identity",
  "Game",
  "DeFi",
  "Market",
  "Agent",
  "Community",
  "Developer",
  "Analytics",
  "NFT",
  "Storage",
  "Social",
  "Education",
];

const appGrid = document.querySelector("#appGrid");
const appCount = document.querySelector("#appCount");
const heroCount = document.querySelector("#heroCount");
const searchInput = document.querySelector("#searchInput");
const filterPills = document.querySelector("#filterPills");
const emptyState = document.querySelector("#emptyState");

let activeFilter = "All";

function getDomain(url) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function externalIcon() {
  return `
    <svg class="external-icon" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 4h6v6h-2V7.41l-8.3 8.3-1.4-1.42 8.29-8.29H14V4ZM5 6h6v2H7v9h9v-4h2v6H5V6Z" />
    </svg>
  `;
}

function renderFilters() {
  filterPills.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-pill ${filter === activeFilter ? "is-active" : ""}"
          type="button"
          data-filter="${filter}"
          aria-pressed="${filter === activeFilter}"
        >
          ${filter}
        </button>
      `,
    )
    .join("");
}

function appMatchesFilter(app) {
  if (activeFilter === "All") return true;
  return app.tag === activeFilter;
}

function appMatchesSearch(app, searchTerm) {
  const searchableText = `${app.name} ${app.function} ${app.tag} ${getDomain(app.url)}`.toLowerCase();
  return searchableText.includes(searchTerm);
}

function renderApps() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const visibleApps = apps.filter((app) => appMatchesFilter(app) && appMatchesSearch(app, searchTerm));

  appGrid.innerHTML = visibleApps
    .map(
      (app) => `
        <article class="app-card">
          <div class="card-top">
            <span class="tag">${app.tag}</span>
          </div>
          <h3>${app.name}</h3>
          <p>${app.function}</p>
          <span class="domain">${getDomain(app.url)}</span>
          <a
            class="button button-primary card-button"
            href="${app.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ${app.name} in a new tab"
          >
            Open App ${externalIcon()}
          </a>
        </article>
      `,
    )
    .join("");

  appCount.textContent = `${visibleApps.length} ${visibleApps.length === 1 ? "app" : "apps"} listed`;
  heroCount.textContent = apps.length;
  emptyState.hidden = visibleApps.length > 0;
}

filterPills.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  renderFilters();
  renderApps();
});

searchInput.addEventListener("input", renderApps);

renderFilters();
renderApps();
