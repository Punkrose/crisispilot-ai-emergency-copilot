import './App.css'

const actions = [
  { title: 'I need shelter', detail: 'Find nearest safe place, route, and what to bring.', hot: true },
  { title: 'Someone is injured', detail: 'Step-by-step first aid until help arrives.', hot: true },
  { title: 'Power is out', detail: 'Battery plan, fridge safety, and local outage check.', hot: false },
  { title: 'Family check-in', detail: 'Send one-tap status message to trusted contacts.', hot: false },
]

const signals = [
  ['Location risk', 'Flood watch within 3.2 km', 'Elevated'],
  ['Household status', '3 of 4 people checked in', 'Waiting'],
  ['Supplies', 'Water: 18h · Battery: 42%', 'Low soon'],
  ['Route', 'North bridge closed', 'Reroute'],
]

const protocol = [
  ['01', 'Understand', 'Ask only the minimum questions needed in a stressful moment.'],
  ['02', 'Prioritize', 'Rank actions by danger, time sensitivity, and available resources.'],
  ['03', 'Guide', 'Show simple instructions with large controls and offline fallback.'],
  ['04', 'Confirm', 'Track check-ins, next action, and whether the person is safe.'],
]

function App() {
  return (
    <main className="app">
      <nav className="nav">
        <div className="brand"><span>CP</span>CrisisPilot</div>
        <div className="navRight"><a>Assist</a><a>Map</a><a>Contacts</a><button>Start safety check</button></div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="kicker">AI emergency co-pilot for families and local teams</p>
          <h1>When panic starts, CrisisPilot gives the next safe step.</h1>
          <p className="lead">A calm, one-tap emergency assistant that turns location, risk signals, household status, and local instructions into simple action cards for floods, earthquakes, outages, injuries, and evacuations.</p>
          <div className="heroActions"><button className="primary">Run emergency demo</button><button className="ghost">View safety protocol</button></div>
        </div>

        <div className="phone">
          <div className="status"><span>Live safety mode</span><b>03:42</b></div>
          <div className="pulse"><i /><i /><i /><strong>SAFE ROUTE</strong></div>
          <div className="alertCard"><p>Priority action</p><h3>Move to higher ground now</h3><span>Flood risk rising. Take ID, water, charger, and medication.</span></div>
          <div className="quick"><button>Share status</button><button>Call contact</button></div>
        </div>
      </section>

      <section className="actionGrid">
        {actions.map(action => <article className={action.hot ? 'action hot' : 'action'} key={action.title}>
          <div className="dot" />
          <h3>{action.title}</h3>
          <p>{action.detail}</p>
          <button>{action.hot ? 'Start now' : 'Open'}</button>
        </article>)}
      </section>

      <section className="dashboard">
        <div className="panel mapPanel">
          <p className="kicker">Situation map</p>
          <h2>Critical signals, translated into plain language.</h2>
          <div className="mapOrb"><span /><span /><span /><b>HOME</b></div>
        </div>
        <div className="panel signalPanel">
          <p className="kicker">Live readiness</p>
          {signals.map(([name, value, state]) => <div className="signal" key={name}><div><h3>{name}</h3><p>{value}</p></div><span>{state}</span></div>)}
        </div>
      </section>

      <section className="protocol">
        <div className="protocolHead"><p className="kicker">Built for stressful moments</p><h2>Designed around clarity, speed, and human safety.</h2></div>
        <div className="steps">
          {protocol.map(([n,t,d]) => <div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
    </main>
  )
}

export default App
