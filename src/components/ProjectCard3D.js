import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard3D({ project, onSelectCaseStudy }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / mobile devices for iOS WebKit safety
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none)').matches
      );
    };
    checkTouch();
  }, []);

  // Framer Motion motion values for mouse relative offset (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics springs
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 24, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 24, mass: 0.5 });

  // Subtle 3D rotational tilt transforms (approx ±8 to ±10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-9, 9]);

  // Dynamic glare spotlight position transforms
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [15, 85]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [15, 85]);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const mousePosX = e.clientX - rect.left;
    const mousePosY = e.clientY - rect.top;

    // Normalize from -0.5 to 0.5
    x.set(mousePosX / rect.width - 0.5);
    y.set(mousePosY / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: isTouchDevice ? 'none' : 1000,
        WebkitPerspective: isTouchDevice ? 'none' : 1000
      }}
      className="w-full flex"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouchDevice ? 0 : rotateX,
          rotateY: isTouchDevice ? 0 : rotateY,
          transformStyle: isTouchDevice ? 'flat' : 'preserve-3d',
          WebkitTransformStyle: isTouchDevice ? 'flat' : 'preserve-3d',
          boxShadow: isHovered
            ? `0 22px 45px -12px ${project.accent}30, 0 0 0 1px ${project.accent}40`
            : undefined
        }}
        whileHover={!isTouchDevice ? { scale: 1.02 } : undefined}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full relative flex flex-col justify-between rounded-2xl bg-zinc-900/90 border border-zinc-800/80 p-5 group shadow-xl hover:border-zinc-700/80 transition-colors duration-200"
      >
        {/* Dynamic Specular Glare (Framer Motion) */}
        {!isTouchDevice && isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.12), transparent 70%)`
            }}
          />
        )}

        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3 z-10">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: `${project.accent}15`,
                borderColor: `${project.accent}30`,
                color: project.accent
              }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Featured
              </span>
            )}
          </div>
          <span className="text-zinc-500 text-xs font-mono">
            {project.metrics}
          </span>
        </div>

        {/* Realistic Project UI Mockup */}
        <div className="my-2 z-10 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectMockup type={project.uiType} accent={project.accent} />
        </div>

        {/* Content Section */}
        <div className="mt-3 flex-1 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed mt-1 mb-3 line-clamp-2">
              {project.tagline || project.summary}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800/40 text-zinc-500 font-mono">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <button
              onClick={() => onSelectCaseStudy(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group/btn transition-colors cursor-pointer"
            >
              <span>Case Study</span>
              <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" size={13} />
            </button>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700/60"
                  title="View GitHub Repository"
                >
                  <FiGithub size={14} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-colors"
                  title="View Live Application"
                >
                  <FiExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
