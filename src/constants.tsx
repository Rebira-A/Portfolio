import { Terminal, Cpu, Layers, Code2 } from 'lucide-react';

export const projects = [
  {
    id: 'rebikguard',
    title: 'RebikGuard',
    description: 'A hybrid architecture featuring a Chrome extension and Tauri desktop host for local data analysis.',
    choice: 'Tauri was chosen to leverage Rust performance for heavy local computation while maintaining a web-based UX.',
    tags: ['Rust', 'Tauri', 'Chrome API', 'React'],
    longDescription: 'RebikGuard is a security-focused tool designed for real-time traffic analysis and local data sanitization. By offloading heavy computation to a Rust-based Tauri host, the browser extension remains lightweight and performant. This project involved deep learning models for anomaly detection implemented locally for maximum privacy. It implements a secure bridge between browser-level events and system-level processing.',
    gallery: ['/assets/rebikguard-1.jpg'],
    github: 'https://github.com/Rebira678/rebikguard'
  },
  {
    id: 'tradedraft',
    title: 'TradeDraft',
    description: 'SaaS platform for contractors generating automated professional PDF agreements and managing velocity.',
    choice: 'Implemented a stateless PDF generation engine to reduce server overhead and ensure instant artifact delivery.',
    tags: ['MERN', 'Zustand', 'PDFKit', 'Node.js'],
    longDescription: 'TradeDraft optimizes the workflow for independent contractors in the construction and renovation space. It handles client management, dynamic quote generation, and legally binding work agreements. The platform uses a high-velocity dashboard built with React and Zustand for state management, ensuring that even on low-bandwidth connections, the UI feels instantaneous.',
    gallery: ['/assets/tradedraft-1.jpg'],
    github: 'https://github.com/Rebira678/tradedraft'
  },
  {
    id: 'task-orchestrator',
    title: 'Persistent Task Orchestrator',
    description: 'High-velocity CRUD system with strict architectural separation between IO and business logic.',
    choice: 'Used a repository pattern to decouple the persistent layer, allowing for pluggable database backends.',
    tags: ['Express', 'MongoDB', 'Docker', 'Clean Arch'],
    longDescription: 'A robust task management system that focuses on persistence consistency and atomic operations. Designed for high-concurrency environments using Node.js and MongoDB. It features a complete CI/CD pipeline integrated with Docker, ensuring that deployments are predictable and rollbacks are instantaneous. The separation of concerns here allows for 99% logic test coverage.',
    gallery: ['/assets/task-orchestrator-1.jpg'],
    github: 'https://github.com/Rebira678/task-orchestrator'
  }
];

export const skills = [
  {
    category: 'Full-stack / MERN',
    tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Zustand', 'Tailwind'],
    description: 'High-velocity architecture with a clean separation between IO and business logic.',
    icon: <Layers className="w-5 h-5 text-white" />,
  },
  {
    category: 'Logic / Python',
    tools: ['Python', 'FastAPI', 'NumPy', 'Pandas'],
    description: 'Data processing pipelines and deterministic logic for complex system states.',
    icon: <Terminal className="w-5 h-5 text-white" />,
  },
  {
    category: 'AI / Infrastructure',
    tools: ['RLHF', 'Docker', 'Tauri', 'Git'],
    description: 'Specialized in training engineering and optimized infrastructure deployment.',
    icon: <Cpu className="w-5 h-5 text-white" />,
  },
  {
    category: 'Algorithms',
    tools: ['C++', 'Logic Design', 'Memory Management'],
    description: '500+ solved challenges on LeetCode/Codeforces. Deep algorithmic intuition.',
    icon: <Code2 className="w-5 h-5 text-white" />,
  },
];
