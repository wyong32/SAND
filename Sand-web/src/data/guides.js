export const guidesList = [
  {
    id: 10,
    title: 'SAND: Raiders of Sophie Contracts Guide: Fort Contracts, Progression, and Rewards',
    h1: 'SAND: Raiders of Sophie Contracts Guide',
    description: 'Plan SAND contracts, fort contracts, progression checks, route setup, extraction timing, rewards, and the common failure points.',
    publishDate: '2026-08-05',
    imageUrl: '/images/guides/sand-contracts-fort-progression-guide.jpg',
    imageAlt: 'SAND Raiders of Sophie contracts guide for fort contracts, progression routes, and rewards',
    addressBar: 'sand-raiders-of-sophie-contracts-guide',
    focus: 'Contracts, fort contracts, progression, and rewards',
    seo: {
      title: 'SAND Contracts and Fort Progression Guide',
      description: 'Plan SAND contracts and fort contracts with acceptance checks, route setup, extraction timing, progression rewards, and failure fixes.',
      keywords: 'SAND contracts, fort contracts, progression, rewards'
    },
    category: 'Progression',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> Contracts in SAND: Raiders of Sophie are progression tasks, not background flavor. Accept the contract, confirm the objective state, route it through one clean POI or fort target, secure the required loot or action, then leave while the reward is still bankable. A contract that dies with your Trampler is not progression. It is just noise you carried too long.</p>

      <p><strong>Version note:</strong> As of August 5, 2026, contract labels, reward tuning, fort routing, and objective wording can still move between builds. If the live objective tracker disagrees with this guide, trust the current UI and use this page as the route discipline checklist.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-contracts-fort-progression-guide.jpg" alt="SAND Raiders of Sophie fort contracts progression route with loot and extraction planning" title="SAND Raiders of Sophie contracts and fort progression" loading="lazy" />
        <figcaption>Fort contracts are route decisions first. If the objective sends you into a contested area, stage extraction before you start looting.</figcaption>
      </figure>

      <h2>Direct answer for contracts</h2>
      <h3>Fast answer and page scope</h3>
      <p>Use contracts as your raid objective filter. Before you launch, decide whether the contract requires a location visit, combat clear, delivery, loot recovery, or fort interaction. Then build the run around that single condition. Do not mix a contract run with a greedy money route unless your crew can still extract under pressure.</p>

      <table>
        <thead>
          <tr><th>Contract question</th><th>Practical answer</th><th>Field rule</th></tr>
        </thead>
        <tbody>
          <tr><td>What are contracts?</td><td>Directed progression tasks that give you a reason to enter a route.</td><td>Accept only what you can finish and extract.</td></tr>
          <tr><td>What are fort contracts?</td><td>Contracts tied to higher-risk fort or fortified POI objectives.</td><td>Expect contact, longer dwell time, and tighter exit timing.</td></tr>
          <tr><td>Do contracts replace looting?</td><td>No. They tell you which loot or action matters this run.</td><td>Loot around the objective, not instead of it.</td></tr>
          <tr><td>When should I leave?</td><td>As soon as the contract state and cargo are secured.</td><td>Extraction beats one extra room.</td></tr>
        </tbody>
      </table>

      <h3>Related variants to merge</h3>
      <p>Searches for <strong>SAND contracts</strong>, <strong>contracts SAND Raiders of Sophie</strong>, <strong>fort contracts</strong>, and <strong>SAND progression</strong> all belong on this page. The intent is the same: the player wants to know what task to take, how to complete it, and how not to lose the payout before extraction.</p>

      <h2>How to handle the contracts task</h2>
      <h3>Prerequisites and state checks</h3>
      <p>Before you accept or chase a contract, check four things. First, confirm the objective text. Second, confirm whether the run needs a key, crate access, or specific cargo space. Third, confirm whether the target route overlaps a dangerous POI. Fourth, confirm your extraction plan before the Trampler is already full.</p>

      <table>
        <thead>
          <tr><th>Check</th><th>Why it matters</th><th>Related guide</th></tr>
        </thead>
        <tbody>
          <tr><td>Objective wording</td><td>Prevents running the wrong POI or bringing the wrong kit.</td><td>Use the live tracker as the authority.</td></tr>
          <tr><td>Keys or containers</td><td>Some routes become dead time if your crew cannot open the target.</td><td><a href="/guides/sand-raiders-of-sophie-keys-military-crates-black-box-guide">Keys and crates</a></td></tr>
          <tr><td>Cargo space</td><td>Contract loot is worthless if you cannot carry it out cleanly.</td><td><a href="/guides/sand-raiders-of-sophie-money-loot-safe-to-sell-guide">Money and loot</a></td></tr>
          <tr><td>Exit timing</td><td>Progress only counts if you survive the run state that matters.</td><td><a href="/guides/sand-raiders-of-sophie-how-to-extract">Extraction</a></td></tr>
        </tbody>
      </table>

      <h3>Step-by-step action path</h3>
      <ol>
        <li><strong>Accept one contract you can actually finish.</strong> If two objectives pull you into opposite map pressure, choose one and leave the other.</li>
        <li><strong>Mark the target route.</strong> Use the <a href="/guides/sand-raiders-of-sophie-map-poi-guide">map and POI route guide</a> to avoid wandering through extra combat.</li>
        <li><strong>Stage the Trampler outside the first danger pocket.</strong> Park for departure, not for screenshots.</li>
        <li><strong>Complete the contract condition before optional loot.</strong> Progression comes first; filler loot comes second.</li>
        <li><strong>Return to the Trampler and sort cargo.</strong> Put contract items where they cannot be confused with junk sale piles.</li>
        <li><strong>Extract early after completion.</strong> If you still want money, run a second clean raid instead of turning one completed contract into a wipe.</li>
      </ol>

      <h3>Confirmation and payoff</h3>
      <p>You know the contract is safe to leave when the objective tracker updates, the required item or completion state is secured, and the crew can still move. If the UI requires turn-in after extraction, treat the reward as unclaimed until you complete that final handoff. <strong>INFERRED:</strong> reward type and exact progression value may vary by contract tier and current build, so do not plan upgrades around an unverified reward number.</p>

      <h2>Mistakes and edge cases</h2>
      <h3>Why players get stuck</h3>
      <table>
        <thead>
          <tr><th>Failure</th><th>Likely cause</th><th>Fix</th></tr>
        </thead>
        <tbody>
          <tr><td>Contract does not advance</td><td>Wrong POI, wrong object, or objective state not triggered.</td><td>Re-read the tracker and finish the exact condition.</td></tr>
          <tr><td>Fort contract turns into a wipe</td><td>Crew stayed inside the danger zone after the condition was done.</td><td>Set a leave call before the first loot room.</td></tr>
          <tr><td>Reward feels missing</td><td>Turn-in, extraction, or claim step was skipped.</td><td>Check the contract board and inventory state after leaving.</td></tr>
          <tr><td>Progression stalls</td><td>Contracts are being mixed with unfocused money runs.</td><td>Run contract-first, sell-second.</td></tr>
        </tbody>
      </table>

      <h3>When to link or merge with another guide</h3>
      <p>Keep this page for contract flow and progression decisions. If your problem is cargo value, use the <a href="/guides/sand-raiders-of-sophie-money-loot-safe-to-sell-guide">money guide</a>. If your problem is locked containers, use the <a href="/guides/sand-raiders-of-sophie-keys-military-crates-black-box-guide">key guide</a>. If your problem is leaving alive, use the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extract guide</a>. That split keeps each guide useful instead of turning every SAND page into the same general checklist.</p>

      <h2>FAQ</h2>
      <h3>Is a Contracts Guide worth a separate SAND page?</h3>
      <p>Yes. Contracts are a distinct progression intent: players want the acceptance, route, completion, reward, and failure logic in one place. That is different from a generic loot or extraction guide.</p>

      <h3>Which related keywords should this page cover?</h3>
      <p>Cover <strong>sand raiders of sophie contracts</strong>, <strong>contracts sand raiders of sophie</strong>, <strong>sand raiders of sophie progression</strong>, and <strong>fort contracts</strong> together. Do not split them unless the live game adds a separate contract tier with unique mechanics.</p>
    `
  },
  {
    id: 9,
    title: 'SAND: Raiders of Sophie Dreadnought Guide: Dreadnaught, Ship Role, and Setup',
    h1: 'SAND: Raiders of Sophie Dreadnought Guide',
    description: 'Build a SAND dreadnought-style raiding ship with crew roles, guns, cargo discipline, repairs, extraction timing, and spelling checks.',
    publishDate: '2026-08-05',
    imageUrl: '/images/guides/sand-dreadnought-raiding-ship-guide.jpg',
    imageAlt: 'SAND Raiders of Sophie dreadnought raiding ship guide for heavy Trampler setup',
    addressBar: 'sand-raiders-of-sophie-dreadnought-guide',
    focus: 'Dreadnought, raiding ship, and heavy Trampler setup',
    seo: {
      title: 'SAND Dreadnought and Raiding Ship Guide',
      description: 'Build a SAND dreadnought-style raiding ship with crew roles, guns, cargo, repairs, extraction timing, and Dreadnaught spelling checks.',
      keywords: 'SAND dreadnought, Dreadnaught, raiding ship, Trampler setup'
    },
    category: 'Builds',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> In SAND: Raiders of Sophie, use <strong>Dreadnought</strong> as a heavy raiding-ship setup term: a combat-first Trampler build that anchors crew movement, carries guns and cargo, and survives enough return fire to finish the objective. <strong>Dreadnaught</strong> is usually the same search intent unless the live UI labels a separate item with that spelling. Do not chase a hidden unlock just because a search result uses the alternate spelling.</p>

      <p><strong>Version note:</strong> As of August 5, 2026, ship parts, module names, and balance values can change between builds. Treat exact damage, armor, speed, and cargo numbers as live-UI checks, not fixed guide constants.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-dreadnought-raiding-ship-guide.jpg" alt="SAND Raiders of Sophie dreadnought raiding ship Trampler setup with crew roles and cannons" title="SAND Raiders of Sophie dreadnought raiding ship setup" loading="lazy" />
        <figcaption>A dreadnought-style Trampler is not just bigger. It is a crew plan: driver, guns, cargo, repairs, and a clean extraction call.</figcaption>
      </figure>

      <h2>Direct answer for dreadnought</h2>
      <h3>Fast answer and page scope</h3>
      <p>This page covers the practical meaning behind searches for <strong>sand raiders of sophie dreadnought</strong>, <strong>sands of sophie dread</strong>, <strong>dreadnaught</strong>, and <strong>raiding ship</strong>. The player intent is not lore. It is build role: how to turn a Trampler into a heavier raid platform without making it too slow, too loud, or too hard to extract.</p>

      <table>
        <thead>
          <tr><th>Search term</th><th>What it usually means</th><th>What to check in-game</th></tr>
        </thead>
        <tbody>
          <tr><td>Dreadnought</td><td>Heavy raiding ship role or build concept.</td><td>Hull, weapon mounts, armor, cargo, and crew jobs.</td></tr>
          <tr><td>Dreadnaught</td><td>Alternate spelling of the same player query.</td><td>Do not assume a separate unlock unless the UI says so.</td></tr>
          <tr><td>Sands of Sophie dread</td><td>Short, typo-heavy search for the same topic.</td><td>Map it to heavy Trampler setup.</td></tr>
          <tr><td>Raiding ship</td><td>Combat and loot platform for contested runs.</td><td>Guns, repairs, extraction timing, and cargo risk.</td></tr>
        </tbody>
      </table>

      <h3>Related variants to merge</h3>
      <p>Keep the variants on one guide. Splitting Dreadnought, Dreadnaught, and raiding ship into separate pages would create thin duplicates. If the live build later adds a named Dreadnought chassis, this page should become the parent guide and link to a specific chassis table.</p>

      <h2>How to handle the dreadnought task</h2>
      <h3>Prerequisites and state checks</h3>
      <p>Before building a heavy raiding ship, solve the boring checks first. A large Trampler that cannot turn, cannot reload, or cannot leave after a fight is a loot donation.</p>

      <table>
        <thead>
          <tr><th>Check</th><th>Minimum standard</th><th>Why it matters</th></tr>
        </thead>
        <tbody>
          <tr><td>Crew roles</td><td>Driver, gunner, repair/cargo flex assigned before launch.</td><td>Heavy ships fail when everyone does the same job.</td></tr>
          <tr><td>Weapon plan</td><td>Enough ammo and clear firing arcs for the intended fight.</td><td>Unloaded guns only add weight and confidence problems.</td></tr>
          <tr><td>Mobility</td><td>Route chosen around your slowest turn and worst escape angle.</td><td>A raiding ship still has to leave the raid.</td></tr>
          <tr><td>Cargo discipline</td><td>Priority loot and contract items separated from junk.</td><td>Extraction panic gets worse when cargo is messy.</td></tr>
          <tr><td>Repair plan</td><td>Materials and access paths kept clear.</td><td>Mid-fight repair only works if the crew can reach the part.</td></tr>
        </tbody>
      </table>

      <h3>Step-by-step action path</h3>
      <ol>
        <li><strong>Start from the ship role, not the biggest shape.</strong> If the run is contract-heavy, reserve cargo and exit speed. If the run is PvP-heavy, prioritize firing angles and repair access.</li>
        <li><strong>Assign crew jobs before the first POI.</strong> Use the <a href="/guides/sand-raiders-of-sophie-pvp-pve-team-size-guide">team size guide</a> if your group keeps duplicating tasks.</li>
        <li><strong>Mount weapons around real firing lanes.</strong> Check whether each gun can cover approach, chase, or disengage. A blind heavy ship is just a larger target.</li>
        <li><strong>Keep cargo paths clean.</strong> Heavy builds attract greed. Use the <a href="/guides/sand-raiders-of-sophie-money-loot-safe-to-sell-guide">money and loot guide</a> to decide what is worth carrying.</li>
        <li><strong>Plan the exit before committing to a fort or POI.</strong> Cross-check the <a href="/guides/sand-raiders-of-sophie-map-poi-guide">map and POI guide</a> before parking deep in a bad angle.</li>
        <li><strong>Extract after the ship has done its job.</strong> A dreadnought-style run is successful when loot, crew, and objective survive. Use the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extract guide</a> if your crew keeps overstaying.</li>
      </ol>

      <h3>Confirmation and payoff</h3>
      <p>The setup is working when the driver can keep the ship angled, the gunner can fire without blocking movement, the flex player can repair or move cargo without crossing dangerous lines, and the crew leaves with the objective complete. If one player has to handle driving, guns, repairs, and cargo at once, the build is too ambitious for the crew size.</p>

      <h2>Mistakes and edge cases</h2>
      <h3>Why players get stuck</h3>
      <table>
        <thead>
          <tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr>
        </thead>
        <tbody>
          <tr><td>No Dreadnought option appears</td><td>The term may be a role phrase or spelling variant, not a visible unlock.</td><td>Search the current builder UI for parts, not only the word.</td></tr>
          <tr><td>Ship wins fights but loses loot</td><td>Cargo and extraction were planned after combat.</td><td>Route the ship around leaving, not around chasing.</td></tr>
          <tr><td>Guns feel weak</td><td>Bad angles, reload gaps, or wrong engagement range.</td><td>Test firing lanes before entering contested POIs.</td></tr>
          <tr><td>Solo build feels impossible</td><td>Too many simultaneous jobs for one player.</td><td>Shrink the build or move to a duo/team setup.</td></tr>
        </tbody>
      </table>

      <h3>When to link or merge with another guide</h3>
      <p>Use this page for the heavy raiding-ship concept. For specific shape and module tradeoffs, read the <a href="/guides/sand-raiders-of-sophie-best-ship-build-guide">best ship build guide</a>. For weapon behavior, use the <a href="/wiki/weapons">weapons wiki</a>. For route pressure, use the <a href="/guides/sand-raiders-of-sophie-map-poi-guide">map guide</a>. If the question is only "how do I leave with the loot," skip ship theory and go straight to <a href="/guides/sand-raiders-of-sophie-how-to-extract">extraction</a>.</p>

      <h2>FAQ</h2>
      <h3>Is a Dreadnought Guide worth a separate SAND page?</h3>
      <p>Yes, because the search intent is different from a generic ship page. Players looking for Dreadnought or Dreadnaught usually want the heavy raiding role, crew setup, and failure points in one answer.</p>

      <h3>Which related keywords should this page cover?</h3>
      <p>Cover <strong>sand raiders of sophie dreadnought</strong>, <strong>sand raiders of sophie dreadnaught</strong>, <strong>sands of sophie dread</strong>, and <strong>sand raiders of sophie raiding ship</strong> together. They describe one parent intent unless the live UI splits them later.</p>
    `
  },  {
    id: 4,
    title: 'SAND: Raiders of Sophie Multiplayer Guide: PvP, PvE, Solo, and Team Size',
    h1: 'SAND: Raiders of Sophie PvP, PvE, Solo, and Team Size Guide',
    description: 'Direct answers on SAND PvP, PvE pressure, solo-only servers, duo viability, crew roles, team size, and how many teams to expect on a live map.',
    publishDate: '2026-07-07',
    imageUrl: '/images/guides/sand-pvp-pve-trampler-fight.jpg',
    imageAlt: 'SAND Raiders of Sophie PvP and PvE Trampler fight with team-size pressure',
    addressBar: 'sand-raiders-of-sophie-pvp-pve-team-size-guide',
    focus: 'PvP, PvE, solo, and team size',
    seo: {
      title: 'SAND PvP, PvE, Solo and Team Size Guide',
      description: 'SAND multiplayer guide for PvP, PvE-only questions, solo servers, duo play, team size, and how many teams can pressure a map.',
      keywords: 'SAND PvP, SAND PvE, solo server, team size, duo, Voyage mode'
    },
    category: 'Multiplayer',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> SAND: Raiders of Sophie is built around contested extraction multiplayer. PvP pressure is part of the live run, PvE exists through hostile NPCs and walker threats, solo play is possible but workload-heavy, and small teams must treat the Trampler like a shared machine with assigned jobs. Do not enter a public route expecting a safe sightseeing raid.</p>

      <p><strong>Version note:</strong> Checked against the current public Early Access build on July 7, 2026. Queue labels, server rules, crew capacity, and team counts can change. If a server browser or mode card disagrees with this guide, trust the live UI first and treat this page as the decision framework.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-pvp-pve-trampler-fight.jpg" alt="SAND Raiders of Sophie PvP Trampler fight showing team pressure and ship damage" title="SAND Raiders of Sophie PvP and team pressure" loading="lazy" />
        <figcaption>PvP pressure starts before the first shot. Smoke, engine sound, cannon fire, and extraction timing all advertise your crew.</figcaption>
      </figure>

      <h2>PvP and PvE rules</h2>
      <h3>PvP in Voyage mode</h3>
      <p>Voyage is not a private tutorial bubble by default. Treat it as a multiplayer extraction route where other crews can still become the main danger. The safer way to learn is to make the route smaller: one POI, one cargo target, one extraction plan. If another Trampler is already moving through the area, assume they can hear or see enough to punish a greedy stop.</p>
      <p>If you are still building baseline raid discipline, read the <a href="/guides/first-stable-runs-survival-guide">first stable runs survival guide</a> before pushing fights. Most new-player PvP deaths are not aim problems. They are route, parking, noise, and role-assignment problems.</p>

      <table>
        <thead>
          <tr><th>Question</th><th>Practical answer</th><th>Field rule</th></tr>
        </thead>
        <tbody>
          <tr><td>Does SAND have PvP?</td><td>Yes, live extraction runs can create crew-vs-crew combat.</td><td>Move like another Trampler may hear you.</td></tr>
          <tr><td>Was it always a PvP game?</td><td>The core loop is extraction survival with contested crews, not a pure PvE crawler.</td><td>Do not plan cargo around zero-player contact.</td></tr>
          <tr><td>Is Voyage safe?</td><td>Safer for learning, not automatically free of pressure.</td><td>Use it to practice exits, not to overstay.</td></tr>
        </tbody>
      </table>

      <h3>PvE-only mode and PvE searches</h3>
      <p>PvE exists in the run: ghouls can guard loot areas, AI walkers or automatons can pressure a route, and environmental timing can force bad fights. That does not automatically mean every player has access to a full PvE-only progression mode. Check the current queue list before promising a no-PvP session to a new crew.</p>
      <p><strong>INFERRED:</strong> If the live server list exposes special rules such as solo-only or limited-combat queues, those are server/mode rules, not a guarantee that every progression path is PvE-only. Re-check after each major patch.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-team-extraction-pressure.jpg" alt="SAND Raiders of Sophie team hangar screen showing Trampler crew capacity and expedition planning" title="SAND Raiders of Sophie team size and expedition planning" loading="lazy" />
        <figcaption>Team size is a workload question first. More crew only helps when every player knows the job they own.</figcaption>
      </figure>

      <h2>Solo, duo, and team-size questions</h2>
      <h3>Can it be played solo?</h3>
      <p>Yes, SAND can be played solo, but solo is the highest workload version of the game. One player has to drive, watch the horizon, loot, mount guns, reload, repair, decide routes, and extract. The answer is not to play faster. The answer is to shrink the number of simultaneous jobs.</p>

      <table>
        <thead>
          <tr><th>Solo job</th><th>What fails first</th><th>Fix</th></tr>
        </thead>
        <tbody>
          <tr><td>Driving</td><td>You miss smoke, terrain, or a nearby walker.</td><td>Stop before scanning, not after taking fire.</td></tr>
          <tr><td>Looting</td><td>The Trampler is unattended too long.</td><td>Loot short, return often, bank cargo early.</td></tr>
          <tr><td>Turret use</td><td>You leave steering while the walker keeps moving.</td><td>Fight from stable terrain or disengage.</td></tr>
          <tr><td>Extraction</td><td>You call evac before staging cargo and angles.</td><td>Use the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extraction guide</a> as a checklist.</td></tr>
        </tbody>
      </table>

      <p>Solo-only servers are the cleanest way to learn without being rolled by larger crews, but they still do not remove the core workload. Your best solo route is short, quiet, and extraction-first.</p>

      <h3>Two-player viability</h3>
      <p>A two-player crew is viable if you split jobs instead of duplicating effort. The common duo failure is both players looting while the Trampler is parked badly, or both players staring at the same threat while the engine, cargo, or extraction angle is ignored.</p>
      <ul>
        <li><strong>Driver-caller:</strong> owns route, parking, extraction timing, and engine state.</li>
        <li><strong>Scout-gunner:</strong> owns first loot pass, horizon checks, cannon loading, and contact calls.</li>
        <li><strong>Shared rule:</strong> after any good loot hit, return to cargo before pushing a second objective.</li>
      </ul>

      <h3>Team size and teams per map</h3>
      <p>Team size should be read from the live UI and the walker you bring. Some Trampler screens expose crew capacity as a build stat, and larger models can support more crew work than a stripped solo rig. Capacity is not the same as efficiency. A six-slot walker with three confused players is worse than a two-player walker with clean jobs.</p>

      <table>
        <thead>
          <tr><th>Crew size</th><th>Best use</th><th>Main risk</th></tr>
        </thead>
        <tbody>
          <tr><td>Solo</td><td>Learning routes, controls, extraction timing, and compact cargo runs.</td><td>Every job competes for one player's attention.</td></tr>
          <tr><td>Duo</td><td>Clean split between driving/extraction and scouting/gunnery.</td><td>Both players abandon the vehicle to loot.</td></tr>
          <tr><td>Three players</td><td>Stable combat triangle: driver, gunner, scout/repair.</td><td>Overconfidence and noisy route extension.</td></tr>
          <tr><td>Large crew</td><td>Public pressure, broad defense, fast cargo handling.</td><td>Role chaos if no one owns the callouts.</td></tr>
        </tbody>
      </table>

      <p>For "how many teams on map," use a conservative assumption: more than one hostile or opportunistic crew can arrive before your extraction finishes. Exact team count is server/match dependent and should not be hard-coded into a route plan.</p>

      <h2>FAQ</h2>
      <h3>Does SAND: Raiders of Sophie have PvP?</h3>
      <p>Yes. Treat live extraction routes as contested. You can hear, see, chase, or be chased by other crews, especially around smoke, cannon fire, loot POIs, and extraction towers.</p>
      <h3>Does SAND: Raiders of Sophie have a PvE-only mode?</h3>
      <p>PvE enemies exist, but a full PvE-only progression mode should be verified in the current queue or server rules. Do not assume every run is PvE-only unless the live UI says so.</p>
      <h3>Can SAND: Raiders of Sophie be played solo?</h3>
      <p>Yes, but solo is workload-heavy. Prefer solo-only servers when available, keep routes short, and extract once the cargo matters.</p>
      <h3>Is SAND: Raiders of Sophie possible with two players?</h3>
      <p>Yes. Duo works when one player owns driving/extraction and the other owns scouting/guns. It fails when both players chase loot at the same time.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> Multiplayer is not a player-count checkbox. It is job coverage. If no one is watching route, cargo, guns, and extraction, the crew is smaller than it looks.
      </div>
    `
  },
  {
    id: 3,
    title: 'SAND: Raiders of Sophie Best Ship Guide: Builds, Shapes, and Team Setups',
    h1: 'Best Ship Builds in SAND: Raiders of Sophie',
    description: 'Pick SAND ship builds by crew size, shape, modules, cannon arcs, cargo, engine load, Trampler damage risk, and whether you play solo, duo, or three-person.',
    publishDate: '2026-07-07',
    imageUrl: '/images/guides/sand-ship-build-trampler.jpg',
    imageAlt: 'SAND Raiders of Sophie ship build guide showing Trampler module shape and crew stats',
    addressBar: 'sand-raiders-of-sophie-best-ship-build-guide',
    focus: 'Ship builds, shapes, and team setups',
    seo: {
      title: 'SAND Best Ship Build Guide',
      description: 'Choose SAND ship builds for solo, duo, and three-person crews with Trampler shape, modules, cannon arcs, cargo, speed, and damage tradeoffs.',
      keywords: 'SAND best ship, ship build, Trampler design, solo build, duo walker'
    },
    category: 'Builds',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> the best ship in SAND: Raiders of Sophie is the smallest Trampler that covers the jobs your crew can actually perform. Solo needs low workload and fast exits. Duo needs a clean driver/gunner split. A three-person build can afford dedicated scout, repair, and cannon roles. Bigger only wins when the crew can feed the engine, guns, repairs, and cargo route without freezing.</p>

      <p><strong>Version note:</strong> Checked against the current public Early Access build on July 7, 2026. Module stats, crew capacity, cannon slots, energy efficiency, and damage behavior can move between patches. Verify the live builder panel before copying any exact shape.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-ship-build-trampler.jpg" alt="SAND Raiders of Sophie best ship build with Trampler modules shape and crew capacity" title="SAND Raiders of Sophie best ship build" loading="lazy" />
        <figcaption>The builder panel matters more than the silhouette: crew, cannons, cargo, engine count, weight, speed, and stability decide whether a shape works.</figcaption>
      </figure>

      <h2>Best ship and build intent</h2>
      <h3>Best ship choices</h3>
      <p>Do not ask for one universal best ship. Ask what job the ship has to survive. The Trampler is a moving base, not a skin. A good build gives the crew enough movement, reachable guns, secured cargo, and repair access without forcing everyone to sprint across compartments during contact.</p>

      <table>
        <thead>
          <tr><th>Build type</th><th>Best for</th><th>Do not use it when</th></tr>
        </thead>
        <tbody>
          <tr><td>Compact solo walker</td><td>Short routes, extraction practice, low noise, quick parking.</td><td>You plan to trade cannon fire with larger crews.</td></tr>
          <tr><td>Duo utility walker</td><td>Driver/gunner split, moderate cargo, clean retreat path.</td><td>Both players want to loot far from the vehicle.</td></tr>
          <tr><td>Three-person combat build</td><td>Driver, gunner, scout/repair role coverage.</td><td>The route needs stealth or fast extraction more than pressure.</td></tr>
          <tr><td>Large cargo-heavy build</td><td>Organized crews that can defend, repair, and sort cargo.</td><td>Your crew has weak callouts or no backup exit.</td></tr>
        </tbody>
      </table>

      <p>If your main problem is leaving alive, pair this page with the <a href="/guides/sand-raiders-of-sophie-how-to-extract">SAND extraction guide</a>. A perfect build that reaches extraction late is still a bad build.</p>

      <h3>Three-person meta build</h3>
      <p>The cleanest three-person setup is not three gunners. It is one driver, one gunner, and one flex player who handles scouting, repair, cargo calls, and second gun timing. The build should keep critical stations close enough that the flex player can move without losing the fight.</p>
      <ul>
        <li><strong>Driver:</strong> owns route, speed, cover, extraction angle, and crash prevention.</li>
        <li><strong>Gunner:</strong> owns loaded cannons, ammo checks, firing arcs, and target priority.</li>
        <li><strong>Flex:</strong> owns repairs, boarding watch, loot calls, and emergency second weapon use.</li>
      </ul>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-ship-damage-cannons.jpg" alt="SAND Raiders of Sophie ship damage and cannon arcs during Trampler combat" title="SAND Raiders of Sophie ship damage and cannons" loading="lazy" />
        <figcaption>Damage is rarely isolated. A bad turn can expose engines, guns, ladders, and repair routes at the same time.</figcaption>
      </figure>

      <h2>Solo, two-person, and shape questions</h2>
      <h3>One-person builds</h3>
      <p>Solo builds should reduce walking distance inside the Trampler. Put steering, engine access, cargo, and the primary weapon loop close enough that one player can recover from a mistake. If a design looks powerful but makes you cross three ladders to reload or repair, it is a squad build pretending to be solo-friendly.</p>

      <table>
        <thead>
          <tr><th>Solo priority</th><th>Why it matters</th><th>Failure sign</th></tr>
        </thead>
        <tbody>
          <tr><td>Short station path</td><td>You cannot drive, repair, and fire at once.</td><td>You arrive at the gun after the target is gone.</td></tr>
          <tr><td>Low clutter</td><td>Loose cargo and awkward rooms cost seconds.</td><td>You get stuck managing inventory during contact.</td></tr>
          <tr><td>Simple weapon arc</td><td>Solo cannot cover every side.</td><td>You keep rotating the whole walker to shoot.</td></tr>
          <tr><td>Enough power margin</td><td>Bad extraction calls require repositioning.</td><td>You cannot move after a long fight.</td></tr>
        </tbody>
      </table>

      <h3>Two-man walker design typo</h3>
      <p>The best two-man walker design is boring on purpose: one player drives and calls the route, the other handles scouting, guns, and short loot passes. Use a shape where the gunner can reach the weapon and cargo without making the driver stop every time something changes.</p>
      <p>For duo routes, avoid wide decorative shapes that create dead travel time. Use modules that create clean access, controlled cargo, and one strong firing side. A duo wins by leaving cleanly, not by pretending to be a public war machine.</p>

      <h3>Build any shape</h3>
      <p>You can snap modules together and create custom Trampler shapes, but "any shape" does not mean "any shape is good." The builder still punishes bad reachability, weight, stability, energy load, and weapon placement. Treat every added compartment as a new path the crew must cross under pressure.</p>
      <p><strong>INFERRED:</strong> Shape freedom is constrained by live module rules, connection points, cost, and the builder's reachability checks. If the panel flags a reachability or core-compartment issue, fix the route before trusting the design in a raid.</p>

      <h2>Ship models, design, and damage</h2>
      <h3>Ship design and models</h3>
      <p>Prebuilt models are useful baselines because they expose what the game expects a functional Trampler to include: steering, engine support, cargo, weapons, and enough walking space to operate. Custom designs should improve one job without breaking three others.</p>
      <p>Use the <a href="/database">Tech Tree Database</a> to plan unlock direction and the <a href="/wiki/weapons">Weapons Wiki</a> before overbuilding around a cannon you cannot feed. Mounted firepower is only real when the crew brought ammo and can reach the mount.</p>

      <h3>How ship damage works</h3>
      <p>Ship damage should be treated as module loss plus crew-disruption risk. A hit that damages an exposed side may also break your route to a weapon, force repairs, expose cargo, or make the driver choose between turning away and keeping guns on target. Do not build a ship where one damaged corner shuts down driving, fighting, and escape at once.</p>

      <table>
        <thead>
          <tr><th>Damage risk</th><th>Build response</th><th>Role response</th></tr>
        </thead>
        <tbody>
          <tr><td>Gun side exposed</td><td>Keep firing arcs useful without exposing every station.</td><td>Gunner calls reload and angle early.</td></tr>
          <tr><td>Engine or mobility hit</td><td>Keep repair path short and uncluttered.</td><td>Flex repairs while driver holds cover.</td></tr>
          <tr><td>Cargo side threatened</td><td>Do not stack all value in the easiest side to board.</td><td>Extract once cargo is worth defending.</td></tr>
          <tr><td>Boarding pressure</td><td>Use simple interior paths and obvious choke points.</td><td>Scout watches ladders instead of chasing loot.</td></tr>
        </tbody>
      </table>

      <h2>FAQ</h2>
      <h3>What is the best ship in SAND: Raiders of Sophie?</h3>
      <p>For most players, the best ship is the smallest Trampler that supports your crew jobs: solo compact, duo utility, three-person driver/gunner/flex, or larger cargo builds only with organized roles.</p>
      <h3>Can you build any shape in SAND: Raiders of Sophie?</h3>
      <p>You can build custom shapes from modules, but the live builder still checks connection, cost, reachability, weight, stability, energy load, and station access. A strange shape is only good if the crew can operate it under fire.</p>
      <h3>What should a three-person meta build include?</h3>
      <p>Use one driver, one gunner, and one flex repair/scout/cargo player. Build around reachable guns, short repair paths, enough cargo, and a clean extraction route.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> If a build makes one player ask "where is the gun, engine, cargo, or ladder?" during combat, the shape already failed.
      </div>
    `
  },
  {
    id: 1,
    title: 'Survival Guide: First Stable Runs in SAND',
    description: 'A practical route-first guide for surviving SAND: Raiders of Sophie, with safer Trampler prep, solo decisions, PvP awareness, and extraction discipline.',
    publishDate: '2026-06-26',
    imageUrl: '/images/guides/steam-guide-01.webp',
    imageAlt: 'Official Steam screenshot of a Trampler near a desert loot platform in SAND: Raiders of Sophie',
    addressBar: 'first-stable-runs-survival-guide',
    seo: {
      title: "SAND: Raiders of Sophie Survival Guide - First Runs",
      description: "Use this SAND: Raiders of Sophie survival guide to plan first stable runs, with Trampler prep, route discipline, PvP awareness, solo choices, and extraction.",
      keywords: "SAND Raiders of Sophie survival guide, SAND first raid tips, SAND solo guide, SAND extraction guide, SAND Trampler guide"
    },
    category: 'Survival',
    isPublished: true,
    detailsHtml: `
      <p>SAND: Raiders of Sophie is easiest to misunderstand when you treat it like a normal extraction shooter. Your gun matters, but your Trampler, route discipline, crew communication, and willingness to leave early matter more. In the live game, the smartest first goal is not a perfect raid. It is a stable raid: spawn in, move with a plan, learn one POI, extract something useful, and avoid turning every sound into a fight.</p>

      <h2>Who This Guide Is For</h2>
      <p>This guide is written for new raiders who are struggling with the current game reality: PvP pressure, team-focused systems, rough solo workload, and the feeling that one bad decision can erase twenty minutes of preparation. It avoids patch-sensitive damage values and focuses on decisions that stay useful even when balance changes.</p>

      <h2>Core Rule: Plan One Small Win</h2>
      <p>Your first stable runs should have one clear objective. Pick a nearby ruin, wreck, fort edge, or resource route; decide what counts as enough loot; then leave before the run becomes loud. The common beginner mistake is trying to learn driving, scouting, looting, Trampler power, PvP, and extraction all in the same greedy route.</p>
      <ul>
        <li><strong>Good first objective:</strong> reach one POI, loot for a short window, return to the Trampler, and extract.</li>
        <li><strong>Bad first objective:</strong> chase every signal, push toward distant combat, fill every slot, then look for extraction under pressure.</li>
        <li><strong>Best mindset:</strong> every run should answer one question about the game, not solve the whole game at once.</li>
      </ul>

      <h2>Pre-Raid Checklist</h2>
      <p>Most failed early raids start before Sophie. Use the hangar like a launch checklist, not a lobby timer. If you forget fuel, shells, food, or a role assignment, the raid starts unstable before the first enemy appears.</p>
      <table>
        <thead>
          <tr><th>Check</th><th>Why It Matters</th><th>Reference</th></tr>
        </thead>
        <tbody>
          <tr><td>Energy rods</td><td>The Trampler is your mobile base. If power planning fails, every other plan becomes harder.</td><td><a href="/wiki/resources#resource-20">NZ Mk2 Energy Rod</a></td></tr>
          <tr><td>Mounted weapon kit</td><td>Cannons and shells should be packed before launch, then installed and loaded after landing.</td><td><a href="/wiki/weapons#mounted-weapons">Mounted Weapons</a></td></tr>
          <tr><td>Personal weapon and ammo</td><td>You need a fallback when boarding, looting buildings, or defending extraction on foot.</td><td><a href="/wiki/weapons">Weapons Wiki</a></td></tr>
          <tr><td>Food or healing</td><td>A small recovery item can turn a failed skirmish into a retreat instead of a wipe.</td><td><a href="/wiki/resources#resource-18">Canned Food</a></td></tr>
          <tr><td>Exit plan</td><td>You should know the likely extraction direction before the first fight starts.</td><td><a href="/map-locations">Map &amp; Locations</a></td></tr>
        </tbody>
      </table>

      <h2>Choose a Route That Can Survive Interruption</h2>
      <p>A good beginner route has a clean retreat path. Avoid routes that force your Trampler into awkward turns, expose your engine smoke for too long, or require the whole crew to scatter far away from the vehicle. In SAND, distance from the Trampler is a risk budget. Spend it only when the loot or information is worth it.</p>
      <h3>Route priorities for early runs</h3>
      <ol>
        <li>Stop near cover or terrain that breaks line of sight instead of parking in the most visible open lane.</li>
        <li>Send one player to scout or loot while another watches the Trampler if you are in a duo or squad.</li>
        <li>Do not spend more time at a POI just because the first boxes were good. Good loot is a reason to leave, not a reason to get louder.</li>
        <li>Return to cargo before pushing a second objective. Loot in your backpack is still exposed; loot in the Trampler is closer to becoming progress.</li>
      </ol>

      <h2>Solo Play: Reduce the Number of Jobs</h2>
      <p>Solo is possible, but it is demanding because one player must drive, listen, loot, fight, repair, and extract. The answer is not to play faster. The answer is to reduce the number of simultaneous problems. Use shorter routes, avoid unnecessary cannon fights, and treat every stop as temporary.</p>
      <p>If you are solo, your best early goal is information. Learn how long it takes to start the Trampler, how far you can safely loot before returning, what sounds indicate nearby crews, and how much exposure an extraction attempt creates. Solo players should often leave with partial value instead of staying for perfect value.</p>

      <h2>PvP Awareness Without Chasing Every Fight</h2>
      <p>SAND rewards aggression when a crew is ready, but new players often confuse noise with opportunity. A cannon fight in the distance might be weakened enemies, or it might be a better crew using the fight to bait third parties. Before moving toward combat, ask what you gain if the fight is real and what you lose if it is bait.</p>
      <ul>
        <li><strong>Move toward fights</strong> when your Trampler has fuel, your route has cover, and your cargo is not already worth extracting.</li>
        <li><strong>Move away from fights</strong> when your crew is split, your Trampler is damaged, your cargo is valuable, or extraction is already nearby.</li>
        <li><strong>Hold position</strong> when you hear movement but do not yet know whether it is a Trampler, infantry, or AI pressure.</li>
      </ul>

      <h2>Extraction Discipline</h2>
      <p>Extraction is not the end screen. It is another contested phase of the raid. Expect nearby players to notice movement, smoke, sound, or timing. Arrive with enough fuel and health to reposition if the first extraction becomes unsafe. If your Trampler is carrying meaningful value, your job is to leave, not prove you can win one more fight.</p>
      <h3>Use this extraction test</h3>
      <p>Before calling extraction, answer three questions: Can we defend this angle for the timer? Can we move if another Trampler appears? Is the loot already worth leaving with? If the answer to two of those is no, reposition or reduce risk before committing.</p>

      <h2>What to Upgrade First</h2>
      <p>Early unlocks should support stability. A larger plan belongs in the <a href="/database">Tech Tree Database</a>, but the first practical priority is simple: keep the Trampler moving, carry enough value to justify extraction, and bring enough firepower to discourage easy pressure.</p>
      <ul>
        <li><strong>Godlewski path:</strong> useful when you want better chassis, reactor, movement, and crew reliability.</li>
        <li><strong>Kaiser path:</strong> useful when your raids fail because cargo or mounted firepower is too limited.</li>
        <li><strong>Landwehr path:</strong> useful when your crew is regularly forced into boarding, defense, and PvP pressure.</li>
      </ul>

      <h2>Common Beginner Mistakes</h2>
      <p>The live game can still feel uneven from session to session. Do not let one unstable run teach the wrong lesson. Separate technical frustration from tactical mistakes. If the server feels rough, choose shorter routes. If the route failed because you overextended, change the route. If the fight failed because your crew had no roles, fix communication before blaming the weapon.</p>
      <ul>
        <li>Leaving the Trampler exposed while everyone loots indoors.</li>
        <li>Using every resource pickup as a reason to continue instead of a reason to extract.</li>
        <li>Driving toward cannon fire without a retreat path.</li>
        <li>Starting extraction before checking fuel, angles, and nearby sound cues.</li>
        <li>Trying to solo with a squad route instead of a solo route.</li>
      </ul>

      <h2>Simple First-Run Plan</h2>
      <p>For a clean first session, prepare fuel, a basic weapon, matching ammo, and one recovery item. Pick one nearby POI. Park with a retreat path. Loot for a short window. Return to cargo. Leave when you have enough value to care about losing it. After the raid, write down what actually caused risk: route, fuel, noise, fight choice, extraction timing, or crew roles. That note is more useful than one extra box.</p>

      <h2>Final Advice</h2>
      <p>SAND is at its best when the Trampler feels like a moving plan instead of a moving backpack. Treat every upgrade, route, and fight as part of that plan. The strongest new players are not the ones who win every fight; they are the ones who learn which fights are worth reaching and which ones should be left behind in the dust.</p>
    `
  },
  {
    id: 2,
    title: 'How to Extract in SAND: Raiders of Sophie',
    h1: 'How to Extract in SAND: Raiders of Sophie',
    description: 'Call the radio tower, hold the evac timer, board the dropship cable, and leave SAND: Raiders of Sophie with loot instead of excuses.',
    publishDate: '2026-06-29',
    imageUrl: '/images/guides/steam-guide-03.jpg',
    imageAlt: 'SAND Raiders of Sophie extraction radio tower route with desert cover',
    addressBar: 'sand-raiders-of-sophie-how-to-extract',
    focus: 'Extraction route',
    seo: {
      title: "SAND Extract Guide - Escape With Loot",
      description: "Learn how to extract in SAND: Raiders of Sophie, call the radio tower, secure loot, board the dropship cable, and avoid failed extraction.",
      keywords: "sand raiders of sophie how to extract, SAND extract guide, radio tower, dropship, loot"
    },
    category: 'Extraction',
    isPublished: true,
    detailsHtml: `
      <p>To extract in SAND: Raiders of Sophie, drive your Trampler to an active extraction tower, climb to the radio, call the dropship, survive the exposed timer, then grab the hanging cable before the boarding window closes. Extraction is not a menu action. It is the final contested phase of the raid.</p>

      <p><strong>Field status:</strong> current public Early Access behavior. Extraction timing, tower availability, and cargo banking can change between patches, so treat exact timers as patch-sensitive and verify after major updates.</p>

      <h2>How extraction works in SAND: Raiders of Sophie</h2>
      <p>The extraction loop is built around a radio tower and a dropship pickup. Once you call evac, the game gives nearby players enough visual and audio information to punish sloppy exits. If you are carrying rare loot, plan the extraction before the storm or another Trampler forces your route.</p>

      <table>
        <thead>
          <tr><th>Phase</th><th>Action</th><th>Main risk</th></tr>
        </thead>
        <tbody>
          <tr><td>Find exit</td><td>Route to a white-door extraction marker or radio tower.</td><td>Driving into exposed ground with no backup tower.</td></tr>
          <tr><td>Call evac</td><td>Climb the tower and interact with the radio console.</td><td>Smoke, sound, and tower position reveal the attempt.</td></tr>
          <tr><td>Hold timer</td><td>Defend the area while the dropship arrives.</td><td>PvP pushes, NPC pressure, bad parking, split crew.</td></tr>
          <tr><td>Board cable</td><td>Grab the hanging cable before the boarding window closes.</td><td>Missing the rope, looting too late, or dying on the final climb.</td></tr>
        </tbody>
      </table>

      <figure class="guide-inline-media">
        <img src="/images/guides/steam-guide-03.jpg" alt="SAND Raiders of Sophie extraction radio tower location for dropship escape" title="SAND Raiders of Sophie extraction radio tower" loading="lazy" />
        <figcaption>Extraction towers are route decisions. Approach with cover, a backup exit, and enough time to leave if the first tower turns bad.</figcaption>
      </figure>

      <h3>When extraction becomes available</h3>
      <p>In Voyage, extraction is more forgiving and works as the cleaner mode for learning the tower sequence. In Storm Dive, the extraction layer is stricter: tower timing matters more, active exits can become contested, and a used or blocked tower can force a second route. Do not enter Storm Dive with a one-exit plan.</p>

      <p>Practical rule: if your cargo would slow your next upgrade when lost, stop extending the route and start moving toward extraction.</p>

      <h3>What you lose if you fail to extract</h3>
      <p>You risk losing character-carried loot, unsecured cargo, progress items, and the time invested in the route. Trampler storage behavior is the part to verify after patches. Do not rely on loose floor cargo when the item matters. Put valuable items in your inventory, a proper container, or secured Trampler storage before the radio call.</p>

      <h2>Step-by-step extraction guide</h2>
      <h3>Prepare your walker before leaving</h3>
      <p>Before you drive to the tower, run a short extraction check. This is not busywork. Most failed extractions start because the crew calls the radio before parking, storing loot, or assigning angles.</p>

      <table>
        <thead>
          <tr><th>Check</th><th>Pass condition</th><th>Useful reference</th></tr>
        </thead>
        <tbody>
          <tr><td>Mobility</td><td>The Trampler can still turn, climb, and leave cover.</td><td><a href="/database">Tech Tree Database</a></td></tr>
          <tr><td>Power</td><td>You have enough energy margin to reposition after a bad tower call.</td><td><a href="/wiki/resources#resource-20">NZ Mk2 Energy Rod</a></td></tr>
          <tr><td>Cargo</td><td>Rare loot is secured, not scattered on the floor.</td><td><a href="/wiki/resources">Resources Wiki</a></td></tr>
          <tr><td>Defense</td><td>At least one player watches the approach while another calls radio.</td><td><a href="/wiki/weapons">Weapons Wiki</a></td></tr>
          <tr><td>Route</td><td>You know the primary tower and one backup path.</td><td><a href="/map-locations">Map &amp; Locations</a></td></tr>
        </tbody>
      </table>

      <h3>Secure loot before heading to extraction</h3>
      <p>Sort cargo before you enter the extraction zone. Do not start inventory management after green smoke or tower activity has advertised your location.</p>

      <ol>
        <li>Move rare upgrade materials and quest items first.</li>
        <li>Bank high-value trade loot before bulk resources.</li>
        <li>Keep weapons, shells, and ammo accessible if the exit becomes a fight.</li>
        <li>Drop low-value cargo if weight, clutter, or sorting time threatens the extraction.</li>
      </ol>

      <figure class="guide-inline-media">
        <img src="/images/guides/steam-guide-01.webp" alt="SAND Raiders of Sophie Trampler extraction route with loot platform and desert cover" title="SAND Raiders of Sophie safe extraction route planning" loading="lazy" />
        <figcaption>A clean Trampler route beats a full cargo hold that cannot reach the cable window.</figcaption>
      </figure>

      <h3>Avoid common extraction mistakes</h3>
      <table>
        <thead>
          <tr><th>Mistake</th><th>Why it fails</th><th>Fix</th></tr>
        </thead>
        <tbody>
          <tr><td>Calling radio before parking</td><td>You burn the timer while repositioning.</td><td>Park first, then call.</td></tr>
          <tr><td>Everyone climbs the tower</td><td>No one watches the approach.</td><td>Send one caller, keep lookouts below.</td></tr>
          <tr><td>Waiting inside the Trampler</td><td>You still need to board the cable.</td><td>Stage near cover, then move fast.</td></tr>
          <tr><td>Looting during the final window</td><td>The cable window is short and punishes greed.</td><td>Stop looting when evac starts.</td></tr>
          <tr><td>Using the closest tower blindly</td><td>Closest can also be most exposed.</td><td>Pick the tower with the cleanest approach.</td></tr>
        </tbody>
      </table>

      <h2>Best extraction tips for solo and team play</h2>
      <p>Solo extraction is about reducing jobs. Team extraction is about assigning jobs. In both cases, the answer is not more noise; it is less wasted movement.</p>

      <table>
        <thead>
          <tr><th>Role</th><th>Job</th><th>Failure sign</th></tr>
        </thead>
        <tbody>
          <tr><td>Solo</td><td>Park with a retreat angle, call radio, hold one side, board early.</td><td>You are still sorting loot after the dropship is inbound.</td></tr>
          <tr><td>Caller</td><td>Climb tower and start evac.</td><td>More than one player is idle at the radio.</td></tr>
          <tr><td>Driver</td><td>Keep the Trampler positioned and ready to move.</td><td>The vehicle is blocked, tilted, or facing the wrong way.</td></tr>
          <tr><td>Lookout</td><td>Watch dunes, rocks, buildings, and engine trails.</td><td>The first warning is enemy fire.</td></tr>
          <tr><td>Cargo player</td><td>Confirm high-value storage before the call.</td><td>Rare items are still loose during the timer.</td></tr>
        </tbody>
      </table>

      <h3>Safe extraction routes</h3>
      <p>A safe extraction route is not the shortest line to the icon. It is the route with the fewest forced stops. Prefer terrain that breaks line of sight, flat parking, and a turn-out path if another crew appears. Avoid obvious open dune crossings after firing weapons or looting loud POIs.</p>

      <p>If you are still learning the map, pair this guide with the <a href="/map-locations">SAND map and locations guide</a> and the <a href="/guides/first-stable-runs-survival-guide">first stable runs survival guide</a>. Those pages cover route discipline before the extraction timer starts.</p>

      <h3>When to leave early</h3>
      <p>Leave early when the run has already paid for itself. Rare upgrade materials, damaged mobility, low ammo, nearby Trampler fire, or a contested Storm Dive tower are all valid reasons to cut the route. The player who extracts medium loot progresses faster than the player who dies protecting perfect loot.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/steam-guide-02.jpg" alt="SAND Raiders of Sophie crew defending Trampler weapons before extraction" title="SAND Raiders of Sophie extraction defense setup" loading="lazy" />
        <figcaption>Assign defense before calling evac. A mounted weapon is only useful if someone is watching the lane that matters.</figcaption>
      </figure>

      <h2>Why extraction fails</h2>
      <h3>Can't trigger extraction</h3>
      <table>
        <thead>
          <tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr>
        </thead>
        <tbody>
          <tr><td>Radio does nothing</td><td>You are not at the correct console or the tower is not active.</td><td>Climb to the radio point and verify mode rules.</td></tr>
          <tr><td>Tower unavailable</td><td>Storm Dive timing, a used tower, or a contested exit changed the route.</td><td>Move to backup extraction before the storm forces it.</td></tr>
          <tr><td>Crew cannot board</td><td>Bad parking or missed cable timing.</td><td>Stage closer to the rope path before the window opens.</td></tr>
          <tr><td>Loot not counting cleanly</td><td>Unsecured cargo or patch-sensitive storage behavior.</td><td>Secure valuable loot before the radio call.</td></tr>
        </tbody>
      </table>

      <h3>Died before extraction completed</h3>
      <p>Extraction does not protect you until the sequence finishes. If enemies push during the final window, stop repairing, stop looting, and stop debating. Fight only long enough to reach the cable. Once the cable is available, boarding is the objective.</p>

      <h2>Final field rule</h2>
      <p>Extraction is a routing decision, not a button press. In SAND: Raiders of Sophie, the crew that leaves with useful loot beats the crew that dies trying to protect perfect loot. Once your cargo is worth defending, start planning the exit before the map forces one on you.</p>
    `
  },
  {
    id: 5,
    title: 'SAND: Raiders of Sophie Key Guide: Military Crates, Black Box, Blue Key, and Green Key',
    h1: 'SAND: Raiders of Sophie Keys, Military Crates, and Black Box Guide',
    description: 'Open military crates, handle locked boxes, route box-key checks, and decide when Black Box, blue key, green key, or black key loot is worth the risk.',
    publishDate: '2026-07-14',
    imageUrl: '/images/guides/sand-keys-military-crates-black-box.jpg',
    imageAlt: 'SAND Raiders of Sophie key guide for military crates locked boxes Black Box blue key and green key',
    addressBar: 'sand-raiders-of-sophie-keys-military-crates-black-box-guide',
    focus: 'Keys, crates, and Black Box routing',
    seo: {
      title: 'SAND Key Guide: Military Crates and Black Box',
      description: 'Open military crates, handle locked boxes, track box-key checks, and decide when Black Box, blue, green, or black keys matter.',
      keywords: 'SAND military crates, locked box, Black Box, blue key, green key'
    },
    category: 'Loot',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> military crates and locked boxes are route checks, not brute-force containers. Read the prompt, carry only the keys your route can actually use, and leave if the box requirement does not match your inventory. Black Box is different: it is a high-value trade and research item tied to enemy Trampler kills, so do not sell or spend it without checking your next tech-tree node.</p>

      <p><strong>Field status:</strong> current public Early Access behavior. Key prompts, loot doors, and crate requirements can change between patches. If the live prompt disagrees with this guide, trust the prompt first and treat this page as the route discipline layer.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-keys-military-crates-black-box.jpg" alt="SAND Raiders of Sophie locked loot doors military crate and key route guide" title="SAND Raiders of Sophie military crate and key guide" loading="lazy" />
        <figcaption>Locked loot is only value after extraction. Confirm the prompt, secure the route, then decide whether the key is worth spending.</figcaption>
      </figure>

      <h2>Military crates and locked boxes</h2>
      <h3>How to open military crates</h3>
      <p>Approach the crate or box close enough to read the interaction prompt before moving cargo around. If it asks for a specific key, that is the requirement. If it does not show an interact prompt, do not waste time circling it under PvP pressure. Mark it as a missed route check and leave.</p>
      <p>The mistake is carrying every possible key into every raid. Keys are dead cargo until they match a prompt, and dead cargo becomes expensive when another Trampler hears your stop. Use this basic check before opening a military crate or locked box:</p>

      <table>
        <thead>
          <tr><th>Prompt or object</th><th>What it means</th><th>Field rule</th></tr>
        </thead>
        <tbody>
          <tr><td>Military crate</td><td>High-risk loot container, usually worth checking if the area is controlled.</td><td>Clear angles first; do not open while the driver is blind.</td></tr>
          <tr><td>Locked military box</td><td>Requires the matching key or current-build unlock condition.</td><td>If the prompt names a key you do not have, leave it.</td></tr>
          <tr><td>Colored lock prompt</td><td>Blue, green, black, or another key color is being checked.</td><td>Spend the key only if the route can still extract.</td></tr>
          <tr><td>No prompt</td><td>Wrong angle, decorative object, already looted state, or unsupported interaction.</td><td>Recheck once from a clean angle, then move.</td></tr>
        </tbody>
      </table>

      <p>If your crew is still learning extraction timing, pair this with the <a href="/guides/sand-raiders-of-sophie-how-to-extract">SAND extraction guide</a>. A locked crate is not progress if the dropship window is already compromised.</p>

      <h3>Where to find the box key</h3>
      <p>Do not plan around one permanent box-key coordinate. In the current public route logic, treat the box key as a loot-door route item: check guarded loot areas, locked-door paths, military containers, and high-value interiors, then record which prompt consumed or requested the key. If the key does not appear before the route turns loud, extract and reset instead of widening the search until you die.</p>
      <p><strong>Practical route:</strong> scout the POI, confirm the locked-box prompt, search nearby high-value containers, return to the Trampler with any key item, then reopen only after cargo and defense are staged. Solo players should avoid opening a box if the Trampler is parked badly or the engine smoke is visible across open dunes.</p>

      <h2>Black box and colored keys</h2>
      <h3>Black box locations and uses</h3>
      <p>The site resource index tracks <a href="/wiki/resources#resource-34">Black Box</a> as a Noteworthy Resource used for trade or research tree progress. The current note places it near the destroyed reactor after defeating an enemy Trampler. That makes it a combat reward, not a casual crate pickup.</p>
      <figure class="guide-inline-media">
        <img src="/images/wiki/resources/black-box.jpg" alt="SAND Raiders of Sophie Black Box resource used for trade and research" title="SAND Raiders of Sophie Black Box resource" loading="lazy" />
        <figcaption>Black Box is progression-sensitive. It appears repeatedly in Tier II to IV research costs, especially combat and Trampler upgrade paths.</figcaption>
      </figure>
      <p>Before selling or spending a Black Box, check the <a href="/database">Tech Tree Database</a>. Multiple Landwehr, weapon, armor, and advanced compartment nodes list Black Box requirements. If your next unlock needs it, store it. If your crew is already past that branch and needs currency, then it becomes a trade decision.</p>

      <table>
        <thead>
          <tr><th>Black Box decision</th><th>Use it when</th><th>Do not use it when</th></tr>
        </thead>
        <tbody>
          <tr><td>Keep</td><td>Your next combat, armor, or advanced module node lists Black Box.</td><td>You are already blocked by different materials.</td></tr>
          <tr><td>Trade</td><td>The tech branch is not Black Box-gated and you need currency now.</td><td>You have not checked the database after the latest patch.</td></tr>
          <tr><td>Carry in raid</td><td>You are moving it toward extraction or storage.</td><td>You are still exploring optional POIs.</td></tr>
        </tbody>
      </table>

      <h3>Blue, green, and black keys</h3>
      <p>Colored keys should be treated as prompt-specific access items. Blue key goes to blue-lock prompts, green key goes to green-lock prompts, and black key goes to black-lock prompts only when the live UI confirms it. Do not spend a colored key on curiosity if the box is in a bad extraction position.</p>
      <p><strong>INFERRED:</strong> exact colored-key reward tables are build-sensitive. The durable rule is route order: confirm prompt, secure vehicle, open container, move reward to cargo, then decide whether the next locked object is worth another stop.</p>

      <table>
        <thead>
          <tr><th>Key type</th><th>Likely use case</th><th>Carry rule</th></tr>
        </thead>
        <tbody>
          <tr><td>Blue key</td><td>Blue-lock doors or boxes when the prompt asks for it.</td><td>Carry on blue-route checks; store otherwise.</td></tr>
          <tr><td>Green key</td><td>Green-lock prompt, often searched as "where to use green key".</td><td>Use only after confirming the route can still extract.</td></tr>
          <tr><td>Black key</td><td>Black-lock prompt or higher-risk locked loot check.</td><td>Do not gamble it on an exposed stop.</td></tr>
          <tr><td>Box key</td><td>Generic locked-box requirement when the prompt names it.</td><td>Spend near the box; do not carry it across unrelated routes.</td></tr>
        </tbody>
      </table>

      <h2>FAQ</h2>
      <h3>How do you open military crates in SAND: Raiders of Sophie?</h3>
      <p>Read the crate prompt and use the matching key or unlock condition shown by the current build. If no prompt appears after one clean recheck, move on.</p>
      <h3>Where can you get Black Box?</h3>
      <p>The current site resource note ties Black Box to the destroyed reactor area after defeating an enemy Trampler. Treat it as a combat reward and extract it quickly.</p>
      <h3>Where do you use the green key?</h3>
      <p>Use it only on a green-lock prompt. If the route is exposed or extraction is already risky, store the key and spend it on a cleaner run.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> A key in your inventory is potential value. A key spent in a bad position is just noise, smoke, and another reason for enemy crews to find you.
      </div>
    `
  },
  {
    id: 6,
    title: 'SAND: Raiders of Sophie Money Guide: Loot Distribution and What Is Safe to Sell',
    h1: 'What to Sell and How Loot Works in SAND: Raiders of Sophie',
    description: 'Decide what is safe to sell, what to keep for research or Trampler upgrades, how Valuable Papers work, and how solo or team loot distribution should stay clean.',
    publishDate: '2026-07-14',
    imageUrl: '/images/guides/sand-money-loot-safe-sell.jpg',
    imageAlt: 'SAND Raiders of Sophie money guide for loot distribution safe to sell and Valuable Papers',
    addressBar: 'sand-raiders-of-sophie-money-loot-safe-to-sell-guide',
    focus: 'Money, selling, and loot distribution',
    seo: {
      title: 'SAND Money Guide: What to Sell and Keep',
      description: 'Decide what is safe to sell in SAND, when to keep rare loot, how Valuable Papers trade, and how teams split loot.',
      keywords: 'SAND money guide, safe to sell, Valuable Papers, loot distribution'
    },
    category: 'Loot',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> sell pure trade items when they are not blocking a known exchange, keep Trampler materials and research inputs until the <a href="/database">database</a> proves you do not need them, and never split loot after extraction by memory. Valuable Papers are a trade item, so they are usually money-positive, but they still deserve one database check before you dump your whole storage.</p>

      <p><strong>Field status:</strong> current public Early Access behavior. Vendor value, exchange lists, and research costs can move between patches. Use the item tooltip and live trader UI as the final authority.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-money-loot-safe-sell.jpg" alt="SAND Raiders of Sophie what to sell keep and use money guide" title="SAND Raiders of Sophie money and safe to sell guide" loading="lazy" />
        <figcaption>Money decisions start before the vendor. The real question is whether the item is trade-only, research-gated, or route-critical.</figcaption>
      </figure>

      <h2>What is safe to sell</h2>
      <h3>Safe-to-sell short list</h3>
      <p>Use item type first, rarity second, and panic never. The <a href="/wiki/resources">Resources Wiki</a> separates trade items from crafting, research, Trampler materials, fuel, consumables, and combat utility. That split is the safest way to decide what can leave storage.</p>

      <table>
        <thead>
          <tr><th>Item group</th><th>Sell priority</th><th>Reason</th></tr>
        </thead>
        <tbody>
          <tr><td>Pure trade item</td><td>Usually safe after one tooltip check</td><td>Designed to convert into money or exchange value.</td></tr>
          <tr><td>Currency items such as Crowns</td><td>Keep as money reserve</td><td>They already function as buying power.</td></tr>
          <tr><td>Crafting / research material</td><td>Hold until next unlock is checked</td><td>Common items can become bottlenecks in bulk costs.</td></tr>
          <tr><td>Trampler component</td><td>Keep by default</td><td>Mechanical Parts, Pneumatic Parts, and Computing Modules affect build progress.</td></tr>
          <tr><td>Fuel, medicine, ammunition, utility</td><td>Keep enough for routes</td><td>Cash does not help if the next raid launches underprepared.</td></tr>
        </tbody>
      </table>

      <p>If you are new, read the <a href="/guides/first-stable-runs-survival-guide">first stable runs survival guide</a> before selling deep into storage. Early money is useful, but selling the next Trampler upgrade material creates a slower loss.</p>

      <h3>Selling valuable papers</h3>
      <p><a href="/wiki/resources#resource-25">Valuable Papers</a> are listed as a Rare Resource and Trade Item. That makes them a good sale candidate when you need money, but do not confuse "trade item" with "sell blindly forever." Check whether a trader exchange, quest, or patch-specific route has started using them before liquidating a full stack.</p>
      <figure class="guide-inline-media">
        <img src="/images/wiki/resources/valuable-papers.jpg" alt="SAND Raiders of Sophie Valuable Papers rare trade item" title="SAND Raiders of Sophie Valuable Papers" loading="lazy" />
        <figcaption>Valuable Papers are trade-focused. They are safer to sell than Trampler components, but still deserve a live UI check.</figcaption>
      </figure>

      <h2>Money and loot distribution</h2>
      <h3>What to sell to make money</h3>
      <p>Money comes from extracting value, not just finding value. A dead crew with a full backpack made zero money. Prioritize items that convert cleanly and do not block your next build plan: Valuables, Valuable Papers, Crystal when it is not needed elsewhere, District Officer's Portable Safe, and other trade-labeled goods. Keep Black Box, Computing Module, Pneumatic Parts, fuel, rare medicine, and weapon materials until your next unlock plan is clear.</p>

      <table>
        <thead>
          <tr><th>Loot item</th><th>Default action</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td>Valuables</td><td>Sell or trade after extraction</td><td>Uncommon trade item with less crafting pressure.</td></tr>
          <tr><td>Valuable Papers</td><td>Usually sell after live UI check</td><td>Rare trade item and money-focused pickup.</td></tr>
          <tr><td>District Officer's Portable Safe</td><td>Hold until route/exchange checked</td><td>Trade item, but tied to difficult urban routes.</td></tr>
          <tr><td>Black Box</td><td>Keep by default</td><td>Used for trade and many research tree nodes.</td></tr>
          <tr><td>Pneumatic Parts / Computing Module</td><td>Keep</td><td>Trampler progression bottleneck items.</td></tr>
        </tbody>
      </table>

      <p>The clean money loop is simple: extract trade goods, sell only the goods that are not upgrade-gated, then put the money into route stability. Fuel, ammo, mounted weapons, and repairs create more successful extractions. That is better income than one greedy sale.</p>

      <h3>How loot distribution works</h3>
      <p>Loot distribution is a crew rule, not a magical fairness system. Decide before the raid how the crew handles trade items, research materials, keys, and route-critical supplies. If everyone grabs what they want during the final minute, the team will misplace the exact item needed for the next upgrade.</p>

      <table>
        <thead>
          <tr><th>Crew setup</th><th>Distribution rule</th><th>Failure to avoid</th></tr>
        </thead>
        <tbody>
          <tr><td>Solo</td><td>Sort into sell, keep, and route-supply stacks after extraction.</td><td>Selling from memory without checking the database.</td></tr>
          <tr><td>Duo</td><td>One player calls trade goods, one calls upgrade materials.</td><td>Both players sell duplicates before checking the tech plan.</td></tr>
          <tr><td>Three-plus crew</td><td>Assign cargo owner, vendor owner, and upgrade owner.</td><td>No one knows who carried the Black Box or keys.</td></tr>
          <tr><td>Public or loose group</td><td>Agree on key, Black Box, and rare component ownership before opening locked loot.</td><td>Argument after extraction instead of route discipline before it.</td></tr>
        </tbody>
      </table>

      <p>For extraction-phase handling, use the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extraction guide</a>. Money only exists after the loot leaves Sophie.</p>

      <h2>FAQ</h2>
      <h3>What is safe to sell in SAND: Raiders of Sophie?</h3>
      <p>Pure trade items are the safest sale candidates. Keep Trampler materials, research inputs, Black Box, fuel, medicine, weapons, and keys until you confirm your next route or tech need.</p>
      <h3>How do you sell Valuable Papers?</h3>
      <p>Bring them out of the raid, check the live vendor or trade UI, confirm they are not needed for your next route, then sell or exchange them as a rare trade item.</p>
      <h3>How does loot distribution work?</h3>
      <p>Set crew rules before the raid. Separate trade goods, upgrade materials, keys, and route supplies. The cargo owner should confirm rare items before anyone sells from storage.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> If an item can unlock movement, weapons, power, or extraction safety, it is not junk until the database and live UI prove it.
      </div>
    `
  }
  ,
  {
    id: 7,
    title: 'SAND Server Status and Connection Fixes Guide',
    h1: 'SAND: Raiders of Sophie Server Connection Troubleshooting Guide',
    description: 'Check SAND server status, no-server lists, startup failures, and uptime questions without mixing outages with local connection problems.',
    publishDate: '2026-07-21',
    imageUrl: '/images/guides/sand-server-status-connection-troubleshooting.jpg',
    imageAlt: 'SAND Raiders of Sophie server status connection troubleshooting guide with Trampler setup screen',
    addressBar: 'sand-raiders-of-sophie-server-status-fixes',
    focus: 'Server status, connection checks, and startup fixes',
    seo: {
      title: 'SAND Server Status and Connection Fixes',
      description: 'Check SAND server status, no-server lists, startup failures, uptime questions, and local connection fixes before blaming your route.',
      keywords: 'SAND server status, servers down, no servers, startup fix'
    },
    category: 'Troubleshooting',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> separate outage checks from local fixes. If SAND: Raiders of Sophie servers are broadly down, changing files, reinstalling, or resetting your router will not solve it. If no outage signal exists, troubleshoot in this order: Steam status, game update, server list filters, region/session refresh, firewall/VPN, then startup integrity checks.</p>

      <p><strong>Field status:</strong> current public Early Access behavior as of July 21, 2026. Server rules, uptime windows, browser filters, and queue labels can change. Trust the live launcher, Steam announcements, and official channels first; use this page as the decision tree.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-server-status-connection-troubleshooting.jpg" alt="SAND Raiders of Sophie server status connection troubleshooting and startup checks" title="SAND Raiders of Sophie server status troubleshooting" loading="lazy" />
        <figcaption>Do not troubleshoot blind. Confirm whether the problem is global, regional, account/session based, or local before changing your setup.</figcaption>
      </figure>

      <h2>Current server status checks</h2>
      <h3>Server status variants</h3>
      <p>Most searches around "SAND servers down" really ask one of three things: are official services offline, is matchmaking/session listing broken, or is only your client failing to reach the list? Those are different problems. Start with public signals, then move inward.</p>

      <table>
        <thead>
          <tr><th>Symptom</th><th>Likely layer</th><th>First check</th></tr>
        </thead>
        <tbody>
          <tr><td>Everyone reports no servers</td><td>Outage or maintenance</td><td>Official announcement, Steam news, community status chatter</td></tr>
          <tr><td>Only your list is empty</td><td>Client, region, filter, session, or firewall</td><td>Restart client and Steam, reset filters, disable VPN</td></tr>
          <tr><td>You can see servers but cannot join</td><td>Version mismatch, full session, region, or auth</td><td>Update game, re-login, try a different region/session</td></tr>
          <tr><td>Game does not launch</td><td>Startup/runtime layer</td><td>Verify files, drivers, antivirus quarantine, OS requirements</td></tr>
        </tbody>
      </table>

      <p>If the whole community is reporting the same failure, stop changing your local configuration. Wait for official recovery. If reports are mixed, treat it as a local or regional issue and move to the next section.</p>

      <h3>Official server check sources</h3>
      <p>SAND is an online PvP extraction game with Steam integration and official update channels. Use sources in this order:</p>
      <ul>
        <li><strong>Steam game page and news:</strong> patch, maintenance, and launch-window announcements.</li>
        <li><strong>Official SAND site or social channels:</strong> broad service messages and event windows.</li>
        <li><strong>In-game UI:</strong> current mode labels, server list behavior, region choices, and maintenance cards.</li>
        <li><strong>Community reports:</strong> useful only after you compare time, region, and build version.</li>
      </ul>

      <p>Do not use one old Discord screenshot as permanent status. Server visibility can change by region, patch, and live test window.</p>

      <h2>Troubleshooting connection problems</h2>
      <h3>Servers not visible</h3>
      <p>"Non vedo i server" means "I cannot see the servers." Treat it as a server-list visibility problem first, not proof that the entire game is offline. Clear filters, switch region if the UI allows it, restart the game, restart Steam, and confirm that your build version matches the live branch.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-no-servers-startup-checks.jpg" alt="SAND Raiders of Sophie no servers visible startup and session troubleshooting" title="SAND Raiders of Sophie no servers and startup checks" loading="lazy" />
        <figcaption>A clean server check starts from the launcher state. Wrong build, stale session, or blocked network traffic can look like a full outage.</figcaption>
      </figure>

      <table>
        <thead>
          <tr><th>Check</th><th>What to do</th><th>Why it matters</th></tr>
        </thead>
        <tbody>
          <tr><td>Build version</td><td>Restart Steam and install pending updates.</td><td>Old clients often fail matchmaking or session discovery.</td></tr>
          <tr><td>Filters</td><td>Clear mode, region, ping, and full-server filters.</td><td>A strict filter can hide valid sessions.</td></tr>
          <tr><td>VPN/proxy</td><td>Disable temporarily and test again.</td><td>Some routes break auth, region, or latency checks.</td></tr>
          <tr><td>Firewall</td><td>Allow the game and Steam through Windows security.</td><td>Blocked traffic can produce an empty list.</td></tr>
          <tr><td>Local network</td><td>Reboot router only after outage signs are absent.</td><td>Router resets do nothing during maintenance.</td></tr>
        </tbody>
      </table>

      <h3>Game does not run typo variant</h3>
      <p>The typo "doesnt tun" usually means "doesn't run." Keep launch failure separate from server failure. If the executable never reaches the menu, the server list is irrelevant.</p>
      <p>Run a strict startup pass: verify Steam files, update GPU driver, close overlays, check antivirus quarantine, run without VPN, and confirm the minimum requirement for broadband internet and Windows 10 64-bit. If the game starts after file verification, do not change server settings yet; retest the server list from a clean launch.</p>

      <h3>How long servers stay up</h3>
      <p>There is no useful fixed uptime number to hard-code into a guide. SAND can have maintenance, patch deployments, launch stress, and mode windows. Ask a better question: is the current session browser live right now, and are official channels reporting a planned downtime?</p>
      <p>For route planning, assume any online extraction game can interrupt your evening. If your crew has limited time, use the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extraction guide</a> and keep runs short until server stability is confirmed.</p>

      <h2>FAQ</h2>
      <h3>Are SAND: Raiders of Sophie servers down?</h3>
      <p>Check official announcements, Steam news, and broad community reports first. If many players in multiple regions report the same failure, wait. If only your client is affected, troubleshoot filters, updates, VPN, firewall, and startup state.</p>
      <h3>Why can I not see servers?</h3>
      <p>Empty server lists can come from outages, wrong build, strict filters, region/session issues, VPN/proxy routing, or firewall blocks. Do not assume outage until you compare with external reports.</p>
      <h3>Why does SAND not launch?</h3>
      <p>Verify files, update drivers, close overlays, check antivirus quarantine, and relaunch Steam. Launch failure is a local runtime problem until the game reaches the menu and fails at server discovery.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> Diagnose from outside in. Global outage, official maintenance, Steam/session state, local filters, local network, then PC runtime. Changing that order wastes time.
      </div>
    `
  },
  {
    id: 8,
    title: 'SAND Map and POI Route Planning Guide',
    h1: 'SAND: Raiders of Sophie Map and POI Guide',
    description: 'Plan SAND map routes around POIs, team pressure, loot spots, Black Box checks, green key use, and extraction timing.',
    publishDate: '2026-07-21',
    imageUrl: '/images/guides/sand-map-poi-route-planning.jpg',
    imageAlt: 'SAND Raiders of Sophie map POI route planning with Trampler combat deck and loot risk',
    addressBar: 'sand-raiders-of-sophie-map-poi-guide',
    focus: 'POIs, team density, loot routes, and key checks',
    seo: {
      title: 'SAND Map and POI Route Planning Guide',
      description: 'Plan SAND map routes around POIs, team pressure, loot spots, Black Box checks, green key use, and extraction timing.',
      keywords: 'SAND map, POI guide, loot spots, teams on map, green key'
    },
    category: 'Maps',
    isPublished: true,
    detailsHtml: `
      <p><strong>Fast answer:</strong> a good SAND map route is not "visit every POI." It is one primary POI, one fallback loot stop, one key or Black Box check if the prompt appears, and one extraction plan before other Tramplers hear your engine. POIs are value only when your crew can leave with the loot.</p>

      <p><strong>Field status:</strong> current public Early Access route logic as of July 21, 2026. SAND uses a massive procedurally generated world, so exact layouts, team density, and loot tables can move. Treat this guide as a route framework, not a permanent coordinate sheet.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-map-poi-route-planning.jpg" alt="SAND Raiders of Sophie map POI route planning for Trampler crews" title="SAND Raiders of Sophie map and POI route planning" loading="lazy" />
        <figcaption>Route planning starts from what the crew can defend. A strong POI is worthless if the Trampler is parked badly or extraction is late.</figcaption>
      </figure>

      <h2>Map and POI basics</h2>
      <h3>Map with POI demand</h3>
      <p>Players ask for a "map with POI" because Sophie is not a clean corridor. Official store copy describes cities, ruins, shipwrecks, and remnants of a fallen world. In practice, treat every POI as one of four route types: loot, combat, key check, or extraction support.</p>

      <table>
        <thead>
          <tr><th>POI type</th><th>Why you go there</th><th>Leave when</th></tr>
        </thead>
        <tbody>
          <tr><td>City or ruin</td><td>Dense loot, interiors, hostile contact, route information.</td><td>Inventory value beats remaining search time.</td></tr>
          <tr><td>Shipwreck or industrial site</td><td>Materials, containers, line-of-sight risk, Trampler ambush angles.</td><td>Engine noise or enemy smoke appears.</td></tr>
          <tr><td>Locked/key POI</td><td>Military crates, colored locks, Black Box-adjacent routing.</td><td>The prompt does not match your key or extraction is compromised.</td></tr>
          <tr><td>Extraction-adjacent area</td><td>Staging, defense, cargo sorting, final tower path.</td><td>The dropship window is ready or PvP pressure is closing.</td></tr>
        </tbody>
      </table>

      <p>If you need a baseline exit routine, pair this page with the <a href="/guides/sand-raiders-of-sophie-how-to-extract">extraction guide</a>. POI routing without extraction discipline is just delayed loot loss.</p>

      <h3>Teams on the map</h3>
      <p>Do not build routes around a fixed team count unless the live server UI states it. SAND is multiplayer/PvP and supports crews, solo runs, and contested extraction. The practical answer is simpler: assume another team can arrive before you finish looting, especially near smoke, cannon fire, high-value containers, and extraction points.</p>

      <table>
        <thead>
          <tr><th>Signal</th><th>What it means</th><th>Route response</th></tr>
        </thead>
        <tbody>
          <tr><td>Smoke on horizon</td><td>Trampler movement or combat nearby.</td><td>Shorten the POI and prep exit.</td></tr>
          <tr><td>Cannon fire</td><td>Active PvP or PvE fight.</td><td>Flank only if cargo is low; extract if cargo is high.</td></tr>
          <tr><td>Freshly looted area</td><td>Another crew passed recently.</td><td>Check one more container, then leave.</td></tr>
          <tr><td>Silent high-value POI</td><td>Could be empty, could be bait.</td><td>Park for retreat, not for convenience.</td></tr>
        </tbody>
      </table>

      <p>For crew-size planning, use the <a href="/guides/sand-raiders-of-sophie-pvp-pve-team-size-guide">PvP, PvE, solo, and team-size guide</a>. Team density is a risk-planning input, not trivia.</p>

      <figure class="guide-inline-media">
        <img src="/images/guides/sand-map-loot-key-routes.jpg" alt="SAND Raiders of Sophie loot route key checks and POI extraction planning" title="SAND Raiders of Sophie loot and key route planning" loading="lazy" />
        <figcaption>Key and loot routes should be short. Every extra stop gives other crews more time to locate your Trampler.</figcaption>
      </figure>

      <h2>Routes for loot and keys</h2>
      <h3>Loot route planning</h3>
      <p>"Good loot spots" are good only when they match your crew size, cargo space, and exit path. Solo players should choose one compact objective. Duo crews can split driver/scout jobs. Larger crews can clear wider, but only if one player owns cargo and another owns extraction timing.</p>

      <table>
        <thead>
          <tr><th>Route style</th><th>Best use</th><th>Main mistake</th></tr>
        </thead>
        <tbody>
          <tr><td>Solo short loop</td><td>One low-to-mid POI, quick cargo, early extraction.</td><td>Chasing a second POI after first good loot.</td></tr>
          <tr><td>Duo key loop</td><td>One player holds vehicle/extract plan, one checks prompt and loot.</td><td>Both leave the Trampler unattended.</td></tr>
          <tr><td>Combat loot loop</td><td>High-value site after crew roles and guns are assigned.</td><td>Starting the fight before cargo route is clear.</td></tr>
          <tr><td>Storm Dive push</td><td>Higher risk, higher reward when the crew can extract under pressure.</td><td>Waiting until storm or PvP forces the exit.</td></tr>
        </tbody>
      </table>

      <p>Money routes should be checked against the <a href="/guides/sand-raiders-of-sophie-money-loot-safe-to-sell-guide">money and safe-to-sell guide</a>. Do not fill cargo with items your next research branch needs.</p>

      <h3>Key and black box routes</h3>
      <p>Key routing starts at the prompt. If a green key, blue key, black key, or box key is required, confirm the interaction, secure the Trampler, then open only if extraction still makes sense. Do not spend a colored key just because the POI looks quiet.</p>
      <p>For Black Box, use the <a href="/guides/sand-raiders-of-sophie-keys-military-crates-black-box-guide">keys and Black Box guide</a> before selling or gambling it. The <a href="/database">Tech Tree Database</a> can show whether it blocks your next upgrade. A Black Box that dies in cargo because the crew overextended is not progression.</p>

      <h2>FAQ</h2>
      <h3>Does SAND: Raiders of Sophie have a map with POIs?</h3>
      <p>Use POIs as route categories: loot, combat, key checks, extraction support, and danger signals. Exact layouts can shift because Sophie is procedural, so route logic matters more than static coordinates.</p>
      <h3>How many teams are on a map?</h3>
      <p>Read exact limits from the live server or mode UI when available. For field planning, assume another crew can reach your POI or extraction before you finish.</p>
      <h3>Where can I get Black Box or use green key?</h3>
      <p>Confirm the live prompt and route state first. Black Box and colored keys are high-value route decisions; use the keys guide and database before spending or selling them.</p>

      <div class="pro-tip">
        <strong>Field rule:</strong> A POI is not a destination. It is a timed decision between value, noise, cargo, enemy teams, and extraction distance.
      </div>
    `
  }
];

export const publishedGuides = guidesList.filter((guide) => guide.isPublished);

