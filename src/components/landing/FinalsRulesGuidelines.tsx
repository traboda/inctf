'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const FinalsRulesGuidelines = () => {
  return (
    <section id="ctf-rules-guidelines" className="relative py-24 z-20">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-sky-500/30 text-sky-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
            <ShieldAlert size={14} /> Finals Rulebook
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide font-heading mb-4">
            CTF Rules And Guidelines For the Finals
          </h2>
          <p className="text-lg md:text-2xl font-semibold text-sky-300 font-heading">
            CTF Rules &amp; Guidelines
          </p>
        </motion.div>

        <div className="rounded-2xl border border-sky-500/20 bg-slate-950/70 backdrop-blur-xl p-6 md:p-8">
          <ol className="list-decimal pl-5 space-y-5 text-slate-200 leading-relaxed">
            <li>
              CCTV Surveillance: The event venue is under CCTV surveillance throughout the competition.
            </li>
            <li>
              Organizer Instructions: Participants must comply with all instructions and announcements issued by the organizers. The organizers reserve the right to modify, add, or remove rules and procedures at any time. The organizers&apos; decision shall be final in all matters relating to the competition.
            </li>
            <li>
              Scope of Attack: Participants may interact only with systems, services, and resources explicitly designated as part of the competition. Any attempt to access, attack, interfere with, or otherwise interact with the event infrastructure, scoring platform, competition network, or any other out-of-scope systems is strictly prohibited.
            </li>
            <li>
              Service Disruption: Denial-of-Service (DoS), Distributed DoS (DDoS), resource exhaustion, or any activity intended to disrupt the competition environment is strictly prohibited.
            </li>
            <li>
              Fair Play: Flag sharing, unauthorized collaboration, impersonation, physical tampering, or any attempt to gain an unfair advantage is prohibited.
            </li>
            <li>
              Competition Environment: Participants must use only the systems and resources provided or explicitly approved by the organizers. Participants must not attempt to bypass, disable, interfere with, or circumvent the intended configuration, operation, or security measures of the competition environment.
            </li>
            <li>
              Personal Devices: Personal smartphones and any other unauthorized communication or computing devices are not permitted inside the competition area unless explicitly authorized by the organizers.
            </li>
            <li>
              Official Assistance: If you encounter a technical issue or require any official hint, clarification, or solution script, contact the organizers directly. Assistance from any other source is prohibited.
            </li>
            <li>
              Prohibited Assistance: Participants must not use:
              <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-300">
                <li>Any AI assistant, large language model, or generative AI service.</li>
                <li>Any locally hosted or offline AI/LLM.</li>
                <li>Remote assistance from any individual.</li>
                <li>Any external service that provides solutions or assistance beyond what is officially provided by the organizers.</li>
              </ul>
            </li>
            <li>
              Permitted Resources: Publicly available documentation, blogs, write-ups, official manuals, and other publicly available reference materials may be used unless explicitly restricted for a specific challenge.
            </li>
            <li>
              Solution Verification: Participants must be prepared to explain or demonstrate any solve upon request. The organizers reserve the right to invalidate any solve that cannot be satisfactorily verified.
            </li>
            <li>
              Confidentiality: Participants must not publicly discuss, publish, distribute, livestream, or otherwise disclose any flags, exploits, challenge solutions, or write-ups until the organizers officially announce the conclusion of the competition.
            </li>
            <li>
              Conduct &amp; Responsibility: Participants are responsible for their assigned accounts and the proper use of the provided equipment. Any misconduct, harassment, misuse of equipment, or behavior detrimental to the integrity or fairness of the competition may result in penalties or disqualification.
            </li>
            <li>
              Participation: By participating in the competition, participants acknowledge and consent to the monitoring, verification, and security measures deemed necessary by the organizers to ensure the integrity and fairness of the event.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FinalsRulesGuidelines;