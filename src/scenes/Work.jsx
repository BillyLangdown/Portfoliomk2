import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import balance from "../assets/balance.png";
import cultureconnect from "../assets/cultureconnect.png";
import ncnews from "../assets/ncnews.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-lightBrown z-30 flex flex-col justify-center items-center text-center p-16 font-bold  text-deepGreen";
  const projectTitle = title.split(" ").join("").toLowerCase();

  let imageSource;
  switch (projectTitle) {
    case "balance":
      imageSource = balance;
      break;
    case "cultureconnect":
      imageSource = cultureconnect;
      break;
    case "ncnews":
      imageSource = ncnews;
      break;
    default:
      imageSource = "Image not found";
  }

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playFair">{title}</p>
        <p className="mt-5"> {subtitle} </p>
      </div>
      {imageSource && <img src={imageSource} alt={projectTitle} />}
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-32">
      {/* headings */}

      <motion.div
        className="md:w-3/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 10, y: 0 },
        }}
      >
        <div>
          <p className="font-playFair font-semibold text-4xl text-brightOrange ">
            <span className="text-lightBrown">WO</span>RK
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Discovering my passion for coding and project creation has been transformative. The process of developing mobile and web applications has been incredibly rewarding, and I've seen significant growth in my skills. I'm constantly driven to enhance my work and explore new concepts, all with the goal of crafting impactful and meaningful products.
        </p>
      </motion.div>

      {/* projects  */}

      <div className="flex justify-center">
        <motion.div
          className="sm: grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <a href="https://github.com/BillyLangdown/Balance" target="_blank" rel="noreferrer">
          <Project
            title="Balance"
            subtitle="A food delivery app for fitness enthusiasts."
          />
          </a>

        <a href="https://github.com/JoravarSinghPunia/CultureConnect-Application" target="_blank" rel="noreferrer">
          <Project
            title="CultureConnect"
            subtitle="An app for connecting communities though culture."
          />
        </a>

        <a href="https://github.com/BillyLangdown/fe-nc-news" target="_blank" rel="noreferrer">
          <Project
            title="NC News"
            subtitle="A full stack web app for users to read and upload news."
          />
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
