export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Evan at Motion Method home">
            <img src="/motion-method-logo.png" alt="Motion Method" />
          </a>
          <div className="nav-links">
            <a href="#programs">Coaching</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-cta" href="#consultation">Book a free consult <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Personal coaching with Evan · Toronto</p>
            <h1>Strong looks<br />different on<br /><em>everyone.</em></h1>
            <p className="hero-intro">
              Personal training built around your body, your schedule, and the life
              you actually live. No extremes. Just a clear plan and Evan in your corner.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#consultation">Start with a free consult <span>↗</span></a>
              <a className="text-link" href="#programs">Explore coaching <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/motion-method-training.png"
              alt="A personal trainer coaching a client through a strength exercise"
            />
            <div className="image-shade" />
            <div className="hero-stamp"><span>MOVE WELL</span><strong>MM</strong><span>GET STRONG</span></div>
            <div className="availability"><span className="pulse" /> Now booking consultations</div>
            <div className="image-caption"><span>01</span><p>Coaching that meets<br />you where you are.</p></div>
          </div>
        </section>

        <div className="marquee" aria-label="Training values">
          <div>
            <span>Personal</span><i>✦</i><span>Purposeful</span><i>✦</i><span>Progressive</span><i>✦</i><span>Sustainable</span><i>✦</i><span>Personal</span><i>✦</i><span>Purposeful</span>
          </div>
        </div>

        <section className="manifesto section-shell" id="approach">
          <div className="section-number">/ 01 — THE METHOD</div>
          <div className="manifesto-main">
            <p className="kicker">Real life is part of the program.</p>
            <h2>Training should make your life <em>bigger.</em> Not take it over.</h2>
          </div>
          <div className="manifesto-aside">
            <p>
              The best plan is the one you can repeat. We build strength, skill, and
              confidence with thoughtful progress—not punishing workouts or all-or-nothing rules.
            </p>
            <div className="mini-list">
              <span><b>01</b> Understand your starting point</span>
              <span><b>02</b> Train with intent</span>
              <span><b>03</b> Adjust as life changes</span>
            </div>
          </div>
        </section>

        <section className="programs" id="programs">
          <div className="section-shell programs-head">
            <div className="section-number light">/ 02 — COACHING</div>
            <h2>Choose your<br /><em>way in.</em></h2>
            <p>Every option begins with a conversation about what you want, what you need, and what will actually fit.</p>
          </div>
          <div className="section-shell program-grid">
            <article className="program-card featured">
              <div className="card-top"><span className="card-number">01</span><span className="tag">Most personal</span></div>
              <div>
                <h3>1:1 Personal<br />Training</h3>
                <p>Hands-on coaching, form feedback, and programming made entirely around you.</p>
              </div>
              <ul>
                <li>Movement and goal assessment</li>
                <li>Custom strength programming</li>
                <li>Real-time coaching and adjustments</li>
                <li>Progress tracking</li>
              </ul>
              <a href="#consultation">Find your fit <span>↗</span></a>
            </article>

            <article className="program-card">
              <div className="card-top"><span className="card-number">02</span><span className="tag">Train together</span></div>
              <div>
                <h3>Partner<br />Training</h3>
                <p>Share the session with a friend or partner while still getting personal guidance.</p>
              </div>
              <ul>
                <li>Programming for two</li>
                <li>Technique coaching</li>
                <li>Built-in accountability</li>
                <li>A more social way to train</li>
              </ul>
              <a href="#consultation">Find your fit <span>↗</span></a>
            </article>

            <article className="program-card">
              <div className="card-top"><span className="card-number">03</span><span className="tag">Train anywhere</span></div>
              <div>
                <h3>Online<br />Coaching</h3>
                <p>A clear plan, ongoing check-ins, and expert support wherever you choose to train.</p>
              </div>
              <ul>
                <li>Personalized weekly plan</li>
                <li>Exercise video guidance</li>
                <li>Regular check-ins</li>
                <li>Program updates as you progress</li>
              </ul>
              <a href="#consultation">Find your fit <span>↗</span></a>
            </article>
          </div>
        </section>

        <section className="process section-shell">
          <div className="section-number">/ 03 — YOUR START</div>
          <div className="process-heading">
            <h2>Simple from<br /><em>day one.</em></h2>
            <p>No pressure, no mystery. We’ll make the next step obvious.</p>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Talk it through</h3><p>A free, relaxed conversation about your goals, history, schedule, and questions.</p></div></li>
            <li><span>02</span><div><h3>Build your plan</h3><p>We turn your starting point into a practical approach designed around your week.</p></div></li>
            <li><span>03</span><div><h3>Train. Learn. Progress.</h3><p>You’ll know what you’re doing, why you’re doing it, and how it’s moving you forward.</p></div></li>
          </ol>
        </section>

        <section className="coach-section" id="about">
          <div className="coach-shape" aria-hidden="true"><span>E</span></div>
          <div className="coach-copy">
            <div className="section-number light">/ 04 — MEET EVAN</div>
            <p className="kicker acid">Supportive. Direct. Fully in your corner.</p>
            <h2>Hey, I’m Evan.<br /><em>Let’s get moving.</em></h2>
            <p className="coach-lead">
              You don’t need to be “fit enough” to start. My job is to make training feel
              clear, useful, and built for you—from your first rep to your next big goal.
            </p>
            <div className="coach-facts">
              <div><strong>In-person</strong><span>Toronto-area coaching</span></div>
              <div><strong>Remote</strong><span>Online support anywhere</span></div>
              <div><strong>Your pace</strong><span>Progress without pressure</span></div>
            </div>
          </div>
        </section>

        <section className="faq section-shell">
          <div>
            <div className="section-number">/ 05 — GOOD TO KNOW</div>
            <h2>Questions,<br /><em>answered.</em></h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do I need gym experience?<span>+</span></summary>
              <p>Not at all. Beginners are welcome. You’ll learn how to move safely, use equipment confidently, and understand your plan.</p>
            </details>
            <details>
              <summary>Where does in-person training happen?<span>+</span></summary>
              <p>Sessions are currently available at a Toronto-area Anytime Fitness location. Evan’s coaching business is independently operated and is not endorsed by or affiliated with Anytime Fitness corporate.</p>
            </details>
            <details>
              <summary>How much does coaching cost?<span>+</span></summary>
              <p>Pricing depends on the coaching format and session frequency. Your free consultation will include clear options with no obligation.</p>
            </details>
            <details>
              <summary>What happens in the consultation?<span>+</span></summary>
              <p>It’s a short, relaxed conversation with Evan about your goals, training history, schedule, and any concerns. You’ll leave knowing the best next step.</p>
            </details>
          </div>
        </section>

        <section className="consultation" id="consultation">
          <div className="consult-intro">
            <div className="section-number light">/ FREE CONSULTATION</div>
            <p className="kicker acid">Your first step is a conversation.</p>
            <h2>Let’s make<br /><em>a plan.</em></h2>
            <p>Tell Evan where you’re at and where you want to go. He’ll reply personally with a simple next step.</p>
          </div>
          <form className="consult-form" action="mailto:evan@motionmethod.fit" method="post" encType="text/plain">
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="First and last name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>What would you like help with?</span>
              <textarea name="goals" rows={4} placeholder="A little about your goals, experience, or schedule…" required />
            </label>
            <button type="submit">Request my free consult <span>↗</span></button>
            <small>No pressure. No spam. Just a personal reply from Evan.</small>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src="/motion-method-logo.png" alt="Motion Method" /></div>
        <div className="footer-links"><a href="#programs">Coaching</a><a href="#approach">Approach</a><a href="#about">About</a><a href="#consultation">Contact</a></div>
        <p>Independent personal training in Toronto &amp; online.</p>
        <small>© 2026 Evan / Motion Method. Independently operated and not affiliated with Anytime Fitness corporate.</small>
      </footer>
    </>
  );
}
