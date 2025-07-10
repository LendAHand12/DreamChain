import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const TermsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full md:p-24 py-24 px-10 space-y-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">TERMS & CONDITIONS</h1>
          <p className="text-xl font-bold">Dreamchain</p>
          <p>Terms, Conditions, and Community Guidelines</p>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">1. Platform Policy</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
                We provide a platform for peer-to-peer contributions and
                community-driven support. All decisions are made independently
                by participants.
              </li>
              <li className="ml-6">
                Ameritec IPS, a U.S. corporation, proudly provides this
                platform, operating under U.S. regulations.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">2. General Terms</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
                One ID Per Person: Duplicate or fake accounts are strictly
                prohibited. Violations result in immediate termination.
              </li>
              <li className="ml-6">
                No Negative Talk: Speaking negatively about the company,
                program, or community is prohibited. Violators will receive a
                warning, suspension, or termination.
              </li>
              <li className="ml-6">
                No System Abuse: Manipulation, cheating, or exploiting the
                system will lead to immediate account termination.
              </li>
              <li className="ml-6">
                No Cross-Recruiting: Recruiting (or Ameritec IPS) members into
                other programs or MLMs is prohibited. Violation = Warning →
                Permanent Ban.
              </li>
              <li className="ml-6">
                Stay Active & Committed: Members must actively participate to
                maintain their benefits. Extended inactivity may result in
                benefit loss or removal.
              </li>
              <li className="ml-6">
                Respect & Integrity: Treat all members fairly and
                professionally.
              </li>
              <li className="ml-6">
                No Unauthorized Transfers: Selling, gifting, or transferring
                accounts without written approval is forbidden.
              </li>
              <li className="ml-6">
                Compliance: All members must follow DreamChain’s official
                policies and guidelines. Non-compliance may lead to account
                restrictions or termination.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold"> 3. Participation Requirements</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
                Referrals Requirement:
                <li className="ml-6">
                  Members are not required to refer new members. How ever
                  referral new member will earn reward and contribution funds
                </li>
              </li>
              <li className="ml-6">
                Binary System Clarification:
                <li className="ml-6">DreamChain uses a binary concept.</li>
                <li className="ml-6">
                  Members will only benefit from the branch (left or right)
                  where they have placed their direct referrals.
                </li>
                <li className="ml-6">
                  Branches without direct referrals will not generate
                  contribution benefits.
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">4. Accounts and Eligibility</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">Main accounts are eligible for promotions and rewards.</li>
              <li className="ml-6">Sub-accounts (recycling accounts) are for system support and are not eligible for promotions or bonuses.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">5. Important Legal Notes</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
                <span>
                  DreamChain, and Ameritec IPS are not financial advisors.
                </span>
              </li>
              <li className="ml-6">
                <span>
                  The platform facilitates giving and receiving contributions within the community in a transparent and fair manner.
                </span>
              </li>
              <li className="ml-6">
                <span>
                  Participation is voluntary. Participants are responsible for their own physical, emotional, and financial well-being.
                </span>
              </li>
              <li className="ml-6">
                <span>
                  Organizers are not liable for any personal loss, injury, or damage.
                </span>
              </li>
              <li className="ml-6">
                <span>
                  DreamChain or Ameritec do not guarantee or promise any interest, profit, or income.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">6. . Registration and Honesty</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
              Members must register through the official platform, website, or app.
              </li>
              <li className="ml-6">
              Members must complete tasks and challenges with honesty and integrity.
              </li>
              <li className="ml-6">Membership is open worldwide unless prohibited by local laws.</li>
              <li className="ml-6">Participants must be 18 years or older.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <b className="text-xl font-bold">7. Compliance and Enforcement</b>
            <ul className="grid list-disc gap-4">
              <li className="ml-6">
              Failure to comply with these Terms and Conditions may result in immediate disqualification.
              </li>
              <li className="ml-6">The organizers reserve the right to disqualify participants to preserve the integrity and spirit of the DreamChain.</li>
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TermsPage;
