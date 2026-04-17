import Image from "next/image";

export default function StrategicAreasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Strategic Areas
        </h1>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          The Tanzania Adventist Institute of Technology (TAIT) operates as a
          mission-driven digital institution focused on transforming how the Church
          uses technology, media, and knowledge systems.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our strategy is built on three integrated operational pillars:
          <span className="font-semibold text-[#7f264a]"> Digital Development</span>,
          <span className="font-semibold text-[#7f264a]"> Digital Media & Evangelism</span>,
          and <span className="font-semibold text-[#7f264a]"> Research, Training & Frameworking</span>.
          These pillars work together to ensure that every digital solution directly
          supports mission effectiveness, Church growth, and institutional strengthening.
        </p>

      </section>

      {/* ================= 1. DIGITAL DEVELOPMENT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Digital Empowerment and Development
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This pillar focuses on building the digital backbone of Church operations.
            It ensures that administrative processes, communication systems, and
            institutional workflows are supported by reliable, scalable, and mission-aligned technology.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We design and develop systems that reduce manual workload, improve coordination,
            and enhance transparency within Church institutions.
          </p>
        </div>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">Software Development</h3>
            <p className="text-gray-600">
              We develop dashboards, church systems, mobile apps, reporting tools, and web platforms
              designed specifically for mission environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">System Customization</h3>
            <p className="text-gray-600">
              We adapt existing digital systems to match Church workflows and operational needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Data and Business Analysis</h3>
            <p className="text-gray-600">
              We convert institutional data into insights for leadership decision-making and planning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Integrations and Portals</h3>
            <p className="text-gray-600">
              We connect systems into unified platforms for seamless institutional communication.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">New System Development</h3>
            <p className="text-gray-600">
              We design new digital solutions that respond to emerging mission needs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 2. MEDIA (WITH IMAGE RIGHT) ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
              Digital Media, Events and Evangelism
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This pillar is responsible for communication, storytelling, and digital evangelism.
              It ensures that the message of the Church is effectively shared through modern media platforms.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We strengthen visibility, outreach, and engagement through structured media systems.
            </p>

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold">Media Production</h3>
                <p className="text-gray-600">We produce videos, graphics, and communication materials for Church engagement.</p>
              </div>

              <div>
                <h3 className="font-semibold">Livestreaming & Broadcasting</h3>
                <p className="text-gray-600">We enable live coverage of services and conferences for global reach.</p>
              </div>

              <div>
                <h3 className="font-semibold">Event Coverage</h3>
                <p className="text-gray-600">We document Church events for archives and storytelling impact.</p>
              </div>

              <div>
                <h3 className="font-semibold">Digital Outreach Campaigns</h3>
                <p className="text-gray-600">We run evangelistic campaigns across digital platforms.</p>
              </div>

            </div>

          </div>

          {/* IMAGE RIGHT */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/media.jpg"
              alt="TAIT Media Work"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>

      {/* ================= 3. RESEARCH ================= */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8 mb-16">

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">
            Research, Training and Frameworking
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This pillar focuses on knowledge development, capacity building, and system standardization.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We build both systems and understanding to ensure sustainable digital transformation.
          </p>
        </div>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">Research Activities</h3>
            <p className="text-gray-600">We study digital transformation and Church technology adoption trends.</p>
          </div>

          <div>
            <h3 className="font-semibold">Training Programs</h3>
            <p className="text-gray-600">We equip Church leaders with digital skills and system knowledge.</p>
          </div>

          <div>
            <h3 className="font-semibold">Framework Development</h3>
            <p className="text-gray-600">We design structured systems for digital operations in Church institutions.</p>
          </div>

          <div>
            <h3 className="font-semibold">Documentation & Standards</h3>
            <p className="text-gray-600">We ensure consistency through policies, standards, and documentation.</p>
          </div>

        </div>

      </section>

    </main>
  );
}