import React from 'react';
import COVER1 from '../../images/cover/cover-02.png';
import DefaultLayout from '../../layout/DefaultLayout';

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full mt-10 lg:mt-0">
        <div className="flex">
          <div className="py-14 2xl:pl-16 px-10">
            <p className="text-[#] font-bold text-4xl">🫱🫲 DreamChain</p>
            <h1 className="text-black text-xl font-medium mt-3 mb-2">
              "The Power of Unity. The Wisdom of Change."
            </h1>
            <h1 className="text-black text-xl font-medium mt-3 mb-2">
              🌍 Our Mission :
            </h1>
            <p className="text-[#02071B] text-lg">
              At DreamChain, we believe that no hand should ever reach out in
              vain. We are more than a platform — we are a movement rooted in
              compassion, transparency, and empowerment. We’re here to redefine
              community built on dreams, through the power of blockchain
              technology — where every member can contribute, support, and grow
              together.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              🗣️ “When we lend a hand to one, we lift the spirit of many.”
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
              transaction is secure, transparent, and traceable .Your
              contributions don’t vanish into a black box — they go directly to
              help real people in real time.
              <br></br>- At DreamChain we don’t hold your funds. You choose who
              to support. That’s decentralized giving — pure, fair, and
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
            <p className="text-lg my-4">
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
              • Every dream starts with a vision — but it takes unity to make it
              real.
              <br></br>• At DreamChain, each contribution is more than financial
              help — it's a bridge from one member’s dream to another’s support.
              <br></br>• We believe that by joining hands, we can transform
              individual ambitions into shared achievements
              <br></br>• When the hand of community reaches out, hope becomes
              action, and dreams become destiny.
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
              We respect your data, your dignity, and your decisions.
              <br></br>Your personal information is protected, and your
              transactions are yours alone.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              🔒 “True freedom is knowing your data belongs to you — and only
              you.”
            </p>
          </div>
          <div className="py-10 pb-10 2xl:pl-16 px-10">
            <div className="border w-1/2 border-black"></div>
            <h1 className="text-black text-2xl font-semibold mt-3 mb-6 pt-3">
              🌱 Why DreamChain?
            </h1>
            <p className="text-[#02071B] text-lg">
              Because too many people struggle alone.<br></br>Because the world
              doesn’t need another struggle — it needs each other. <br></br>
              Because when we come together, anything is possible
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
              Be part of something bigger than yourself.<br></br>Join a
              community where helping others helps you grow. <br></br>Together,
              we don’t just build wealth <br></br>We build hope, unity, and
              legacy.
            </p>
            <p className="text-[#02071B] text-lg font-semibold mt-10">
              DreamChain. Because unity is our currency
            </p>
            <p className="">🚀 “Alone, we survive. Together, we rise.”</p>
          </div>
          <div className="pb-20 2xl:pl-16 px-10"></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
