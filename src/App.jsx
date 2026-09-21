import './App.css'
import ResourceCard from './components/ResourceCard'

import unityImage from './assets/images/photo-1593508512255-86ab42a8e620.jpg'
import unrealImage from './assets/images/photo-1550745165-9bc0b252726f.jpg'
import blenderImage from './assets/images/photo-1633356122544-f134324a6cee.jpg'
import godotImage from './assets/images/photo-1511512578047-dfb367046420.jpg'
import metaQuestImage from './assets/images/photo-1622979135225-d2ba269cf1ac.jpg'
import githubImage from './assets/images/photo-1618401471353-b98afee0b2eb.jpg'
import codingImage from './assets/images/photo-1461749280684-dccba630e2f6.jpg'
import openxrImage from './assets/images/OIP.jpg'
import aframeImage from './assets/images/photo-1617802690992-15d93263d3a9.jpg'
import threejsImage from './assets/images/photo-1558655146-9f40138edfeb.jpg'

const resources = [
  {
    id: 1,
    title: "Unity",
    category: "Game Engine",
    description: "Build interactive 2D, 3D, VR, and AR experiences.",
    image: unityImage,
    link: "https://unity.com/"
  },
  {
    id: 2,
    title: "Unreal Engine",
    category: "Game Engine",
    description: "Create high-quality games and immersive 3D experiences.",
    image: unrealImage,
    link: "https://www.unrealengine.com/"
  },
  {
    id: 3,
    title: "Blender",
    category: "3D Modeling",
    description: "Create 3D models, animations, environments, and game assets.",
    image: blenderImage,
    link: "https://www.blender.org/"
  },
  {
    id: 4,
    title: "Godot",
    category: "Game Engine",
    description: "Build 2D and 3D games using a free and open-source game engine.",
    image: godotImage,
    link: "https://godotengine.org/"
  },
  {
    id: 5,
    title: "Meta Quest Developers",
    category: "VR Development",
    description: "Explore tools and documentation for building Meta Quest VR experiences.",
    image: metaQuestImage,
    link: "https://developers.meta.com/"
  },
  {
    id: 6,
    title: "GitHub",
    category: "Development",
    description: "Store code, manage projects, and collaborate with other developers.",
    image: githubImage,
    link: "https://github.com/"
  },
  {
    id: 7,
    title: "MDN Web Docs",
    category: "Learning",
    description: "Learn HTML, CSS, JavaScript, Web APIs, and modern web development.",
    image: codingImage,
    link: "https://developer.mozilla.org/"
  },
  {
    id: 8,
    title: "OpenXR",
    category: "XR Development",
    description: "Learn about the open standard for building cross-platform XR applications.",
    image: openxrImage,
    link: "https://www.khronos.org/openxr/"
  },
  {
    id: 9,
    title: "A-Frame",
    category: "WebXR",
    description: "Create virtual reality experiences for the web using HTML.",
    image: aframeImage,
    link: "https://aframe.io/"
  },
  {
    id: 10,
    title: "Three.js",
    category: "3D Web Development",
    description: "Build interactive 3D graphics and experiences directly in the browser.",
    image: threejsImage,
    link: "https://threejs.org/"
  }
]

function App() {
  return (
    <div className="app">

      <header className="header">

        <span className="header-label">
          EXPLORE • BUILD • CREATE
        </span>

        <h1>XR Developer Hub</h1>

        <p>
          Discover tools and resources for building the next generation
          of VR, AR, games, and immersive experiences.
        </p>

      </header>

      <main className="resource-grid">

        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            category={resource.category}
            description={resource.description}
            image={resource.image}
            link={resource.link}
          />
        ))}

      </main>

    </div>
  )
}

export default App