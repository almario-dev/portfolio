import type { Technology } from '@/types/Portfolio'

export const TechIconsRegistry: Record<string, string> = {
  Laravel: 'logos:laravel',
  'Vue.js': 'logos:vue',
  'Quasar Framework': 'vscode-icons:file-type-quasar',
  TypeScript: 'logos:typescript-icon',
  JavaScript: 'logos:javascript',
  NodeJs: 'material-icon-theme:nodejs',
  Java: 'devicon:java',
  MySQL: 'logos:mysql',
  Docker: 'logos:docker-icon',
  Git: 'material-icon-theme:git',
  Postman: 'devicon:postman',
  'Github Actions': 'skill-icons:githubactions-light',
  GCP: 'devicon:googlecloud',
  AWS: 'skill-icons:aws-light',
  'Ubuntu (Linux)': 'logos:ubuntu',
  WebSocket: 'logos:websocket',
  OpenAI: 'proicons:openai',
  TailwindCSS: 'vscode-icons:file-type-tailwind',
  Bootstrap: 'devicon:bootstrap',
  'Ionic Framework': 'material-icon-theme:ionic',
  NPM: 'logos:npm',
}

export const TechnologiesList: Technology[] = Object.entries(TechIconsRegistry).map(
  ([name, icon]) => ({
    name,
    icon,
  }),
)

export const FeaturedTechnologies: Technology[] = ['Laravel', 'Vue.js', 'Quasar Framework'].map(
  (name) => ({
    name,
    icon: TechIconsRegistry[name],
  }),
)
