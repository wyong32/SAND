export const guidesList = [
  {
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
  }
];

export const publishedGuides = guidesList.filter((guide) => guide.isPublished);
