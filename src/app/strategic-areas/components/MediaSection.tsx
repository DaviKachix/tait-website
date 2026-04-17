import Image from "next/image";

export default function MediaSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-6">

          <h2 className="text-2xl font-semibold">
            Digital Media, Events and Evangelism
          </h2>

          <p className="text-gray-600 leading-relaxed">
            This pillar drives communication, storytelling, and digital evangelism
            across Church platforms and global audiences.
          </p>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold">Media Production</h3>
              <p className="text-gray-600">
                Videos, graphics, and content for Church communication.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Livestreaming & Broadcasting</h3>
              <p className="text-gray-600">
                Live coverage of services and events globally.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Event Coverage</h3>
              <p className="text-gray-600">
                Documentation of Church events for archives and storytelling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Digital Outreach Campaigns</h3>
              <p className="text-gray-600">
                Evangelistic digital campaigns across platforms.
              </p>
            </div>

          </div>

        </div>

        {/* IMAGE */}
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
  );
}