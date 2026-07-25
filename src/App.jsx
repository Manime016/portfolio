import { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'

const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Internship = lazy(() => import('./components/Internship'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div className="section section--loading" aria-hidden="true">
      <div className="skeleton-pulse" style={{ height: 120 }} />
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Internship />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App

