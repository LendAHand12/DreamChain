import React from 'react';
import COVER1 from '../../images/cover/cover-02.png';
import DefaultLayout from '../../layout/DefaultLayout';

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full mt-10 lg:mt-0">
        <div className="flex">
          <div className="py-14 2xl:pl-16 px-10">
            <h1 className="text-black text-4xl font-medium mt-3 mb-2">
              🫱‍🫲 Lend A Hand
            </h1>
            <p className="text-[#02071B] text-lg font-semibold mt-4 mb-10">
              "The Power of Unity. The Promise of Change."
            </p>
            <div className="text-[#02071B] text-lg">
              <p className="font-semibold mb-4">🌍 Our Mission :</p>
              <ul className="list-disc pl-6">
                <li>
                  At <b>Lend A Hand</b>, we believe that no hand should ever
                  reach out in vain.We are more than a platform — we are a
                  movement rooted in{' '}
                  <b>compassion, transparency, and empowerment.</b>
                </li>
                <li>
                  We’re here to <b>redefine community investment</b> through the
                  power of <b>blockchain technology</b>, where every member can
                  contribute, support, and grow — together.
                </li>
              </ul>
            </div>
            <p className="text-[#02071B] text-lg font-semibold my-10">
              🗣️ “When we lend a hand to one, we lift the spirit of many.”{' '}
            </p>
          </div>
          <img
            src={COVER1}
            className="hidden xl:block w-full xl:w-1/2 object-center"
          />
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2">
          <div className="py-10 2xl:pl-16 px-10 3xl:-mt-64">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              🔐 Built on Trust. Powered by Blockchain.
            </h1>
            <p className="text-[#02071B] text-lg">
              - We use cutting-edge blockchain technology to ensure every
              transaction is <b>secure, transparent, and traceable</b> .Your
              contributions don’t vanish into a black box — they go{' '}
              <b>directly to help real people</b> in real time.
            </p>
            <p className="text-[#02071B] text-lg">
              - At <b>Lend A Hand</b>, we don’t hold your funds. You choose who
              to support.That’s <b>decentralized giving</b> — pure, fair, and
              empowering.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              🗝️ “Transparency builds trust, and trust builds unstoppable
              communities.”
            </p>
          </div>
          <div className="py-10 2xl:pl-16 px-10">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              🤝 How It Works
            </h1>
            <p className="text-[#02071B] text-lg">
              • You join our community and connect with others committed to
              positive change.
              <br></br>• You support fellow members through peer-to-peer
              contributions.
              <br></br>• You receive support when it’s your turn — no interest,
              no debt, no shame.
              <br></br>• You grow not just your wealth, but your impact.
            </p>
            <p className="mt-4 text-lg">
              This is collective elevation — one hand lifting another.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              🤲 “One hand can lift a load, but many hands can lift a nation.”
            </p>
          </div>
          <div className="py-10 2xl:pl-16 px-10 3xl:-mt-32">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              ✨ Turning Dreams into Reality, Together
            </h1>
            <p className="text-[#02071B] text-lg">
              • Every dream starts with a vision — but it takes{' '}
              <b>unity to make it real.</b>
              <br></br>• At Lend A Hand, each contribution is more than
              financial help — it's a <b>bridge</b> from one member’s dream to
              another’s support.
              <br></br>• We believe that by joining hands, we can transform
              individual ambitions into <b>shared achievements.</b>
              <br></br>• When the <b>hand of community</b> reaches out, hope
              becomes action, and dreams become destiny.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              💫 “A dream becomes reality when shared by hearts and built by
              hands.”
            </p>
          </div>
          <div className="py-10 pb-10 2xl:pl-16 px-10">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              🛡️ Privacy Matters
            </h1>
            <p className="text-[#02071B] text-lg">
              We respect your data, your dignity, and your decisions. <br></br>
              Your personal information is <b>protected</b>, and your
              transactions are yours <b>alone.</b>
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              🔒 “True freedom is knowing your data belongs to you — and only
              you.”
            </p>
          </div>
          <div className="py-10 pb-10 2xl:pl-16 px-10">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              🌱 Why Lend A Hand?
            </h1>
            <p className="text-[#02071B] text-lg">
              Because too many people struggle alone. <br></br>
              Because the world doesn’t need another bank — it needs{' '}
              <b>each other.</b>
              <br></br>
              Because when we come together, <b>anything is possible.</b>
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
            🌍 “We don’t need more institutions. We need each other.”
            </p>
          </div>
          <div className="py-10 pb-10 2xl:pl-16 px-10">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
            💬 Join the Movement
            </h1>
            <p className="text-[#02071B] text-lg">
            Be part of something bigger than yourself. <br></br>
            Join a community where <b>helping others helps you grow.</b><br></br>
            Together, we don’t just build wealth —<br></br>
            We build <b>hope, unity, and legacy.</b>
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
            Lend A Hand. Because unity is our currency.
            </p>
          </div>
          <div className="pb-20 2xl:pl-16 px-10">🚀 “Alone, we survive. Together, we rise.”</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
