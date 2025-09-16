import { RevealOnScroll } from "../RevealOnScroll";
import {
  MdOutlinePlayCircleOutline,
  MdCode,
  MdArrowBack,
  MdArrowForward,
  MdPsychology,
  MdPeople,
  MdAutoAwesome,
  MdCreate,
  MdVolunteerActivism,
  MdChat,
} from "react-icons/md";
import { useState, useEffect } from "react";

export const Projects = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Project data
  const projects = [
    {
      id: 1,
      title: "LinkOra",
      description:
        "A dynamic blogging platform where users can create, edit, and interact with blog posts in a seamless, responsive environment with rich content features.",
      technologies: [
        "React",
        "PostgreSQL",
        "Prisma",
        "Node.js",
        "Express",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Sunny5130/LinkOra",
      liveUrl: "",
      color: "green",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "hover:border-green-500/50",
      textColor: "text-green-500",
      buttonGradient:
        "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      icon: <MdCreate />,
      image: "linkora.png",
    },
    {
      id: 1,
      title: "HelpSync",
      description:
        "A community platform where neighbors connect to offer and request help, report local issues, and strengthen community bonds through real-time messaging and collaborative problem-solving.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Sunny5130/HelpSync",
      liveUrl: "https://help-sync.vercel.app/",
      color: "orange",
      gradient: "from-orange-500/10 to-amber-500/10",
      borderGradient: "hover:border-orange-500/50",
      textColor: "text-orange-500",
      buttonGradient:
        "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
      icon: <MdVolunteerActivism />,
      image: "helpsync.png",
    },
    {
      id: 3,
      title: "ChatNest",
      description:
        "A real-time chat application supporting instant messaging and media sharing with a responsive, themeable UI and seamless user experience.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Socket.IO",
      ],
      githubUrl: "https://github.com/Sunny5130/ChatNest",
      liveUrl: "https://chat-nestsaini.vercel.app/",
      color: "purple",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "hover:border-purple-500/50",
      textColor: "text-purple-500",
      buttonGradient:
        "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      icon: <MdChat />,
      image: "chatnest.png", // Placeholder - add chatnest.png to public folder
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 relative overflow-hidden ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A showcase of full-stack applications, AI-powered tools, and
              modern web solutions
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative flex items-center justify-center px-4 sm:px-0">
            {/* Main Slider */}
            <div className="w-full max-w-6xl overflow-hidden rounded-3xl">
              <div
                className="flex items-center transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full h-full flex-shrink-0 px-2 sm:px-4"
                  >
                    <div
                      className={`group relative flex items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl border hover:shadow-2xl transition-all duration-500 min-h-[500px] sm:min-h-[600px] ${
                        isDarkMode
                          ? `border-white/10 bg-gray-900/50 backdrop-blur-sm`
                          : `border-gray-200 bg-white/80 backdrop-blur-sm`
                      }`}
                    >
                      {/* Content */}
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
                        {/* Project Info */}
                        <div className="flex flex-col h-full order-2 lg:order-1">
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                              <div
                                className={`p-2 sm:p-3 bg-gradient-to-r ${project.gradient} rounded-xl`}
                              >
                                <div
                                  className={`text-2xl sm:text-3xl ${project.textColor}`}
                                >
                                  {project.icon}
                                </div>
                              </div>
                              <h3
                                className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                                  isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {project.title}
                              </h3>
                            </div>

                            <p
                              className={`mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`bg-gradient-to-r ${project.gradient} ${project.textColor} py-2 px-4 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons - Always at bottom */}
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center sm:justify-start gap-3 font-medium text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${project.textColor}`}
                            >
                              <MdCode className="text-xl sm:text-2xl" />
                              <span>View Code</span>
                            </a>
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-gradient-to-r ${project.buttonGradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 font-medium hover:shadow-2xl hover:scale-105 group/btn text-center`}
                              >
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                  <MdOutlinePlayCircleOutline className="text-xl sm:text-2xl group-hover/btn:animate-spin" />
                                  <span className="text-base sm:text-lg">
                                    Live Demo
                                  </span>
                                </div>
                              </a>
                            ) : (
                              <div
                                className={`bg-gradient-to-r ${project.buttonGradient} opacity-50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium cursor-not-allowed text-center`}
                              >
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                  <MdOutlinePlayCircleOutline className="text-xl sm:text-2xl" />
                                  <span className="text-base sm:text-lg">
                                    Coming Soon
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative flex items-center justify-center h-full order-1 lg:order-2">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${
                              project.gradient
                            } border w-full ${
                              isDarkMode ? "border-white/10" : "border-gray-200"
                            } overflow-hidden`}
                          >
                            <div className="aspect-video w-full">
                              <img
                                src={`/${project.image}`}
                                alt={`${project.title} preview`}
                                className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                              {/* Fallback icon if image fails to load */}
                              <div
                                className={`hidden w-full h-full items-center justify-center bg-gradient-to-r ${project.gradient}`}
                                style={{ display: "none" }}
                              >
                                <div
                                  className={`text-6xl ${project.textColor}`}
                                >
                                  {project.icon}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Positioned outside the slider container */}
            <button
              onClick={prevSlide}
              className={`absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-12 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 ${
                isDarkMode
                  ? "bg-gray-800/90 text-white border border-gray-600"
                  : "bg-white/90 text-gray-900 border border-gray-200"
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <MdArrowBack className="text-xl sm:text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-12 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 ${
                isDarkMode
                  ? "bg-gray-800/90 text-white border border-gray-600"
                  : "bg-white/90 text-gray-900 border border-gray-200"
              } backdrop-blur-sm shadow-lg hover:shadow-xl`}
            >
              <MdArrowForward className="text-xl sm:text-2xl" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                    : isDarkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-600"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
            </button>
          </div>

          {/* Project Grid Summary */}
          <div className="mt-16 sm:mt-20">
            <h3
              className={`text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              All Projects Overview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goToSlide(index)}
                  className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    index === currentSlide
                      ? `${project.borderGradient.replace(
                          "hover:",
                          ""
                        )} bg-gradient-to-r ${project.gradient}`
                      : isDarkMode
                      ? "border-gray-700 bg-gray-800/50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                  >
                    <div className={`text-lg sm:text-xl ${project.textColor}`}>
                      {project.icon}
                    </div>
                  </div>
                  <h4
                    className={`text-xs sm:text-sm font-medium ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
