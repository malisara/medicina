import { motion } from "framer-motion";

import { announcements } from "../../blogText/Announcements";

function Announcements() {
  return (
    <>
      {announcements.map((ann, i) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 * (i + 1) }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 40 },
          }}
          className="border-2 w-[90%] md:w-[60%] lg:w-[60%] xl:w-[40%] py-7
          shadow-2xl border-primaryPurple my-[4rem] mx-auto px-5 md:px-8"
          key={i}
        >
          {/* Title */}
          <p
            className="text-center text-3xl font-bold
         text-secondaryPurple pt-7 pb-2"
          >
            {ann.title}
          </p>
          <p className="text-center text-sm font-extralight text-gray-500 pb-7">
            ({ann.date})
          </p>
          {/* Paragraphs */}
          <div className="py-4">
            {ann.text.map((parag, i) => (
              <p className="pb-4" key={i}>
                {parag}
              </p>
            ))}
          </div>

          {/*Link */}
          {ann.linkText && ann.link && (
            <a
              href={ann.link}
              className="text-secondaryPurple font-bold underline"
            >
              {ann.linkText}
            </a>
          )}
        </motion.div>
      ))}
    </>
  );
}

export default Announcements;
