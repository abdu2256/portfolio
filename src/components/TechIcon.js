import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiElectron,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiPostman
} from 'react-icons/si';
import { TbBrain, TbRobot, TbDatabase, TbNetwork, TbApi, TbCpu } from 'react-icons/tb';
import { FiCode } from 'react-icons/fi';

const OpenAIIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M22.28 9.9a5.73 5.73 0 0 0-.48-4.52 5.86 5.86 0 0 0-4.83-2.9 5.8 5.8 0 0 0-4.47 1.83 5.77 5.77 0 0 0-5.83.68 5.86 5.86 0 0 0-2.4 4.8 5.78 5.78 0 0 0-3.3 3.4 5.86 5.86 0 0 0 .57 5.34 5.73 5.73 0 0 0 .48 4.52 5.86 5.86 0 0 0 4.83 2.9 5.8 5.8 0 0 0 4.47-1.83 5.77 5.77 0 0 0 5.83-.68 5.86 5.86 0 0 0 2.4-4.8 5.78 5.78 0 0 0 3.3-3.4 5.86 5.86 0 0 0-.67-5.33zM12 14.3a2.3 2.3 0 1 1 2.3-2.3 2.3 2.3 0 0 1-2.3 2.3z" />
  </svg>
);

const AnthropicIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M13.82 3.5h3.96L24 20.5h-4.04l-1.38-3.44H9.42L8.04 20.5H4L10.22 3.5h3.6zm1.38 10.36L12 5.88l-3.2 7.98h6.4z" />
  </svg>
);

const iconMap = {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiElectron,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiPython,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiAnthropic: AnthropicIcon,
  SiOpenai: OpenAIIcon,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiPostman,
  TbBrain,
  TbRobot,
  TbDatabase,
  TbNetwork,
  TbApi,
  TbCpu
};

export default function TechIcon({ name, iconKey, color, size = 18, className = "" }) {
  const IconComponent = (iconKey && iconMap[iconKey]) || FiCode;

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg p-2 transition-transform duration-200 group-hover:scale-110 ${className}`}
      style={{
        backgroundColor: color ? `${color}18` : 'rgba(255,255,255,0.06)',
        color: color || '#818cf8',
        boxShadow: color ? `0 0 12px ${color}15` : 'none'
      }}
      title={name}
      aria-label={name}
    >
      <IconComponent size={size} color={color || 'currentColor'} style={{ color: color || 'currentColor' }} />
    </div>
  );
}
